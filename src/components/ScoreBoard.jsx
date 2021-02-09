import styled from "styled-components";

function ScoreBoard() {
  return (
    <Container>
      <h1>ScoreBoard</h1>
      <TitleBox>
        <p>Local Team</p>
        <p className="time">00'</p>
        <p>Visitor Team</p>
      </TitleBox>
      <TitleBox>
        <Team>
          <Image className="firstLogo" href="#" alt="" />
          <p className="first-Team">Team name</p>
        </Team>
        <Goals> 0 - 0 </Goals>
        <Team>
          <Image className="2ndLogo" href="#" alt="" />
          <p className="first-Team">Team name</p>
        </Team>
      </TitleBox>
      <hr />
      <MatchWrapper>
        <TitleBox>
          <Team>
            <Image className="firstLogo" href="#" alt="" />
            <p className="first-Team">Team name</p>
          </Team>
          <Goals> 0 - 0 </Goals>
          <Team>
            <Image className="2ndLogo" href="#" alt="" />
            <p className="first-Team">Team name</p>
          </Team>
        </TitleBox>
      </MatchWrapper>
    </Container>
  );
}

export default ScoreBoard;

const Container = styled.div`
  position: absolute;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #fafafa;
  border-radius: 8px;
  text-transform: uppercase;
`;

const TitleBox = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;

  
`;

const Goals = styled.p`
  font-size: 2.2rem;
  
`;

const Team = styled.p`
  width: 200px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;

const MatchWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;
