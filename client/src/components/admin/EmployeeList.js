import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material//CardMedia";
import Typography from "@mui/material/Typography";
import Sbutton from "../Sbutton";
import { Link } from "react-router-dom";
import useStyles from "./style";
import Employee from "../../services/Employee";

const line = {
  backgroundColor: "#ffffff",
};

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Employee.fetchEmployee()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee._id}>
          <>
            <Card className={classes.root}>
              <div className={classes.content}>
                <CardContent className={classes.details}>
                  <Typography gutterBottom variant="h5" component="div">
                    {employee.name.fName} {employee.name.lName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>NIC :{employee.NIC}</b>
                    <br />
                    <b>District :{employee.district} </b>
                    <br />
                    <b>Email : {employee.email}</b>
                    <br />
                    <b>Contact Number :{employee.mobile}</b>
                    <br />

                    <br />
                  </Typography>
                </CardContent>
              </div>

              <CardActions>
                <Link
                  to="/admin/thirdParty/thirdPartyProfile"
                  className="link"
                  style={{ marginRight: "5%" }}
                >
                  <Sbutton text="Edit" btnWidth="45%" />
                </Link>

                <Sbutton text="Disable" btnWidth="15%" />
              </CardActions>
            </Card>
            <hr style={line} />
          </>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;