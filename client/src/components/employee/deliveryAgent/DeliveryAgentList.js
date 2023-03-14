import DeliveryAgent from "../../../services/DeliveryAgent";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sbutton from "../../Sbutton";
import { confirm } from "react-confirm-box";

const DeliveryAgentList = () => {
  const [deliveryAgents, setDeliveryAgents] = useState([]);

  const district = "Colombo";

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const fetchUsers = () => {
    DeliveryAgent.fetchDeliveryAgentsDistrictBased(district)
      .then((response) => {
        setDeliveryAgents(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const rows = deliveryAgents.map((deliveryAgent) => {
    return {
      id: deliveryAgent._id,
      name: deliveryAgent.name.fName + " " + deliveryAgent.name.lName,
      vehicleType: deliveryAgent.vehicleType,
      mobile: deliveryAgent.mobile,
      email: deliveryAgent.email,
      isDisabled: deliveryAgent.isDisabled,
    };
  });

  const columns = [
    { field: "name", headerName: "name", width: 250 },
    { field: "vehicleType", headerName: "Vehicle Type", width: 200 },
    { field: "mobile", headerName: "mobile", width: 200, sortable: false },
    { field: "email", headerName: "email", width: 250, sortable: false },
    {
      field: "Action",
      headerName: "Action",
      width: 300,
      sortable: false,
      renderCell: (params) => {
        console.log(params);
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

export default DeliveryAgentList;
