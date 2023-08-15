import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 100;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1> { title } </h1>
        <p>Liked { likes } times</p>
        <p>{ "hello, ninjas" }</p>




      </div>
    </div>
  );
}

export default App;
