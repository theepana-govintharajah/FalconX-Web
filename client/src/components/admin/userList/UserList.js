import Consumer from "../../../services/Consumer";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

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

  const btnStyle = {
    width: 1,
    marginLeft: 15,
    marginBottom: 10,
  };

  const rows = consumers.map((consumer) => {
    return {
      id: consumer._id,
      mobile: consumer.mobile,
      email: consumer.email,
      //   description: consumer.description,
      //   providerCount: consumer.poviderCount,
    };
  });

  const columns = [
    { field: "mobile", headerName: "mobile", width: 200 },
    { field: "email", headerName: "email", width: 200 },
    // { field: "description", headerName: "Description", width: 350 },
    // { field: "providerCount", headerName: "No of providers", width: 200 },
    {
      field: "Action",
      headerName: "Action",
      width: 250,
      sortable: false,
      renderCell: (params) => {
        return (
          <div>
            <Link to="/admin/jobs/jobEdit" state={params.row} className="link">
              <Button variant="contained" style={btnStyle}>
                <EditIcon fontSize="small" />
              </Button>
            </Link>

            <Button variant="contained" style={btnStyle}>
              <DeleteIcon fontSize="small" />
            </Button>
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
