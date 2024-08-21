import styled from "styled-components";
import StatusBarController from "../controller/StatusBarController";

const Main = ({ onCapture }) => {
    return (
        <Container>
            <p id="content">메인</p>
            <button onClick={onCapture}>click</button>
            <StatusBarController/>
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