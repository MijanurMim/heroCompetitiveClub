import React, { useEffect, useState } from "react";
import Member from "../Member/Member";
import TeamCart from "../TeamCart/TeamCart";
import "./Members.css";

const Members = () => {
  // fetching data from json
  const [members, setMembers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("./members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  // event handeller for members button
  const memberAddToTeam = (member) => {
    const newMember = [...team, member];

    setTeam(newMember);
  };

  return (
    <div className="container ">
      <div>
        {/* sending selected members to teamcart component  */}
        <TeamCart team={team}></TeamCart>
      </div>
      <div className="display-members">
        {/* sending data to member component  */}
        {members.map((member) => (
          <Member
            key={member._key}
            member={member}
            memberAddToTeam={memberAddToTeam}
          ></Member>
        ))}
      </div>
    </div>
  );
};

export default Members;
