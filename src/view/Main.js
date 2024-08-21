import styled from "styled-components";
import StatusBar from "./StatusBar";

const Main = ({ onCapture }) => {
    console.log(onCapture);
    return (
        <Container>
            <p id="content">메인</p>
            <button onClick={onCapture}>click</button>
            <StatusBar/>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 70px 0 70px;
`;
export default Main;