//require('!style-loader!css-loader!../css/style.css');  // If loaders not included in webpack.config.js

require('../css/style.css');

let messages = require('./messages.js');
let $ = require('jquery');

console.log(messages[0].text);

$.each(messages, (index, message) => {
    $('body').append('<h3>' + messages[index].text + '</h3>');
});
