import './App.css';
import InitialAppBar from './components/InitialAppbar';

let fileStructure = {
  files: [],
  folders: {}
}

function App() {
  return (
    <article>
      <InitialAppBar fileStructure={fileStructure}/>
    </article>
  );
}

export default App;
