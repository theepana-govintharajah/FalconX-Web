import Shop from "../../../services/Shop";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sbutton from "../../Sbutton";

const Shoplist = () => {
  const [shops, setShops] = useState([]);

  //Retrieving all job types in jobTypeCategory collection. It is done through the connection present in JobCategory in service folder.
  const fetchShops = () => {
    Shop.fetchShops()
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
    };
  });

  const columns = [
    { field: "name", headerName: "name", width: 250 },
    { field: "district", headerName: "district", width: 100, sortable: false },
    { field: "mobile", headerName: "mobile", width: 150, sortable: false },
    { field: "email", headerName: "email", width: 200, sortable: false },
    {
      field: "Action",
      headerName: "Action",
      width: 250,
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <Link to="/admin/jobs/jobEdit" state={params.row} className="link">
              <Sbutton text="View" btnWidth="70px" marginRight="10px" />
            </Link>
            <Link to="/admin/jobs/jobEdit" state={params.row} className="link">
              <Sbutton text="Disable" btnWidth="70px" marginLeft="20px" />
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
