import platform from 'utils/platform';
import md5 from 'js-md5';

const browser = ['chrome', 'opera', 'firefox'].indexOf(platform) > -1 ? chrome : window.browser;

const APP_URL = __MYPLUGIN_CONFIG__.app_url;

export function setIcon(icon) {
    const suffix = icon ? `-${icon}` : '';
    if (__MYPLUGIN_CONFIG__.extension == 'msedge') {
        browser.browserAction.setIcon({ path: { "40": `icons/icon40${suffix}.png` } });
    } else {
        browser.browserAction.setIcon({
            path: {
                40: `icons/icon40${suffix}.png`,
                128: `icons/icon128${suffix}.png`
            }
        });
    }
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

export function getRandomId() {
    return md5(`${Date.now()}${Math.random()}`);
}
