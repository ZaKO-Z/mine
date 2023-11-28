var eye = document.getElementById('eye');
var eye_b = document.getElementById('eye_b');

var id;
var password;
var obj;

eye_b.onclick = function () {
    eye.style.display = 'block';
    eye_b.style.display = 'none';
    password.type = 'text';
}
eye.onclick = function () {
    eye.style.display = 'none';
    eye_b.style.display = 'block';
    password.type = 'password';
}

function get() {
    id = document.getElementById("input").value;
    password = document.getElementById("password").value;
    if (id !== ''&&password !=='') {
        var myHeaders = new Headers();
        myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "identifier": id,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://101.35.238.12:1337/api/auth/local", requestOptions)
            .then(function (response) {
                if(response.status == 400){
                    alert("账号或密码错误");
                }
                else{
                    window.location.href="http://127.0.0.1:5500/%E7%99%BB%E5%BD%95/%E7%95%99%E8%A8%80%E6%9D%BF/massage.html"
                }
                return response.text();
            })
            .then(function (result) {
                console.log(result);
                // obj = JSON.parse(result); 
                // console.log(obj)
                // console.log(obj.error)
                // console.log(obj.error.status)
                // // console.log(obj.error.status);
            })
            .catch(function (error) {
                console.log('error', error);
            });
        // console.log(obj)
        // if(obj.error.status==400){
        //     alert("账号或密码错误");
        // }
        // else{
        //     window.
        // }
    }
    else{
        alert("账号或密码不能为空！");
    }
            

}
