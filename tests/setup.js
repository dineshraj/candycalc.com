require('babel-register')({
  ignore: /node_modules\/(?!(@bbc)\/).*/
});

// configure enzyme
const configure = require('enzyme').configure;
const ReactSixteenAdapter = require('enzyme-adapter-react-16');
configure({ adapter: new ReactSixteenAdapter() });


//document
const JSDOM = require('jsdom').JSDOM;

//get window and documnet
const dom = new JSDOM('<!doctype html><html><body><div id="candy-calc"></div></body></html>');

global.window = dom.window;
global.document = dom.window.document;

// propagateToGlobal(fakeWindow);
//
// function propagateToGlobal(window) {
//   let key;
//   for (key in window) {
//     if (!window.hasOwnProperty(key)) continue;
//     if (key in global) continue;
//     global[key] = window[key];
//   }
// }
