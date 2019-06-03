import React, {Component} from 'react';
import './login.css';
import axios from 'axios';

const FIREBASE_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDRyFddyE3XCc-GlcaJE8z12LeIq83bebE';

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  onSubmit = () => {
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post(FIREBASE_URL, credentials, headers)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  };

  render() {
    const {email, password} = this.state;

    return (
      <div>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1 mx-auto">
              <h3>Login for Form 1</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email *"
                    value={email}
                    onChange={e => this.setState({email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                    value={password}
                    onChange={e => this.setState({password: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btnSubmit"
                    value="Login"
                    onClick={() => this.onSubmit()}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
