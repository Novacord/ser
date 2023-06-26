
let piso = document.getElementById('piso')
let planetaGrande = document.getElementById('planetaGrande')
let montanas = document.getElementById('montanas')
let planetaPequeno = document.getElementById('planetaPequeno')
let planetaMediano = document.getElementById('planetaMediano')
let test = document.getElementById('test')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    planetaGrande.style.marginLeft =  value * 0.5 + 'px';
    // piso.style.marginLeft =  value * 0.1 + 'px';
    montanas.style.marginLeft =  value * -0.5 + 'px';
    planetaPequeno.style.marginLeft =  value * -0.3 + 'px';
    planetaMediano.style.marginLeft =  value * -0.2 + 'px';
    test.style.marginTop =  value * 0.5 + 'px';
})

const inP = document.querySelectorAll('.input-field');

inP.forEach((input) => {
    input.addEventListener('blur', function () {
        if (!this.value) {
            this.parentNode.classList.remove('focus');
        } else {
            this.parentNode.classList.add('focus');
        }
    });

    input.addEventListener('focus', function () {
        this.parentNode.classList.add('focus');
        document.querySelectorAll('.btn').forEach((btn) => btn.classList.remove('active'));
        document.querySelectorAll('.f_row').forEach((row) => row.classList.remove('shake'));
    });
});

document.querySelector('.resetTag').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.formBox').classList.add('level-forget');
    document.querySelector('.formBox').classList.remove('level-reg');
});

document.querySelector('.back').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.formBox').classList.remove('level-forget');
    document.querySelector('.formBox').classList.add('level-login');
});

document.querySelector('.regTag').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.formBox').classList.remove('level-reg-revers');
    document.querySelector('.formBox').classList.toggle('level-login');
    document.querySelector('.formBox').classList.toggle('level-reg');
    if (!document.querySelector('.formBox').classList.contains('level-reg')) {
        document.querySelector('.formBox').classList.add('level-reg-revers');
    }
});

document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        const finp = this.parentNode.querySelector('input');

        console.log(finp.innerHTML);

        if (finp.value !== '') {
            this.classList.add('active');
        }

        setTimeout(function () {
            inP.forEach((input) => input.value = '');
            document.querySelectorAll('.f_row').forEach((row) => row.classList.remove('shake', 'focus'));
            document.querySelectorAll('.btn').forEach((btn) => btn.classList.remove('active'));
        }, 2000);

        if (finp.value === '') {
            inP.parentNode.classList.add('shake');
        }
    });
});








