import {Navbar} from './Components/Navbar/Navbar';
import {Banner} from './Components/Banner/Banner';
import {Menu} from './Components/Menu/Menu';
import {GlobalStyle} from './Styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
