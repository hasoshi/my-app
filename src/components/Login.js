import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../asset/css/Login.css'
import logo from '../asset/image/logo.png'
import vietnam from '../asset/image/vietnam.jpg'
import uk from '../asset/image/uk.jpg'
import { users } from '../data/UsersData';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validationForm() {
    let returnData = {
      error : false,
    }
    const {password} = this.state
    if(password.length < 6) {
      returnData = {
        error: true,
      }
    }
    return returnData;
  }
  
  submitForm(e) {
    e.preventDefault();
    const validation = this.validationForm()
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    // const usercheck = users.find(user => (user.username === username && user.password === password));
    const usercheck = users.some((elem) => elem.username === username && elem.password === password);
    if (validation.error) {
      this.setState({
        errorpass: 'Mật khẩu phải lớn hơn 6 ký tự'
      });
    }else if(usercheck) {
      this.props.history.push('/Home/' + username);
    }else{
      this.setState({
        erroruser: 'Sai tên đăng nhập hoặc mật khẩu'
      });
    }
  };

  render() {
    return (
      <div className="login-bg">
        <div className="card">
          <img src={logo} alt="" className="logo"/>
          <form className='loginForm'
          onSubmit={e => {
            this.submitForm(e);}}
          >
          <div className="input-text">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={e => this.changeInputValue(e)}
                aria-describedby="inputGroupPrepend2" required
              />
              <i className="fas fa-user"></i>
          </div>
          <p className='error'>
            {this.state.erroruser !== '' ? this.state.erroruser: ''}
            
          </p>
          <div className="input-text">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this.changeInputValue(e)}
              aria-describedby="inputGroupPrepend2" required
            />
            <i className="fa fa-lock"></i>
          </div>
          <p className='error'>
          {this.state.errorpass !== '' ? this.state.errorpass: ''}
         
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
    
    );
    }
  }

export default Login;