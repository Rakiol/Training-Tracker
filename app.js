
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

function saveWorkout(){
    let objStr = JSON.stringify(workout);
    localStorage.setItem("workout", objStr);
}

function loadWorkout() {
    workout= JSON.parse(localStorage.getItem("workout")) || [];
    for (let entry of workout) {
        const li = document.createElement("li");
        const textLi = document.createTextNode(`${workout[entry].exercise} 
            - Sets: ${workout[entry].sets}
            - Reps: ${workout[entry].reps}`);
        li.appendChild(textLi)
        document.getElementById("workout").appendChild(li);
    }


}


addButton.addEventListener("submit", function (event) {
    event.preventDefault();
    if (exercise.value === "" || sets.value === "" || reps.value === "") {
        alert("Please fill out all Fields")
    } else {
        workout.push({exercise: exercise.value, sets: parseInt(sets.value), reps: parseInt(reps.value)})
        console.log(workout)
        appendExercise();
        saveWorkout();
        exercise.value = "";
        sets.value = "";
        reps.value = "";
    }


})

addButton.addEventListener("reset", function (event){
    event.preventDefault();
    localStorage.clear()
    location.reload();

})




console.log("JS.loaded")
loadWorkout();