import Sbutton from "../../components/Sbutton";
import ItemList from "../../components/shop/itemList/ItemList";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div>
      <br /> <br />
      <Link to="/ItemRegistration" className="link">
        <Sbutton text="Add New Item" btnWidth="25%" />
      </Link>
      <br /> <br />
      <br /> <br />
      <ItemList />
    </div>
  );
};

export default Item;
