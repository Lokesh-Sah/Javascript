// declare object
// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abd"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Lokesh",
            lastname : "Sah"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// concatinate
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2} // show obj inside obj

// const obj4 = Object.assign({},obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


// uses for database
const users = [
    {
        1 : "a", 
        2 : "b"
    },
    {
        1 : "a", 
        2 : "b"
    },
    {
        1 : "a", 
        2 : "b"
    },
]


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // kept key and values in array individually

// to check value is present or not
console.log(tinderUser.hasOwnProperty('isLogged'));



// Destructure
const course = {
    coursename : "JS",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const {courseInstructor:Instructor} = course // when name is big then give small name like Instructor in this

// console.log(courseInstructor);
console.log(Instructor);