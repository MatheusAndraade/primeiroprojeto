
function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')


    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){
        img.setAttribute('src','./assets/light-avatar.png')
        img.setAttribute('alt',"Matheus light mode")
    } else {
        img.setAttribute('src','./assets/dark-avatar.png')
        img.setAttribute('alt',"Matheus dark mode")
    }

}