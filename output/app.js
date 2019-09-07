"use strict";

var _mensajeAlerta = require("./modules/mensajeAlerta");

var _clasePersona = _interopRequireDefault(require("./modules/clasePersona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//mensajeAlerta("Hola Carlos");
var carlos = new _clasePersona["default"]("Carlos Arturo", 23);
carlos.mostrarInfor();