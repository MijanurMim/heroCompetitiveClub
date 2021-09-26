import React from "react";
import "./TeamCart.css";

const TeamCart = (props) => {
  // destructuring data from props
  const { team } = props;

  // calculating total fees
  let total = 0;
  for (const member of team) {
    total = total + member.fees;
  }

  return (
    <div className="team-cart">
      <h1>Selected Members</h1>
      <h5>Members Added : {team.length}</h5>
      <br />
      <p>
        <b>Total Fees : ${total}</b>
      </p>
      <ul>
        {/* index used as key  */}
        {team.map((member, index) => (
          <li key={index} className="selected-members">
            <img src={member.picture} alt="" />
            <b>{member.name}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamCart;
