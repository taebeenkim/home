function click_btn(){
    const msg = document.getElementById('msg');
    msg.innerText = 'BUTTON CLICK!'
    console.log("버튼 클릭");
};

function del_txt() {
    const msg = document.getElementById('msg');
    msg.innerText = ''
}