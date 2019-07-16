import platform from 'utils/platform';
import md5 from 'js-md5';
import $ from 'jquery'

const CURRENT_HREF = window.location.href;
const browser = ['chrome', 'opera', 'firefox'].indexOf(platform) > -1 ? chrome : window.browser;
let togglerDragStart = false;
const wrapper = document.createElement('div');
wrapper.setAttribute('style', `
    position: fixed;
    top: 0;
    right: -400px;
    bottom: 0;
    width: 400px;
    background: white;
    color: white;
    z-index: 2147483647;
    overflow-y: hidden;
    -webkit-box-shadow: -3px 0px 20px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: -3px 0px 20px -10px rgba(0,0,0,0.75);
    box-shadow: -3px 0px 20px -10px rgba(0,0,0,0.75);
    transition: right 0.2s ease 0s;
`);
wrapper.innerHTML = `
    <iframe id="climberPlugin" style="height:100%; width: 100%;"></iframe>
`;
const toggler = document.createElement('div');
toggler.style.display = "none";
let topMargin = 10;
browser.storage.local.get(['ClimberTogglerTopMargin'], result => topMargin = result.ClimberTogglerTopMargin || 10);
setTimeout(() => {
    toggler.setAttribute('style', `
        position: fixed;
        z-index: 2147483647;
        user-select: none;
        width: 36px; 
        height: 36px; 
        border-radius: 2px; 
        box-shadow: rgba(0, 0, 0, 0.25) -1px 0px 2px 0px; 
        background-color: rgb(255, 255, 255); 
        right: 0px; 
        transition: right 0.2s ease 0s; 
        left: auto;
        top: ${topMargin}px;
    `);
}, 200);
let iconSrc = browser.extension.getURL("../images/icon.png");
let draggerSrc = browser.extension.getURL("../images/arrow-tab.png");
toggler.innerHTML = `
    <div style="z-index: 2147483647; position: absolute; background: white; height: 36px;">
        <img src="${iconSrc}" style="width: 100%; " draggable="false">
    </div>
`;
const mover = document.createElement('div');
mover.setAttribute('style', `
    position: absolute;
    left: 0px;
    top: 0;
    cursor: grab;
    display: block !important; 
    width: 20px !important; 
    height: 36px !important; 
    left: auto !important; 
    cursor: grab !important; 
    z-index: 2147483645 !important; 
    transition: left 0.5s ease 0s;
`);
mover.innerHTML = `
    <img src="${draggerSrc}" draggable="false" style="height: 100%;">
`;
toggler.appendChild(mover);
const isOpened = () => ! Boolean(parseInt(wrapper.style.right));
const openApp = (number = null) => {
    if (number) {
        console.log("Send SMS to this number: " + number);
        //redirect iframe to send SMS url
    }
    if (! isOpened()){
        wrapper.style.right = "0px";
        toggler.style.right = '400px';
    }
}
const closeApp = () => {
    if (isOpened()){
        wrapper.style.right = "-400px";
        toggler.style.right = '0px';
    }
}
toggler.addEventListener('click', () => {
        if (isOpened()) {
            closeApp();
        } else {
            openApp();
        }
});
toggler.addEventListener('mouseenter', () => mover.style.left = "-20px");
toggler.addEventListener('mouseleave', () => {
    if (! togglerDragStart)
        mover.style.left = "0px";
});
mover.addEventListener('click', e => e.stopPropagation())
mover.addEventListener('mousedown', () => togglerDragStart = true);
document.addEventListener('mouseup', () => {
    togglerDragStart = false
    mover.style.left = "0px";
});
document.addEventListener('mousemove', evt => {
    if (togglerDragStart) {
        let top = evt.clientY - 10;
        if (top < 10) top = 10;
        if (top > window.innerHeight - 50) top = window.innerHeight - 50;
        browser.storage.local.set({ClimberTogglerTopMargin: top}, () => {});
        toggler.style.top = (top) + 'px';
    }
});
document.body.appendChild(wrapper);
document.body.appendChild(toggler);
const iframe = document.getElementById("climberPlugin");  
iframe.src = browser.extension.getURL("main.html");
iframe.frameBorder = 0;
browser.runtime.onMessage.addListener(request => {
    switch(request.type) {
        case 'openApp' :  openApp(); break;
        case 'closeApp' : closeApp(); break;
    }
});
