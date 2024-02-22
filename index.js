// ==UserScript==
// @name         longnotify
// @namespace    http://tampermonkey.net/
// @version      2024-02-19
// @description  longnotify is a notify popup, using like longnotify(level, message), level in (info, warn, alert)
// @author       longalong
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function () {
  console.log(
    "(*´▽｀)ノノ welcome using longnotify ~ examples are as fellows:"
  );
  console.log(
    'longnotify("info", "hello world info");longnotify("warn", "hello world warn");longnotify("alert", "hello world alert");'
  );
  // CSS for the bubble notification
  var css = `
      .longnotify-bubble-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        visibility: hidden;
      }
      .longnotify-bubble-message {
        color: #ffffff;
        text-align: center;
        border-radius: 5px;
        padding: 10px 15px;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        cursor: default;
      }
      .longnotify-info {
        background-color: #2196F3; /* Blue */
      }
      .longnotify-warn {
        background-color: #ff9800; /* Orange */
      }
      .longnotify-alert {
        background-color: #f44336; /* Red */
      }
    `;

  // Insert CSS into the head of the document
  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  // Create the bubble notification container and add to the body of the document
  var bubbleContainer = document.createElement("div");
  bubbleContainer.id = "longnotify-bubble-notification";
  bubbleContainer.className = "longnotify-bubble-container";
  document.body.appendChild(bubbleContainer);

  // The function to show the bubble notification
  window.longnotify = function (level, message) {
    // Set default level if not specified
    level = level || "info";

    // Create the bubble message
    var bubble = document.createElement("div");
    bubble.className = "longnotify-bubble-message " + "longnotify-" + level;
    bubble.textContent = message;

    // Add the bubble to the container and show it
    bubbleContainer.appendChild(bubble);
    bubbleContainer.style.visibility = "visible";
    bubble.style.visibility = "visible";
    bubble.style.opacity = 1;
    bubble.style.transform = "translateY(0)";

    // After 3 seconds, fade out and remove the bubble
    setTimeout(function () {
      bubble.style.opacity = 0;
      bubble.style.visibility = "hidden";
      bubble.style.transform = "translateY(-20px)";
      // After the transition is done, remove the bubble from the document
      setTimeout(function () {
        bubbleContainer.removeChild(bubble);
        if (bubbleContainer.childElementCount === 0) {
          bubbleContainer.style.visibility = "hidden";
        }
      }, 300);
    }, 3000);
  };
})();
