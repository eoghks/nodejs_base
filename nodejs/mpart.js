var M = {
    v: 'v',
    f: function () {
        console.log(this.v);
    }
}

var P = {
    p: 'p',
    f: function () {
        console.log(this.p);
    }
}

module.exports = M;
module.exports = P;