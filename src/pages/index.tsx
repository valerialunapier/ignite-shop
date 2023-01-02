import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home';
import tshirt1 from '../assets/tshirts/1.png';
import tshirt2 from '../assets/tshirts/2.png';
import tshirt3 from '../assets/tshirts/3.png';
 
export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1.src} width={520} height={480} alt="Camiseta 1" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={tshirt2.src} width={520} height={480} alt="Camiseta 2" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
