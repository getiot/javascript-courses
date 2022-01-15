// 导出数据
export var color = "blue";
export let name = "Rudy";
export const magicNumber = 12;

// 导出函数
export function sum(num1, num2) {
    return num1 + num2;
}

// 导出类
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// 这个函数是模块私有的
function subtract(num1, num2) {
    return num1 - num2;
}

// 定义一个函数
function multiply(num1, num2) {
    return num1 * num2;
}

// 之后再将它导出
export multiply;
