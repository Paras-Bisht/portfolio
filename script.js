// console.log('Hello world');

// // Event Listner - Click
// document.getElementById('btn1').addEventListener('click', function myfun() {
// 	document.getElementById('headingtechtable').innerHTML = Date();
// });

// // document.getElementById('btn1').addEventListener('click', function myfun() {
// // 	console.log('Hello World');
// // 	// document.getElementsByClassName('headingtechtable2').innerHTML = 'Hey its changed!';
// // });
document.getElementById("submitbtn").addEventListener("click", function () {
  var email1 = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var logincreds = {
    email: email1,
    pass: password,
    role: {
      admin: true,
    },
  };
  if (logincreds.email && logincreds.pass) {
    console.log(logincreds);
  } else {
    if (!password && email) {
      alert("Please fill the password");
    } else if (!email && password) {
      alert("Please fill the email");
    } else {
      alert("Please fill all the details");
    }
  }
  // ajax  -- call api
  console.log(logincreds.role.admin);
});
