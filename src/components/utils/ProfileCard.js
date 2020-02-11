import React from "react";

import { ReactComponent as BadgeGrey } from "../../assets/SISTAZSHARE-BADGE-GREY.svg";

const ProfileCard = ({ commPerson, name, country }) => {
  return (
    <div className="profile">
      <div className="profile__card">
        <img src={commPerson} alt="contributor" className="profile__card-img" />

        <p className="profile__card-title">
          {name}
          <span>
            <BadgeGrey className="profile__card-img1 ml-2" />
          </span>
        </p>
        <p className="profile__card-subtitle pt-2">{country}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProfileCard;
