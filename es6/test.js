'use strict';
//es6기능 : 블록스코프 변수 선언

const sentences = [
    { subject : 'Javascript', verb : 'is', object : 'great'},
    { subject : 'Elephants', verb : 'are', object : "large" },
];

//es6기능 : 객체 분해
function say({ subject, verb, object }){
    //es6기능 : 템플릿 문자열
    //아래 사용한것은 백틱 임
    console.log(`${subject} ${verb} ${object}`);
}

//es6기능 : for..of
for(let s of sentences){
    say(s);
}