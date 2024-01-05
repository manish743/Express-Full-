// Backend => Make API => defining task for each request is called making API
// Postman => hit API, test API

// November 11, 2023 , Saturday
// If you send data from body always use post or patch method
// send data from postman
// body => req.body
// query => req.query
// params => req.params

// url
// localhost:8000/students?name=mary&age=23
// url => route + query
// route => localhost:8000/students  (here, students is route parameter)
// route parameter is divided into two parts
// one is static parameter  =>  we have to use same name as we mention
// and other one is dynamic parameter  =>  we can use any name
// always place API(which has dynamic parameter) at last
// query => name=mary&age=23  =>  query parameter

// Whatever we pass in query, it outcomes string


// November 20, 2023, Monday
// one response for each request
// Middleware
// Middleware are the functions which has request, response and next.
// To trigger next middleware we have to call next().
// To trigger normal middleware we have to call next().
// To trigger error middleware we have to call next(variable).


// November 23, 2023, Thursday
// npm i mongoose

// November 24, 2023, Friday
// MongoDB stores data as array of objects
// array => model
// object => schema
// defining objects is called schema
// defining array is called model
// model name must be singular and first letter capital
// match


// November 28, Tuesday, 2023
// While searching, type doesn't matter
// find({age:27})
// find({age:{$gt:18}})

// November 29, Wednesday, 2023
// Regex searching
// find({name:/manish/})
// find({name:/manish/i})
// find({name:/ma/})
// find({name:/^ma/})
// find({name:/^ma/i})
// find({name:/sh$/i})
// regexr.com => site for testing regex
// find({}).sort("name")
// find({}).sort("-name")
// find({}).sort("name age")
// find({age:{$gte:40}}).select("name")
// find has control over the object and select has control over the object property
// Order => find,sort,select,skip,limit
// brake = 2 , page = 3


// November 30, 2023, Thursday
// "1" - 1 => 0
// except (+) operator other mathematical operators like -,*,/ will convert the string into number to perform mathematical operation.


// December 1, 2023, Friday
// manipulation
// trim : true,
// lowercase : true,
// uppercase: true,
// default : new Date()

// validation
// minLength:3
// maxLength:10
// min : 18
// max : 40
// minLength, maxLength in case of string and min, max in case of numbers
// phoneNumber Validation => 
// validate : (value)=>{
//     if(age === 35){
//         let error = new Error("Unable to register due to age factor");
//         throw error
//     }
// }
// regex is used for searching and validation
// console.log(this.email)
// this operator is not supported in arrow function
// this operator can be used only in function


// December 4, 2023, MOnday
// npm i cors
// cors is used to use API 
// .populate() is used to use objects from another 
// make .env at root directory
// configure .env
// make .env at root folder(it should not be inside src general error)
// npm i dotenv

// December 5, 2023, Tuesday
// config() is used to get .env variable
// package.json => packages that are needed to run the project are inside package.json
// npm i => will install all needed dependencies 
// npm i bcrypt
// let password = "you@123"
// let hashPassword = await bcrypt.hash(password,10);
// console.log(hashPassword)

// let isValidPassword = await bcrypt.compare(password, hashPassword);
// console.log(isValidPassword)

// December 6, 2023, Wednesday
// npm i jsonwebtoken
// npm i nodemailer
// npm i multer
// let infoObject = {
//     id: "53245268",
//   };
//   let secretKey = "hsinam";
//   let expiryInfo = {
//     expiresIn: "365d", //expiry Info should be in same format as here
//   };
  
//   let token = jwt.sign(infoObject, secretKey, expiryInfo);
//   console.log(token);


// December 7, 2023, Thursday
// Every file must be placed inside static folder so that we could get file through link
// To make static folder => expressApp.use(express.static("./filepath"));


// December 12, 2023, Tuesday 
// success
// 2XX
// 200  => get,delete
// 201 => post, patch
// failure
// 4XX
// 404 => not found


// Login Management System
// 1. Register =>   
//      -> save data to database
//      -> verify email
// 2. Login
// 3. My profile
// 4. My profile update
// 5. Update password
// 6. Forgot and reset password
    // forgot password
    // reset password
// 7. Delete user
// 8. Read all user
// 9. Read specific user


// Status code
// success => 2XX
// create => 201
// read => 200
// update => 201
// delete => 200

// error => 4XX
// 401 => token not valid
// 403 => token is valid but not authorized
// 404 => API not found
// 409 => conflict(duplicate)
