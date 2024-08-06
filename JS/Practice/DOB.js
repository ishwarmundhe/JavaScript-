
function DOB(dob){
    let BirthDay = new Date(dob);
    let today = new Date();

    let Age = today.getFullYear() - BirthDay.getFullYear();
    let MonthDiff = today.getMonth() - BirthDay.getMonth();

    if(MonthDiff < 0 || (MonthDiff === 0 && today.getDate() < BirthDay.getDate())){
        Age--;
    }


        return Age;
}

let dob = "2003-8-1";

console.log("The Age is ", DOB(dob));