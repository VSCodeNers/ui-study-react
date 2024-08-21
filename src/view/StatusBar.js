import { useState, useEffect } from "react";
import styled from "styled-components";

const StatusBar = () => {
    const [score, setScore] = useState(0);
    const [list, setList] = useState([
        { title: "장", check: false },
        { title: "방바닥 청소", check: false },
        { title: "설거지", check: false },
        { title: "화장실 청소", check: false },
        { title: "쓰레기 분리수거", check: false },
        { title: "옷장 정리", check: false },
        { title: "신발장 청소", check: false },
        { title: "베란다 청소", check: false },
        { title: "빨래 세탁", check: false },
        { title: "침대 정리", check: false },
    ]);

    const listClick = (menu) => {
        console.log(menu);
        setList(prev => prev.map((item) => {
            if (item.title === menu.title && !menu.check) {
                return {
                    ...item,
                    check: !item.check
                }   
            } else if (item.title === menu.title) {
                return {
                    ...item,
                    check: !item.check
                }   
            }
            return item;
        }));
        if (!menu.check) { 
            setScore(score + 1);
        } else {
            setScore(score - 1);
        }
    }

    useEffect(() => {
        if (score === 10) alert("부지런하네용?");
    }, [score]);

    return (
        <Container>
            <TitleText>집안일을 얼마나 완료했나요? {score * 10} %</TitleText>
            <OptionList>
                {list.map((item, idx) => (
                    <OptionItem 
                        check={item.check}
                        onClick={() => listClick(item)}>
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