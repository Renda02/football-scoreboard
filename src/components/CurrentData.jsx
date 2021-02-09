import styled from "styled-components";
import { Team, TitleBox, Goals } from "../globalStyles";
import { Data } from "./ScoreUpdate";


function CurrentData() {
  return (
    <div>
      <MatchWrapper>
        <h1>Score Highlights</h1>
        {Data.map((item) => {
          return (
            <>
              {" "}
              <TitleBox>
                <Team>{item.firstTeam}</Team>
                <Goals>
                  {" "}
                  {item.firstScore} - {item.SecondScore}
                </Goals>
                <Team>{item.secondTeam}</Team>
              </TitleBox>
            </>
          );
        })}
      </MatchWrapper>
    </div>
  );
}

export default CurrentData;

const MatchWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
`;
