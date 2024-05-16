// const coding = ["Js", "Java", "Cpp", "py", "ruby"]

// // it will not work when store in variable and display
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter( (num) => num > 4)   // num > 4 is condition
// console.log(newNums);


const newNums = []

myNum.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums);



// Example
const Book = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},

    {title: 'Book Two', genre: 'NOn-Fiction', publish: 1992, edition: 2008},

    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},

    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},

    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},

    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},

    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},

    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
];


let userBooks = Book.filter( (bk) => bk.genre === 'History')

 userBooks = Book.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
 })
console.log(userBooks);