function solve(arr){
    let arr2=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i].gender=="Male" && arr[i].age>=18){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
let arr = [{
    name: "Pranshu", 
    age:21, 
    gender: "Male"
}, 
    {name: "rohan", 
    age:14, 
    gender: "Male"
},
    {name: "Richa",
    age:20,
    gender:"Female"
}]
console.log(solve(arr));