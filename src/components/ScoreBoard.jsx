import styled from "styled-components";
import spain from "../images/spain.png";
import brazil from "../images/brazil.png";
import { Team, TitleBox, Goals } from "../globalStyles";

function ScoreBoard() {
  return (
    <div>
      <h1> Live ScoreBoard</h1>
    
      <TitleBox>
        <Team>
          <Image className="firstLogo" src={spain} alt="" />
          <p className="first-Team">Spain</p>
        </Team>
        <Goals> 0 - 0 </Goals>
        <Team>
          <Image className="2ndLogo" src={brazil} alt="" />
          <p className="first-Team">Brazil</p>
        </Team>
      </TitleBox>
      <hr />
    </div>
  );
}

export default ScoreBoard;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;
