import { Toaster } from 'react-hot-toast';
import './App.css';
import Footer from './components/Footer';
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <div>
        <MainPage />
        <Toaster />
        <Footer />
      </div>
    </>
  );
}

export default App;
