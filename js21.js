function calc_bmi() {
    const t = document.getElementById('height');
    const w = document.getElementById('weight');

    tv = parseInt(t.value);
    wv = parseInt(w.value);
    tv = tv / 100;
    bmi = parseInt(wv / (tv * tv));

    const r = document.getElementById('result');
    r.innerText = '체질량지수: ' + bmi;

    var msg;
    if(bmi < 20) {
        msg = '저체중';
    } else if(bmi <= 24) {
        msg = '정상';
    }else if (bmi <= 29) {
    }else {
        msg = '비만';
    }

    r.innerText = '체질량지수: ' + bmi + '\n당신은' + msg + '입니다.';
}
