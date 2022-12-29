
// var list = [];
// // var vipove = false;

// while (list.length < 20) {
//     var rand = Math.round(Math.random() * 70);
//     list.push(rand);
// }

// console.log(list);

// for (var i = 0; i < list.length; i++) {
//     var counter = 0;
//     for(j = 1; j <= i; j++){
//         if(i % j == 0){
//             counter++
//         }
//     }
    
//     if (counter == 2) {
//         vipove = true;
//         console.log("მარტივია რიცხვი ნაპოვნია");
//         break;
//     }
// }

// if (!vipove) {
//     console.log('მარტივი რიცხვი ვერ მოიძებნა')
// }


// var list = [];

// for(var i = 1; i < 100; i++){
//     var count = 2;
//     for(j = 2; j<=i/2; j++){
//         if(i % j == 0){
//             count++
//         }    
// }
//     if(count == 2 && i!=1){
//         list.push(i)
//     }


// }console.log(list)



// let userNumber = Number(prompt("Entre  100 - 200"));
// let list = [];
// for(let i = 0; i <= userNumber; i++){
//     if(i % 5 == 0){
//         list.push(i)
//     }
// }console.log(list)


// let list = [];
// let list2 = [];
// for(let i = 1; i <= 20; i++){
//     let rand = Math.round(Math.random() * 100)
//     list.push(rand)
    
// }console.log(list)

// for(let i = 1; i <= list.length; i++){
//     if(list[i] % 5 == 0){
//         list2.push(list[i])
//     }
// }console.log(list2)


let list = [];
while (list.length<10){
    let randNum = Math.round(Math.random() * 20);
    let contains = false;

    for(let i = 0; i < list.length; i++){
        if(list[i] == randNum){
            contains = true;
        }
    }
    if(!contains){
        list.push(randNum)
    }
}

console.log(list)