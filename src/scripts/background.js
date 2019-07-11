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