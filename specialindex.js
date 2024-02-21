let arr = [2, 3, 1, 0, -1, 2, -2, 10, 8];
let prefEven = [];
let prefOdd = [];
prefEven[0] = arr[0];
prefOdd[0] = 0;
prefOdd[1] = arr[1]

for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 0) {
        prefEven[i] = prefEven[i - 1] + arr[i];
    }
    else {
        prefEven[i] = prefEven[i - 1]
    }
}
for (let j = 2; j < arr.length; j++) {
    if (j % 2 == 1) {
        prefOdd[j] = prefOdd[j - 1] + arr[j];
    }
    else {
        prefOdd[j] = prefOdd[j - 1]
    }
}
console.log(prefEven);
console.info(prefOdd);

let count=0;

for (let i = 0; i < arr.length; i++) {
    let se = 0;
    let so = 0;
    if (i == 0) {
        so = prefEven[arr.length - 1] - prefEven[0];
        se = prefOdd[arr.length - 1] - prefOdd[0];
    }
    else {
        se = prefEven[i - 1] + prefOdd[arr.length - 1] - prefOdd[i];
        so = prefOdd[i - 1] + prefEven[arr.length - 1] - prefEven[i];
    }
    if(se==so){
        count=count+1;
    }
}
console.log(count,"count----answer-----")
