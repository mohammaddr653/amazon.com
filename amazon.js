const locChoose = document.getElementById('loc-choose');
const headerTopNation = document.getElementById('header-top-nation');
const nationChoose = document.getElementById('nation-choose');
const headorTopSign = document.getElementById('heador-top-sign');
const headerSignIn = document.getElementById('header-sign-in');
const BodyBlackBackGround= document.getElementById('body-background-black-screen');
const HeaderBlackBackGround= document.getElementById('header-background-black-screen');
const headerSliderSee1 = document.getElementsByClassName('header-slider-see-1')[0];
const headerSliderSee2 = document.getElementsByClassName('header-slider-see-2')[0];
const headerSliderDepSeeMore = document.getElementById('header-slider-dep-see-more');
const headerSliderProgSeeMore = document.getElementById('header-slider-prog-see-more');
const depSeeMoreDown = document.getElementsByClassName("dep-see-more-down")[0];
const headerSlider = document.getElementById("header-slider");
const progSeeMoreDown = document.getElementsByClassName("prog-see-more-down")[0];
const headerSliderDigGroupNum= document.getElementsByClassName("dig-menu-2");
const headerSliderDepGroupNum= document.getElementsByClassName("dep-menu-2");
const headerSliderProgGroupNum= document.getElementsByClassName("prog-menu-2");
const headerSliderMenu2Back= document.getElementById("header-slider-dig-h2");
const headerSliderContainerDiv= document.getElementsByClassName("header-slider-container-div")[0];
const body=document.getElementsByTagName("body")[0];
function locChooseOpen(){
    locChoose.style.display="block";
    BodyBlackBackGround.style.display="block";
    HeaderBlackBackGround.style.display="block";
    body.style.overflowY="hidden";
}
function locChooseClose(){
    if(locChoose.style.display="block"){
        locChoose.style.display="none";
        BodyBlackBackGround.style.display="none";
        HeaderBlackBackGround.style.display="none";
        body.style.overflowY="scroll";
    }
}
function nationChooseOpen(){
    nationChoose.style.display="block";
    BodyBlackBackGround.style.display="block";
    body.style.overflowY="hidden";
    nationChoose.style.left= headerTopNation.offsetLeft-150 +'px';
}
function nationChooseClose(){
    nationChoose.style.display="none";
    BodyBlackBackGround.style.display="none";
    body.style.overflowY="scroll";
}
function headerSignOpen(){
    headerSignIn.style.display="block";
    BodyBlackBackGround.style.display="block";
    body.style.overflowY="hidden";
    headerSignIn.style.left= headorTopSign.offsetLeft-300 +'px';
}
function headerSignClose(){
    headerSignIn.style.display="none";
    BodyBlackBackGround.style.display="none";
    body.style.overflowY="scroll";
}
headerSliderDepSeeMore.addEventListener("click" , sliderSee1Open);
headerSliderProgSeeMore.addEventListener("click" , sliderSee2Open);
function sliderSee1Open(){
    headerSliderSee1.style.height="300px";
    headerSliderDepSeeMore.removeEventListener("click" , sliderSee1Open);
    headerSliderDepSeeMore.addEventListener("click" , sliderSee1Close);
    depSeeMoreDown.style.transform="rotate(180deg)";
}
function sliderSee2Open(){
    headerSliderSee2.style.height="300px";
    headerSliderProgSeeMore.removeEventListener("click" , sliderSee2Open);
    headerSliderProgSeeMore.addEventListener("click" , sliderSee2Close);
    progSeeMoreDown.style.transform="rotate(180deg)";
}
function sliderSee1Close(){
    headerSliderSee1.style.height="0";
    headerSliderDepSeeMore.removeEventListener("click" , sliderSee1Close);
    headerSliderDepSeeMore.addEventListener("click" , sliderSee1Open);
    depSeeMoreDown.style.transform="rotate(360deg)";
}
function sliderSee2Close(){
    headerSliderSee2.style.height="0";
    headerSliderProgSeeMore.removeEventListener("click" , sliderSee2Close);
    headerSliderProgSeeMore.addEventListener("click" , sliderSee2Open);
    progSeeMoreDown.style.transform="rotate(360deg)";
}
headerSlider.style.left="-400px";
function headerSliderOpen(){
    // alert(body.style.backgroundColor);
    headerSlider.style.left="0";
    BodyBlackBackGround.style.display="block";
    HeaderBlackBackGround.style.display="block";
    body.style.overflowY="hidden";
}
function headerSliderClose(){
    headerSlider.style.left="-400px";
    BodyBlackBackGround.style.display="none";
    HeaderBlackBackGround.style.display="none";
    body.style.overflowY="scroll";
    setTimeout(neatHeaderSlider,1000);
    function neatHeaderSlider(){
        for (e=0;e<=2;e++){
            switch(headerSliderDigGroupNum[e].style.left){
                case "400px" :
                    break;
                case "0px":
                    headerSliderDigGroupNum[e].style.left="400px";
                    headerSliderContainerDiv.style.overflow="scroll";
            }
        }
        for (e=0;e<=8;e++){
            switch(headerSliderDepGroupNum[e].style.left){
                case "400px" :
                    break;
                case "0px":
                    headerSliderDepGroupNum[e].style.left="400px";
                    headerSliderContainerDiv.style.overflow="scroll";
            }
        }
        for (e=0;e<=8;e++){
            switch(headerSliderProgGroupNum[e].style.left){
                case "400px" :
                    break;
                case "0px":
                    headerSliderProgGroupNum[e].style.left="400px";
                    headerSliderContainerDiv.style.overflow="scroll";
            }
        }
        sliderSee1Close();
        sliderSee2Close();

    }
}
function menu2SliderOpenDig(e){
    headerSliderDigGroupNum[e].style.left="0";
    headerSliderContainerDiv.style.overflow="hidden";
}
function menu2SliderOpenDep(e){
    headerSliderDepGroupNum[e].style.left="0";
    headerSliderContainerDiv.style.overflow="hidden";
}
function menu2SliderOpenProg(e){
    headerSliderProgGroupNum[e].style.left="0";
    headerSliderContainerDiv.style.overflow="hidden";
}
function sliderDigMenu2Back(e){
    headerSliderDigGroupNum[e].style.left="400px";
    headerSliderContainerDiv.style.overflow="scroll";
}
function sliderDepMenu2Back(e){
    headerSliderDepGroupNum[e].style.left="400px";
    headerSliderContainerDiv.style.overflow="scroll";
}
function sliderProgMenu2Back(e){
    headerSliderProgGroupNum[e].style.left="400px";
    headerSliderContainerDiv.style.overflow="scroll";
}

        //    start main slider
const mainSlider= document.getElementsByClassName("main-slider")[0];       
const mainSliderContainerSlider=document.getElementsByClassName("main-slider-images")[0];
mainSliderContainerSlider.style.right="0px";
var mainSliderAutoInterval=setInterval(mainSliderAuto,3000);
var mainSliderNum =0;
function mainSliderAuto(){
    var mainSliderContainerSliderRight=mainSliderNum+1536+"px";
    var mainSliderContainerSliderRightStr=String(mainSliderContainerSliderRight);
    mainSliderContainerSlider.style.right=mainSliderContainerSliderRightStr;
    if(mainSliderNum==4608){
        mainSliderNum=0;
        mainSliderContainerSlider.style.right="0px";
    }
    else{
        mainSliderNum=mainSliderNum+1536;
    }
}
function mainSliderMoveBack(){
    switch(mainSliderContainerSlider.style.right){
        case "0px" :
            mainSliderContainerSlider.style.right="4608px";
            mainSliderNum=0;
            break;
        case "1536px":
            mainSliderContainerSlider.style.right="0px";
            mainSliderNum=0;
            break;
        case "3072px":
            mainSliderContainerSlider.style.right="1536px";
            mainSliderNum=1536;
            break;
        case "4608px":
            mainSliderContainerSlider.style.right="3072px";
            mainSliderNum=3072;
            break;    
    }
}
function mainSliderMoveNext(){
    switch(mainSliderContainerSlider.style.right){
        case "0px" :
            mainSliderContainerSlider.style.right="1536px";
            mainSliderNum=1536;
            break;
        case "1536px":
            mainSliderContainerSlider.style.right="3072px";
            mainSliderNum=3072;
            break;
        case "3072px":
            mainSliderContainerSlider.style.right="4608px";
            mainSliderNum=4608;
            break;
        case "4608px":
            mainSliderContainerSlider.style.right="0px";
            mainSliderNum=0;
            break;    
    }
}
mainSlider.addEventListener('mouseenter',pauseMainSlider);
mainSlider.addEventListener('mouseleave',resumeMainSlider);
function pauseMainSlider(){
    clearInterval(mainSliderAutoInterval);
}
function resumeMainSlider(){
    mainSliderAutoInterval=setInterval(mainSliderAuto,3000);
}


                 //    end main slider


                // start row 3 sliding content

var mainRow=document.getElementsByClassName("main-row")[0];
var row3ContentMainSlider = document.getElementById('row3-content-main-slider');
var row3SliderImgNum = row3ContentMainSlider.getElementsByTagName('img').length;
var row3ContentMainMoveNext = document.getElementsByClassName('row3-content-main-move-next')[0];
var row3ContentMainMoveBack = document.getElementsByClassName('row3-content-main-move-back')[0];
var row3ContentMainScrollSpan=document.querySelector('div#main-container div.main-rows div.main-row>div.sliding-content div#row3-content-main-scroll span');
var row3SliderMove=0;
row3ContentMainMoveNext.addEventListener("click",row3ContentMainSliderNext);
row3ContentMainMoveBack.addEventListener("click",row3ContentMainSliderBack);
row3ContentMainSlider.style.width=(row3SliderImgNum*170)+(row3SliderImgNum*5)+((row3SliderImgNum-1)*4)+"px";
if((row3SliderImgNum*170)+(row3SliderImgNum*5)<window.screen.width){
    row3ContentMainMoveNext.style.display="none";
}
row3ContentMainMoveBack.style.display="none";
function row3ContentMainSliderNext(){
    row3ContentMainMoveNext.removeEventListener("click",row3ContentMainSliderNext);
    row3SliderMove=row3SliderMove-window.screen.width+170;
    var moveNums=((row3ContentMainSlider.offsetWidth)/(window.screen.width-170))-(((row3ContentMainSlider.offsetWidth)%(window.screen.width-170))/(window.screen.width-170));
    if(-1*row3SliderMove==(moveNums)*(window.screen.width-170)){
        var lastMove= (row3ContentMainSlider.offsetWidth)-(moveNums)*(window.screen.width-170);
        row3ContentMainMoveNext.style.display="none";
        row3ContentMainSlider.style.left=row3ContentMainSlider.offsetLeft-lastMove+"px";
    }else{
        row3ContentMainSlider.style.left=row3SliderMove+"px";
    }
    setTimeout(restartEvent,300);
    function restartEvent(){
        row3ContentMainMoveNext.addEventListener("click",row3ContentMainSliderNext);
        row3ContentMainMoveBack.style.display="block";
    }
}
function row3ContentMainSliderBack(){
    row3SliderMove=row3SliderMove+window.screen.width-170;
    row3ContentMainSlider.style.left=row3SliderMove+"px";
    if(row3SliderMove==0){
        row3ContentMainMoveBack.style.display="none";
    }
    row3ContentMainMoveNext.style.display="block";
}


                    // end row 3 sliding content

                    // start recommend slider


var recommendMainSlide = document.getElementsByClassName('recommend-main-slide');
var recommendCounterNow = document.getElementsByClassName('counter-now')[0];
var recommendSlideOpen;
var recommendNewSlide;
for(var n=0;n<=6;n++){
    recommendMainSlide[n].style.display="none";
}
recommendMainSlide[0].style.display="flex";
recommendCounterNow.innerHTML=1;
function recommendSlideBack(){
    for(var x=0;x<=6;x++){
        if(recommendMainSlide[x].style.display=="flex"){
            recommendSlideOpen=recommendMainSlide[x];
            if(x==0){
                recommendNewSlide=recommendMainSlide[6];
            }else{
                recommendNewSlide=recommendMainSlide[x-1];
            }
            recommendSlideOpen.classList.add("closing-slide-from-left");
            setTimeout(showBackSlide,100);
            function showBackSlide(){
                recommendSlideOpen.style.display="none";
                recommendNewSlide.style.display="flex";
                recommendSlideOpen.classList.remove("closing-slide-from-left");
                if(recommendCounterNow.innerHTML==1){
                    recommendCounterNow.innerHTML=7;
                }else{
                    recommendCounterNow.innerHTML-=1;
                }
            }

        }
    }
}
function recommendSlideNext(){
    for(var x=0;x<=6;x++){
        if(recommendMainSlide[x].style.display=="flex"){
            recommendSlideOpen=recommendMainSlide[x];
            if(x==6){
                recommendNewSlide=recommendMainSlide[0];
            }else{
                recommendNewSlide=recommendMainSlide[x+1];
            }
            recommendSlideOpen.classList.add("closing-slide-from-right");
            setTimeout(showBackSlide,100);
            function showBackSlide(){
                recommendSlideOpen.style.display="none";
                recommendNewSlide.style.display="flex";
                recommendSlideOpen.classList.remove("closing-slide-from-right");
                if(recommendCounterNow.innerHTML==7){
                    recommendCounterNow.innerHTML=1;
                }else{
                    recommendCounterNow.innerHTML++;
                }
            }

        }
    }
}

                        // end recommend slider


                        // start nation choose1


var footerNationChoose1 = document.getElementById('footer-nation-choose1');
var nationChoose1 = document.getElementById('nation-choose1');
function nationChoose1Open(){
    nationChoose1.style.display="block";
    nationChoose1.style.left= footerNationChoose1.offsetLeft-100 +'px';
}
function nationChoose1Close(){
    nationChoose1.style.display="none";
}


                        // end nation choose1

                        // start smooth slide to top


function winBacktoTop(){
    var currentWinTop=document.documentElement.scrollTop;
    var scroll= setInterval(scrollTop,1);
    function scrollTop(){
        window.scrollTo(0,currentWinTop-=30);
        if(currentWinTop<1){
            clearInterval(scroll);
        }
    }
}


                        // end smooth slide to top