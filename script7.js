// var fruits = ["apples", "oranges", "bananas"];

// function listFruits() {
//   for (var i = 0; i < fruits.length; i++) {
//     console.log("I have some " + fruits[i]);
//   }
// }
// listFruits()

// var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];

// function salary() {
//     let totalSalary=0
//     for (let i =0;i<workingHours.length;i++){
//         let oneDaySal = workingHours[i]*25
//         totalSalary = totalSalary + oneDaySal
//         console.log(`Peter earned $${oneDaySal} today!`)
//     }
//     console.log(`Peter has earned $${totalSalary} in total`)
// }
// salary()

function randomInteger(start,end){
    let result =0
    let addition = Math.floor(Math.random()*(end-start+1))
    result = start + addition
    return result
}
// function yearlyIncome(){
//     let yearlyWorkingHours = []
//     let yearlyIncome = 0
//     for (let x=0;x<250;x++){
//         yearlyWorkingHours.push(randomInteger(6,8))
//         let oneDaySal = 25*yearlyWorkingHours[x]
//         yearlyIncome = yearlyIncome + oneDaySal
//         }
//    console.log(`Peter estimated income in 1 year is $${yearlyIncome}`)
    
    
// }
// yearlyIncome()
function totalWeekIncome(w){
    let weekWorkingHours = []
    let totalWeekIncome = 0
    for (let x=0;x<w*5;x++){
        weekWorkingHours.push(randomInteger(6,8))
        let oneDaySal = 25*weekWorkingHours[x]
        totalWeekIncome = totalWeekIncome + oneDaySal
        }
   console.log(`Peter estimated income in ${w} weeks is $${totalWeekIncome}`)
}
totalWeekIncome(12)