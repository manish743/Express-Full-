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