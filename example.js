const imagelement = document.querySelector('img');
const onClickListner = (a, event) => {
    const nowSrc = imagelement.getAttribute('src');
    console.log(nowSrc);

    if(nowSrc === 'image/game_1.jpg'){
        imagelement.setAttribute('src', 'image/game_2.jpg');
    }else{
        imagelement.setAttribute('src', 'image/game_1.jpg');
    }
    //console.log(event);
    //console.log(a);
    alert("클릭 되었습니다!");
};

//imagelement.onmousemove = onClickListner;
imagelement.onclick = onClickListner;
console.log(imgelement);