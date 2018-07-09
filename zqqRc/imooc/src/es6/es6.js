// let const

// {
//     let name = 'imooc'
// }
// console.log(name)

// const name = 'imooc'
//常量不会被修改

//str
// name = 'imooc'
// course = 'React开发App'
// console.log('hello' + name + ',course is' + course )
// console.log(`hello ${name},course is ${course}`)

// ES6 函数的用法

//    参数默认值
//    箭头函数
//    展开运算符

// function hello(name){
//    console.log(`hello ${name} !`)
// }
// const hello1 = (name)=>{
//     console.log(`hello ${name} !`)
// }
// hello('imooc')
// hello1('imooc')

// setTimeout(()=>{
//     console.log('xxx')
// },1000)

// const double = x=>x*2
// console.log(double(5))

// var double = function (x) {
//     return x*2
// }

// var oa = double(2)

//参数默认值的使用
// const hello = (name='imooc')=>{
//     console.log(`hello ${name} !`)
// }
// hello()
// hello('woniu')

// function hello(name1,name2){
//     console.log(name1,name2)
// }
// let arr = ['imooc','woniu']
// // hello.apply(null,arr)
// hello(...arr)

//Object扩展

// Object.keys   values   entries
// 对象方法简写，计算属性
// 展开运算符（不是ES6标准，但是babel也支持）

//object

// const obj = {name:'imooc',course:'react开发app'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const name = 'imooc'
// const obj = {
//     name,
//     [name]:'hello',
//     hello:function(){

//     },
//     hello1(){

//     }
// }
// // obj[name] = 'hello imooc'
// console.log(obj)

// const obj = {name:'imooc',course:'React'}
// const obj2 = {type:'IT',name:'woniu'}
// console.log({...obj,...obj2,date:"2017"})

//解构赋值
//  函数也可以多返回值了

//数组解构
//对象解构

// const arr = ['hello','imooc']

// //let arg1 = arr[0]
// //let arg2 = arr[1]

// // let [arg1,arg2] = arr
// // console.log(arg1,'|',arg2)

// const obj = {name:'imooc',course:'react'}
// const {name,course} = obj
// console.log(name,'|',course)

//类
//提供class的语法糖
//   是prototype的语法糖
//   Extends继承
//   Constructor构造函数

// class MyApp {
//     constructor() {
//         this.name = 'imooc'
//     }
//     sayHello() {
//         console.log(`hello ${this.name} !`)
//     }
// }
// const app = new MyApp()
// app.sayHello()

//新的数据结构
//ES6中新出现的数据结构
//  set，元素不可重合
//  Map
//  Symbol

//模块化
// ES6中自带了模块化机制，告别seajs和require.js
//  Import,import{}
//  Export,Export default
//  Node现在还不支持，还需要用require来加载文件

// import { name, sayHello } from './module1'
// import { course } from './module1'
// course()
// console.log(name)
// sayHello()

// import * as mod1 from './module1'
// console.log(mod1)
// const Ajaxss = () => {
//     return new Promise((resolve, reject) => {

//         $.ajax({})
//             .success((res) => {
//                 resolve(res)
//             })
//             .fail((res) => {
//                 reject(res)
//             })
//     })
// }


// const Ajaxss = () => {

// return axios.get({
//     url:'',
//     data:''
// })

// }

// Ajaxss().then((res)=>{

// },()=>{

// })

// import xx from 'xx'
// export function xxxxx(data) {
//     return xx.post({
//         url:"123",
//         data:data
//     })
// }

// import { xxxxx } from 'xxxxxxx'
// xxxxx().then((res) => {
//     //成功
// }, res => {
//     //失败
// })