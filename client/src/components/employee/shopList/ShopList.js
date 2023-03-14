import Shop from "../../../services/Shop";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sbutton from "../../Sbutton";
import { confirm } from "react-confirm-box";

const Shoplist = () => {
  const [shops, setShops] = useState([]);

  const district = "Galle";

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const fetchShops = () => {
    Shop.fetchShopsDistrictBased(district)
      .then((response) => {
        setShops(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchShops();
  }, []);

  const rows = shops.map((shop) => {
    return {
      id: shop._id,
      name: shop.shopName,
      district: shop.address.district,
      mobile: shop.mobile,
      email: shop.email,
      isDisabled: shop.isDisabled,
    };
  });

  const columns = [
    { field: "name", headerName: "name", width: 250 },
    { field: "district", headerName: "district", width: 200, sortable: false },
    { field: "mobile", headerName: "mobile", width: 200, sortable: false },
    { field: "email", headerName: "email", width: 200, sortable: false },
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

export default Shoplist;
