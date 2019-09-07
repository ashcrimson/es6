"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Persona =
/*#__PURE__*/
function () {
  function Persona(nombre, edad) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
    this.edad = edad;
  }

  _createClass(Persona, [{
    key: "mostrarInfor",
    value: function mostrarInfor() {
      console.log("".concat(this.nombre, " tiene ").concat(this.edad, " a\xF1os"));
    }
  }]);

  return Persona;
}();

var _default = Persona;
exports["default"] = _default;