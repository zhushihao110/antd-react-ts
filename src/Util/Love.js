/**
 * Andrew-zsh 2019.9.30
 * 此功能模仿借鉴 https://blog.poetries.top/
 * @param {window} e 
 * @param {document} t 
 */
let Love = function(e, t) {
  function n() {
    c(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    );
      o();
      r();
  }
  // 根据浏览器触发动画  依次读取动画数据  实现动画效果
  function r() {
    for (var e = 0; e < d.length; e++){
      if(d[e].alpha <= 0){
        // 元素透明度等于0 则移除元素， 并从数据组D中删除对象
        t.body.removeChild(d[e].el); d.splice(e, 1)
      }else{
        d[e].y--;
          (d[e].scale += 0.004);
          (d[e].alpha -= 0.013);
          d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" +
          d[e].alpha +  ";transform:scale(" +  d[e].scale +  "," + d[e].scale + ") rotate(45deg);background:" +  d[e].color + ";z-index:99999"
      }
    }
    // 动画函数 递归调用
    requestAnimationFrame(r);
  }
  // 全局设置点击事件   并改写 事件操作
  function o() {
    var t = "function" == typeof e.onclick && e.onclick;
    e.onclick = function(e) {
      t && t(); i(e);
    };
  }
  // 创建div 标签 设置样式 设置动画数据
  function i(e) {
    // 创建div 标签
    var a = t.createElement("div");
    // 设置样式class
    (a.className = "heart");
    // 设置动画数据，用数组保存数据 
      d.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color: s()
      });
      // 将新建得元素添加到 document中去
      t.body.appendChild(a);
  }
  // 创建样式表style  设置样式  添加到 head标签内
  function c(e) {
    var a = t.createElement("style");
    a.type = "text/css";
    try {
      a.appendChild(t.createTextNode(e));
    } catch (t) {
      a.styleSheet.cssText = e;
    }
    t.getElementsByTagName("head")[0].appendChild(a);
  }
  // 颜色随机出现
  function s() {
    return (
      "rgb(" +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      ")"
    );
  }
  // 设置对象数组，保存多个点击触发
  var d = [];
  // 设置动画方法，兼容处理 优先使用 window.requestAnimationFrame API 性能更好，且稳定
  // 立即执行
  (e.requestAnimationFrame = (function() {
    return (
      e.requestAnimationFrame ||
      e.webkitRequestAnimationFrame ||
      e.mozRequestAnimationFrame ||
      e.oRequestAnimationFrame ||
      e.msRequestAnimationFrame ||
      function(e) {
        setTimeout(e, 1e3 / 60);
      }
    );
  })());
  n();
};
export default Love
