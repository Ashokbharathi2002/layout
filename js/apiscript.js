/* host and app name */
let host = "http://127.0.0.1:8000/"
let appName = "visual/"
//staff 
/* staff register */
function register(event){
    var name = document.getElementById("stafffullname").value;
    var phone = document.getElementById("staffphonenumber").value;
    var email = document.getElementById("staffemailid").value;
    var designation = document.getElementById("staffdesignation").value;
    var gender = document.getElementById("staffgender").value;
    var password= document.getElementById("staffpassword").value;
    var conpassword = document.getElementById("staffconpassword").value;

    event.preventDefault();
    // console.log("register start "+name)
    fetch(host+appName+'register/staff/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            designation: designation,
            gender: gender,
            password:password,
            cPassword:conpassword
            // name: "ashok",
            // phone: "92457825",
            // email: "a@gmail.com",
            // designation: "staff",
            // gender: "male",
            // password:"cccc",
            // cPassword:"ccc"
        }),
        credentials: 'include', // Include credentials (cookies)

    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    .then(response => {
        // console.log(response.json());
        // var respondata =response.json();
        // console.log(respondata);
        console.log(response.status); // Ensure response is not undefined
        if(response.status === 201){
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: 'Register Successful',
                btnTitle: 'Ok',
                border:true
            });
            window.location.href ="/index.html";
            return ;
        }
        return response.json();
      })
      .then(data => {
        alertbox.render({
            alertIcon: 'error',
            title: 'Thank You!',
            message: data.message,
            btnTitle: 'Ok',
            border:true
        });
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Data:', data.data);
    })
      .catch(error => {
        console.error('Error:', error);
    });
}
//#########################################################################################################################################################################
/* staff login */
function loggin(event){
    
    var email = document.getElementById('staffemailid').value;
    var password = document.getElementById('staffpassword').value;

    event.preventDefault();

    fetch(host+appName+'login/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            email:email,
            password:password,
        }),
        credentials: 'include', // Include credentials (cookies)

    })
    .then(response => {
        // console.log(response.json());
        // var respondata =response.json();
        // console.log(respondata);
        console.log(response.status); // Ensure response is not undefined
        if(response.status === 200){
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: 'Logging Successful',
                btnTitle: 'Ok',
                border:true
            });
            setTimeout(() => {
                window.location.href ="/staff/dashboard.html";
            }, 5000);
            return ;
        }
        return response.json();
      })
      .then(data => {
        alertbox.render({
            alertIcon: 'warning',
            title: 'Thank You!',
            message: data.message,
            btnTitle: 'Ok',
            border:true
        });
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Data:', data.data);
    })
      .catch(error => {
        console.error('Error:', error);
    });

    // .then(response => {
    //     console.log(response.status); // Ensure response is not undefined
    //     if(response.status === 200){
    //         alertbox.render({
    //             alertIcon: 'success',
    //             title: 'Thank You!',
    //             message: 'Logging successfully',
    //             btnTitle: 'Ok',
    //             border:true
    //         });
    //         setTimeout(() => {
    //             window.location.href ="/staff/dashboard.html";
    //         }, 5000);
    //     }
    //     else if(response.status === 404){
    //         alertbox.render({
    //             alertIcon: 'warning',
    //             title: 'Thank You!',
    //             message: 'enter a valed login Credential',
    //             btnTitle: 'Ok',
    //             border:true
    //         });

    //     }
    //     else if(response.status === 400){
    //         alertbox.render({
    //             alertIcon: 'warning',
    //             title: 'Thank You!',
    //             message: 'enter a valed login Credential',
    //             btnTitle: 'Ok',
    //             border:true
    //         });
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    // });

}
//#########################################################################################################################################################################
// staff logout
function staffLogout(event){
    event.preventDefault();

    fetch(host+appName+'logout/staff', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        console.log(response.status); // Ensure response is not undefined
        if(response.status === 200){

           alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: 'Logout Successful',
                btnTitle: 'Ok',
                border:true
            });
            setTimeout(() => {
                window.location.href ="/index.html";
            }, 5000);

        }
      })
      .catch(error => {
        console.error('Error:', error);
    });

}
//#########################################################################################################################################################################
// customer register
function customerRegister(event){
    event.preventDefault();
    var customername = document.getElementById("newusername").value;
    var customeremail = document.getElementById("newuseremail").value;
    var customerphone = document.getElementById("newuserphone").value;
    var customergendet = document.getElementById("newusergender").value;

    fetch(host+appName+'register/customer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            name : customername,
            phone : customerphone,
            email : customeremail,
            gender : customergendet

            // name : "ashok",
            // phone : "9873214568",
            // email : "a@mail.com",
            // gender : "male"
        }),
        credentials: 'include', // Include credentials (cookies)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Status:', data.data);

        if (data.data && data.data.length > 0) {
            console.log(data.data)
            let customer = data.data[0];
            console.log(customer)
            console.log(customer.name); // Output: vijay
            console.log(customer.phone); 
            console.log(customer.email); 
            console.log(customer.gender); 

            
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: 'Logging Successful',
                btnTitle: 'Ok',
                border:true
            });

            let cusname = customer.name
            let cusnumber = customer.phone
            let cusemail = customer.email
            let cusgender = customer.gender

            document.getElementById("Newcustomregisterr").style.display="block";
            document.getElementById("newuserregister").style.display="none";

            //show data

            document.getElementById("username").innerHTML=cusname;
            document.getElementById("usernumbee").innerHTML=cusnumber;
            document.getElementById("useremail").innerHTML=cusemail;
            document.getElementById("usergender").innerHTML=cusgender;

        } else {
            console.log('No customer data found.');
            alertbox.render({
                alertIcon: 'warning',
                title: 'Thank You!',
                message: data.message,
                btnTitle: 'Ok',
                border:true
            });
        }
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
    

}

// function customerRegister(event){
//     event.preventDefault();
//     var customername = document.getElementById("newusername").value;
//     var customeremail = document.getElementById("newuseremail").value;
//     var customerphone = document.getElementById("newuserphone").value;
//     var customergendet = document.getElementById("newusergender").value;

//     fetch(host+appName+'register/customer/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer'+localStorage.getItem('token')
//         },
//         body: JSON.stringify({
//             // name : customername,
//             // phone : customerphone,
//             // email : customeremail,
//             // gender : customergendet
            
//             name : "ashok",
//             phone : "9873214568",
//             email : "a@mail.com",
//             gender : "male"
//         }),
//         credentials: 'include', // Include credentials (cookies)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Message:', data.message);
//         console.log('Status:', data.status);
//         console.log('Status:', data.data);

//         if (data.data && data.data.length > 0) {
//             console.log(data.data)
//             let customer = data.data[0];
//             console.log(customer)
//             console.log(customer.name); // Output: vijay
//             console.log(customer.phone); 
//             console.log(customer.email); 
//             console.log(customer.gender); 

            
//             alertbox.render({
//                 alertIcon: 'success',
//                 title: 'Thank You!',
//                 message: 'Logging Successful',
//                 btnTitle: 'Ok',
//                 border:true
//             });

//             let cusname = customer.name
//             let cusnumber = customer.phone
//             let cusemail = customer.email
//             let cusgender = customer.gender

//             document.getElementById("custerdatainfo").style.display="block";
//             document.getElementById("findcouster").style.display="none";

//             //show data

//             document.getElementById("ExistUserName").innerHTML=cusname;
//             document.getElementById("ExistUserNumbee").innerHTML=cusnumber;
//             document.getElementById("ExistUserEmail").innerHTML=cusemail;
//             document.getElementById("ExistUserGender").innerHTML=cusgender;

//         } 
//         else {
//             console.log('No customer data found.');
//             alertbox.render({
//                 alertIcon: 'warning',
//                 title: 'Thank You!',
//                 message: data.message,
//                 btnTitle: 'Ok',
//                 border:true
//             });   
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }



//#########################################################################################################################################################################
//get customer by email
function getCustomerByEmail(event) {
    event.preventDefault();
    var CustoneEmail = document.getElementById("coustergmail").value;

    fetch(host+appName+'getcustomerbyemail/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            email: CustoneEmail
            // email: "vijay@gmail.com"

        }),
        credentials: 'include', // Include credentials (cookies)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Status:', data.data);

        if (data.data && data.data.length > 0) {
            console.log(data.data)
            let customer = data.data[0];
            console.log(customer)
            console.log(customer.name); // Output: vijay
            console.log(customer.phone); 
            console.log(customer.email); 
            console.log(customer.gender); 

            
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: 'Logging Successful',
                btnTitle: 'Ok',
                border:true
            });

            let cusname = customer.name
            let cusnumber = customer.phone
            let cusemail = customer.email
            let cusgender = customer.gender

            document.getElementById("custerdatainfo").style.display="block";
            document.getElementById("findcouster").style.display="none";

            //show data

            document.getElementById("ExistUserName").innerHTML=cusname;
            document.getElementById("ExistUserNumbee").innerHTML=cusnumber;
            document.getElementById("ExistUserEmail").innerHTML=cusemail;
            document.getElementById("ExistUserGender").innerHTML=cusgender;

        } else {
            console.log('No customer data found.');
            alertbox.render({
                alertIcon: 'warning',
                title: 'Thank You!',
                message: data.message,
                btnTitle: 'Ok',
                border:true
            });
        }
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//#########################################################################################################################################################################
//ger customer by phone number
function getCustomerByNumber(event) {
    event.preventDefault();
    var CustonePhone = document.getElementById("custerphoneno").value;

    fetch(host+appName+'getcustomerbyphone/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            phone : CustonePhone
            // phone : "8903920608"            

        }),
        credentials: 'include', // Include credentials (cookies)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Status:', data.data);

        if (data.data && data.data.length > 0) {
            console.log(data.data)
            let customer = data.data[0];
            console.log(customer)
            console.log(customer.name); // Output: vijay
            console.log(customer.phone); 
            console.log(customer.email); 
            console.log(customer.gender); 

            
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: 'Logging Successful',
                btnTitle: 'Ok',
                border:true
            });

            let cusname = customer.name
            let cusnumber = customer.phone
            let cusemail = customer.email
            let cusgender = customer.gender

            document.getElementById("custerdatainfo").style.display="block";
            document.getElementById("findcouster").style.display="none";

            document.getElementById("cnumber").style.display="none"
            document.getElementById("cemail").style.display="none"
            document.getElementById("cgender").style.display="none"

            if( cusemail = true){
                document.getElementById("cnumber").style.display="block"
            }
            if(cusemail != false){
                document.getElementById("cemail").style.display="block"
            }
            if(cusgender != false){
                document.getElementById("cgender").style.display="block"
            }

            //show data

            document.getElementById("ExistUserName").innerHTML=cusname;
            document.getElementById("ExistUserNumbee").innerHTML=cusnumber;
            document.getElementById("ExistUserEmail").innerHTML=cusemail;
            document.getElementById("ExistUserGender").innerHTML=cusgender;

        } 
        else {
            console.log('No customer data found.');
            alertbox.render({
                alertIcon: 'warning',
                title: 'Thank You!',
                message: data.message,
                btnTitle: 'Ok',
                border:true
            });   
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
//#########################################################################################################################################################################
//admin
//get staff by email
function getstaffByEmail(event) {

    event.preventDefault();
    var staffEmail = document.getElementById("staffemailid").value;

    fetch(host+appName+'getstaffbyemail/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            email: staffEmail
            // email: "vijay@gmail.com"

        }),
        credentials: 'include', // Include credentials (cookies)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Status:', data.data);

        if (data.data && data.data.length > 0) {
            console.log(data.data)
            let customer = data.data[0];
            console.log(customer)
            console.log(customer.name); // Output: vijay
            console.log(customer.phone); 
            console.log(customer.email); 
            console.log(customer.gender); 

            
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: 'Logging Successful',
                btnTitle: 'Ok',
                border:true
            });

            let staffname = customer.name
            let designation = customer.designation
            let staffnumber = customer.phone
            let staffemail = customer.email
            let staffgender = customer.gender

            //show data

            document.getElementById("staffname").innerHTML=staffname;
            document.getElementById("designation").innerHTML=designation;
            document.getElementById("staffnumbee").innerHTML=staffnumber;
            document.getElementById("staffemail").innerHTML=staffemail;
            document.getElementById("satffgender").innerHTML=staffgender;

        } else {
            console.log('No customer data found.');
            alertbox.render({
                alertIcon: 'warning',
                title: 'Thank You!',
                message: data.message,
                btnTitle: 'Ok',
                border:true
            });
        }
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//#########################################################################################################################################################################
//ger customer by phone number
function getstaffByNumber(event) {
    event.preventDefault();
    var staffPhone = document.getElementById("staffphoneno").value;

    fetch(host+appName+'getstaffbyphone/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            phone : staffPhone
            // phone : "8903920608"            

        }),
        credentials: 'include', // Include credentials (cookies)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Status:', data.data);

        if (data.data && data.data.length > 0) {
            console.log(data.data)
            let customer = data.data[0];
            console.log(customer)
            console.log(customer.name); // Output: vijay
            console.log(customer.phone); 
            console.log(customer.email); 
            console.log(customer.gender); 

            
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: ' Successful',
                btnTitle: 'Ok',
                border:true
            });

            let staffname = customer.name
            let designation = customer.designation
            let staffnumber = customer.phone
            let staffemail = customer.email
            let staffgender = customer.gender

            //show data

            document.getElementById("staffname").innerHTML=staffname;
            document.getElementById("designation").innerHTML=designation;
            document.getElementById("staffnumbee").innerHTML=staffnumber;
            document.getElementById("staffemail").innerHTML=staffemail;
            document.getElementById("satffgender").innerHTML=staffgender;

        } 
        else {
            console.log('No customer data found.');
            alertbox.render({
                alertIcon: 'warning',
                title: 'Thank You!',
                message: data.message,
                btnTitle: 'Ok',
                border:true
            });   
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//#########################################################################################################################################################################
//ger customer by phone ID
function getstaffByid(event) {
    event.preventDefault();
    var staffid = document.getElementById("staffid").value;

    fetch(host+appName+'getcustomerbyid/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+localStorage.getItem('token')
        },
        body: JSON.stringify({
            id : staffid

        }),
        credentials: 'include', // Include credentials (cookies)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message:', data.message);
        console.log('Status:', data.status);
        console.log('Status:', data.data);

        if (data.data && data.data.length > 0) {
            console.log(data.data)
            let customer = data.data[0];
            console.log(customer)
            console.log(customer.name); // Output: vijay
            console.log(customer.phone); 
            console.log(customer.email); 
            console.log(customer.gender); 

            
            alertbox.render({
                alertIcon: 'success',
                title: 'Thank You!',
                message: ' Successful',
                btnTitle: 'Ok',
                border:true
            });

            let staffname = customer.name
            let designation = customer.designation
            let staffnumber = customer.phone
            let staffemail = customer.email
            let staffgender = customer.gender

            //show data

            document.getElementById("staffname").innerHTML=staffname;
            document.getElementById("designation").innerHTML=designation;
            document.getElementById("staffnumbee").innerHTML=staffnumber;
            document.getElementById("staffemail").innerHTML=staffemail;
            document.getElementById("satffgender").innerHTML=staffgender;

        } 
        else {
            console.log('No customer data found.');
            alertbox.render({
                alertIcon: 'warning',
                title: 'Thank You!',
                message: data.message,
                btnTitle: 'Ok',
                border:true
            });   
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}




//#########################################################################################################################################################################
// get all staff daata

function getStaffData(event){
    event.preventDefault();
    fetch(host+appName+'getallstaff/')
    .then(response =>console.log(response.json()))
    .then(data => createList(data));
    createList(data)

    function createList(data) {
        // your code here
        var table = "<table border=1>";
        // add a row for name and marks
        table += `<tr>
                    <th>Name</th>
                    <th colspan="4">Marks</th>
                </tr>`;
        // now add another row to show subject
        table += `<tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Edite</th>
                </tr>`;
        // now loop through students
        // show their name and marks
        var tr = "";
        for(let i = 0; i < data.result.length; i++) {
        tr += "<tr>";
        tr += `<td>${data.result[i].name}</td>`;
        for (var key in data.result[i].marks) {
            tr += `<td>${data.result[i].marks[key]}</td>`;
        }
        tr += "</tr>"
        }
        table += tr + "</table>";

        // append table to body
        document.body.innerHTML += table;
        
    }
}

