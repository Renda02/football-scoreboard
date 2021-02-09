import React from "react";

function ScoreBoard() {
  return (
    <div className="container">
      <h1>ScoreBoard</h1>
      <div className="title-box">
        <p>Local Team</p>
        <p className="time">00'</p>
        <p>Visitor Team</p>

      </div>
      <div className="title-box">
<div className="team">
    <img className="firstLogo" href="#" alt=""/>
    <p className="first-Team">Team name</p>
</div><p className="goals"> 3 - 1 </p><div className="team">
    <img className="2ndLogo" href="#" alt=""/>
    <p className="first-Team">Team name</p>
</div>

      </div>
      <hr/>
    </div>
  );
}

export default ScoreBoard;
