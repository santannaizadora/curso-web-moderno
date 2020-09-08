let selectionSort = (arr) => {
    //const time = Date.now();
    let len = arr.length;
    for (let i = 0; i < len; i++){
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
                console.log(`if1: ${arr}`)
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
            console.log(`if2: ${arr}`)
        }
    }
    //console.log(Date.now()-time);
    return arr;
}

console.log(selectionSort([1,5,7,3,8,42,2,-1,9,0,-2]))

for (let i = 0; i < array.length; ++i) {
    console.log(array[i])
}

let i = 0
while (i < array.length) {
    console.log(array[i])
    ++i
}

let i = 0
do {
    console.log(array[i])
    ++i
} while (i < array.length);

for (let item of array) {
    console.log(item)
}

array.forEach(item => {
    item++;
    console.log(item)
});

array.map(obj => {
    console.log(obj)
    obj++;
    return obj;
})

value = array.filter(item => item >= 50)

value = array.find(item)

