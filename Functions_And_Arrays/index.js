function x() {
    var a =10
    function y() {
        console.log(a);
    }
    
    return y;
}

const z = x();
console.log(z);
z();