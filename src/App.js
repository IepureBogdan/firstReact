import './App.css';
import HeaderBar from './components/header/Header';
import Footer from './components/footer/Footer'; 
import Note from './components/note/Note';
import notes from './components/note/notes';




function App() {
  return (
  <div className='App'>
    <HeaderBar />
    {notes.map((noteItem) => 
    <Note 
      key = {noteItem.key} 
      title = {noteItem.title} 
      content = {noteItem.content} />
    )}
    <Footer />
  </div>
  );
}

export default App;
