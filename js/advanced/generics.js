"use strict";
const myvalue = {
    field: 1
};
class Myclass {
    constructor(field) {
        this.field = field;
    }
}
const myobject = new Myclass(2);
function getdata(id) { }
class HTTPresponse {
    constructor(data, status, code) {
        this.data = data,
            this.status = status,
            this.code = code;
    }
}
const ferchUser = () => {
    return {
        id: 1,
        name: "Geraldino",
    };
};
const myuser = ferchUser();
const res = new HTTPresponse(myuser, 200, 1);
console.log(res);
class crud {
    constructor(items) {
        this.items = items;
    }
    additem(item) {
        this.items.push(item);
    }
    removeLastItem() {
        this.items.pop();
    }
    printItems() {
        return this.items;
    }
}
const users = [
    { id: 1, name: "Kimetsu23" },
    { id: 2, name: "Geraldino" },
    { id: 3, name: "Jeremy" },
];
const userCrud = new crud(users);
userCrud.additem({ id: 4, name: "Typescript" });
console.log(userCrud.printItems());
