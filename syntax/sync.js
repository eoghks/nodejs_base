var fs=require("fs");

//read file sync
/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
*/
console.log('A');
//비동기적으로 하는걸 선호, readFile은 리턴값을 주지않는다.!! -> 인자로 주어야한다.
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){
    console.log(result);
});
console.log('C');