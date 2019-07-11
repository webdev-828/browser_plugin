import md5 from 'js-md5';

const listeners = [];

const contentScript = self.SafariContentWebPage && safari.self instanceof SafariContentWebPage;
const popoverScript = self.SafariExtensionPopover && safari.self instanceof SafariExtensionPopover;
const backgroundScript = self.SafariExtensionGlobalPage && safari.self instanceof SafariExtensionGlobalPage;

export const SENDER_ID = getRandomId();

if (contentScript || backgroundScript) {
  const eventEmitter = contentScript ? safari.self : safari.application;
  eventEmitter.addEventListener('message', function(event) {

    // Ignore messages for other recipients
    if(event.message.recipient && event.message.recipient !== SENDER_ID) {
      return;
    }

    listeners
      .filter(function(listener) { return listener.type === event.name; })
      .forEach(function(listener) { listener.callback(event.message); });
  });
}

if (popoverScript || backgroundScript) {
  const eventEmitter = popoverScript ? self : safari.extension.popovers[0].contentWindow;
  eventEmitter.addEventListener('plugin.message', function(event) {

    // Ignore messages for other recipients
    if(event.detail.recipient && event.detail.recipient !== SENDER_ID) {
      return;
    }

    const message_type = event.detail.type;
    listeners
      .filter(function(listener) { return listener.type === message_type; })
      .forEach(function(listener) { listener.callback(event.detail); });
  });
}

export function getRandomId() {
  return md5(`${Date.now()}${Math.random()}`);
}

export function send(message_type, payload) {
  payload = payload || {};
  payload.sender = SENDER_ID;

  if (contentScript) {
    safari.self.tab.dispatchMessage(message_type, payload);
  }
  else if (popoverScript) {
    const event = new CustomEvent('plugin.message', { detail: Object.assign({ type: message_type }, payload) });
    self.dispatchEvent(event);
  }
  else if (backgroundScript) {
    safari.application.activeBrowserWindow.tabs.forEach(function(tab) {
      tab.page && tab.page.dispatchMessage(message_type, payload);
    });

    const event = new CustomEvent('plugin.message', { detail: Object.assign({ type: message_type }, payload) });
    safari.extension.popovers[0].contentWindow.dispatchEvent(event);
  }
}

export function listen(message_type, _callback) {
  listeners.push({ type: message_type, callback: _callback });
}