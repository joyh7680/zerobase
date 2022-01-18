// 1. 즉시실행함수 - 전체 영역을 더럽히지 못하게  
// (function (window, document) {


// })(window, document)




(function (window, document) {
    // 2. 엄격한 js 코드로 작성 하겠다 선언 
    'use strict';

    // 3.const 변수 = 상수 는 
    // 문서에서 toggle이라는 class를 모두 찾아라 
    const $toggles = document.querySelectorAll('.toggle')
    // 4.id 선택자 찾는거 
    const $toggleBtn = document.getElementById('toggle-btn')

    //  5.addEventListener : 사용자가 어떤 이벤트를 발생시키는것을 감지 
    // ("이벤트") = 클릭이벤트 
    // 6. (클릭, function ) = 클릭하면 기능을 실행시키겟다 
    $toggleBtn.addEventListener('click', function () {
        // 11. 
        toggleElements();

    });

    // 12 
    // window = broswer 
    // resize 이벤트가 발생할때 함수를 실행하겠다 
    // resiz 창이 늘어나거나 줄어들때 
    window.addEventListener('resize', function () {
        // 13 확인 
        // console.log('Resized');

        // 브라우저 넓이 1024보다 더 큰 환경에서는 토글을 끄겟다 
        if (window.innerWidth > 1024) {
            // 16  요소들을 꺼주라 
            offElements();

        }


    })

    // 7. 함수 이름 만들기 
    function toggleElements() {
        // 8.  [] =  함수가 무얼 할건지 정의
        // 9. forEach 를 통해 함수를 반복시킬것 
        
        [].forEach.call($toggles, function (toggle) {
            // 10 
            toggle.classList.toggle('on');
        });

    }

    // 14. 
    function offElements(){
        [].forEach.call($toggles, function (toggle) {
            // 15 remove로 변경 
            toggle.classList.remove('on');
        });

    }


})(window, document)