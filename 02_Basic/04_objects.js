// const user = new Object();
const tinderUser = {};

tinderUser.name = 'Ishwar';
tinderUser.age = 21;
tinderUser.email = 'ish@gmail.com';

// console.log(tinderUser);

// Object in Object 

const regularObject = {
    username: {
        userfullname: {
            firstname: 'Ishwar',
            lastname: 'Mundhe'
        }
    }
}
// console.log(regularObject.username.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = Object.assign({}, obj1, obj2, obj3); // {} - is used as it is store value in {} and obj1,2,3 is put in {}. but mostly delcare in ...obj1,...obj2 instead

const obj4 = { ...obj1, ...obj2, ...obj3 } // add multiple objects 
// console.log(obj4);

const user = [
    {
    id : '1',
    email : 'user@example.com'

    },
    {
        id : '1',
        email : 'user@example.com'
    
    },
    {
        id : '1',
        email : 'user@example.com'
    
    },
    {
        id : '1',
        email : 'user@example.com'
    
    },
    {
        id : '1',
        email : 'user@example.com'
    
    },
    {
        id : '1',
        email : 'user@example.com'
    
    },
    {
        id : '1',
        email : 'user.com'
    
    }   
]
// console.log( user[6].email )

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('email')); // for check if valur is preseent or not
//----------------------------------------------------------------------------------



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]