import React from "react";
import "./Member.css";

const Member = (props) => {
  // destructuring required data
  const { name, fees, age, picture, skill, email } = props.member;

  return (
    <div className="member ">
      <div className="card h-100 d-flex align-items-center card-custom-styles ">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">
            <b>{name}</b>
          </h4>
          <div className="card-text">
            <h6>
              <b> Fees : $</b>
              {fees}
            </h6>
            <h6>
              <b>Age : </b> {age}
            </h6>
            <h6>
              <b>Skills :</b> {skill}
            </h6>
            <h6>
              <b>Email:</b> {email}
            </h6>
            <button
              className="button"
              onClick={() => props.memberAddToTeam(props.member)}
            >
              <i className="fas fa-user-tie"></i> Add Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
