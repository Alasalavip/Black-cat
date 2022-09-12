import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    {/*<ItemListContainer greeting={"Hola! bienvenido a nuestra app"}/>*/}
    <ItemDetailContainer/>
    <div className="App">
      
    </div>
    </>
  );
}

export default App;
