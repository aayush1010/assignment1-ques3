function callback(p) {
    p = p+1;
    return p;
}

function forEach(a, callback) {
    var i = 0
    while (i < a.length){
        callback(a[i])
        i++
    }
}

function map(a, callback) {
    b = a;
    var i = 0
    while(i  < b.length){
        b[i] = callback(b[i])
        i++
    }
    return b;
}

a = [1,2,3,4,5]

forEach(a, callback);
c = map(a,callback);
console.log(typeof c)
console.log(c);