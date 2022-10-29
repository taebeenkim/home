
const msg = document.getElementById('msg');
var cnt = 100;

function hit() {
    if(cnt > 0) {
    cnt -= 1;
    }
    msg.innerText = cnt;
}

function reset(){
    cnt = 100;
    msg.innerText = cnt;
}
