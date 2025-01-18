import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DownloadSection from "./components/DownloadSection";
import ShapesAnimation from "./components/ShapesAnimation";
import Footer from "./components/Footer";
import CodeEditor from "./components/CodeEditor";
function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      {/* Example advanced tech area - WebGL/AR placeholder */}
      <ShapesAnimation />
      <CodeEditor />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
