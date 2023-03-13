import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Consumer from "../../../services/Consumer";
import VerifiedIcon from "@mui/icons-material/Verified";
import Sbutton from "../../Sbutton";

import useStyles from "./style";
import { LinearProgress } from "@mui/material";

// Component to show when no users available on search
const CustomNoRowsOverlay = () => {
  const classes = useStyles();
  return (
    <div className={classes.noRows}>
      <p>No Users Found</p>
    </div>
  );
};

// Component to show users in datagrid
const Userlist = () => {
  const [consumers, setConsumers] = useState([]);
  const classes = useStyles();

  const rows = consumers.map((user) => {
    return {
      id: user?._id,
      name: user?.name?.fName + " " + user?.name?.lName,
      rating:
        parseFloat((user?.totalRating / user?.ratingCount).toFixed(2)) || 0,
      isDisabled: user?.isDisabled ? "Yes" : "No",
      mobile: user?.contact?.mobile,
      email: user?.contact?.email,
      ratingCount: user?.ratingCount,
      verified: user.verification ? user.verification.isAccepted : false,
    };
  });

  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 300,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className={classes.userName}>
            {params.row.name}
            {params.row.verified && (
              <VerifiedIcon className={classes.verifiedIcon} />
            )}
          </div>
        );
      },
    },
    {
      field: "job",
      headerName: "Job",
      width: 150,

      sortable: false,
    },
    { field: "rating", headerName: "Average Rating", width: 120 },
    { field: "ratingCount", headerName: "No of Ratings", width: 120 },
    { field: "mobile", headerName: "Mobile No", width: 120, sortable: false },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      sortable: false,
    },
    {
      field: "isDisabled",
      headerName: "Disabled",
      width: 100,
      sortable: false,
    },
    {
      field: "verifiedText",
      headerName: "Verified",
      width: 100,
      sortable: false,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        const profileId = params.row.id;
        const profileName = params.row.name;
        const verified = params.row.verified;
        return (
          <div className={classes.actionBtn}>
            <Link
              to="/admin/users/profile"
              state={{ profileId, profileName, verified }}
              className="link"
              style={{ marginRight: "5%" }}
            >
              <Sbutton text="View" btnWidth="100px" />
            </Link>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchUsers();
  });

  const fetchUsers = () => {
    Consumer.fetchConsumer()
      .then((response) => {
        setConsumers(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={classes.outerBox}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
          LoadingOverlay: LinearProgress,
        }}
      />
    </div>
  );
};

export default Userlist;
