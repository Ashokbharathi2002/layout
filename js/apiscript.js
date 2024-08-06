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
                message: 'Register sucesfully',
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
}

// ###############################################################################################################################################################
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
                message: 'Logging successfully',
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
//#############################################################################################################################################################################
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
                message: 'Logout successfully',
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