var overlay
var backdrop
var hamburger
var sideMenu
let currentImage = 0

window.addEventListener('DOMContentLoaded', (event) => {
    overlay = document.getElementsByClassName('overlay')[0]
    backdrop = document.getElementsByClassName('backdrop')[0]
    hamburger = document.getElementsByClassName('hamburger-menu-button')[0]
    sideMenu = document.getElementsByClassName('side-menu')[0]

    Array.from(document.getElementsByClassName('gallery-item')).forEach((item,i) => {
        item.addEventListener('click', () =>{
            showOverlay()
            showBackdrop()
            showImage(i)
        })
    })
    overlay.getElementsByClassName('btn-close')[0].addEventListener('click', () => {
        hideBackdrop()
        hideOverlay()
    })
    sideMenu.getElementsByClassName('btn-close')[0].addEventListener('click', () => {
        hideBackdrop()
        hideSideMenu()
    })
    hamburger.addEventListener('click', () => {
        showBackdrop()
        showSideMenu()
    })
})

function showImage(num) {
    overlay.getElementsByClassName("big-image")[0].src = document.getElementsByClassName('gallery-item')[num].getElementsByClassName('item-img')[0].src
    currentImage=num
}

function showBackdrop() {
    backdrop.style.opacity = '100%'
    backdrop.style.zIndex = '10'
}

function hideBackdrop() {
    backdrop.style.opacity = '0%'
    setTimeout(() =>{
        backdrop.style.zIndex = '-1'
    }, 100)
}

function showOverlay() {
    overlay.style.opacity = '100%'
    overlay.style.zIndex = '100'
}

function hideOverlay() {
    overlay.style.opacity = '0%'
    overlay.style.zIndex = '-1'
}

function showSideMenu() {
    sideMenu.style.transform = 'translate(0,0)'
}

function hideSideMenu() {
    sideMenu.style.transform = 'translate(100%,0)'
}



