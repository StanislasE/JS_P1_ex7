document.getElementById('result').onclick = showAlert;

function showAlert(){
    var age = document.getElementById('ageP').value;
    if(age < 18)
             {
                alert("Vous n'êtes pas majeur");
             }
             else
             {
                alert("Vous êtes majeur");
             }
}