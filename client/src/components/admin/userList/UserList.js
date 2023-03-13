import Consumer from "../../../services/Consumer";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sbutton from "../../Sbutton";
import { confirm } from "react-confirm-box";

const Userlist = () => {
  const [consumers, setConsumers] = useState([]);

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  //Retrieving all job types in jobTypeCategory collection. It is done through the connection present in JobCategory in service folder.
  const fetchUsers = () => {
    Consumer.fetchUsers()
      .then((response) => {
        setConsumers(response.data);
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
      Consumer.disableEnableConsumer(e)
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
      Consumer.disableEnableConsumer(e)
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

  const rows = consumers.map((consumer) => {
    return {
      id: consumer._id,
      name: consumer.name.fName + " " + consumer.name.lName,
      district: consumer.address.district,
      mobile: consumer.mobile,
      email: consumer.email,
      isDisabled: consumer.isDisabled,
    };
  });

  const columns = [
    { field: "name", headerName: "name", width: 250 },
    { field: "district", headerName: "district", width: 150, sortable: false },
    { field: "mobile", headerName: "mobile", width: 150, sortable: false },
    { field: "email", headerName: "email", width: 250, sortable: false },
    {
      field: "Action",
      headerName: "Action",
      width: 350,
      sortable: false,
      renderCell: (params) => {
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

export default Userlist;
