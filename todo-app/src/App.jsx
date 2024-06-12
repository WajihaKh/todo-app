import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsForm from './Components/Context-Settings/SettingForm';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/settings" element={<SettingsForm />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
