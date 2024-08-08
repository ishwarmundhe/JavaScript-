function setUsername(username) {
    this.username = username
}
function createUsername(username, email, password) {
    setUsername(username)
    this.email = email
    this.password = password
    
}
const user = new createUsername("Ishwar", "ishu@gmail.com", "1234")
console.log(user);
