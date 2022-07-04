module.exports = function reverse (n) {
        let r=Math.abs(n);
        let a = String(r);
        let b = a.split('').reverse().join('');
        let s= Number(b);
        return s;
}
