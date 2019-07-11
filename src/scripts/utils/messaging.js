import platform from 'utils/platform';
import md5 from 'js-md5';

const listeners = [];

const browser = ['chrome', 'opera', 'firefox'].indexOf(platform) > -1 ? chrome : window.browser;

export const SENDER_ID = getRandomId();

browser.runtime.onMessage.addListener(function(request, sender) {
  const message_type = request.type;

  // Ignore messages for other recipients
  if(request.recipient && request.recipient !== SENDER_ID) {
    return;
  }

  listeners
    .filter(function(listener) { return listener.type === message_type; })
    .forEach(function(listener) { listener.callback(request); });
});

export function getRandomId() {
  return md5(`${Date.now()}${Math.random()}`);
}

export function send(message_type, payload) {
  payload = payload || {};
  payload.sender = SENDER_ID;

  browser.runtime.sendMessage(Object.assign({ type: message_type }, payload || {}));
  if (browser.tabs) {
    browser.tabs.query({ currentWindow: true }, function(tabs) {
      tabs.forEach(function(tab) {
        browser.tabs.sendMessage(tab.id, Object.assign({ type: message_type }, payload || {}));
      });
    });
  }
}

export function listen(message_type, _callback) {
  listeners.push({ type: message_type, callback: _callback });
}