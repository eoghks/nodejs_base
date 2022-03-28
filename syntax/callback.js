/*function a() {
    console.log('A');
}*/
//함수가 변수에 들어갈수있다.
var a = function () {
    console.log('A');
}

function showfunc(callback) {
    callback();
}

showfunc(a);