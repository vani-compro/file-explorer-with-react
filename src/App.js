import './App.css';
import InitialAppBar from './components/InitialAppbar';


function App() {
  let fileStructure = {
  files: [],
  folders: {}
}
  return (
    <article>
      <InitialAppBar fileStructure={fileStructure}/>
      {console.log(fileStructure)}
    </article>
  );
}

export default App;
