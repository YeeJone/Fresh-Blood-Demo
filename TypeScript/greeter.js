function greeter(person) {
    return "Hello " + person;
}
var user = 'YeeJone';
document.body.innerText = greeter(user);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
console.log(Color.green);
