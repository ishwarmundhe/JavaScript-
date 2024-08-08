function setUsername(username) {

    //Complex DB call
    this.username = username
}
function createUsername(username, email, password) {
    setUsername.call(this,username)
    this.email = email
    this.password = password
    
}
const user = new createUsername("Ishwar", "ishu@gmail.com", "1234")
console.log(user);


// call method is used to acces setUSername from beyound scope as when the scope setUsername call calltrack will delete it ref when use 
// as it need to be stay to acces content in setUsername form createUsername __.call( )-method is call
