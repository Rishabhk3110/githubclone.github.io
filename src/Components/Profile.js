import React from "react";
import { ImLocation2 } from "react-icons/im";

function Profile({ imgUrl, title, subtitle, location, socialLinks }) {
  return (
    <div className="container">
      <div className="dp">
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <h3> {title} </h3>
        <br/>
        <h4> {subtitle} </h4>
        <h4>
          <ImLocation2 /> {location}
        </h4>
        <br/>
        <h4> {socialLinks} </h4>
      </div>
    </div>
  );
}
export default Profile;