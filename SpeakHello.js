// PASO 2: Envuelva todo el contenido de SpeakHello.js dentro de un IIFE
// Ver Clase 52, parte 2


// PASO 3: Crea un objeto, llamado 'helloSpeaker' al que adjuntarás
// el método "speak" y que expondrá al contexto global
// Ver Clase 52, parte 1
// var helloSpeaker =

// NO adjunte la variable speakWord al objeto 'helloSpeaker'.



// PASO 4: Vuelva a escribir la función 'hablar' de manera que esté adjunta a la
// objeto helloSpeaker en lugar de ser una función independiente.
// Ver Clase 52, parte 2
(function(window){
  var speakWord = "Hello";

  // Hello object with speak method
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);


// PASO 5: Exponga el objeto 'helloSpeaker' al alcance global. Nombralo
// 'helloSpeaker' también en el ámbito global.
// Ver Clase 52, parte 2
// (Tenga en cuenta que el paso 6 se realizará en el archivo SpeakGoodBye.js).
// xxxx.xxxx = helloSpeaker;