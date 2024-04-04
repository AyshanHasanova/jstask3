 let num =parseInt (prompt("eded daxil edin"));
 let eded = 3
 let factorial =1
 for (let i = 1; i <=eded; i++) {
     factorial=factorial*i
     console.log(factorial)
 }

task2


  
let arr = [1, 3, 52, 4, 874, 24, 21];
let max = arr[0];
let min = arr[0];
let maxIndex = 0;
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
    if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }
}
let newArr = [...arr];
newArr[minIndex] = max;
newArr[maxIndex] = min;
console.log(newArr);






task3

let array =[1,2,15,27,44,51]
let maxSingular =0
for (let i = 0; i < array.length; i++) {
   if (array[i]%2 !==0) {
     if(maxSingular===0 || array[i]>maxSingular){
    maxSingular= array[i];}
    
   }
    
}
console.log("max singular:", maxSingular);




task4

let array =[6,8,22,35,44];
let max =array[0];
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i]<min) {
        min=array[i];
        
    }
    if(array[i]>max){
        max= array[i]
    }
   
    
}
let ortalama=(min+max) / 2;
console.log("Minimum:",min);
console.log("Maximum:",max);
console.log("Ortalama:",ortalama);





