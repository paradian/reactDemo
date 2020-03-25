function rem_resize() {
    var o = 800;
    var html = document.getElementsByTagName('html')[0];
    var w = html.offsetWidth; //$(window).width();
    var n = Math.max(Math.min(w, 480), 320);
    var p = Math.floor(n / o * 100);
    document.querySelector("html").style.fontSize = p + "px";
    console.log('resize')
}
// rem_resize();
// window.addEventListener("onresize",() =>{
//     rem_resize();
// })
// window.onresize = function () {
//     rem_resize();
// }