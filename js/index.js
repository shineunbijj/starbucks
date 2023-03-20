// console.log("test");
window.onload=function(){
    if(window.scrollY > 500){
        //상위로버튼 보이기
        gsap.to('#to-top', 0.6,{
            x:0,
        })
    }else{
        //상위로버튼 숨기기
        gsap.to('#to-top', 0.6,{
            x:100,            
        })
    }
};

// 뱃지------------------------------------------------------------
const badgEl = document.querySelector('header .badges');
// console.log(badgEl);

window.addEventListener('scroll', _.throttle(function(){
    // console.log('scroll중~!');
    if(window.scrollY > 500){
        //숨기기
        //badgEl.style.display ='none';

        // gsap.to(요소, 지속시간, 옵션); 애니메이션 효과
        gsap.to(badgEl, 0.6, {
            opacity:0,
            display:'none'
        });
        //상위로버튼 보이기
        gsap.to('#to-top', 0.6,{
            x:0,

        })
    }else{
        //보이기
        badgEl.style.display ='block';
        gsap.to(badgEl, 0.6, {
            opacity:1,
            display:'block'
        });
        //상위로버튼 숨기기
        gsap.to('#to-top', 0.6,{
            x:100,            
        })
    }
},300));

const fadeEls = document.querySelectorAll('#body_layout .fade-in');
// console.log(fadeEls);

fadeEls.forEach(function(fadeEl,index){
    console.log(fadeEls);
    console.log(fadeEl);
    gsap.to(fadeEl, 1, {
        opacity : 1,
        delay : (index+1)*0.6
    });
})

// 공지사항-------------------------------------------------------
// new Swiper(선택자, {옵션});
new Swiper('.notice-line .swiper-container',{
    direction : 'vertical',
    autoplay : true, //자동 슬라이드
    loop:true, //슬라이드 끝나고 다시 1번으로 돌아오기
});

// 베너 -----------------------------------------------------------
new Swiper('.promotion .swiper-container',{
    slidesPerView : 3, //한번에 몇개씩 보여줄건지
    spaceBetween : 20, //슬라이드 사이에 여백 20px
    centeredSlides : true, //1번 슬라이드를 가운데로 보여줌
    loop:true,
    autoplay : {
        delay : 3000
    },
    pagination:{
        el : '.swiper-pagination', //페이지 변환 요소 선택자
        clickable : true,
    },
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    }
});

// 프로모션 열고닫기------------------------------------------------------
const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// console.log(promotionToggleBtn);

let isHidePromotion = false; //true면 숨기기 false면 보이기
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //true면 숨기기
        promotionEl.classList.add('hide');
    }else{
        //false면 보이기
        promotionEl.classList.remove('hide');
    }
});

// 유튜브---------------------------------------------------------
function random(min,max){
    // toFixed를 통해 반환된 문자데이터들
    // parseFloat를 통해 소수점을 가지는 숫자데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

function floatingObject(selector, delay, size){
    gsap.to(selector,random(1.5,2.5), {
        y:size,
        repeat:-1,
        yoyo:true,
        ease : Power1.easeInOut,
        delay:random(0,delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEls);
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement : spyEl, //보여짐 여부를 감시할 요소
        triggerHook : .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

//슬라이드베너 아래
new Swiper('#awords .swiper-container',{
    autoplay: true,
    loop:true,
    spaceBetween : 30, //슬라이드 사이에 여백 30px
    slidesPerView : 5, //한번에 몇개씩 보여줄건지

    navigation:{
        prevEl:'#awords .swiper-prev',
        nextEl:'#awords .swiper-next',
    }
});

// 상위로 버튼
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click',function(){
    gsap.to(window, 0.7,{
        scrollTo:0
    });
});

















