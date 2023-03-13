import Consumer from "../../../services/Consumer";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Sbutton from "../../Sbutton";

const Userlist = () => {
  const [consumers, setConsumers] = useState([]);

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

export default Userlist;
