var arr1 = [1, 2, 3]

// 可传多个参数
var result = arr1.unshift(6, 2, 2)

// 返回数组length
console.log(result) // 6

// 改变原数组
console.log(arr1) // [ 6, 2, 2, 1, 2, 3 ]