import { useState } from 'react';
import {Navbar} from './Components/Navbar/Navbar';
import {Menu} from './Components/Menu/Menu';
import { FoodDialog } from './Components/FoodDialog/FoodDialog';
import { Order } from './Components/Order/Order';
import {GlobalStyle} from './Styles/globalStyles';

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Menu setOpenFood={setOpenFood} />
      <Order />
    </>
  );
}

export default App;
