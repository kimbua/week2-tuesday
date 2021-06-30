// for (var i = 0; i < 10; i++) {
//     var s = "";
//     for (var j = 0; j < 10; j++) {
//       s = s + i + j + " "
//     }
//     console.log(s);
// }

// function pyramidNumber(n) {
    
//     for (let x = 1;x<=n;x++) {
//         let s = x + " "
//         if (x>=2) {
//         for (let y=1;y<x;y++) {
//             s=s + x + " "
//             }
//         }
//         console.log(s)
//     }
   
// }

// pyramidNumber(7)
function chessboard() {
    let a = " # # # #"
    let b = "# # # #"
    let printline = a
    for (let i=0;i<8;i++) {
        if (printline == a) {
            console.log(printline)
            printline = b
        }else {
            console.log(printline)
            printline = a
        }
    }
}
chessboard()