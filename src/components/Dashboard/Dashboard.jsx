import React from "react";
import "../../components/Dashboard/Dashboard.css";
import avatarIcon from "../../assets/avatar.png";

const Dashboard = () => {
  return (
    <div className="thelist">
      <div className="left-list">
        <img className="avatar-icon" src={avatarIcon} alt="" />
        <label htmlFor="">Title </label>
        <pre className="title-box">{" \n VIP of Sales \n"}</pre>
        <label htmlFor="">Teams</label>
      </div>

      <div className="center-list">
        <form action="" style={{ width: "100%" }}>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" placeholder="Last name" />
          </div>
          <div>
            <label htmlFor="">BirthDay</label>
            <input type="text" name="" id="" placeholder="BirthDay" />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input type="text" name="" id="" placeholder="Phone Number" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" placeholder="Email" />
          </div>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Edit
          </button>
        </form>
      </div>

      <div className="right-list">
        <form action="" style={{ width: "100%" }}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div>
            <label htmlFor="">Address Line 2</label>
            <input type="text" name="" id="" placeholder="Address Line 2" />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" name="" id="" placeholder="City" />
          </div>
          <div>
            <label htmlFor="">State</label>
            <input type="text" name="" id="" placeholder="State" />
          </div>
          <div>
            <label htmlFor="">Zip</label>
            <input type="text" name="" id="" placeholder="Zip" />
          </div>
          <div>
            <label htmlFor="">County</label>
            <input type="text" name="" id="" placeholder="County" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
