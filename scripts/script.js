setInterval(() => {
    const btn = document.querySelector('.kontaktujte');
    btn.classList.add('shake');

    setTimeout(() => {
        btn.classList.remove('shake');
    }, 500);
}, 6000);


