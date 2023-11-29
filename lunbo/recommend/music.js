var music = document.querySelector('.music-element')
    var playBtn = document.querySelector('.play')
    var seekbar = document.querySelector('.seekbar')
    var currentTime = document.querySelector('.current-time')
    var duration = document.querySelector('.duration')
    function handlePlay() {
        // 如果音乐处于暂停状态
        if (music.paused) {
            // 播放音乐，更改按钮样式为暂停图标
            music.play();
            playBtn.className = 'pause'
            playBtn.innerHTML = '<i class="material-icons">pause</i>'
        } else {
            // 暂停音乐，更改按钮样式为播放图标
            music.pause();
            playBtn.className = 'play'
            playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
        }
        // 当音乐播放完毕时
        music.addEventListener('ended', function () {
            // 更改按钮样式为播放图标，并将音乐当前时间重置为0
            playBtn.className = 'play'
            playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
            music.currentTime = 0
        });
    }
    // 当音乐元素的元数据加载完毕时
    music.onloadeddata = function () {
        // 设置进度条最大值为音乐总时长
        seekbar.max = music.duration// 将音乐总时长格式化为分钟和秒，并在HTML中显示出来
        var ds = parseInt(music.duration % 60)
        var dm = parseInt((music.duration / 60) % 60)
        duration.innerHTML = dm + ':' + ds
    }
    // 当音乐当前播放时间更新时
    music.ontimeupdate = function () {
        // 将进度条的值设为当前播放时间，以实现进度条随着音乐播放而动态更新
        seekbar.value = music.currentTime
    }
    // 定义处理进度条拖动的函数
    handleSeekBar = function () {
        // 将音乐当前播放时间设为进度条的值，以实现通过拖动进度条控制音乐播放进度
        music.currentTime = seekbar.value
    }
    // 每当音乐的播放时间更新时
    music.addEventListener('timeupdate', function () {
        // 将音乐当前播放时间格式化为分钟和秒，并在HTML中显示出来
        var cs = parseInt(music.currentTime % 60)
        var cm = parseInt((music.currentTime / 60) % 60)
        currentTime.innerHTML = cm + ':' + cs
    }, false)
    // 爱心点击变色
    var favIcon = document.querySelector('.favorite')
    function handleFavorite() {
        favIcon.classList.toggle('active');
    }
    // 循环播放
    var repIcon = document.querySelector('.repeat')
    function handleRepeat() {
        if (music.loop == true) {
            music.loop = false
            repIcon.classList.toggle('active')
        }
        else {
            music.loop = true
            repIcon.classList.toggle('active')
        }
    }
    // 获取 HTML 中的音量图标、音量控制器、音量滑动条、音量减小按钮和音量增加按钮
    var volIcon = document.querySelector('.volume');
    var volBox = document.querySelector('.volume-box');
    var volumeRange = document.querySelector('.volume-range');
    var volumeDown = document.querySelector('.volume-down');
    var volumeUp = document.querySelector('.volume-up');
    // 处理音量控制器的函数
    function handleVolume() {
        // 切换音量图标和音量控制器的 class 属性
        volIcon.classList.toggle('active');
        volBox.classList.toggle('active');
    }
    // 为音量减小按钮和音量增加按钮分别添加 click 事件监听器，
    // 调用 handleVolumeDown 和 handleVolumeUp 函数
    volumeDown.addEventListener('click', handleVolumeDown);
    volumeUp.addEventListener('click', handleVolumeUp);
    // 处理音量减小的函数
    function handleVolumeDown() {
        // 将音量滑动条的值减少 20
        volumeRange.value = Number(volumeRange.value) - 20;
        // 将音乐的音量设置为音量滑动条的值除以 100
        music.volume = volumeRange.value / 100;
    }
    // 处理音量增加的函数
    function handleVolumeUp() {
        // 将音量滑动条的值增加 20
        volumeRange.value = Number(volumeRange.value) + 20;
        // 将音乐的音量设置为音量滑动条的值除以 100
        music.volume = volumeRange.value / 100;
    }