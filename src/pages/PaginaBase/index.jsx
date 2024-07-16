import GlobalStyles from '../../components/GlobalStyles'
import Header from '../../components/Cabecera'
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import GlobalContextProvider from '../../context/GlobalContext';

function PaginaBase() {
  return (
    <main>
      <GlobalStyles />
      <Header />
      <GlobalContextProvider>
        <Outlet />
      </GlobalContextProvider>
      <Footer />
    </main>
  )
}

export default PaginaBase;