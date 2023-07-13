import './App.css';
import FirstComponent from './components/FirstComponent.js';
import Hooks from './components/Hooks.js';
import Images from './components/Images.js';
import List from './components/List.js';
import RenderCond from './components/RenderCond.js';
import Fragment from "./components/Fragment.js";
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <FirstComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={12}/>
      <Fragment />
      <Container>
        <h1>Este é filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
