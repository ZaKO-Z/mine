var windowHeight = window.innerHeight;
// 获取元素
var navElement = document.querySelector('nav');

// 添加鼠标移动事件监听器
document.addEventListener('mousemove', function (event) {
    // 获取鼠标的垂直位置
    var mouseY = event.clientY;

    // 判断鼠标是否接近窗口顶端（这里使用一个阈值，你可以根据需要调整）
    if (mouseY < 10) {
        // 鼠标接近窗口顶端时执行的操作
        navElement.style.top = '0';
        // 在这里可以触发你想要执行的操作
    }
    else {
        navElement.style.top = '-120';
    }
});

