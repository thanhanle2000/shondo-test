import './App.css';
import Footer from './core/component/layout/Footer';
import Navbar from './core/component/layout/Navbar';
import { Router } from './core/component/router/Router';
import './core/css/styles.less';

function App() {
  return (
    <div className="page">
      <Navbar />
      <div className="body">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
