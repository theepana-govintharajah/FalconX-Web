import Sbutton from "../../components/Sbutton";

import { Link } from "react-router-dom";

const Complaints = () => {
  return (
    <div>
      <Link to="/EmployeeRegistration" className="link">
        <Sbutton text="Add New" btnWidth="25%" />
      </Link>
    </div>
  );
};

export default Complaints;
