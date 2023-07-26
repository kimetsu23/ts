"use strict";
class personclasess {
    sayhello() {
        console.log("uff");
    }
}
const personzero = new personclasess;
personzero.sayhello();
class petclass {
    sayhello() {
        return "Hola";
    }
}
class otro {
    sayhello() {
        return "hola desde otro";
    }
    ;
}
class cat extends petclass {
}
