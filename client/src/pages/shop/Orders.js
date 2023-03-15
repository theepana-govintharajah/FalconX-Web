import OrderList from "../../components/shop/orderList/OrderList";
import UnhandledOrderList from "../../components/shop/orderList/UnhandledOrderList";
import Sbutton from "../../components/Sbutton";

const Orders = () => {
  return (
    <div>
      <Sbutton text="All Orders" btnWidth="25%" />
      <br /> <br />
      <OrderList />
      <br /> <br />
      <Sbutton text="Pending Orders" btnWidth="25%" />
      <br /> <br />
      <UnhandledOrderList />
    </div>
  );
};

export default Orders;
