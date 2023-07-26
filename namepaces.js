// namespaces
// Actualmente no son muy utilizados pero hay proyecto con ellos
// namespace es mas para ordenar el codigo
var data;
(function (data) {
    var user = /** @class */ (function () {
        function user(name) {
            this.name = name;
        }
        return user;
    }());
    data.user = user;
    var myuser = new user("jeremy");
    // console.log(myuser)
})(data || (data = {}));
var Myuser = new data.user("jose");
console.log(Myuser);
