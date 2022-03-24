import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../Login/Login.css'
import logo from '../../assets/image/logo.png'
import vietnam from '../../assets/image/vietnam.jpg'
import uk from '../../assets/image/uk.jpg'
import { users } from '../../data/UsersData';
import { useHistory } from 'react-router-dom';
import { GetUser, logins } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';

function Login() {

  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const {username, password} = data;
  const [errors, setErrs] = useState("true");

  const history = useHistory();

  // const user = useSelector(state=>state.login.username);
  const dispatch = useDispatch();

  const checkUser = (users) => {
    const usercheck = users.find(user => (
      user.username === username && user.password === password))
    if(usercheck) {
      console.log('Đăng nhập thành công');
      dispatch(logins(true));
      dispatch(GetUser(username));
      history.push('/Home/'+ username);

    }else {
      console.log('Sai mật khẩu hoặc username');
      setErrs("false");
      
    }
  }

  const changeHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    checkUser(users);
  }
    
  return (
    <div className="login-bg">
      <div className="card">
        <img src={logo} alt="" className="logo"/>
        <form className='loginForm'
        onSubmit={handleSubmit}
        >
        <div className="input-text">
            <input
              type="text"
              name="username"
              value={data.username}
              placeholder="Username"
              aria-describedby="inputGroupPrepend2" required
              onChange={changeHandler}
            />
            <i className="fas fa-user"></i>
        </div>
        <div className="input-text">
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            aria-describedby="inputGroupPrepend2" required
            onChange={changeHandler}
          />
          <i className="fa fa-lock"></i>
        </div>
        <p className="error">
        {errors === "false" && (<div> Sai tên đăng nhập hoặc mật khẩu</div>)}
        </p>
        <div className="buttons1">
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
    )
  }
export default Login;