// First problem
// let data = [
//    ["The","red", "horse"],
//    ["Plane","over","the","ocean"],
//    ["Chocolate","ice","cream","is","awesome"], 
//    ["this","is","a","long","sentence"]
//  ]

//  function groupeWords(array) {
//    return data.map(el => el.join(' '))
//  }
//  console.log(groupeWords(data))


//Second problem
function Calculator(number1,number2,operator) {
   return function(number1,number2,operator) {debugger
      let res = 0
      switch(operator) {
         case'+': res =  number1 + number2
                     break
         case'-': res= number1 - number2
                  break
         case'*': res =  number1 * number2
                  break
         case '/': res = number1 / number2
                  break
      }
      return res
   }
}
let calc = new Calculator()
console.log(calc(3,4,'-'))


//Third problem

// let dupes = [1,2,3,'a','a','f',3,4,2,'d','d']
// function removeDupes(array) {
//    let res = []
//    array.forEach(el => {
//       if(!res.includes(el)) {
//          res.push(el)
//       }
//    })
//    return res
// }
// console.log(removeDupes(dupes))

// Fourth problem
// let arr = [
//    {name: 'Alice', job: 'Data Analyst', country: 'AU'},
//    {name: 'Bob', job: 'Pilot', country: 'US'},
//    {name: 'Lewis', job: 'Pilot', country: 'US'},
//    {name: 'Karen', job: 'Software Eng', country: 'CA'},
//    {name: 'Jona', job: 'Painter', country: 'CA'},
//    {name: 'Jeremy', job: 'Artist', country: 'SP'},
//  ];
// function group(arr,prop) {
//    let res = {}
//    for (let items of arr) {
//       if(res[items[prop]]) {
//          res[items[prop]].push(items)
//       }
//       else{
//          res[items[prop]] = [items]
//       }
//    }
//    return res
// }
// console.log(group(arr,'job'))
// Fifth problem 

// let s  = 'pqr.mno'

// function reverseStr(str) {
//    return str.split('.')
//              .reverse()
//              .join('.')
// }

// console.log(reverseStr(s))