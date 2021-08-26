import {createGlobalStyle} from 'styled-components';
import {Navbar} from './Components/Navbar/Navbar';
import {Banner} from './Components/Banner/Banner';
import {Menu} from './Components/Menu/Menu';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

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
