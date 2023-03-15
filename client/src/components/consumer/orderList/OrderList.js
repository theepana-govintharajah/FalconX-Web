import Order from "../../../services/Order";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sbutton from "../../Sbutton";
import { confirm } from "react-confirm-box";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const ID = "6410a8824010c95cb9c848c1";

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const fetchOrders = () => {
    Order.fetchOrdersBasedConsumers(ID)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const rows = orders.map((order) => {
    return {
      id: order._id,
      price: order.price,
      quantity: order.quantity,
      orderStatus: order.orderStatus,
    };
  });

  const columns = [
    { field: "id", headerName: "id", width: 250, sortable: false },
    { field: "price", headerName: "price", width: 250 },
    { field: "quantity", headerName: "quantity", width: 250 },
    {
      field: "orderStatus",
      headerName: "orderStatus",
      width: 250,
      sortable: false,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 300,
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <Link to="/admin/jobs/jobEdit" state={params.row} className="link">
              <Sbutton text="View" btnWidth="15ch" marginRight="10px" />
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{
        height: 500,
        width: "100%",
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={rows} columns={columns} disableSelectionOnClick />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
