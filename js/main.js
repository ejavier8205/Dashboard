/*AACPS*/
function openNavAACPS()
{
    document.getElementById("AACPS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavAACPS() 
{
    document.getElementById("AACPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*BCPS*/
function openNavBCPS()
{
    document.getElementById("BCPS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavBCPS() 
{
    document.getElementById("BCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*BOE-BCPS*/
function openNavBOEBCPS()
{
    document.getElementById("BOEBCPS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavBOEBCPS() 
{
    document.getElementById("BOEBCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*CCPS*/
function openNavCCPS()
{
    document.getElementById("CCPS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavCCPS() 
{
    document.getElementById("CCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*FCPS*/
function openNavFCPS()
{
    document.getElementById("FCPS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavFCPS() 
{
    document.getElementById("FCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*LCPS*/
function openNavLCPS()
{
    document.getElementById("LCPS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavLCPS() 
{
    document.getElementById("LCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*PWCS*/
function openNavPWCS() 
{
    document.getElementById("PWCS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavPWCS() 
{
    document.getElementById("PWCS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*SCPS*/
function openNavSCPS()
{
    document.getElementById("SCPS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavSCPS() 
{
    document.getElementById("SCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*VDSS*/
function openNavVDSS()
{
    document.getElementById("VDSS").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavVDSS() 
{
    document.getElementById("VDSS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*Labels*/
function openNavLabels()
{
    document.getElementById("Labels").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavLabels() 
{
    document.getElementById("Labels").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*Tools*/
function openNavTools()
{
    document.getElementById("Tools").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavTools() 
{
    document.getElementById("Tools").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*Links*/
function openNavLinks()
{
    document.getElementById("Links").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
}

function closeNavLinks() 
{
    document.getElementById("Links").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  }

  function alertmessage() 
{
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 7000);
}