// 给提交按钮添加点击事件监听器
document.getElementById('submitBtn').addEventListener('click', function () {
    // 获取用户名和留言内容
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    // 如果留言内容为空，弹出提示并返回
    if (message === '') {
        alert('请输入内容');
        return;
    }
    // 如果用户名为空，将用户名设置为匿名
    if (username === '') {
        username = '匿名';
    }
    // 获取留言板元素和当前时间
    var messageBoard = document.getElementById('messageBoard');
    var newMessage = document.createElement('div');
    newMessage.classList.add('message');
    // 设置留言元素的innerHTML，包含用户名、时间和留言内容
    newMessage.innerHTML = '<div class="message-info"><div class="info"><img src="1.jpg"><strong>'
        + username + '</strong></div><span>发布于：' + getCurrentTime() +
        '</span></div><div class="content">' + message + '</div>';
    // 在留言板的第一个子元素之前插入新的留言
    messageBoard.insertBefore(newMessage, messageBoard.firstChild);
    // 清空用户名和留言内容的输入框
    document.getElementById('username').value = '';
    document.getElementById('message').value = '';
});
// 获取当前时间的函数
function getCurrentTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}