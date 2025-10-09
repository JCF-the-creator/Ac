import { Cartaz } from "./_parts/Cartaz";
import { Portfolio } from "./_parts/Portfolio";
import { Valores } from "./_parts/Valores";
import { Calculo } from "./_parts/Calculo";
import { Contato } from "./_parts/Contato";

export default function Home(){
  return(
    <main>
      <Cartaz/>
      <Portfolio/>
      <Valores/>
      <Calculo/>
      <Contato/>
    </main>
  )
}