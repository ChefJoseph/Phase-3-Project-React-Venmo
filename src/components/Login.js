// import { useState, useEffect, useCallback } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';

// import "../index.css";

// function Login () {
// const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   let navigate = useNavigate()
//   // User Login info
  
//   const database = [
//     {
//       username: "ElmoDaBlood",
//       password: "blood"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];
//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };
  
//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();
//     var { uname, pass } = document.forms[0];
//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);
//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//         navigate("/")
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );
//   // JSX code for login form
  
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   )
//   return (
//     <div className="app">
//       <img className="pic_flatmo" src="https://render.myfonts.net/fonts/font_rend.php?id=af8f6d87625cf52d8eb8a60d20ef595d&rt=Flatmo&rs=25&w=1500&rbe=&sc=2&nie=true&fg=FFFFFF&bg=65CCFF&ft=&nf=1"></img>
//       <div className="app">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>User is successfully logged in!</div> : renderForm}
//       </div>
//       </div>
//     </div>
  
//   )
// }
//   export default Login