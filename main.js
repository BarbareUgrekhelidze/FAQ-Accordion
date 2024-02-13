document.querySelector('.plus-1').addEventListener('click', open1);
document.querySelector('.minus-1').addEventListener('click', close1);
document.querySelector('.plus-2').addEventListener('click', open2);
document.querySelector('.minus-2').addEventListener('click', close2);
document.querySelector('.plus-3').addEventListener('click', open3);
document.querySelector('.minus-3').addEventListener('click', close3);
document.querySelector('.plus-4').addEventListener('click', open4);
document.querySelector('.minus-4').addEventListener('click', close4);


function open1(e){
    document.querySelector('.plus-1').classList.add('d-none');
    document.querySelector('.plus-1').classList.add('rotate');
    document.querySelector('.minus-1').classList.remove('d-none');
    document.querySelector('.minus-1').classList.add('rotate');
    document.querySelector('.a-1').classList.add('show');
};

function close1(e){
    document.querySelector('.minus-1').classList.add('d-none');
    document.querySelector('.plus-1').classList.remove('d-none');
    document.querySelector('.a-1').classList.remove('show');
}

function open2(e){
    document.querySelector('.plus-2').classList.add('d-none');
    document.querySelector('.minus-2').classList.remove('d-none');
    document.querySelector('.a-2').classList.add('show');
};

function close2(e){
    document.querySelector('.minus-2').classList.add('d-none');
    document.querySelector('.plus-2').classList.remove('d-none');
    document.querySelector('.a-2').classList.remove('show');
}

function open3(e){
    document.querySelector('.plus-3').classList.add('d-none');
    document.querySelector('.minus-3').classList.remove('d-none');
    document.querySelector('.a-3').classList.add('show');
};

function close3(e){
    document.querySelector('.minus-3').classList.add('d-none');
    document.querySelector('.plus-3').classList.remove('d-none');
    document.querySelector('.a-3').classList.remove('show');
}

function open4(e){
    document.querySelector('.plus-4').classList.add('d-none');
    document.querySelector('.minus-4').classList.remove('d-none');
    document.querySelector('.a-4').classList.add('show');
};

function close4(e){
    document.querySelector('.minus-4').classList.add('d-none');
    document.querySelector('.plus-4').classList.remove('d-none');
    document.querySelector('.a-4').classList.remove('show');
}

