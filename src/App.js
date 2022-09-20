import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Saludos'}/>
    <h1 className="tet-3xl font-bold">
      Bienvenidos a MUSHI3D
    </h1>
    <br></br>
    <h3 className="text-3xl font-bold underline">
      DESTACADOS
    </h3>
    <br></br>
    <li>MANGAS</li>
    <li>DISEÑOS 3D</li>
    <br></br>
    <strong>Adiós Mundo</strong>
    <Footer/>
    </>
  );
}

export default App;
