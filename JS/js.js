/**
 * Created by lifei on 2016/5/17.
 */

~function () {
    var Title = utils.getElementsByClass("navImg_introduce")[0];
    var backImg = utils.getElementsByClass("navImg_1")[0];
    var imgBottom = utils.getElementsByClass("navImg_Bottom")[0];
    var leftBtn = utils.getElementsByClass("scrollfirst")[0];
    var rightBtn = utils.getElementsByClass("scrollsecond")[0];
    var block = utils.getElementsByClass("navImg_zoom")[0];
    var pullContainer = utils.getElementsByClass("animateList")[0];
    var pullTarget = pullContainer.getElementsByTagName("li");
    var pullLen = utils.getElementsByClass("public_animate2")[0];
    var curLength = utils.getElementsByClass("public_animate1")[0].clientWidth;
    var navP = utils.getElementsByClass("navP")[0];
    var navList = utils.getElementsByClass("nav_inner")[0].getElementsByTagName("li");
    var inner = utils.getElementsByClass("nav_inner")[0];
    var Head = utils.getElementsByClass("head_right")[0];
    var navHB = utils.getElementsByClass("navHB")[0];
    var navHide = utils.getElementsByClass("nav_hideU");
    var navHead = utils.getElementsByClass("navHead")[0];
    var navB = utils.getElementsByClass("navB")[0];
    var navShow = utils.getElementsByClass("nav_hide")[0];
    var nav = document.getElementById("nav");
    var head1 = document.getElementById("head1");
    var hoverImg = utils.getElementsByClass("introduce_p2");
    var hoverImg1 = utils.getElementsByClass("troduce_p2");
    var navHIDE = utils.getElementsByClass("navHead")[0];
    var load=utils.getElementsByClass("alert_list_secondbottomWord");
  var loud1=  document.getElementById("click1");
    for (var i = 0; i < load.length; i++) {
        var cur =load[i];
        cur.onclick= alert1;
    }
    loud1.onclick=alert1;
    function alert1 () {
        window.open("../HTML/3登陆页面.html")
    }
    ~function bind() {
        var val = null;
        var Title = utils.getElementsByClass("navImg_introduce")[0];
        var backImg = utils.getElementsByClass("navImg_1")[0];

        var xhr = new XMLHttpRequest();
        xhr.open("get","../JSON/json1.txt",false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /2\d{2}/.test(xhr.status)) {
                val = DOM.formatJSON(xhr.responseText)
            }
        };
        xhr.send(null);
        ~function () {
            var str1 = "";
            for (var i = 0; i < val.length; i++) {
                var cur = val[i];
                if (i === 0) {
                    str1 += '<div class="imgbox nav_auto nav_special"><a href=""><img src="' + cur.img1 + '" alt=""/></a></div>'
                } else {
                    str1 += ' <div class="imgbox navnomal"><a href=""><img src="' + cur.img1 + '" alt=""/></a></div>';
                }
                imgBottom.innerHTML = str1
            }
        }();
        var count = 0;

        function load() {
            ++count;
            var cur = val[count];
            backImg.style.background = "url(" + cur.img + ") no-repeat center ";
            Title.innerText = cur.title;
            if (count === val.length - 1) {
                count = -1;
            }
            backImg.style.opacity = 0;
            zhufengAnimate(backImg, {opacity: 1}, 500);
            focus(count);
        }

        var timer = setInterval(load, 2000);
        var imgList = DOM.children(imgBottom, "div");

        function focus(count) {
            for (var i = 0; i < imgList.length; i++) {
                if (count === -1)count = 13;
                if (count === 0) {
                    i >= 0 && i <= 6 ? imgList[i].style.display = "inline-block" : imgList[i].style.display = "none"
                }
                if (count === 7) {
                    i >= 0 && i <= 6 ? imgList[i].style.display = "none" : imgList[i].style.display = "inline-block"
                }
                count === i ? imgList[count].className = "nav_auto" : imgList[i].className = "navnomal";
            }
            zhufengAnimate(backImg, {opacity: 1}, 500);


        }

        ~function () {
            for (var i = 0; i < imgList.length; i++) {
                ~function (i) {
                    var cur = imgList[i];
                    cur.onmouseover = function () {
                        window.clearInterval(timer);
                        count = i - 1;
                        load();
                        focus(count);
                    };
                    cur.onmouseout = function () {
                        timer = setInterval(load, 2000);

                    };
                }(i)
            }

        }();
        block.onmouseenter = function (e) {
            e = e || window.event;
            var tar = e.target || e.srcElement;
            if (tar.className === "scrollfirst" || tar.className === "scrollsecond" || tar.className === "scrollLeft" || tar.className === "scrollright") {
                window.clearInterval(timer);
            }

        };
        block.onmouseleave = function (e) {
            e = e || window.event;
            var tar = e.target || e.srcElement;
            if (tar.className === "scrollfirst" || tar.className === "scrollsecond" || tar.className === "scrollLeft" || tar.className === "scrollright") {
                timer = setInterval(load, 2000);
            }

        };
        function public(step) {
            for (var i = 0; i < imgList.length; i++) {
                if (step === 1) {
                    i >= 0 && i <= 6 ? imgList[i].style.display = "inline-block" : imgList[i].style.display = "none"
                }
                if (step === -1) {
                    i >= 0 && i <= 6 ? imgList[i].style.display = "none" : imgList[i].style.display = "inline-block"
                }
            }
        }

        var step = 1;
        block.onclick = function (e) {
            e = e || window.event;
            var tar = e.target || e.srcElement;
            if (tar.className === "scrollLeft" || tar.className === "scrollright") {
                step *= -1;
                public(step);
            }


        };


    }();

    //��һ��ͷ�� �����˵�
    function pubHover(x) {
        for (var i = 0; i < x.length; i++) {
            var cur = x[i];
            cur.index = i
            cur.onmouseenter = function () {
                x[this.index].style.background = "rgba(0,0,0,.2)"
            };
            cur.onmouseleave = function () {
                x[this.index].style.background = "none"
            };


        }
    }

    pubHover(hoverImg);
    pubHover(hoverImg1);
    ~function () {
        var ho = utils.getElementsByClass("a_hover");
        var alert = utils.getElementsByClass("alert1");
        for (var i = 0; i < 2; i++) {
            var cur = ho[i];
            cur.index = i;
            cur.onmouseover = function () {
                for (var i = 0; i < 2; i++) {
                    alert[i].style.display = "none"
                }
                alert[this.index].style.display = "block"
            };
            cur.onmouseout = function () {
                for (var i = 0; i < 2; i++) {
                    alert[i].style.display = "none"
                }
            };
            var cur2 = alert[i];
            cur2.onmouseleave = function () {
                this.style.display = "none"
            }
            cur2.onmouseenter = function () {
                this.style.display = "block"
            }
        }
        //��������
        var third = utils.getElementsByClass("head_right_first")[0];
        var thirdList = utils.getElementsByClass("alert_list_second", third);
        var control = utils.getElementsByClass("alert_list_secondWord");
        var controlW = utils.getElementsByClass("alert_list_secondLastWordRightHide");
        var controlH = utils.getElementsByClass("alert_list_secondLastWordRight");
        var controlHH = utils.getElementsByClass("alert_list_secondLastWordRight2");
        var thirdshow= utils.getElementsByClass("alert_list_secondbottomalert_list_secondbottomWord")[0];
        var thirdshow2= utils.getElementsByClass("alert_list_secondbottomalert_list_secondbottomWord")[1];







        for (var k = 0; k < thirdList.length; k++) {
            var cur3 = thirdList[k];
            cur3.index = k;
            cur3.onmouseover = function () {
                var g = this.index;
                control[g].style.width = 300 + "px";
                controlW[g].style.background = "#a45500";
                controlW[g].style.width = 356 + "px";
                controlH[g].style.display = "none";
                controlHH[g].style.display = "inline-block";

            };
            cur3.onmouseout = function () {
                var g = this.index;
                controlW[g].style.background = "none";
                control[g].style.width = 240 + "px";
                controlW[g].style.width = 240 + "px";
                controlH[g].style.display = "inline-block";
                controlHH[g].style.display = "none";
            }
        }
    }();


//    ����������
    ~function () {
        for (var i = 0; i < navList.length; i++) {
            ~function (i) {
                var cur = navList[i];
                cur.index = i;
                cur.onmouseover = function (e) {
                    e = e || window.event;
                    zhufengAnimate(navHB, {height: 44}, 200);
                    zhufengAnimate(navShow, {height: 44}, 200);

                    for (var j = 0; j < navHide.length; j++) {
                        var curHide = navHide[this.index];
                        j === this.index ? curHide.style.display = "block" : navHide[j].style.display = "none";
                    }
                    navP.style.display = "block";
                    navP.style.left = -44 + i * 44 + "px";
                    if (i === 11) {
                        navP.style.left = 460 + "px";
                    }
                    if (i === 18) {
                        navP.style.left = 737 + "px";
                    }
                    if (i >= 19 && i < 21) {
                        navP.style.left = 780 + (i - 19) * 44 + "px";
                    }
                    if (i >= 21 && i <= 22) {
                        navP.style.left = 1089 + (i - 21) * 54 + "px";
                    }


                }
            }(i)
        }
        navHead.onmouseleave= function () {
                zhufengAnimate(navShow, {height: 0}, 200);
                zhufengAnimate(navHB, {height: 0}, 200);
                navP.style.display = "none";
        }
    }()
//   top

    var scrollFunc = function (e) {

        e = e || window.event;
        if (e.wheelDelta) {  //�ж������IE���ȸ軬���¼�
            if (e.wheelDelta > 0) { //���������Ϲ���ʱ
                head1.style.display = "block";
                navHIDE.style.display = "block"

            }
            if (e.wheelDelta < 0) { //���������¹���ʱ
                head1.style.display = "none";
                navHIDE.style.display = "none"
            }
        } else if (e.detail) {  //Firefox�����¼�
            if (e.detail > 0) { //���������Ϲ���ʱ
                head1.style.display = "block";
                navHIDE.style.display = "block"
            }
            if (e.detail < 0) { //���������¹���ʱ
                head1.style.display = "none";
                navHIDE.style.display = "none"
            }
        }
    }
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //�������ִ���scrollFunc����  //ie �ȸ�
    window.onmousewheel = document.onmousewheel = scrollFunc;
    var bottom2 = document.getElementById("bottom2");
    bottom2.onclick = function () {
        zhufengAnimate(document.body, {scrollTop: 0});
        this.style.display = "none"
    };
    var sign = 10;
    window.onscroll = showBtn;
    function showBtn() {
        var scrtop = DOM.win("scrollTop");
        var winScrollTop = scrtop / 4;
        var screenHeight = DOM.win("clientHeight") / 4;
        if (winScrollTop - screenHeight > 0) {
            bottom2.style.display = "block";
        }
        if (winScrollTop - screenHeight < 0) {
            bottom2.style.display = "none";
        }
        if (scrtop > sign) {
            sign = scrtop;
            head1.style.display = "none";
            navHIDE.style.display = "none"
        }
        if (scrtop < sign) {
            sign = scrtop;
            head1.style.display = "block";
            navHIDE.style.display = "block"
        }
    }
    ~function () {
        for (var i = 0; i < pullTarget.length; i++) {
            pullTarget[i].style.width=curLength + "px";
            ~function (i) {
                var curM = pullTarget[i];
                curM.onmouseenter= function () {
                    if(i==4){
                       // pullContainer.style.left = -((i-1) * curLength) + "px";
                        zhufengAnimate(pullContainer,{left: -((i-1) * curLength)},500);
                       // curM.style.width = (pullLen.clientWidth) + "px";
                        zhufengAnimate(curM,{width:(pullLen.clientWidth)},500);
                        return;
                    }
                   //pullContainer.style.left = -(i * curLength) + "px";
                    zhufengAnimate(pullContainer,{left: -(i * curLength)},500);
                    //curM.style.width = (pullLen.clientWidth) + "px";
                    zhufengAnimate(curM,{width:(pullLen.clientWidth)},500);
                };
                curM.onmouseleave= function () {

                   // pullContainer.style.left =0;
                    zhufengAnimate(curM,{width:curLength},10);
                    zhufengAnimate(pullContainer,{left:0},10);
                    //curM.style.width = curLength + "px";
                };
            }(i)
        }
    }();
}();

