"use client"
import { useEffect } from 'react';

export default function Game() {
  useEffect(() => {
    const folder = "/new_worlds/WebGL/Build";
    const script = document.createElement("script");
    script.src = folder + "/WebGL.loader.js";
    script.onload = () => {
      const canvas = document.querySelector("#unity-canvas");
      (window as any).createUnityInstance(canvas, {
        dataUrl: folder + "/WebGL.data",
        frameworkUrl: folder + "/WebGL.framework.js",
        codeUrl: folder + "/WebGL.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "New Worlds NEA",
        productVersion: "0.1",
      }).then((unityInstance: any) => {
        console.log("Unity Instance Loaded");
        
        function resizeCanvas() {
          const width = window.innerWidth;
          const height = window.innerHeight;
          const aspectRatio = 16 / 9; // Adjust based on your game's aspect ratio
          let newWidth, newHeight;
  
          if (width / aspectRatio < height) {
            newWidth = width;
            newHeight = width / aspectRatio;
          } else {
            newWidth = height * aspectRatio;
            newHeight = height;
          }
  
          canvas.style.width = newWidth + 'px';
          canvas.style.height = newHeight + 'px';
        }
  
        // Call resizeCanvas on initial load and window resize
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
      }).catch((error: any) => {
        console.error("Unity Instance Error: ", error);
      });
    };
    document.body.appendChild(script);

    // Optional: Register Service Worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/ServiceWorker.js");
      });
    }

    // Cleanup
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div id="unity-container">
      <canvas id="unity-canvas" width="1280" height="720" style={
        {
          maxWidth: '100vw', // Maximum width is 100% of the viewport width
          maxHeight: '90vh', // Maximum height is 90% of the viewport height
          aspectRatio: '16 / 9', // Maintain aspect ratio (adjust as needed)
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, 10%)'//'translate(-50%, -25%)' // Center the canvas
        }}></canvas>
    </div>
  );
}