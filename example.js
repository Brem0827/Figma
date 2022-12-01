const imageElement = document.querySelector('img');
const buttonElement = document.querySelector('button');
const h1Element = document.querySelector('h1');

const onClickListner = () => {
    const nowSrc = imageElement.getAttribute('src');
    //console.log(nowSrc);
    if(nowSrc === 'image/game_1.jpg'){
        imageElement.setAttribute('src', 'image/game_2.jpg');
    }else{
        imageElement.setAttribute('src', 'image/game_1.jpg');
    }
    //console.log(event);
    //console.log(a);
    alert("클릭 되었습니다!");
};

const onClickButtonListner = () => {
    const userName = prompt("이름을 입력 해 주세요");
    h1Element.innerText = userName;
}

//imagelement.onmousemove = onClickListner;
imageElement.onclick = onClickListner;
buttonElement.onclick = onClickButtonListner;
console.log(imgelement);