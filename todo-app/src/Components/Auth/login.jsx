import { useState, useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from './context';

const Login = () => {
  const { loggedIn, login, logout } = useContext(LoginContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials.username, credentials.password);
  };

  return (
    <>
      <When condition={loggedIn}>
        <button onClick={logout}>Log Out</button>
      </When>

      <When condition={!loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
          <button>Login</button>
        </form>
      </When>
    </>
  );
};

export default Login;