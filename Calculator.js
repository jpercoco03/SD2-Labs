// Clear function
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// Shows inputted values on calculator screen
function output(value) {
    document.getElementById("result").value += value;
}
 
// Function to calculate inputted problems
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;

}