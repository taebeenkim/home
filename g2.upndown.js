//문제 출제
var com = Math.random() * 100;
com = parseInt(com) + 1;
console.log(com);

// 시도횟수 변수 cnt
var cnt = 0;

// 객체 불러오기
const result = document.getElementById('result');
const num = document.getElementById('num');

// 정답 확인 함수
function check_num()
{
  var usr = parseInt(num.value);

  // 입력 값과 문제와 비교하여 결과(UP, DOWN, CORRECT) 출력하기
  //1~100사이 숫자 입력

  if(usr > com) {
    msg = "DOWN";
    cnt = cnt + 1;
  } else if(usr < com) {
    msg = "UP";
    cnt = cnt + 1;
  } else if(usr == com) {
    msg = "CORRECT";
    cnt = cnt + 1;
    // 버튼 속성 해제
    const btn = documet.getElementById('btn');
    btn.disabled = 'disabled';
  } else {
    msg = "1~100 사이 수 입력"
  };

  var msg_cnt = '시도횟수: ' + cnt + '회';
  result.innerText = msg + '\n' + msg_cnt;
}