import {Navbar} from './Components/Navbar/Navbar';
import {Menu} from './Components/Menu/Menu';
import { FoodDialog } from './Components/FoodDialog/FoodDialog';
import { Order } from './Components/Order/Order';
import {GlobalStyle} from './Styles/globalStyles';
import { useOpenFood } from './Hooks/useOpenFood'; 
import { useOrders } from './Hooks/useOrders';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <FoodDialog {...openFood} {...orders} /> {/** spread the properties of this object as props */}
      <Menu {...openFood} />
      <Order {...orders} />
    </>
  );
}

export default App;
