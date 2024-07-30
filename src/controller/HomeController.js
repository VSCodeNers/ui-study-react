import React, { useState } from "react";
import html2canvas from "html2canvas";
import Main from "../view/Main";

const HomeController = () => {
    const onCapture = () => {
        const target = document.getElementById("content");
        console.log(target);
        if (!target) 
            return alert("저장 실패");

        html2canvas(target).then((canvas) => {
            const link = document.createElement("a");
            document.body.appendChild(link);
            link.href = canvas.toDataURL('image/png');
            link.download = 'result.png';
            link.click();
            document.body.removeChild(link);
        });
    };

    return <Main onCapture={onCapture}/>;
};

export default HomeController;