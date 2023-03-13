import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { confirm } from "react-confirm-box";
import Typography from "@mui/material/Typography";
import Sbutton from "../../Sbutton";
import useStyles from "./style";
import Employee from "../../../services/Employee";

const line = {
  backgroundColor: "#ffffff",
};

const options = {
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel",
  },
};

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const classes = useStyles();

  const disable = async (e, fn, ln) => {
    //confirmation dialogue box
    const result = await confirm(
      "Are you sure to disable " + fn + " " + ln + " ?",
      options
    );
    //if ok is pressed in confirmation dialogue, disabling function will be called
    if (result) {
      Employee.disableEnableEmployee(e)
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
      Employee.disableEnableEmployee(e)
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
                {employee.isDisabled === false && (
                  <Sbutton
                    text="Disable"
                    btnWidth="25ch"
                    onClick={() =>
                      disable(
                        employee._id,
                        employee.name.fName,
                        employee.name.lName
                      )
                    }
                  />
                )}
                {employee.isDisabled === true && (
                  <Sbutton
                    text="Enable"
                    btnWidth="25ch"
                    onClick={() =>
                      Enable(
                        employee._id,
                        employee.name.fName,
                        employee.name.lName
                      )
                    }
                  />
                )}
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
