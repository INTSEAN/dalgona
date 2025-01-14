import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./ShapesAnimation.css";

function ShapesAnimation() {
  const particlesInit = useCallback(async (engine) => {
    // Load tsparticles package
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#111",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#F72F38",
      },
      links: {
        color: "#F72F38",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: ["circle", "triangle", "square"],
      },
      size: {
        value: { min: 10, max: 20 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="shapes-animation-section">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="particles-background" />
      <motion.div
        className="overlay-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2>Welcome to the <span className="dalgona-accent">da ALGO</span> Challenge</h2>
        <p>Can you survive the ultimate coding trials?</p>
      </motion.div>
      <motion.div
        className="statistics"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h4>Coding Challenge Levels</h4>
        <ul>
          <li>🔵 Level 1: Beginner - Player</li>
          <li>🔺 Level 2: Intermediate - Guard</li>
          <li>⬛ Level 3: Advanced - Front Man</li>
        </ul>
      </motion.div>
    </section>
  );
}

export default ShapesAnimation;
