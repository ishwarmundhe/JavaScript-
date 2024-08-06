function calculateAge(dateTime) {
   
    let [year, month, day, hour, minute, second] = dateTime
        .split(/[- :]/)
        .map(Number);

    let today = new Date();
    let todayYear = today.getYear() + 1900; 
    let todayMonth = today.getMonth(); 
    let todayDay = today.getDate();
    let todayHour = today.getHours();
    let todayMinute = today.getMinutes();
    let todaySecond = today.getSeconds();

    let age = todayYear - year;

    if (todayMonth < (month - 1) ||
        (todayMonth === (month - 1) && todayDay < day) ||
        (todayMonth === (month - 1) && todayDay === day && todayHour < hour) ||
        (todayMonth === (month - 1) && todayDay === day && todayHour === hour && todayMinute < minute) ||
        (todayMonth === (month - 1) && todayDay === day && todayHour === hour && todayMinute === minute && todaySecond < second)) {
        age--;
    }

    return age;
}
let dateTime = '2003-08-03 16:32:56';
console.log(calculateAge(dateTime)); 
