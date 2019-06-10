import React, {Component} from 'react';
import './login.css';
import { withFirebase } from '../../Firebase';

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  onSubmit = () => {
    const {email, password} = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('success');
      })
      .catch(error => {
        console.log('error');
        this.setState({error});
      });

  };

  render() {
    const {email, password} = this.state;

    console.log(this.props);

    return (
      <div>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form mx-auto">
              <h3>Login</h3>
              <form>
                <div className="form-group">
                  <input
                    type="email"
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
                  <button
                    type="button"
                    className="btnSubmit"
                    onClick={this.onSubmit}
                  >Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(Login);
