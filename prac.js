// Remove duplicate items from the given array
// let arr = [1,2,1,[2,3],[2,3,5],[2,3],[2,3,5],["a","b"],["a","b","c"],["a","b"]]
// let strArr = arr.map((value,i)=>{
//     return JSON.stringify(value)
// })
// let removeDuplicate = [...new Set(strArr)]
// console.log(removeDuplicate)

// let removeStrArr = removeDuplicate.map((value,i)=>{
//     return JSON.parse(value)
// })
// console.log(removeStrArr)


// let eliminateDuplicate = (input)=>{
//     let strInput = input.map((value,i)=>{
//         return JSON.stringify(value)
//     })
//     let removeDuplicate = [...new Set(strInput)]
//     // console.log(removeDuplicate)
    
//     let removeStrInput = removeDuplicate.map((value,i)=>{
//         return JSON.parse(value)
//     })
//     // console.log(removeStrInput)
//     return removeStrInput
// }
// let expectedOutput = eliminateDuplicate([1,2,1,["a","b"],["a","b"]])
// console.log(expectedOutput)