window.addEventListener('load', function () {


    //获取左右按钮
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //鼠标经过显示左右按钮，停止定时器
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;//清除定时器
    })
    //鼠标离开隐藏按钮，开启定时器
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function(){
            //手动调用点击事件
            arrow_r.click();
        },2000)
    })
    //动态生成小圆圈，有几张图生成几个小圆圈，图的个数可以通过li的个数得到
    var ul = focus.querySelector('ul');//ul很多，我们只需要fucus里面的ul
    var ol = focus.querySelector('.circle')
    //通过ul.children.length可以获得ul中有几个li，即有几张图片
    for (var i = 0; i < ul.children.length; i++) {
        //创建li，把li插入到ol中
        var li = document.createElement('li');
        li.setAttribute('index', i);//自定义设置小圆圈的索引号
        ol.appendChild(li);

        //生成小圆圈的同时，绑定小圆圈的点击事件
        li.addEventListener('click', function () {
            //排他思想，先把所有的li全部去除类
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //点击哪个li就设置哪个li为current类
            this.className = 'current';
            //点击小圆圈移动图片，移动的是ul，不是li
            //ul的移动距离就是小圆圈的索引号乘以图片的宽度,向左移动，是负值
            //点击哪个li，就获得哪个li的索引号
            var index = this.getAttribute('index');//获取索引号
            //当我们点击了某个li，就要把当前的索引号给num
            num = index;
            //当我们点击了某个li，就要把当前的索引号给circle
            circle = index;
            animate(ul, -index * focusWidth);
        })

        //之所以在创建li的时候添加点击事件是因为，每一个小li都需要添加
        //如果将点击事件放在for循环外面，那么只有最后一个li添加了点击事件
    }

    //把ol中第一个li设置current类（第一个li默认为白色）
    ol.children[0].className = 'current';
    //克隆第一张图片
    //克隆不会多出一个小圆圈的原因是，我们在生成小圆圈的下面克隆了第一张图片，因此不会在多出小圆圈
    var first = ul.children[0].cloneNode(true);//深拷贝
    ul.appendChild(first);
    var num = 0;
    //点击右侧按钮，图片滚动
    var circle = 0;
    arrow_r.addEventListener('click', function () {
        //如果走到最后一张图片，此时我们的ul要快速复原，left改为0
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth);
        //点击右侧按钮，小圆圈跟随一起变化 ，可以再声明一个变量控制小圆圈的播放
        circle++;
        //如果circle ==4，说明我们走到了最后克隆的那张图片了，此时circle要赋值为0
        if (circle == ol.children.length) {
            circle = 0;
        }
        //先清除其余小圆圈的类名，在留下当下小圆圈的类名（排他思想）
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';

    })

    //左侧按钮实现向左滚动
    arrow_l.addEventListener('click', function () {
        //如果走到最后一张图片，此时我们的ul要快速复原，left改为0
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left =  -num * focusWidth + 'px';
        }
        num--;
        animate(ul, -num * focusWidth);
        //点击右侧按钮，小圆圈跟随一起变化 ，可以再声明一个变量控制小圆圈的播放
        circle--;
        //如果circle <0，第一个小圆圈要改为第四个小圆圈
        if (circle <0) {
            circle = ol.children.length - 1;
        }
        //先清除其余小圆圈的类名，在留下当下小圆圈的类名（排他思想）
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';

    })
    //实现自动播放功能
    var timer = setInterval(function(){
        //手动调用点击事件
        arrow_r.click();
    },2000)
 

})
