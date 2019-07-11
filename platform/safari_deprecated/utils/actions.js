const APP_URL = '/* @echo app_url */';
import { send } from 'utils/messaging';

let onPopupOpenedCallback = function(){};
safari.application.addEventListener('popover', function() { onPopupOpenedCallback(); }, true);

export function onPopupOpen(_callback) {
  onPopupOpenedCallback = _callback;
}

export function onPopupClose(_callback) {
  window.addEventListener('blur', () => {
    send('popup.blur');
  });
}

export function popupClose() {
  safari.self.hide();
}

export function setBadgeNumber(number) {
  safari.extension.toolbarItems.forEach((toolbarItem) => {
    toolbarItem.badge = number;
  });
}

export function setBadgeColor(color) {}

export function setIcon(icon) {
  const suffix = icon ? `-${icon}` : '';
  safari.extension.toolbarItems.forEach((toolbarItem) => {
    toolbarItem.image = `${safari.extension.baseURI}icons/icon128${suffix}.png`;
  });
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
  setIcon('active');
}

export function getActiveTabUrl(callback) {
  callback(safari.application.activeBrowserWindow.activeTab.url)
}

export function openpluginWebsite(callback = () => {}) {
  const appUrl = new URL(APP_URL);
  const ourTabs = safari.application.activeBrowserWindow.tabs.filter(function(tab) { return tab.url && tab.url.indexOf(appUrl.host) > 0 });
  if (ourTabs.length > 0) {
    ourTabs[0].activate();
  }
  else {
    safari.application.activeBrowserWindow.openTab().url = '/* @echo app_url */';
  }
  callback()
}

export function onBrowserWindowDeactivated(callback) {
  safari.application.addEventListener("deactivate", (event) => {
    if (event.target instanceof SafariBrowserWindow) {
      callback();
    }
  }, true);
}