const min = 1;
const max = 100;
const answare = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;

// Assuming "btn" is the id or class of your button
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    const check_answare = () => {
        let guess = document.querySelector("#field").value;
        attempts++;

        if (guess < answare) {
            alert("Number is small!!!!");
        } else if (guess > answare) {
            alert("Number is greater!!!!");
        } else {
            window.alert(`**You guessed the right number**.\nIt took you ${attempts} attempts.`);
        }
    };

    // Call the check_answare function when the button is clicked
    check_answare();
});
