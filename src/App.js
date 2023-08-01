import './App.css';
import HeaderBar from './components/header/Header';
import Footer from './components/footer/Footer'; 
import Note from './components/note/Note';

function App() {
  return (<>
  <div className='App'>
    <HeaderBar />
    <Footer />
    <Note />
    </div>
    </>
  );
}

export default App;
