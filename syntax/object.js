var member = ['egoing', 'k8805', 'hoya'];
console.log(member[1]);

var i = 0;
while (i < member.length) {
    console.log('array loop', member[i])
    i = i + 1
}


var roles = {
    'programmer': 'eogoing',
    'designer': 'k8805',
    'manager': 'hoya'
};

console.log(roles.designer);

for (var name in roles) {
    console.log('key=>', name);
    console.log('values=>', roles[name]);
}