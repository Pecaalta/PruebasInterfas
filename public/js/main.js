/**
 * side
 * toggleClass
 */
function side() {
  let side = document.getElementById("sidebar");
  if (side.className != "open"){
    side.className = "open";
  }else{
    side.className = "";
  }
}

function index(nodo) {
  var e = nodo.parentNode.children;
  return Array.prototype.indexOf.call(e,nodo);
}

/* Funciones de tabs*/
document.getElementById(document.getElementsByClassName("tab is-active")[0].dataset.tab).className = "tab-Conteiner is-active";
function tabs(nodo) {
  var TabsActive = document.getElementsByClassName("tab is-active")[0];
  var TabsCont = TabsActive.dataset.tab;

  if (TabsCont != ""){
    document.getElementById(TabsCont).className = "tab-Conteiner";
  }
  TabsActive.className = "tab";


  nodo.className = "tab is-active";
  TabsCont = nodo.dataset.tab;
  if (TabsCont != ""){
    document.getElementById(TabsCont).className = "tab-Conteiner is-active";
  }
}

/* Funciones de input check */
function Check(nodo) {
  nodo.className += " is-loading";
  nodo.getElementsByClassName("fas fa-exclamation")[0].className = "fas fa-exclamation hidden";
  nodo.getElementsByClassName("fas fa-check")[0].className = "fas fa-check hidden";

  setTimeout(function(){
    let Status = false;
    if (Status){
      nodo.getElementsByClassName("fas fa-exclamation")[0].className = "fas fa-exclamation hidden";
      nodo.getElementsByClassName("fas fa-check")[0].className = "fas fa-check";
    }else{
      nodo.getElementsByClassName("fas fa-exclamation")[0].className = "fas fa-exclamation";
      nodo.getElementsByClassName("fas fa-check")[0].className = "fas fa-check hidden";
    }
    nodo.className = nodo.className.replace("is-loading", "");

  }, 1000);
}

function upload(nodo) {
  var fullPath = nodo.value;
  if (fullPath) {
      var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      var filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
          filename = filename.substring(1);
      }
      document.getElementById(nodo.dataset.viewname).textContent = filename;
  }
}

document.getElementsByClassName("steps-conteiner")
[
  index(document.getElementsByClassName("steps-segment is-active")[0])
].className = "steps-conteiner is-active";

function FromPage(nodo,cambio) {
  let i = index(nodo.parentNode.parentNode);
  document.getElementsByClassName("steps-segment")[i].className = "steps-segment ";
  document.getElementsByClassName("steps-conteiner")[i].className = "steps-conteiner ";
  document.getElementsByClassName("steps-segment")[i+cambio].className = "steps-segment is-active";
  document.getElementsByClassName("steps-conteiner")[i+cambio].className = "steps-conteiner is-active";

}
