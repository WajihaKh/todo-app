import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsForm from './Components/Context-Settings/SettingForm';
import LoginProvider from './Components/Auth/context'; // Import LoginProvider correctly
import Auth from './Components/Auth/auth';
import Login from './Components/Auth/login';

import './App.scss';

const App = () => (
  <Router>
    <LoginProvider> {/* Ensure LoginProvider wraps all components that need LoginContext */}
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/settings" element={<SettingsForm />} />
      </Routes>
      <Footer />
      <Login />
      <Auth>
        <div>Any valid user can see this</div>
      </Auth>
      <Auth capability="create">
        <div>Users with create access can see this</div>
      </Auth>
      <Auth capability="update">
        <div>Users with update access can see this</div>
      </Auth>
      <Auth capability="delete">
        <div>Users with delete access can see this</div>
      </Auth>
    </LoginProvider>
  </Router>
);

export default App;
