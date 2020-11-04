document.getElementById('result').onclick = showAlert; //Rappel de la fonction à l'appuie du boutton

function showAlert(){  // Création de la fonction
    var age = document.getElementById('ageP').value;
    if(age < 18 && age > 0)      // Condition pour âge compris entre 0 et 18 ans
      {
         alert('Vous n\'êtes pas majeur');
      }
    else if (age >= 18 && age < 125)   // Condition pour âge compris entre 18 et 125 ans        
      {
         alert('Vous êtes majeur');
      }
    else                        // Quand les conditions ne s'appliquent pas
      {
         alert('Tu es un menteur !!!!');
      }
   
}