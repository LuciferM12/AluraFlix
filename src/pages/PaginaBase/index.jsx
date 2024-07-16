import GlobalStyles from '../../components/GlobalStyles'
import Header from '../../components/Cabecera'
import Banner from '../../components/Banner';
import Cine from './cine.jpg'
import Footer from '../../components/Footer';

function PaginaBase() {
  return (
    <main>
      <GlobalStyles />
      <Header />
      <Banner backgroundImage={Cine} />
      <Footer />
    </main>
  )
}

export default PaginaBase;