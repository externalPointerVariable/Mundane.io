export const colorSwitcher = {
    title: 'Color Switcher🧊',
    code: `const buttons = document.querySelectorAll('.color-switcher');
    const body = document.querySelector('.color-switching');
    buttons.forEach(function (button) {
    button.addEventListener('click', (e)=>{
        const color = e.target.id;
        body.style.backgroundColor = color;
        })
    });
    `,
    html: `<div class="color-switching alert alert-dark d-sm-flex justify-content-around">
    <button class="btn btn-primary mr-1 color-switcher" id = "blue">Blue</button>
    <button class="btn btn-danger mr-1 color-switcher" id = "red">Red</button>
    <button class="btn btn-success mr-1 color-switcher" id = "green">Green</button>
    <button class="btn btn-warning mr-1 color-switcher" id = "yellow">Yellow</button>
    <button class="btn btn-dark mr-1 color-switcher" id = "black">Black</button>
    </div>`,
}