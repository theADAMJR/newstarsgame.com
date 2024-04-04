// pages/game.js
import { useEffect } from 'react';

export default function Game() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/new_worlds/WebGL/WebGL.loader.js"; // Adjust the path as necessary
    script.onload = () => {
      (window as any).createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "/Build/WebGL.data",
        frameworkUrl: "/Build/WebGL.framework.js",
        codeUrl: "/Build/WebGL.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "New Worlds NEA",
        productVersion: "0.1",
      }).then((unityInstance: any) => {
        console.log("Unity Instance Loaded");
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

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="unity-container">
      <canvas id="unity-canvas" width="960" height="600"></canvas>
      {/* Include other divs for loading bar, etc., as needed */}
    </div>
  );
}