import React from "react";

const Profile = ({ user }) => {
  const { avatar_url, name, html_url } = user;
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="info">
        <p>
          <a href={html_url} target="_blank" rel="noreferrer">
            <h2>{name}</h2>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
