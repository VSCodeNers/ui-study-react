import { useState, useEffect } from "react";
import StatusBar from "../view/StatusBar";

const StatusBarController = () => {
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

    return <StatusBar onListClick={listClick} score={score} list={list}/>;
}
export default StatusBarController;