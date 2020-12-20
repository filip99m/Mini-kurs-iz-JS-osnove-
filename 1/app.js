console.log("abc")
console.log(1+2)

function add(a=0, b=0){
    return a+b;
}

console.log(add(1,2));

console.log(1/0);

var user = {
    name: "Marko",
    lastname: "Markovic",
    age: 25,
    fullName: function() {
        return `${this.name} ${this.lastname}`
    }
}

console.log(user.fullName())
console.log(user.name)

console.log(c)
var c = "Varijabla c"
console.log(c)