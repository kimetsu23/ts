"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const sayhi = (segun) => {
    console.log('Hola ${segun} ');
};
sayhi("Casi se caba el curso");
function saygoodbay(segun) {
    console.log('Adios ${segun}, Casi termina');
}
saygoodbay("Estudie en codigo facilito");
const response = {
    id: 1,
    name: "jeremy ya ya ya ",
    charge: "developer",
    number: 4,
};
function show(_a) {
    var { name } = _a, other = __rest(_a, ["name"]);
    console.log("El id mandado :", name);
    console.log("otros datos:", other);
    return 1;
}
show(response);
