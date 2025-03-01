

//MISTAKES: dont use new as variable , we don't have range in here, math.round, math.round(num*100)/100, v.length


function avg(list){
    let sum=0;
    for(let i=0;i<list.length;i++){
         sum+=list[i];
    }
    let average= Math.round(sum/list.length*100)/100;
    return [average,sum];

}


const original = [2,-5,1,10,7,-6,-4]

let newArray = [];
let c=0;
for(let i=0;i<original.length;i++){
    if(original[i]>=0){
        newArray.push(original[i]);
        c+=1;
    }
}


newArray.sort((a, b) => a - b)
newArray.splice(0,2)



let average= avg(newArray)[0];
let k=0;
while(k<(c+2)){
    newArray.push(average);
    k++;
}

console.log(original)
console.log(newArray)
console.log("orginal_avg:",avg(original)[0])
console.log("new avg:",average)
console.log("sum original:",avg(original)[1])
console.log("sum new:",avg(newArray)[1])




