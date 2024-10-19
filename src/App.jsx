import './App.css';
import Footer from './core/component/layout/Footer';
import Header from './core/component/layout/Header';
import { Router } from './core/component/router/Router';
import './core/css/styles.less';

function App() {
  return (
    <div className="page">
      <Header />
      <div className="body">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
