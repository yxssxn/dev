function toggleSocials(){
    var link = document.getElementById("links")
   link.className += " a__active"
   document.getElementById("socials").style.display='flex'
   document.getElementById("bookmarks").style.display="none"
   var link2= document.getElementById("bookmark")
    link2.className -= "a__active"
}

function toggleBookMarks(){
    var link= document.getElementById("bookmark")
    link.className += " a__active"
    document.getElementById("bookmarks").style.display="flex"
    document.getElementById("socials").style.display="none"
    var link2 = document.getElementById("links")
   link2.className -= " a__active"
}

function toggleNight(){
    var element = document.body
    element.classList.toggle("night")
}

const date = new Date();
let time = date.toLocaleTimeString([], {
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit'
})

console.log(time)

function setTheme(){
    if(time >= 19 && time <= 06){
        toggleNight()
    }
}

function change(){
    if(document.getElementsByTagName("body")[0].className.match(/night/)){
        document.getElementById("night__btn").innerText="Light"
    }else{
        document.getElementById("night__btn").innerText="Dark"
    }
}

function mode(){
    toggleNight()
    change()
}