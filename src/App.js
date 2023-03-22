import logo from './logo.svg';
import './App.css';
import Square from './Square'

function App() {
  const str = {name:"danny", age:34}
  return (
    <div className="App">
      <Square propsVar={str}/>
    </div>
  );
}

export default App;
