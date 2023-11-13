var eye = document.getElementById('eye');
var eye_b = document.getElementById('eye_b');
var password = document.getElementById('password')


eye_b.onclick = function(){
    eye.style.display='block';
    eye_b.style.display='none';
    password.type='text';
}
eye.onclick = function(){
    eye.style.display='none';
    eye_b.style.display='block';
    password.type='password';
}
