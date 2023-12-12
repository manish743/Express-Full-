let files = [
    {
        destination : "./public",
        filename : "abc.jpg"
    },
    {
        destination : "./public",
        filename : "home.jpg"
    },
    {
        destination : "./public",
        filename : "harry.jpg"
    }
]

let _files = files.map((value)=>{
    let url = "http://localhost:8000/"
    return`${url}${value.filename}`
})
console.log(_files)
