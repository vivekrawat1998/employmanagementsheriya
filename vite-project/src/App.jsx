import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Authcontext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localstorage";

const App = () => {
  const [user, setuser] = useState();
  const [loggedinuserdata, setloggedinuserdata] = useState(null);
  const authdata = useContext(Authcontext);
  // console.log(loggedinuserdata);

  useEffect(() => {
    const loggedinuser = localStorage.getItem("loggedinuser");

    if (loggedinuser) {
      const userdata = JSON.parse(loggedinuser);
      setuser(userdata.role);
      setloggedinuserdata(userdata.data);
    }
  }, []);

  const handlelogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedinuser", JSON.stringify({ role: "admin" }));
    } else if (authdata) {
      const employee = authdata.employee.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setuser("employee");
        setloggedinuserdata(employee);
        localStorage.setItem(
          "loggedinuser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}

      {user == "admin" ? (
        <AdminDashboard changeUser={setuser} />
      ) : user == "employee" ? (
        <EmployeDashboard changeUser={setuser} data={loggedinuserdata} />
      ) : null}
    </>
  );
};

export default App;
