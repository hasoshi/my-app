import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../asset/css/Login.css'
import logo from '../asset/image/logo.png'
import vietnam from '../asset/image/vietnam.jpg'
import uk from '../asset/image/uk.jpg'
import { users } from './UsersData';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    //Khởi tạo state chứa giá trị của input
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
      msg: ''
    }
    const {password} = this.state
    //Kiểm tra password
    if(password.length < 6) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải lớn hơn 6 ký tự'
      }
    }
    return returnData;
  }
  
  submitForm(e) {
    e.preventDefault();
    const validation = this.validationForm()
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    //check username && pass
    const usercheck = users.find(user => (user.username === username && user.password === password));
    if (validation.error) {
      alert(validation.msg)
    }else if(usercheck) {
    // } else if (users.some((elem) => elem.username === username && elem.password === password)) {
      // alert('Login thành công!');
      this.props.history.push('/Home/' + username);
    }else{
      alert('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  render() {
    return (
      <div className="card">
        <img src={logo} alt="" className="logo"/>
        <form className='loginForm'
          onSubmit={e => {
            this.submitForm(e);
          }}
        >
          <div className="input-text">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={e => this.changeInputValue(e)}
              />
              <i class="fas fa-user"></i>
          </div>
          <div className="input-text">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this.changeInputValue(e)}
            />
            <i className="fa fa-lock"></i>
          </div>
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
    );
  }
}

export default Login;