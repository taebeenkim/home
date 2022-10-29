function judge() {
    const score= document.getElementById('score');
    var s = parseInt(score.value);
    var grade;
    if(s >= 90) {
        grade = 'A';
    } else if(s >= 80) {
        grade = 'B';
    } else if(s >= 70) {
        grade = 'C';
    } else if(s >= 60) {
        grade = 'D';
    } else{
        grade = 'F';
    }

    const result = document.getElementById('result');
    result.innerText = grade;
}