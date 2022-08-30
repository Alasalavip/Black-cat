import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola! bienvenido a nuestra app"}/>
    <div className="App">
      
    </div>
    </>
  );
}

export default App;
