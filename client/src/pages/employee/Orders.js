import Sbutton from "../../components/Sbutton";
import OrderList from "../../components/employee/orderList/OrderList";

const Orders = () => {
  return (
    <div>
      <br /> <br />
      <Sbutton text="Pending Orders" btnWidth="25%" />
      <br /> <br />
      <br /> <br />
      <OrderList />
    </div>
  );
};

export default Orders;
