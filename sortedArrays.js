
function sortTwoArrays(arr1, arr2) {
        const indices = arr1.map((value, index) => ({ value, index }));
        console.log(indices,"indices----------")
    indices.sort((a, b) => {
        console.log(a,b,"a----b-------")
       return  a.value - b.value
    });
    console.log(indices,"indices-----------")

    // Create sorted arrays based on the sorted indices
    const sortedArray1 = indices.map(({ index }) =>{ 
        console.log(index,"index-------------")
        return arr1[index]
});
    const sortedArray2 = indices.map(({ index }) => arr2[index]);

    return [sortedArray1, sortedArray2];
}

// Example usage
const A = [1, 7, 6, 2, 8, 4, 4, 6, 8, 2];
const B = [8, 11, 7, 7, 10, 8, 7, 5, 4, 9];

const [sortedA, sortedB] = sortTwoArrays(A, B);
console.log('Sorted A:', sortedA);  // Output: [1, 2, 2, 4, 4, 6, 6, 7, 8, 8]
console.log('Sorted B:', sortedB);