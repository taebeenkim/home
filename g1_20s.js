var start;
var end;
var et;

const res = document.getElementById('result');

function start_time()
{
  start = new Date(); // 현재 날짜, 시간 가져오기
  res.innerText = '20초후에 버튼을 클릭하세요.';
}

function end_time()
{
  end = new Date();
  et = end - start;
  et = parseInt(et / 1000);
  res.innerText = et + '초 경과!';
}