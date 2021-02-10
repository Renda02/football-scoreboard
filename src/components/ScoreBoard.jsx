import styled from "styled-components";
import spain from "../images/spain.png";
import brazil from "../images/brazil.png";
import { Team, TitleBox, Goals } from "../globalStyles";

function ScoreBoard() {
  return (
    <div>
      <h1> Live ScoreBoard</h1>
    <TitleBox><p id="elapsed">00'</p></TitleBox>
      <TitleBox>
        <Team>
          <Image src={spain} alt="" />
          <Teams>Spain</Teams>
        </Team>
        <Goals> 0 - 0 </Goals>
        <Team>
          <Image className="2ndLogo" src={brazil} alt="" />
          <Teams>Brazil</Teams>
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

const Teams=styled.p`
text-transform:uppercase;`;
