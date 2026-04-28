
let exercise = document.getElementById("ex")
let sets = document.getElementById("set")
let reps = document.getElementById("rep")
const addButton = document.getElementById("addExercise")
let workout = []

function appendExercise() {
    const li = document.createElement("li");
    const textLi = document.createTextNode(`${workout[workout.length -1].exercise} - Sets: ${workout[workout.length -1].sets} - Reps: ${workout[workout.length -1].reps}`);
    li.appendChild(textLi);
    document.getElementById("workout").appendChild(li);

}



addButton.addEventListener("submit", function (event) {
    workout.push({exercise: exercise.value, sets: parseInt(sets.value), reps: parseInt(reps.value)})
    console.log(workout)
    appendExercise();
    event.preventDefault();

})




console.log("JS.loaded")