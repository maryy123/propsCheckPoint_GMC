import React from "react";
import PropTypes from "prop-types";
import "./profileComponent.css";
const ProfileComponent = (props) => {
  console.log(props);

  //   inline style:
  const styleName = { color: "black", fontSize: "20px" };
  const styleBio = { color: " #404040" };
  //   ********

  return (
    <div className="profile">
      <div className="image">{props.children}</div>
      <div className="info">
        <h1 style={styleName}>{props.fullName}</h1>
        <hr></hr>
        <p>{props.profession}</p>
        <p className="bio">
          <span style={styleBio}>BIO:&nbsp;</span>
          <span> {props.bio}</span>
        </p>
        <button
          className="button"
          onClick={() => props.handleName(props.fullName)}
        >
          Hi !
        </button>
      </div>
    </div>
  );
};

// Default props:
ProfileComponent.defaultProps = {
  fullName: "Myriam Charfeddine",
  profession: "Web Developer",
};

// PropTypes:
ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default ProfileComponent;
