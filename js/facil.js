"use strict";
var Users;
(function (Users) {
    Users[Users["normalUsers"] = 0] = "normalUsers";
    Users[Users["payedUsers"] = 1] = "payedUsers";
    Users[Users["AdminUsers"] = 2] = "AdminUsers";
    Users[Users["MegaUsers"] = 3] = "MegaUsers";
})(Users || (Users = {}));
const myUser = Users.AdminUsers;
console.log(myUser);
