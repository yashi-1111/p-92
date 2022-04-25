function addUser(){
    player1_name= document.getElementById("player1_name").value;
    player2_name= document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location="gamepage.html";
}

player1_name= localStorage.getItem("player1_name");
player1_name= localStorage.getItem("player1_name");

player1_score= 0;
player2_score= 0;

document.getElementById("player_1_name").innerHTML = player1_name + ": ";
document.getElementById("player_2_name").innerHTML = player2_name + ": ";

document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;

function send(){
    number1= document.getElementById("number_1").value;
    number2= document.getElementById("number_2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    question_number= "<h5 id='product'>" + number1 + "  X  " + number2 + "</h5 >";
    input_box = "Answer: <input type='text' id='input_check_box'>";
    check_button= "<br><br><br> <button class='btn btn-info' onclick='check()'> Check </button";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number_1").value= "";
    document.getElementById("number_2").value= "";
}
