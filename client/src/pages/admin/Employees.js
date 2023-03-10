import Sbutton from "../../components/Sbutton";
import EmployeeList from "../../components/employee/employeeList/EmployeeList";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <div>
      <br /> <br />
      <Link to="/EmployeeRegistration" className="link">
        <Sbutton text="Add New" btnWidth="25%" />
      </Link>
      <br /> <br />
      <EmployeeList />
    </div>
  );
};

export default Employees;
