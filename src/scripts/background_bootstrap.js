window.__MYPLUGIN_CONFIG__ = {
  platform: '/* @echo extension */',
  env: '/* @echo env */',
  version: '/* @echo version */',
  app_url: '/* @echo app_url */',
  min_watch_seconds: '/* @echo min_watch_seconds */',
  max_watch_seconds: '/* @echo max_watch_seconds */',
  encryption_key: '/* @echo encryption_key */',
  encryption_enabled: '/* @echo encryption_enabled */',
};

var script = document.createElement('script');
script.src = 'scripts/background.js';
document.head.appendChild(script);