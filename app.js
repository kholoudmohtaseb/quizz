
const name = document.getElementById("user");
const email = document.getElementById("email");
// const password = document.getElementById("password");
const form = document.getElementById("form");
const finishBtn=document.getElementById("finishbtn")


// // form.addEventlistener("submit" , function(e)  {
//    subBtn.on("click", function (e){
// 	var messages = [];

// 	if (name.value === "" || name.value === null) {
// 		messages.push("Please enter your name");
// 	}

//     if (email.value === "" || email.value === null) {
// 		messages.push("Email is required");
// 	}
	
// 	// if (password.value.length <= 5) {
// 	//  messages.push("Password should be more than 5 character");	
// 	//  }	
// })

//////////////// function to fill the details of the user "Name & Email"///////////////
function FillDetails() {

  if (user.value === "" || user.value === null){
    alert("please enter your name");
  }

  if (email.value === "" || email.value === null) {
	alert("Email is required");
	}

 /////////// end the quiz and clear the screen///////
   // user.value = "";
   // email.value = "";
 //   }
 form.reset()
}



// var answers = ["a","b","a","c"] 
    // total = answers.length;
    // var mark = 0;
// function check(e){
// 	var q1 = document.quiz.q1.value;
// 	console.log(q1)
// 	var q2 = document..quiz.q2.value;
// 	var q3 = document..quiz.q3.value;
// 	var q4 = document.quiz.q4.value;
// 	var q5 = document.quiz.q5.value;
// 	var mark = mark;

// 	if (q1 === "a"){
//      // mark++;   
// 		mark = mark +1;
// 		console.log(mark)
// 	}

// 	if (q2 === "b"){
// 		mark++;
// 	}
// 	if (q3 === "a"){
// 		mark++;;
// 	}
// 	if (q4 === "c"){
// 		mark++;;
// 	}
// 	if (q5 === "b"){
// 		mark++;;
// 	}
// 	// alert("you got " + mark + " marks");	
// }


/////////////// function to check the ansewrs and view the result of the quiz////////////
function Check(){
  var mark = 0;
 if(document.getElementById("Cairo").checked === true){
     mark++;
     // console.log(mark)
 }
 if(document.getElementById("Paris").checked === true){
     mark++;
 }
 if(document.getElementById("Tokyo").checked === true){
     mark++;
 }
 if(document.getElementById("Jerusalem").checked === true){
     mark++;
 }
 if(document.getElementById("Vienna").checked === true){
     mark++; 
 }

     ////////// view the result//////////
 if (mark === 5){
    alert(user.value + " Congratulations you got full mark");
       } else {
	      alert(user.value + " you got " + mark + " marks");
 }
}