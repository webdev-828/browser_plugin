const LIVERELOAD_HOST = 'localhost:';
const LIVERELOAD_PORT = 35739;
const connection = new WebSocket('ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload');

connection.onerror = function (error) {
  console.log('reload connection got error:', error);
};

connection.onmessage = function (e) {
  if (e.data) {
    const data = JSON.parse(e.data);
    if (data && data.command === 'reload') {
      chrome.runtime.reload();
    }
  }
};