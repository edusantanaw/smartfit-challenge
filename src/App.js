import {GlobalStyle} from './styles/GlobalStyles'
import Header from './components/partials/Header';
import Main from './components/Main';
import Footer from './components/partials/Footer';

function App() {
  return (
    <div >
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
