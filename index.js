
let form = document.getElementById('form')

form.addEventListener('submit',(e) => {

    e.preventDefault()

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value

    // let gender = document.getElementById('gender').checked
    // let genderFem = document.getElementById('genderFem').checked
    // let genderMaleVal = document.getElementById('gender').value
    // let genderFemVal = document.getElementById('genderFem').value

    let dob = document.getElementById('dob').value
    let address = document.getElementById('address').value
    let class_s = document.getElementById('class_s').value
    let roll_no = document.getElementById('roll_no').value
    let department = document.getElementById('department').value
    let subject = document.getElementById('subject').value
    let profile = document.getElementById('profile').value

    let firstPara = document.getElementById('firstDiv')
    let secondPara = document.getElementById('secondDiv')
    let dobPara = document.getElementById('dobDiv')
    let classPara = document.getElementById('classDiv')
    let rollPara = document.getElementById('rollDiv')
    let deptPara = document.getElementById('deptDiv')
    let subjectPara = document.getElementById('subjectDiv')
    let profPara = document.getElementById('profileDiv')
    let addressPara = document.getElementById('addDiv')
    let genderDiv = document.getElementById("genderDiv")

    let maleid = document.getElementById("Male").checked
    let femaleid = document.getElementById("Female").checked



    if(username == "" || email == "" || dob =="" || class_s == "" || roll_no == "" || department =="" || subject == "" || addressPara == ""){
        console.log("Please enter all the fields")
        if(username == ""){
            firstPara.innerHTML = "required*"
        }
        else{
            firstPara.innerHTML = ""
        }
        if(email == ""){
            secondPara.innerHTML = "required*"
        }
        else{
            secondPara.innerHTML = ""
        }
        if(dob == ""){
            dobPara.innerHTML = "required*"
        }
        else{
            dobPara.innerHTML = ""
        }
        if(class_s == ""){
            classPara.innerHTML = "required*"
        }
        else{
            classPara.innerHTML = ""
        }
        if(roll_no == ""){
            rollPara.innerHTML = "required*"
        }
        else{
            rollPara.innerHTML = ""
        }
        if(department == ""){
            deptPara.innerHTML = "required*"
        }
        else{
            deptPara.innerHTML = ""
        }
        if(subject == ""){
            subjectPara.innerHTML = "required*"
        }
        else{
            subjectPara.innerHTML = ""
        }
        if(profile == ""){
            profPara.innerHTML = "required*"
        }
        else{
            profPara.innerHTML = ""
        }
        if(address == ""){
            addressPara.innerHTML = "required*"
        }
        else{
            addressPara.innerHTML = ""
        }
        // document.getElementById("red").checked = true
        if(maleid == false && femaleid == false){
            genderDiv.innerHTML = "required*"
        }
        else{
            genderDiv.innerHTML = ""
        }
        
    }
    else{
        document.getElementById('result').innerHTML = `
        <p>The Username is: ${username}</p>
        <p>The Password is: ${email}</p>
        `

        localStorage.setItem("NAME", username);
        localStorage.setItem("EMAIL", email);
        localStorage.setItem("DOB", dob);
        localStorage.setItem("CLASS", class_s);
        localStorage.setItem("ROLL", roll_no);
        localStorage.setItem("DEPT", department);
        localStorage.setItem("SUBJECT", subject);

        localStorage.setItem("PROFILE", profile);

        localStorage.setItem("ADDRESS", address);
        // localStorage.setItem("MALE", gender);
        // localStorage.setItem("FEMALE", genderFem);
        // localStorage.setItem("MALEVAL", genderMaleVal);
        // localStorage.setItem("FEMALEVAL", genderFemVal);

        if(maleid===true){
            maleid = "Male"
            localStorage.setItem("GEN", maleid);
        }
        if(femaleid===true){
            femaleid = "Female"
            localStorage.setItem("GEN", femaleid);
        }
       
       
        window.location.href = "profile.html";
    }
    
})

const setError=(element,message) =>
{
    const inputcontrol=element.parentElement
    const errorDisplay = inputcontrol.querySelector('.error')
    errorDisplay.innerText = message
    inputcontrol.classList.add('error')
    inputcontrol.classList.remove('success')
}

const setSuccess = (element) =>
{
    const inputcontrol = element.parentElement
    const errorDisplay = inputcontrol.querySelector('.error')
    errorDisplay.innerText = '';
    inputcontrol.classList.add('success')
    inputcontrol.classList.remove('error')
}

function reset(){
    
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    console.log("username"+username)
    // let gender = document.getElementById('gender').checked
    // let genderFem = document.getElementById('genderFem').checked
    // let genderMaleVal = document.getElementById('gender').value
    // let genderFemVal = document.getElementById('genderFem').value

    let dob = document.getElementById('dob').value
    let address = document.getElementById('address').value
    let class_s = document.getElementById('class_s').value
    let roll_no = document.getElementById('roll_no').value
    let department = document.getElementById('department').value
    let subject = document.getElementById('subject').value
    let profile = document.getElementById('profile').value

    let firstPara = document.getElementById('firstDiv')
    let secondPara = document.getElementById('secondDiv')
    let dobPara = document.getElementById('dobDiv')
    let classPara = document.getElementById('classDiv')
    let rollPara = document.getElementById('rollDiv')
    let deptPara = document.getElementById('deptDiv')
    let subjectPara = document.getElementById('subjectDiv')
    let profPara = document.getElementById('profileDiv')
    let addressPara = document.getElementById('addDiv')
    let genderDiv = document.getElementById("genderDiv")

    let maleid = document.getElementById("Male").checked
    let femaleid = document.getElementById("Female").checked



    if(username != "" || email != "" || dob !="" || class_s != "" || roll_no != "" || department !="" || subject != "" || addressPara != ""){
        console.log("Please \ all the fields")
        
        // if(username == ""){
        //     firstPara.innerHTML = "required*"
        // }
        // else{
            firstPara.innerHTML = ""
            document.getElementById('username').value = ""
        // }
        // if(email == ""){
        //     secondPara.innerHTML = "required*"
        // }
        // else{
            secondPara.innerHTML = ""
            document.getElementById('email').value = ""
        // }
        // if(dob == ""){
        //     dobPara.innerHTML = "required*"
        // }
        // else{
            dobPara.innerHTML = ""
            document.getElementById('dob').value = ""
        // }
        // if(class_s == ""){
        //     classPara.innerHTML = "required*"
        // }
        // else{
            classPara.innerHTML = ""
            document.getElementById('class_s').value =""
        // }
        // if(roll_no == ""){
        //     rollPara.innerHTML = "required*"
        // }
        // else{
            rollPara.innerHTML = ""
            document.getElementById('roll_no').value = ""
        // }
        // if(department == ""){
        //     deptPara.innerHTML = "required*"
        // }
        // else{
            deptPara.innerHTML = ""
            document.getElementById('department').value = ""
        // }
        // if(subject == ""){
        //     subjectPara.innerHTML = "required*"
        // }
        // else{
            subjectPara.innerHTML = ""
            document.getElementById('subject').value = ""
        // }
        // if(profile == ""){
        //     profPara.innerHTML = "required*"
        // }
        // else{
            profPara.innerHTML = ""
            document.getElementById('profile').value = ""
        // }
        // if(address == ""){
            // addressPara.innerHTML = "required*"
        // }
        // else{
            addressPara.innerHTML = ""
            document.getElementById('address').value = ""
        // }
        // // document.getElementById("red").checked = true
        // if(maleid == false && femaleid == false){
        //     genderDiv.innerHTML = "required*"
        // }
        // else{
            genderDiv.innerHTML = ""
            document.getElementById("Male").checked = false
            document.getElementById("Female").checked = false
        // }
        
    }
}


