import kenny from './img/ken.jpg'; 
import './App.css';
import ProfiliImage from './Components/ProfileImage';

function App() {
  return (
    <div className="App">
     <h1>South park</h1>
     <ProfiliImage
     titulo='Kenny'
     imagem={kenny}
     alt='lobos
     '/>
    </div>
  );
}

export default App;
