import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import './CodeEditor.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CodeEditor = () => {
  const defaultCode = `# =====================================
# Title: Red Light, Green Light
# -------------------------------------
# Problem Statement:
# In the "Red Light, Green Light" game, a player can only move forward when the light is green.
# You’re given an array of positive numbers representing players and their speeds. Write a function
# that finds the maximum sum of any contiguous subarray of size k (k is also given as an integer).
#
# Example:
#    speeds = [1, 2, 3, 2, 5, 2], k = 2
#    The maximum sum of any contiguous subarray of size 2 is 7, corresponding to subarray [2, 5].
#
# Space for Working:
# 1. Understand the problem: We’re looking for a sum of k consecutive elements that is maximum.
# 2. Approach: Use a sliding window (a classic two-pointer approach). Keep track of the sum
#    of the current window; slide the window by removing the leftmost element and adding the
#    new rightmost element.
#
def redGreenLight(speeds, k) -> int:
    # TODO
    pass
`;

  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');

  useEffect(() => {
    monaco.editor.defineTheme('dalgonaTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: '', foreground: 'ffffff', background: '1e1e1e' },
        { token: 'keyword', foreground: 'F72F38', fontStyle: 'bold' },
        { token: 'string', foreground: 'A8FF60' },
        { token: 'number', foreground: 'FFB86C' },
        { token: 'comment', foreground: '6272A4', fontStyle: 'italic' },
        { token: 'type', foreground: '8BE9FD' },
        { token: 'function', foreground: '50FA7B' },
      ],
      colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#ffffff',
        'editorCursor.foreground': '#F72F38',
        'editor.lineHighlightBackground': '#333333',
        'editorLineNumber.foreground': '#6272A4',
        'editor.selectionBackground': '#44475a',
        'editor.inactiveSelectionBackground': '#44475a99',
      }
    });
  }, []);

  const handleEditorChange = (newCode) => {
    console.log('Editor content changed:', newCode); // Debugging line
    setCode(newCode);
  };

  const executeCode = async () => {
    console.log('Run Code button clicked'); // Debugging line
    console.log('Executing code:', code); // Debugging line
    try {
      const response = await fetch('http://localhost:5000/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      console.log('Response received:', response); // Debugging line
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data received:', data); // Debugging line
      setOutput(data.output);
      console.log('Output set:', data.output); // Debugging line
    } catch (err) {
      console.error('Error:', err);
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div className="code-editor-container">
      <h2 className="editor-title">Code Editor</h2>
      <MonacoEditor
        className="monaco-editor"
        width="800px"
        maxWidth="auto"
        height="400px"
        language="python"
        theme="dalgonaTheme"
        options={{
          minimap: { enabled: true },
          scrollbar: { alwaysConsumeMouseWheel: true },
        }}
        value={code}
        onChange={handleEditorChange}
      />
      <button className="run-button" onClick={executeCode}>Run Code</button>
      <div className="output-container">
        <p className="output-title">Program Output:</p>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
