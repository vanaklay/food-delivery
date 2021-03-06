import {Navbar} from './Components/Navbar/Navbar';
import {Menu} from './Components/Menu/Menu';
import { FoodDialog } from './Components/FoodDialog/FoodDialog';
import { Order } from './Components/Order/Order';
import {GlobalStyle} from './Styles/globalStyles';
import { useOpenFood } from './Hooks/useOpenFood'; 
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <FoodDialog {...openFood} {...orders} />
      <Menu {...openFood} />
      <Order {...orders} {...openFood} />
    </>
  );
}

export default App;
