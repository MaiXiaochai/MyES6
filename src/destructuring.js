/*
* --------------------------------------
* @File       : destructuring.js
* @Author     : maixiaochai
* @Email      : maixiaochai@outlook.com
* @CreatedOn  : 2020/9/24 20:46
* --------------------------------------
*/

// 解构赋值

// 对象
const course = {
    name1: 'maixiaochai',
    price: 500,
    teacher: {
        name: 'gold',
        age: 18
    }
}

// 等号左边和右边的结构完全一样才行
const {
    name: courseName,   // 起别名，避免变量名称冲突
    price,
    teacher: {
        name,
        age
    }
} = course;  // 此时的teacher不能作为变量
console.log(courseName, price, name, age);

// 数组
const courseArr = ['mai', 'xiao', 'chai'];
const [a, b, c] = courseArr;


