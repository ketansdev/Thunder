// sorting function 

// /bubble sort 

// let arr = [20, 5, 13, 78, 56, 99];

// for(let i = 0; i < arr.length ; i++){
//     for(j = 0; j <arr.length-1; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

// console.log(arr);



let arr = [20, 5, 13, 78, 56, 99];

Array.prototype.sorting = function(){
    for(let i = 0; i < arr.length ; i++){
    for(j = 0; j <arr.length-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
}

arr.sorting();

console.log(arr)
