
function logEvent(eventType, target)
{
    const timestamp = new Date().toISOString();
    const elementType = target.tagName ? target.tagName.toLowerCase() : 'unknown';
    console.log(`${timestamp} , ${eventType} , ${elementType}`);
  }
  
  window.addEventListener('load', function ()
  {
    logEvent('view', document.body);
  });
  
  document.addEventListener('click', function (event)
  {
    logEvent('click', event.target);
  });
  