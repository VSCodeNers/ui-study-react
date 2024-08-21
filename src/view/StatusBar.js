import { useState, useEffect } from "react";
import styled from "styled-components";

const StatusBar = ({ onListClick, score, list }) => {
    return (
        <Container>
            <TitleText>집안일을 얼마나 완료했나요? {score * 10} %</TitleText>
            <OptionList>
                {list && list.map((item, idx) => (
                    <OptionItem 
                        check={item.check}
                        onClick={() => onListClick(item)}>
                        {idx + 1}. {item.title}
                    </OptionItem>
                ))}
            </OptionList>
            <StatusBarContainer>
                <StatusResult score={score}/>
            </StatusBarContainer>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;
const TitleText = styled.p`
    font-size: 20px;
    font-weight: 700;
`;
const OptionList = styled.div`
    display: flex;
    flex-direction: column;
`;
const OptionItem = styled.div`
    margin-bottom: 20px;
    font-weight: ${(props) => props.check ? 700 : 400};
    cursor: pointer;
`;
const StatusBarContainer = styled.div`
    position: relative;
    width: 550px;
    height: 20px;
    background-color: gray;
    border-radius: 20px;
    display: flex;
    align-items: center;
`;
const StatusResult = styled.div`
    position: relative;
    width: ${(props) => props.score * 55}px;
    max-width: 545.5px;
    height: 16px;
    background-color: aqua;
    border-radius: 20px;
    margin-left: 2.5px;
`;
export default StatusBar;