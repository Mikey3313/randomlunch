"use strict";


{
    const btn = document.getElementById("btn");

    btn.addEventListener("click",() => {
        const results = ["ラーメン","チャンポン","魚定食","牛丼","から揚げ定食","ハンバーガー","おにぎり","惣菜パン","うどん","冷やし中華"];
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
    });
    btn.addEventListener("mousedown",() => {
        btn.classList.add("pressed");
    });
    btn.addEventListener("mouseup",() => {
        btn.classList.remove("pressed");
    });
}
