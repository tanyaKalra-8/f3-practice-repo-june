                                // MAP, FILTER AND REDUCE  
                                
//MAP - creates new array and perform some operations over it

const arr1 = [1,2,3,4];

const a = arr1.map((value, index) => {
    return value + index;
})

console.log(a);

//------------------------------------------------------------------------------------------

//FILTER - Creates new array based on some condition provided

const arr2 = [1,2,3,4];

const b = arr1.filter((value, index) => {
    return value<=2;
})

console.log(b);

//------------------------------------------------------------------------------------------

//REDUCE - reduces an array to single value

const arr3 = [1,2,3,4];

const c = arr1.reduce((accumulator, currElement, index) => {
    return accumulator + currElement;
})

console.log(c);

//------------------------------------------------------------------------------------------

//FLAT - flatten the levels of array

arr4 = [1,2,3,[4,[5]],[6,7]];

//by default the depth is 1
// console.log(arr4.flat(2));

//LETS CREATE FLAT FUNCTION ON OUR OWN

function customFlat(arr, depth=1){
    let result = [];
    arr.forEach(element => {
        if(Array.isArray(element) & depth>0){
            result.push(...customFlat(element, depth-1));
        } else{
            result.push(element);
        }
    });
    return result;
}

console.log(customFlat(arr4));

//------------------------------------------------------------------------------------------