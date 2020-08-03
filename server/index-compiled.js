"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import App from '../../client/src/components/_App.jsx';
var app = (0, _express["default"])();
var port = 3000;

var publicFolder = _path["default"].join(__dirname, '../', 'client', 'public');

var publicHTML = _path["default"].join(publicFolder, 'index.html');

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(_express["default"]["static"](publicFolder));
app.listen(port, function () {
  console.log("Connected and listening on ".concat(port, "!"));
});
app.get('/', function (req, res) {
  res.send(publicHTML);
});
