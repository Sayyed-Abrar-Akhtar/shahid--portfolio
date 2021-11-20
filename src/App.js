import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutScreen from './screens/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ServicesScreen from './screens/ServicesScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <Router>
      <section className='wrapper'>
        <Header />
        <Route path='/experiences' component={ProjectsScreen} exact />
        <Route path='/services' component={ServicesScreen} exact />
        <Route path='/about-me' component={AboutScreen} exact />
        <Route path='/contact-me' component={ContactScreen} exact />
        <Route path='/' component={HomeScreen} exact />
        <Footer />
      </section>
    </Router>
  );
}

export default App;
