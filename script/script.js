// console.log('Hello');
// const timer = () => {
//     console.log('Timer start');
// }
// setTimeout(timer, 9000)
// console.log('JS')



// const func = (name, text) => {
//     console.log(`${name} : ${text}`);
// }
// func('Nikita', 'Hello')
// const name = prompt('Name')
// const timer = setTimeout(() => {
//     func(name, 'Hello')
// }, 3000)

// // addEventListener('click', ()=> func(name))

// if (name == 'Nikita') {
//     clearTimeout(timer)
// }

// setTimeout - срабатывает один раз через определенное время==========================
// setInterval - срабатывает каждый раз через определенное время=======================
// let i = 0

// const timer = setInterval(() => {
//     console.log(i);
//     i++
//     // if (i > 10) {
//     //     clearInterval(timer)
//     // }
//     i > 10 ? clearInterval(timer) : null
// }, 1000);

// const btn = document.getElementById('btn')
// let timer;
// let i = 1
// const logger = () => {
//     console.log(i);
//     i++
//     if (i > 10) clearInterval(timer)
// }
// btn.addEventListener('click', () => {
//     timer = setInterval(logger, 1000)
// })






// =============================================================================

const cube = document.getElementById('cube')
const start = document.getElementById('start')
const stopCube = document.getElementById('stopCube')

let left = 0;
let mtop = 0;
let cuber = null
let i = 0
const animcuber = () => {
    cuber = setInterval(() => {
        if (left == 0 && mtop <= 450 && mtop > 0) {
            cube.style.top = mtop + 'px'
            mtop -= 10
        }
        else if (mtop == 450 && left <= 650 && left >= 0) {
            cube.style.left = left + 'px'
            left -= 10
        }
        else if (mtop >= 0 && mtop <= 450 && left == 650) {
            cube.style.top = mtop + 'px'
            mtop += 10
        }
        else if (left >= 0 && mtop == 0 && left <= 650) {
            cube.style.left = left + 'px'
            left += 10
        }
    }, 10)
}




start.addEventListener('click', () => {
    // i == 0 ? animcuber() : null
    i == 0 && animcuber()
    i++
})
stopCube.addEventListener('click', () => {
    clearInterval(cuber)
    i = 0
})