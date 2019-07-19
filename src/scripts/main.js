import isUndefined from 'lodash.isundefined';
import platform from 'utils/platform';
import Vue from 'vue';
import App from './content/App.vue';
import $ from 'jquery'

const DATA = {};

new Vue({
    el: '#main',
    data: DATA,
    components: { App },
});

if (platform === 'safari_deprecated') {
    safari.self.width = 300;
    const layout = document.getElementById('content')
    setInterval(() => {
      const desiredHeight = document.body.clientHeight + 20;
      if (desiredHeight !== safari.self.height) {
        safari.self.height = desiredHeight;
      }
    }, 300);
  }
  
  if (platform == 'safari') {
    send('content.focus');
  }
  
  /**
   * Connect LiveReload for development purposes
   */
  if (platform == 'chrome' && __MYPLUGIN_CONFIG__.env === 'development') {
    const script = document.createElement('script');
    script.src = 'scripts/livereload.js';
    document.head.appendChild(script);
  }