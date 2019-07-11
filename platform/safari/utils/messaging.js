import md5 from 'js-md5';

const listeners = [];

if (window.safari) {
  // We are in contenscript
  safari.self.addEventListener("message", function(event) {
    listeners
      .filter(function(listener) { return listener.type === event.message._type; })
      .forEach(function(listener) { listener.callback(event.message._message); });
  });
}
else {
  // We are in popover/background
  window.__plugin_MESSAGE_CALLBACK__ = function(payload) {
    listeners
      .filter(function(listener) { return listener.type === payload._type; })
      .forEach(function(listener) { listener.callback(payload._message); });
  }
}

export const SENDER_ID = getRandomId();

export function getRandomId() {
  return md5(`${Date.now()}${Math.random()}`);
}

export function send(messageType, payload) {
  if (window.safari) {
    safari.extension.dispatchMessage("message", { "_type": messageType, "_message": payload });
  }
  else {
    window.webkit.messageHandlers.plugin.postMessage({"_type": messageType, "_message": payload});
  }
}

export function listen(messageType, callback) {
  listeners.push({ type: messageType, callback: callback });
}