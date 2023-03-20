// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'zfjL38riKG8', //처음 재생할 영상 유튜브 id값 주소에 잇음
        playerVars:{
            autoplay:true, //자동재생 유무
            loop:true, //반복재생 유무
            playList:['N6IpgN6auMY','CYjGljHzM3A','ee973zMi0Cs'] //반복해서 재생할 영상 목록
        },
        events:{
            onReady:function(event){
                event.target.mute()//소리 끄기
            }
        }
    });
}