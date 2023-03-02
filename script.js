var bigImage
var backdrop
var hamburger
var sideMenu

window.addEventListener('DOMContentLoaded', (event) => {
    bigImage = document.getElementsByClassName('big-image')[0]
    backdrop = document.getElementsByClassName('backdrop')[0]
    hamburger = document.getElementsByClassName('hamburger-menu-button')[0]
    sideMenu = document.getElementsByClassName('side-menu')[0]

    Array.from(document.getElementsByClassName('gallery-item')).forEach(item => {
        item.addEventListener('click', () =>{
            showBigImage()
            showBackdrop()
            bigImage.src = item.getElementsByClassName("item-img")[0].src
        })
    });
    backdrop.addEventListener('click', () => {
        hideBackdrop()
        hideBigImage()
        hideSideMenu()
    })
    hamburger.addEventListener('click', () => {
        showBackdrop()
        showSideMenu()
    })
})

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

function showBigImage() {
    bigImage.style.opacity = '100%'
    bigImage.style.zIndex = '100'
}

function hideBigImage() {
    bigImage.style.opacity = '0%'
    bigImage.style.zIndex = '-1'
}

function showSideMenu() {
    sideMenu.style.transform = 'translate(0,0)'
}

function hideSideMenu() {
    sideMenu.style.transform = 'translate(100%,0)'
}



