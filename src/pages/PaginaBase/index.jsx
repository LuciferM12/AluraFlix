import GlobalStyles from '../../components/GlobalStyles'
import Header from '../../components/Cabecera'
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

function PaginaBase() {
  return (
    <main>
      <GlobalStyles />
      <Header />
      <Outlet/>
      <Footer />
    </main>
  )
}

export default PaginaBase;