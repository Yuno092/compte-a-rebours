
// affiche la date du jour fr
function dateDuJour() {
  //console.log(Date())
  const maDate = new Date()
  document.getElementById("dateDuJour").innerHTML = "Nous sommes le : " + maDate.toLocaleDateString("fr");
}

//affiche l'heure du jour fr
function heureDuJour() {
  //console.log(Date())
  const maDate = new Date()
  document.getElementById("heureDuJour").innerHTML = "Il est actuellement : " + maDate.toLocaleTimeString("fr");
  // 
}

// permet de définir la valeur de départ du compte à rebours
function setTimer(timerValue) {
  document.getElementById("affichageTimer").innerText = timerValue;
  tabDuree = timerValue.split(":");
  // on veut le temps en secondes
  temps = parseInt(tabDuree[0]) * 3600 + parseInt(tabDuree[1]) * 60 + parseInt(tabDuree[2]);
}

// fait baisser le compte à rebours
function timer() {
  let heure = parseInt(temps / 3600, 10);
  let minutes = parseInt((temps % 3600) / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  heure = heure < 10 ? "0" + heure : heure;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  if (timerStarted) {
    document.getElementById("affichageTimer").innerText = heure + ":" + minutes + ":" + secondes;

    if (temps <= 0) {
      temps = 0;
      // jouer un son
      var audio = new Audio('son.wav');
      audio.play();

      //arreter de répéter le timer
      clearInterval(idInterval);
      //re initialisation du boutton start
      document.getElementById('btnStart').setAttribute("value", "START");
    } else {
      // on décrémente le temps d'une seconde
      temps = temps - 1;
    }
  } else {
    // on arrete le timer
    clearInterval(idInterval);
  }
}
// BONUS : permet d'agrandir le timer
function agrandir() {
  console.log("agrandir :" + document.getElementById("affichageTimer").style.fontSize)
  var el = document.getElementById('affichageTimer');
  var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.style.fontSize = (fontSize + 10) + 'px'
}
// BONUS : permet de rétrécire le timer
function reduire() {
  console.log("reduire :" + document.getElementById("affichageTimer").style.fontSize)
  var el = document.getElementById('affichageTimer');
  var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.style.fontSize = (fontSize - 10) + 'px'
}

// gestion du bouton "démarrer"
function startButton(leBoutton) {
  if (timerStarted) {
    leBoutton.value = "START";
    timerStarted = false;
  } else {
    leBoutton.value = "STOP";
    timerStarted = true;
    idInterval = setInterval(timer, 1000);
  }
}

//
function personnaltimer(theForm) {
  console.log(theForm.personnalTime.value);
  setTimer(theForm.personnalTime.value);
}

//initialisation des variables
let timerStarted = false; // indique si le compte à rebours est démarré 
let temps = 0; // contient la durée a faire défiler en seconde
let idInterval = 0; // identifiant de l'interval lancé
