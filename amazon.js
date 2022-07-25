const locChoose = document.getElementById('loc-choose');
const nationChoose = document.getElementById('nation-choose');
const headerSignIn = document.getElementById('header-sign-in');
const BodyBlackBackGround= document.getElementById('body-background-black-screen');
const HeaderBlackBackGround= document.getElementById('header-background-black-screen');
function locChooseOpen(){
    locChoose.style.display="block";
    BodyBlackBackGround.style.display="block";
    HeaderBlackBackGround.style.display="block";

}
function locChooseClose(){
    if(locChoose.style.display="block"){
        locChoose.style.display="none";
        BodyBlackBackGround.style.display="none";
        HeaderBlackBackGround.style.display="none";
    }
}
function nationChooseOpen(){
    nationChoose.style.display="block";
    BodyBlackBackGround.style.display="block";
    // HeaderBlackBackGround.style.display="block";

}
function nationChooseClose(){
        nationChoose.style.display="none";
        BodyBlackBackGround.style.display="none";
        // HeaderBlackBackGround.style.display="none";
}
function headerSignOpen(){
    headerSignIn.style.display="block";
    BodyBlackBackGround.style.display="block";
    // HeaderBlackBackGround.style.display="block";

}
function headerSignClose(){
        headerSignIn.style.display="none";
        BodyBlackBackGround.style.display="none";
        // HeaderBlackBackGround.style.display="none";
}
