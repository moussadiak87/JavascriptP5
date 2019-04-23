// Créer un tableau "languages" contenant "Html", "CSS", "Java", "PHP"
// L'objet global Array est utilisé pour créer des tableaux.
var languagesArrayCreation = function () {
// var formLanguage = Array('Html', 'CSS', 'Java', 'PHP'); possible aussi
//   return formLanguage;

  var formLanguage = ['Html', 'CSS', 'Java', 'PHP'];
    return formLanguage;
}

// Créer un tableau "numbers" contenant les numbers de 0 à 5
var numbersArrayCreation = function () {
  // var formNumbers = Array(0, 1, 2, 3, 4, 5); possible aussi
  //   return formNumbers;

  var formNumbers = [0, 1, 2, 3, 4, 5];
    return formNumbers;
}

//  Remplacer le troisième élément du tableau par "Javascript"
var ElementReplacement = function (languages) {
  // return languages.splice(2, 1, 'Javascript'); possible aussi
  languages[2] = 'Javascript';
  return languages;
}
// Ajouter "Ruby" et "Python" à la fin du tableau
// La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');
  return languages;
}

// Ajouter "-2" et "-1" au début du tableau numbers
// La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.
var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2,-1);
  return numbers;
}

// Supprimer le premier élément du tableau languages
// La méthode shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.
var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}
var deleteArrayLastElement = function (languages) {
  //languages.splice(4, 1);
  return languages;
}

var stringToArray = function (socialMediaInString) {
   var socialMedia = socialMediaInString.split(',');
   return socialMedia;
}

var arrayToString = function (languages) {
  var languagesInString = languages.join(',');
  return languagesInString;
}

var arraySort = function (socialMedia) {
   
  return socialMedia.sort();
}

var arrayInvert = function (languages){


  return languages.reverse();
}
