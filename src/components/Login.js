import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../asset/css/Login.css'
import logo from '../asset/image/logo.png'
import vietnam from '../asset/image/vietnam.jpg'
import uk from '../asset/image/uk.jpg'
import { users } from '../data/UsersData';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  //isSubmitted, 

  const errors = {
      uname: "Sai tên đăng nhập",
      pass: "Sai mật khẩu"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var {uname, pass} = document.forms[0];
    const userData = users.find((user) => user.username === uname.value); //&& user.password === password.value
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "password", message: errors.pass });
      }else {
        setIsSubmitted(true);
      }
    }else {
      setErrorMessages({ name: "username", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
  );
// return (
  const renderForm = (
    <div className="login-bg">
      <div className="card">
        <img src={logo} alt="" className="logo"/>
        <form className='loginForm'
          onSubmit={handleSubmit}
        >
          <div className="input-text">
            <input
              type="text"
              name="uname"
              placeholder="Username"
              aria-describedby="inputGroupPrepend2" required
            />
            <i className="fas fa-user"></i>
          </div>
          <p className='error'>
            {renderErrorMessage("username")}
          </p>
          <div className="input-text">
            <input
              type="password"
              name="pass"
              placeholder="Password"
              // onChange={e => this.changeInputValue(e)}
              aria-describedby="inputGroupPrepend2" required
            />
            <i className="fa fa-lock"></i>
          </div>
          <p className='error'>
          {renderErrorMessage("password")}
          </p>
          <div className="buttons">
            <button type="submit" className="btn btn-warning btn-block">
              Login
            </button>
          </div>
          <div className="span">
            <span className="openacc"><a href="/">Open new account</a></span>
            <span className="psw"><a href="/">Forget password</a></span>
          </div>
          <div className="flag">
            <img src={vietnam} className="vietnam" alt=""/><label>Tiếng Việt</label>
            <img src={uk} className="uk" alt=""/><label className="uklabel">English</label>
          </div>
          <hr></hr>
          <div className="text">Contact: (84-24) 3928 8080 - ext.699/(84-28) 3914 6888</div>
        </form>
      </div>
    </div>
  // )
);
    return (
      <div className="app">
         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
       </div>
    );
}

export default Login;