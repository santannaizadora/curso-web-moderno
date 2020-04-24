function classificaTriangulo(x,y,z){
     if(x == y && x == z){
        return 'Triangulo equilátero'
    } else if(x == y && x !=z || x!= y && y == z){
        return 'Triangulo isósceles'
    } else if(x != y && y != z && x !=z){
        return 'Triangulo escaleno'
    } 
}


console.log(classificaTriangulo(2,2,2))
console.log(classificaTriangulo(2,2,3))
console.log(classificaTriangulo(2,3,2))
console.log(classificaTriangulo(2,3,4))
console.log(classificaTriangulo(2,3,3))
console.log(classificaTriangulo(7,9,8))
