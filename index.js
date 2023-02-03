let operation;
// function suma (op1, op2) {
//     return op1 + op2
// };

function resta (op1, op2) {
    return op1 - op2
};

function producto (op1, op2) {
    return op1 * op2
};

function division (op1, op2) {
    return op1 / op2
};

let vector=[];

function crearVector(cantidad,maximo) {
    for (let index = 0; index < cantidad; index++) {
        vector.push(Math.floor(Math.random() * (maximo+1)))
    }
    return vector;
}

let add=[];
function sumaVector(v1,v2) {
    if (v1.length === v2.length) {
        for (let index = 0; index < v1.length; index++) {
            add.push(v1[index] + v2[index])
        }
        return add
    }
};

function productoNumeroVector(n,v) {
    let y =[];
    v.forEach(
        function(value,index) {
            let dato = value * n
            y.push(dato)
        }
    );
    return y
};

function restaVector(v1,v2) {
    let add=[];
    if (v1.length === v2.length) {
        for (let index = 0; index < v1.length; index++) {
            add.push(v1[index] - v2[index])
        }
        return add
    }
};

function productoVector(v1,v2) {
    let producto=[];
    if (v1.length === v2.length) {
        for (let index = 0; index < v1.length; index++) {
            producto.push(v1[index] * v2[index])
        }
        return producto
    }
};

function cuadrado (op1) {
    return op1 * op1
};

module.exports= {suma, resta, producto, division, crearVector, sumaVector, productoNumeroVector, restaVector, productoVector, cuadrado};