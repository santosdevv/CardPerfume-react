import Botao from "./components/Botao";
import ImagemPrincipal from "./components/ImagemPrincipal";
import Preco from "./components/Preco";
import Principal0 from "./components/Principal0";
import Principal1 from "./components/Principal1"
import Texto from "./components/Texto";

const App = () => {
  return (
    <>
      <Principal0>
        <ImagemPrincipal />
        <Principal1>
          <Texto />
          <Preco />
          <Botao />
        </Principal1>
      </Principal0>
    </>
  )
}
export default App;
