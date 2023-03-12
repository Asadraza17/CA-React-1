import React from 'react';

const UserProfile = ({ user }) => {
  const { username, firstName, lastName, school, email, profilePicture, classLevel } = user;
  let textColor;
    if (classLevel === "Freshman") {
    textColor = "green";
    } else {
    textColor = "black";
    }

  return (
    <div className="users">
     <img src={profilePicture} alt={username} />
      <h2>{firstName} {lastName}</h2>
      <p><strong><i>Username:</i></strong> {username}</p>
      <p><strong><i>Email:</i></strong> {email}</p>
      <p><strong><i>School:</i></strong> {school}</p>
      <p><strong><i>Class Level:</i></strong> <span style={{ color: textColor }}>{classLevel}</span></p>
    </div>
  );
};

export default UserProfile;