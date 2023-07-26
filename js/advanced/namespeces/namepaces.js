"use strict";
var data;
(function (data) {
    class user {
        constructor(name) {
            this.name = name;
        }
    }
    data.user = user;
    const myuser = new user("jeremy");
})(data || (data = {}));
