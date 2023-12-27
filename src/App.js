import Counter from "./components/Counter";
import { Ayat } from "./components/Ayat/Ayat";
import Nuremir from "./components/Nuremir/Nuremir";
import { Alina } from "./components/Alina/Alina";

function App() {
  return (
    <div className="App flex justify-center items-center h-screen">
      Hello World!
      <Counter />
      <Ayat />
      <Nuremir />
      <Alina />
    </div>
  );
}

export default App;
