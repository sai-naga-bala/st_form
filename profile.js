let nameVal = localStorage.getItem('NAME')
let email = localStorage.getItem('EMAIL')
// let gender = localStorage.getItem('MALE')
let dob = localStorage.getItem('DOB')
let classVal = localStorage.getItem('CLASS')
let rollVal = localStorage.getItem('ROLL')
let deptVal = localStorage.getItem('DEPT')
let subjectVal = localStorage.getItem('SUBJECT')
let profileVal = localStorage.getItem('PROFILE')
let addVal = localStorage.getItem('ADDRESS')
// let female = localStorage.getItem('FEMALE')
// let malevalue = localStorage.getItem('MALEVAL')
// let femalevalue = localStorage.getItem('FEMALEVAL')

let maleid = localStorage.getItem('GEN')
// let femaleid = localStorage.getItem('GENDERFEMALE')
let image = document.getElementById("imageId")


// console.log("rerrrr" + maleid +femaleid)

let username = document.getElementById('s-name')
let emailEl = document.getElementById('s-email')
// let genderEl = document.getElementById('s-gender')
// let dobEl = document.getElementById('s-dob')
// let classEl = document.getElementById('s-class')
let rollEl = document.getElementById('s-roll_no')
// let deptEl = document.getElementById('s-dept')
// let subjectEl = document.getElementById('s-sub')
let profileEl = document.getElementById('s-prof')
let addressEl = document.getElementById('s-address')

// if(maleid == true){
//     genderEl.innerHTML = maleid
// }
// if(femaleid === true){
//     genderEl.innerHTML = femaleid
// }

let newVal = profileVal.slice(12)
let newProfVal = "file:///C:/Users/Admin/Pictures/Screenshots/" + newVal

// file:///C:/Users/Admin/Pictures/Screenshots/
image.src = newProfVal
username.innerHTML = nameVal
emailEl.innerHTML = email
// dobEl.innerHTML = dob
// classEl.innerHTML = classVal
rollEl.innerHTML = rollVal
// deptEl.innerHTML = deptVal
// subjectEl.innerHTML = subjectVal
profileEl.innerHTML = newProfVal
addressEl.innerHTML = addVal
// genderEl.innerHTML = maleid


localStorage.clear()