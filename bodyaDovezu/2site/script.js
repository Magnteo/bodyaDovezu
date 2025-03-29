
const buyButtons = document.querySelectorAll('.buy-btn');


buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const country = button.closest('.country-item').getAttribute('data-country');
        alert(`Квиток на подію в ${country} успішно куплено!`);
    });
});
