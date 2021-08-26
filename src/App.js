import { useState } from 'react';
import {Navbar} from './Components/Navbar/Navbar';
import {Banner} from './Components/Banner/Banner';
import {Menu} from './Components/Menu/Menu';
import { FoodDialog } from './Components/FoodDialog/FoodDialog';
import {GlobalStyle} from './Styles/globalStyles';

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
