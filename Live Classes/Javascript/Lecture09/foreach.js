// const arr = [10, 5, 45, 8, 90, 43];

// arr.forEach((item, index, arr) =>{
//     console.log(item, index, arr);
// })


let arr = [5, 10, 15, 20, 30, 45];

Array.prototype.loop = function(callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
    }
}

arr.loop((num, idx, arr)=>{
    console.log(num, idx, arr)
})