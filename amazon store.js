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


                    // start store left



function inputInCheck(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.getElementsByTagName('input')[0].checked){
        target.getElementsByTagName('input')[0].checked=false;
    }else{
        target.getElementsByTagName('input')[0].checked=true;
    }
}


                    // end store left


                    // start store right page



var pagePrev = document.getElementsByClassName('page-prev')[0];
var pgFirstCounter = document.getElementById('pg-first-counter');
var pgFirstDots = document.getElementById('pg-first-dots');
var pgSecondCounter = document.getElementById('pg-second-counter');
var pgThirdCounter = document.getElementById('pg-third-counter');
var pgForthCounter = document.getElementById('pg-forth-counter');
var pgSecondDots = document.getElementById('pg-second-dots');
var pageNext = document.getElementsByClassName('page-next')[0];
var storeRightPage= document.querySelector('div#main-container div.store-container div#store-right div.store-right-main>div.store-right-page>div');
var pagesNum;
pagesNum=50;
var pgCounter=document.getElementsByClassName('pg-counter');
var pgDots;
var pgDotsCount=0;
var pgDots1;
var pgDotsCount1=0;
var x=pagesNum+1;
var y;
var t=1;
function addSecondPgDots(){
    pgDotsCount=pgDotsCount+1;
    pgDots=document.createElement('div');
    pgDots.innerHTML="...";
    pgDots.classList.add("pgDots");
    if(storeRightPage.children.length==pagesNum+2){
        storeRightPage.insertBefore(pgDots, storeRightPage.children[pagesNum]);
    }else{
        storeRightPage.insertBefore(pgDots, storeRightPage.children[pagesNum+1]);
    }
}
function addFirstPgDots(){
    pgDotsCount1=pgDotsCount1+1;
    pgDots1=document.createElement('div');
    pgDots1.innerHTML="...";
    pgDots1.classList.add("pgDots1");
    storeRightPage.insertBefore(pgDots1, storeRightPage.children[2]);
}
for(var n=1;n<=pagesNum;n++){
    x=x-1;
    var pageNumber=document.createElement('div');
    storeRightPage.insertBefore(pageNumber, storeRightPage.children[1]);
    pageNumber.classList.add('pg-counter');
    pageNumber.setAttribute("onclick","pageMoves(event)");
    pageNumber.innerHTML=x;
}
if(pagesNum>=5){
    var min=3;
    var max=pagesNum-2;
    for(min;min<=max;min++){
        pgCounter[min].style.display="none";
    }
    addSecondPgDots();
}
pgCounter[t-1].style.backgroundColor="#9e9e9e";
function pageMoves(e){
    if(e==event){
        e = e || window.event;
        var target = e.target || e.srcElement;
        y=parseInt(target.innerHTML)-t;
        t=parseInt(target.innerHTML);
        if(y>0){
            pageMovesToRight();
        }
        if(y<0){
            pageMovesToLeft();
        }
        if(t>=5){
            var min=1;
            var max=t-3;
            for(min;min<=max;min++){
                pgCounter[min].style.display="none";
            }    
        }
    }
    if(e=="right"){
        y=1;
        if(t==pagesNum-1||t==pagesNum){
            t=pagesNum;
        }else{
            t=t+1; 
        }
        console.log(t);
        pageMovesToRight();
        if(t>=5){
            var min=1;
            var max=t-3;
            for(min;min<=max;min++){
                pgCounter[min].style.display="none";
            }    
        }
    }
    if(e=="left"){
        y=-1;
        if(t==1){
            t=1;
        }else{
            t=t-1; 
        }
        pageMovesToLeft();
        if(t>=5){
            var min=1;
            var max=t-3;
            for(min;min<=max;min++){
                pgCounter[min].style.display="none";
            }    
        }
    }
}
function rightWithNext(){
    pageMoves("right");
}
function leftWithPrev(){
    pageMoves("left");
}
function pageMovesToRight(){
    pgCounter[t-1].style.backgroundColor="#9e9e9e";
    pgCounter[t-1-y].style.backgroundColor="white";
    pgCounter[t-2].style.display="block";
    if(t<pagesNum-1){
        pgCounter[t].style.display="block";
        if(t>=5){
            var min=1;
            var max=t-3;
            for(min;min<=max;min++){
                pgCounter[min].style.display="none";
            }    
        }
    }else{
        pgDots.remove();
        pgDotsCount=0;
    }
    if(t>=5 && pgDotsCount1==0){
        addFirstPgDots();
    }
}
function pageMovesToLeft(){
    pgCounter[t-1].style.backgroundColor="#9e9e9e";
    pgCounter[t-1-y].style.backgroundColor="white";
    if(t>=3){
        pgCounter[t-2].style.display="block";
    }
    if(t>=2 && t<pagesNum-2){
        pgCounter[t+1].style.display="none";
    }
    if(t<pagesNum-1 && pgDotsCount==0){
        addSecondPgDots();
    }
    if(t==3){
        pgDots1.remove();
        pgDotsCount1=0;
    }
    if(-y<=pagesNum-1 && t==1){
        var min=3;
        var max=pagesNum-2;
        for(min;min<=max;min++){
            pgCounter[min].style.display="none";
        }    
        if(pgDotsCount1==1){
            pgDots1.remove();
            pgDotsCount1=0;
        }
        pgCounter[1].style.display="block";
        pgCounter[2].style.display="block";
    }
}




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