// interaction-logger.js

function logEvent(eventType, target) {
    const timestamp = new Date().toISOString();
    const elementType = target.tagName ? target.tagName.toLowerCase() : 'unknown';
    console.log(`${timestamp} , ${eventType} , ${elementType}`);
  }
  
  // Log initial page view when the page is fully loaded
  window.addEventListener('load', function () {
    logEvent('view', document.body);
  });
  
  // Log all click events
  document.addEventListener('click', function (event) {
    logEvent('click', event.target);
  });
  