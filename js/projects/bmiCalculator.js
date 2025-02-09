export const bmiCalculator = {
    title: 'BMI Calculator ⚖️',
    code:`const form = document.querySelector('.bmi-container form');
    const calcbmi = document.getElementById('calcbmi');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const height = document.getElementById('height').value;
        if(height === ''|| height <= 0 || height >= 300){
            alert('Height is required and should be between 0 and 300');
            return;
        }
        const weight = document.getElementById('weight').value;
        if(weight === ''|| weight <= 0 || weight >= 300){
            alert('Weight is required and should be between 0 and 300');
            return;
        }
        const bmi = (weight / ((height/100) * (height/100))).toFixed(2);
        calcbmi.textContent = bmi;
    });
    `,
    html:`
    <div class="bmi-container alert alert-info">
        <form>
            <div class="form-group">
                <label for="height">Height (cm)</label>
                <input type="number" class="form-control" id="height" placeholder="Enter height in cm">
                <label for="weight">Weight (kg)</label>
                <input type="number" class="form-control" id="weight" placeholder="Enter weight in kg">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Calculate</button>
            <div class="alert alert-success mt-3">Your BMI is: <span id = "calcbmi">0</bmi></div>
        </form>
    </div>
    <div class="alert alert-dark mt-3 d-sm-flex flex-column align-items-center">
        <h3>BMI Guide</h3>
        <p>Below 18.5 - Underweight</p>
        <p>18.5 - 24.9 - Normal</p>
        <p>25 - 29.9 - Overweight</p>
    </div>
    `
}