function bmiResult() {
    // Get input values
    var weight = document.getElementById("wght").value;
    var height = document.getElementById("hght").value;

    // Check if inputs are valid
    if (weight > 0 && height > 0) {
        // Calculate BMI
        var bmi = weight / ((height / 100) * (height / 100));

        // Determine BMI category
        var category = "";
        if (bmi < 18.5) {
            category = " You are Underweight ,Time to Grab a bite!!"
            
        } else if (bmi < 24.9) {
            category = "Normal weight, Great Shape";
        } else if (bmi < 29.9) {
            category = "Overweight,Time to Run!";
        } else {
            category = "Obese , Run to Doctor!";
        }

        // Display result
        document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2) + " - " + category;
    } else {
        // Display error message if inputs are invalid
        document.getElementById("result").innerHTML = "Please enter valid values for weight and height.";
    }
}

    

function clrRes() {
    age.value=""
    wght.value=""
    hght.value=""
    result.innerHTML=""
    category.innerHTML=""
    
    
}







