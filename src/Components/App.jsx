import Saludar from "./Saludar"
import Header from "./Header"
import Carrusel from "./Carrusel"
import Footer from "./Footer"
import '../Styles/App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <div className="contenidoApp">
      <Header></Header>
      <br />
      <br />
      <br />
      <br />
      <div className="carrusel">
      <Carrusel></Carrusel>
      </div>
      <br />
      <br />
      <br />
      
      <Footer></Footer>



      </div>
      
      
     </>

    );
}

export default App;
