//button funchon
document.getElementById("adminguid").style.display="block";
document.getElementById("staff_register").style.display="none";
document.getElementById("find_staff").style.display="none";
document.getElementById("staff_requst").style.display="none";
document.getElementById("staff_list").style.display="none";
document.getElementById("clind_list").style.display="none";
document.getElementById("addadmin").style.display="none";

function staffregister(){
    document.getElementById("staff_register").style.display="block";
    document.getElementById("find_staff").style.display="none";
    document.getElementById("staff_requst").style.display="none";
    document.getElementById("staff_list").style.display="none";
    document.getElementById("clind_list").style.display="none";
    document.getElementById("adminguid").style.display="none";
    document.getElementById("addadmin").style.display="none";
}
function findstaf(){
    document.getElementById("staff_register").style.display="none";
    document.getElementById("find_staff").style.display="block";
    document.getElementById("staff_requst").style.display="none";
    document.getElementById("staff_list").style.display="none";
    document.getElementById("clind_list").style.display="none";
    document.getElementById("adminguid").style.display="none";
    document.getElementById("addadmin").style.display="none";
}
function staffrequst(){
    document.getElementById("staff_register").style.display="none";
    document.getElementById("find_staff").style.display="none";
    document.getElementById("staff_requst").style.display="block";
    document.getElementById("staff_list").style.display="none";
    document.getElementById("clind_list").style.display="none";
    document.getElementById("adminguid").style.display="none";
    document.getElementById("addadmin").style.display="none";
}
function stafflist(){
    document.getElementById("staff_register").style.display="none";
    document.getElementById("find_staff").style.display="none";
    document.getElementById("staff_requst").style.display="none";
    document.getElementById("staff_list").style.display="block";
    document.getElementById("clind_list").style.display="none";
    document.getElementById("adminguid").style.display="none";
    document.getElementById("addadmin").style.display="none";
}
function clindlist(){
    document.getElementById("staff_register").style.display="none";
    document.getElementById("find_staff").style.display="none";
    document.getElementById("staff_requst").style.display="none";
    document.getElementById("staff_list").style.display="none";
    document.getElementById("clind_list").style.display="block";
    document.getElementById("adminguid").style.display="none";
    document.getElementById("addadmin").style.display="none";
}
function addadmin(){
    document.getElementById("staff_register").style.display="none";
    document.getElementById("find_staff").style.display="none";
    document.getElementById("staff_requst").style.display="none";
    document.getElementById("staff_list").style.display="none";
    document.getElementById("clind_list").style.display="none";
    document.getElementById("adminguid").style.display="none";
    document.getElementById("addadmin").style.display="block";
}

/* Function to generate password */
function generatePass() {
    let pass = '';
    let str = '0123456789';
    for (let i = 0; i <= 6; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }
    // return pass;
    console.log(pass)
    document.getElementById("staffpassword").value=pass;
}
// form selection function
function findusermodul(){
    var findmodel = document.getElementById("findmodel").value;
    if(findmodel == 1){
        document.getElementById("findnumber").style.display = "block";
        document.getElementById("findemail").style.display = "none";
        document.getElementById("findid").style.display="none"
    }
    else if(findmodel == 2){
        document.getElementById("findnumber").style.display = "none";
        document.getElementById("findemail").style.display = "block";
        document.getElementById("findid").style.display="none"
    }
    else if(findmodel == 3){
        document.getElementById("findnumber").style.display = "none";
        document.getElementById("findemail").style.display = "none";
        document.getElementById("findid").style.display="block"
    }
    else{
        document.getElementById("findnumber").style.display = "none";
        document.getElementById("findemail").style.display = "none";
        document.getElementById("findid").style.display="none"
    }
        
}