import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <section className='wrapper'>
        <Header />
        <Route path='/' component={HomeScreen} />
        <Footer />
      </section>
    </Router>
  );
}

export default App;
