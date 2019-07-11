import platform from 'utils/platform';
import md5 from 'js-md5';
import $ from 'jquery'

const CURRENT_HREF = window.location.href;
const browser = ['chrome', 'opera', 'firefox'].indexOf(platform) > -1 ? chrome : window.browser;

console.log(browser);



