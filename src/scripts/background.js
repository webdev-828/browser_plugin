import platform from 'utils/platform';
import md5 from 'js-md5';

/**
 * Connect LiveReload for development purposes
 */
if (platform == 'chrome' && __MYPLUGIN_CONFIG__.env === 'development') {
    const script = document.createElement('script');
    script.src = 'scripts/livereload.js';
    document.head.appendChild(script);
}
const browser = ['chrome', 'opera', 'firefox'].indexOf(platform) > -1 ? chrome : window.browser;

browser.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        browser.pageAction.show(sender.tab.id);
      sendResponse();
    });
  
    browser.contextMenus.create({ 
      id: 'HeadlineFetcher',
      title: 'Get Headlines',
      contexts: ['all']
    });
  
    browser.contextMenus.onClicked.addListener(() => {
        browser.tabs.query({active: true, currentWindow: true}, tabs => {
            browser.tabs.sendMessage(tabs[0].id, {type: 'openApp'});
            // console.log(tabs[0].id);
      });
  });