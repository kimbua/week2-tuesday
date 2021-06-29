// for (let x=0;x<5;x++) {
//     console.log(Math.random())
// }

function getRandomInt(){
    return Math.floor(Math.random()*10)
}


// for (let y=0;y<5;y++) {

//     console.log(getRandomInt())

// }

function randomInteger(start,end){
    let result =0
    let addition = Math.floor(Math.random()*(end-start+1))
    result = start + addition
    return result
}

// for (let z=0;z<5;z++) {

//         randomInteger(20,100)
    
// }

let arr = ["apple", "orange", "kiwi"];
function getRandomItem() {
    let picker=randomInteger(0,arr.length-1)
    return arr[picker]
}
console.log(getRandomItem())




