import { stackPush, stackPop } from './lib/stack'

/**
 * If you are absolutely sure that #root element DOES exist in your DOM,
 * you can show TS your confidence with a ! operator.
 */
const el = document.getElementById('root')!

el.innerHTML += `<h1>START</h1>`

let arrNum: number[] = []

arrNum = stackPush(arrNum, 10)
arrNum = stackPush(arrNum, 9)
arrNum = stackPush(arrNum, 8)
el.innerHTML += `<h2>PUSH 10 then 9</h2>`
arrNum.map(item => el.innerHTML += `<div>${item}</div>`)

arrNum = stackPop(arrNum)
el.innerHTML += `<h2>POP 1</h2>`
arrNum.map(item => el.innerHTML += `<div>${item}</div>`)

el.innerHTML += `<h1>END</h1>`
