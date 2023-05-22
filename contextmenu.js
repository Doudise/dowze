function showLimitedKeys(){
    showdialograw({
        title: "朵梓网快捷键：",
        text: "<ul><li>加载朵梓网快捷键(Ctrl+Shift+A)</li><li>重新加载页面(Ctrl+R)</li><li>回退到上一页(Ctrl+Z)</li><li>加载到下一页(Ctrl+Y)</li><li>回到最顶端(Ctrl+↑)</li><li>进入实验中心(Ctrl+J)</li><li>回到主页(Ctrl+0)</li><li>进入阿里谷代码平台(Ctrl+A)</li></ul>注意：本网页无法使用剪切、复制和粘贴功能，如果想粘贴，请粘贴到记事本上，再拖到框中；如果想复制，请找到“复制”按钮。",
        button: {
            text: "确定",
            onclick: 'console.log(\'确个屁的腚啊，啥也不是！\');'
        }
    });
}
document.onkeydown=(ev)=>{
    if(ev.ctrlKey){ev.preventDefault()}
    if(ev.ctrlKey&&ev.keyCode==82){location.reload();}
    if(ev.ctrlKey&&ev.keyCode==74){location.href="class.html";}
    if(ev.ctrlKey&&ev.keyCode==90){history.back();}
    if(ev.ctrlKey&&ev.keyCode==89){history.forward();}
    if(ev.ctrlKey&&ev.keyCode==38){location.href="#";}
    if(ev.ctrlKey&&ev.keyCode==48){location.href="index.html";}
    if(ev.ctrlKey&&ev.keyCode==70){location.href="Games.html";}
    if(ev.ctrlKey&&ev.shiftKey&&ev.keyCode==65){showLimitedKeys();}
    if(ev.ctrlKey&&ev.keyCode==65){location.href="index.html#AliCrops";}
};
/**@param {{ options: { menus: [{ name: string, onClick: Function }]}}} options */
const ContextMenu = function (options) {
    let instance;
    function createMenu() {
        const ul = document.createElement("ul");
        ul.classList.add("custom-context-menu");
        const { menus } = options;
        if (menus && menus.length > 0) {
            for (let menu of menus) {
                const li = document.createElement("li");
                li.onclick = menu.onClick;
                li.classList.add("custom-context-menu-list")
                li.style.border="1px solid black";
                li.style.cursor="pointer";
                ul.appendChild(li);
                li.innerHTML = menu.name;
            }
        }
        const body = document.querySelector("body");
        body.appendChild(ul);
        return ul;
    }
    return {
        // 获取实例的唯一方式
        getInstance: function () {
            if (!instance) {
                instance = createMenu();
            }
            return instance;
        },
    };
};
const menuSinglton = ContextMenu({menus: [
    {name: "查看本网页快捷键(Ctrl+Shift+A)",onClick:function(){showLimitedKeys();}},
    {name: "重新加载页面(Ctrl+R)",onClick:function(){location.reload();}},
    {name: "回退到上一页(Ctrl+Z)",onClick:function(){history.back();}},
    {name: "加载到下一页(Ctrl+Y)",onClick:function(){history.forward();}},
    {name: "回到最顶部(Ctrl+↑)",onClick:function(){location.href="#";}},
    {name: "进入实验中心(Ctrl+J)",onClick:function(){location.href="class.html";}},
    {name: "回到主页(Ctrl+0)",onClick:function(){location.href="index.html";}},
    {name: "进入功能中心(Ctrl+F)",onClick:function(){location.href="index.html";}},
    {name: "进入阿里谷代码平台(Ctrl+A)",onClick:function(){location.href="index.html#AliCrops";}},
]});
/**@param {MouseEvent} e */
function showMenu(e) {
    const menus = menuSinglton.getInstance();
    menus.style.position="fixed";
    menus.style.backgroundColor="white";
    menus.style.top = `${e.clientY}px`;
    menus.style.left = `${e.clientX}px`;
    menus.style.display = "block";
}
function hideMenu(e) {
    const menus = menuSinglton.getInstance();
    menus.style.display = "none";
    console.log(e)
}
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showMenu(e);
});
document.addEventListener("click", hideMenu);
