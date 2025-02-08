export default Clock={
    title: 'Clock',
    code : `setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.querySelector('.clock').innerHTML = time;
    }, 1000);`,
    html : `<div class = "clock "></div>`,
};