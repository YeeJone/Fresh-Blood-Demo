import css from './index.css'

const arr = [1,2,3,4,5,6]

const printArray = () => {
  arr.forEach(element => {
    console.log(element)
  })
}
console.log('css object', css)
printArray(arr)