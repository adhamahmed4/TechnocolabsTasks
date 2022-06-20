import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorized() {
    return <h1>Contact</h1>;
  }

  unauthorized() {
    return <h1>Enter the Password</h1>;
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

    const authorized = this.state.authorized;

    const login = (<form onSubmit={this.authorize} action="#">
      <input type="password" placeholder="password" />
      <input type="submit" />
    </form>);

    const contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );

    return (
      <div id="authorization">
        {this.state.authorized ? this.authorized() : this.unauthorized()}
        <div>
          {this.state.authorized ? contactInfo : login}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);