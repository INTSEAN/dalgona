from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import io
import contextlib

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])  # Update this in production

@app.route('/run', methods=['POST'])
def run_code():
    data = request.json
    code = data.get('code', '')
    print(f"Received code: {code}")  # Replace with logging in production

    # Capture the output
    output = io.StringIO()
    try:
        with contextlib.redirect_stdout(output):
            exec(code, {'__builtins__': {}})
        result = output.getvalue()
        if not result:
            result = "No output produced."
    except Exception as e:
        result = f"Error: {str(e)}"
    finally:
        output.close()

    print(f"Execution result: {result}")  # Replace with logging in production
    return jsonify({'output': result})

@app.route('/')
def home():
    return "Welcome to the Code Execution Server!"

if __name__ == '__main__':
    app.run(debug=True)
