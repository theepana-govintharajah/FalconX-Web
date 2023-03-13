import DeliveryAgent from "../../../services/DeliveryAgent";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sbutton from "../../Sbutton";
import { confirm } from "react-confirm-box";

const DeliveryAgentList = () => {
  const [deliveryAgents, setDeliveryAgents] = useState([]);

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  //Retrieving all job types in jobTypeCategory collection. It is done through the connection present in JobCategory in service folder.
  const fetchUsers = () => {
    DeliveryAgent.fetchDeliveryAgents()
      .then((response) => {
        setDeliveryAgents(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const disable = async (e, fn, ln) => {
    //confirmation dialogue box
    const result = await confirm(
      "Are you sure to disable " + fn + " " + ln + " ?",
      options
    );
    //if ok is pressed in confirmation dialogue, disabling function will be called
    if (result) {
      DeliveryAgent.disableEnableEmployee(e)
        .then(() => {
          fetchUsers();
        })
        .catch((e) => {
          console.log(e);
        });
      return;
    }
    //if cancel is pressed in confirmation dialogue box
    console.log("You click No!");
  };

  //on click function to Enable third party account and auto rerender of fetchUsers() after button click to see the change
  const Enable = async (e, fn, ln) => {
    const result = await confirm(
      "Are you sure to enable " + fn + " " + ln + " ?",
      options
    );
    if (result) {
      DeliveryAgent.disableEnableEmployee(e)
        .then(() => {
          fetchUsers();
        })
        .catch((e) => {
          console.log(e);
        });
      return;
    }
    console.log("You click No!");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const rows = deliveryAgents.map((deliveryAgent) => {
    return {
      id: deliveryAgent._id,
      name: deliveryAgent.name.fName + " " + deliveryAgent.name.lName,
      district: deliveryAgent.address.district,
      mobile: deliveryAgent.mobile,
      email: deliveryAgent.email,
      isDisabled: deliveryAgent.isDisabled,
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
        console.log(params);
        return (
          <div>
            <Link to="/admin/jobs/jobEdit" state={params.row} className="link">
              <Sbutton text="View" btnWidth="15ch" marginRight="10px" />
            </Link>

            {params.row.isDisabled === false && (
              <Sbutton
                text="Disable"
                btnWidth="15ch"
                onClick={() =>
                  disable(
                    params.row.id,
                    params.row.name.fName,
                    params.row.name.lName
                  )
                }
              />
            )}
            {params.row.isDisabled === true && (
              <Sbutton
                text="Enable"
                btnWidth="15ch"
                onClick={() =>
                  Enable(
                    params.row.id,
                    params.row.name.fName,
                    params.row.name.lName
                  )
                }
              />
            )}
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
