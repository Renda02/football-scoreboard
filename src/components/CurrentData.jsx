import React,{useState} from "react";
import styled from "styled-components";
import { Team, TitleBox } from "../globalStyles";

import data from "../data.json"

function CurrentData() {
  const [scoreData,setScoreData]=useState(data);

  

  return (
    <div>
      <MatchWrapper>
        <h1>Score Highlights</h1>
        {scoreData.map((item) => {
          return (
            <>
              {" "}
              <TitleBox key={item.id}>
                <Team>
                  {item.firstTeam} {item.firstScore}{" "}
                </Team>

                <span>-</span>

                <Team>
                  {item.secondTeam} {item.secondScore}
                </Team>
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
