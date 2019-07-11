import { send, listen } from 'utils/messaging';

let onPopupOpenedCallback = function(){};
let onPopupClosedCallback = function(){};
let onBrowserWindowDeactivatedCallback = function(){};

let IS_BROWSER_WINDOW_ACTIVE = true;

let activeTabIUrl;

listen('safari.popup.focus', () => {
  onPopupOpenedCallback();
});

listen('safari.popup.blur', () => {
  onPopupClosedCallback();
});

listen('safari.active_tab_url', function(payload) {
  activeTabIUrl = payload.url;
})

listen('safari.application_focus_changed', function(payload) {
  if (payload.isActive != IS_BROWSER_WINDOW_ACTIVE) {
    IS_BROWSER_WINDOW_ACTIVE = payload.isActive;
    onBrowserWindowDeactivatedCallback();
  }
});

export function onPopupOpen(_callback) {
  onPopupOpenedCallback = _callback;
}

export function onPopupClose(_callback) {
  onPopupClosedCallback = _callback;
}

export function popupClose() {}

export function setBadgeNumber(number) {
  send('application.set_toolbar_badge_number', { number: `${number}` });
}

export function setBadgeColor(color) {}

export function setIcon(icon) {
  send('application.set_toolbar_icon', { icon });
}

export function setIconPlaying() {
  setIcon('play');
}

export function setIconPaused() {
  setIcon('pause');
}

export function setIconLoggedOut() {
  setIcon('inactive');
}

export function setIconLoggedIn() {
  send('application.set_toolbar_icon', { icon: 'active' });
}

export function getActiveTabUrl(callback) {
  if (! IS_BROWSER_WINDOW_ACTIVE) {
    return callback(null);
  }
  send('application.get_active_tab_url');
  setTimeout(() => {
    callback(activeTabIUrl)
  }, 50);
}

export function openpluginWebsite(callback = () => {}) {
  send('application.open_plugin_website');
}

export function onBrowserWindowDeactivated(callback) {
  onBrowserWindowDeactivatedCallback = callback;
}