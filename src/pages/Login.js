import React, { Component } from 'react';
import { getApi } from '../services/api';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  emailValidation = () => {
    const { email, name } = this.state;
    const check = /\S+@\S+\.\S+/;
    return !(check.test(email) && name.length !== 0);
  };

  fetchToken = async () => {
    await getApi();
    const { history } = this.props;
    history.push('/game');
  };

  render() {
    const { name, email } = this.state;
    return (
      <>
        <label htmlFor="name">
          Nome
          <input
            value={ name }
            id="name"
            name="name"
            type="text"
            data-testid="input-player-name"
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={ this.handleInput }
            value={ email }
            id="email"
            name="email"
            type="text"
            data-testid="input-gravatar-email"
          />
        </label>
        <button
          data-testid="btn-play"
          type="button"
          disabled={ this.emailValidation() }
          onClick={ this.fetchToken }
        >
          Play
        </button>
      </>
    );
  }
}
Login.propTypes = {}.isRequired;

export default Login;
