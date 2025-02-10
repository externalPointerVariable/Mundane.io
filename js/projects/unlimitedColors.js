export const unlimitedColors = {
    title: 'Unlimited Colors🌈',
    code:`
        const unlimitedColorsContainer = document.querySelector('.unlimitedcolors');
        const unlimitedColors = function() {
            const hexVal = '123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += hexVal[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        let intervalId;

        const startUnlimitedColors = function() {
            if(!intervalId) {
                intervalId = setInterval(() => {
                    unlimitedColorsContainer.style.backgroundColor = unlimitedColors();
                }, 100);
            }
        };

        const stopUnlimitedColors = function() {
            clearInterval(intervalId);
            intervalId = null;
        };

        document.getElementById('colorStart').addEventListener('click', startUnlimitedColors);
        document.getElementById('colorStop').addEventListener('click', stopUnlimitedColors);
    `,
    html:`
    <div class="unlimitedcolors rounded">
        <div class="alert pb-5">
            <p class="lead text-black">Unlimited Colors</p>
            <button class="btn btn-primary" id="colorStart">Start</button>
            <button class="btn btn-danger" id="colorStop">Stop</button>
        </div>
    </div>
    `,
}