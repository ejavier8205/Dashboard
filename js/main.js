

function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

window.onload = timedRefresh(1800000000);

/*AACPS*/
function openNavAACPS()
{
    document.getElementById("AACPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavAACPS() 
{
    document.getElementById("AACPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*BCPS*/
function openNavBCPS()
{
    document.getElementById("BCPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavBCPS() 
{
    document.getElementById("BCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*BOE-BCPS*/
function openNavBOEBCPS()
{
    document.getElementById("BOEBCPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavBOEBCPS() 
{
    document.getElementById("BOEBCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*CCPS*/
function openNavCCPS()
{
    document.getElementById("CCPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavCCPS() 
{
    document.getElementById("CCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*FACPS*/
function openNavFACPS()
{
    document.getElementById("FACPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavFACPS() 
{
    document.getElementById("FACPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*FCPS*/
function openNavFCPS()
{
    document.getElementById("FCPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavFCPS() 
{
    document.getElementById("FCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*LCPS*/
function openNavLCPS()
{
    document.getElementById("LCPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavLCPS() 
{
    document.getElementById("LCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*PWCS*/
function openNavPWCS() 
{
    document.getElementById("PWCS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavPWCS() 
{
    document.getElementById("PWCS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*SCPS*/
function openNavSCPS()
{
    document.getElementById("SCPS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavSCPS() 
{
    document.getElementById("SCPS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*VDSS*/
function openNavVDSS()
{
    document.getElementById("VDSS").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavVDSS() 
{
    document.getElementById("VDSS").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*Labels*/
function openNavLabels()
{
    document.getElementById("Labels").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavLabels() 
{
    document.getElementById("Labels").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*Tools*/
function openNavTools()
{
    document.getElementById("Tools").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavTools() 
{
    document.getElementById("Tools").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*Links*/
function openNavLinks()
{
    document.getElementById("Links").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}

function closeNavLinks() 
{
    document.getElementById("Links").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


/*Main Menu*/
function openMainMenu()
{
    document.getElementById("mainMenuDiv").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
    
}

function CloseMainMenu() 
{
    document.getElementById("mainMenuDiv").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


var t 

function automaticlose()
{
    t = setTimeout(function(){
        document.getElementById("mainMenuDiv").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }, 300000);
    
}

function resetTimeout()
{
    clearTimeout(t)
}


/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() 
{
  if (elem.requestFullscreen) 
  {
    elem.requestFullscreen();
  } 
  else if (elem.mozRequestFullScreen) 
  { /* Firefox */
    elem.mozRequestFullScreen();
  } 
  else if (elem.webkitRequestFullscreen) 
  { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } 
  else if (elem.msRequestFullscreen) 
  { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}



/* Close fullscreen */
function closeFullscreen() 
{
  if (document.exitFullscreen) 
  {
    document.exitFullscreen();
  } 
  else if (document.mozCancelFullScreen) 
  { /* Firefox */
    document.mozCancelFullScreen();
  } 
  else if (document.webkitExitFullscreen) 
  { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } 
  else if (document.msExitFullscreen) 
  { /* IE/Edge */
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

/*Clock*/

