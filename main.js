// Javascript for tab navigation horizontal scroll buttons
const leftBtn = document.querySelector(".left-btn")
const rightBtn = document.querySelector(".right-btn")
const tabMenu = document.querySelector(".tab-menu")

const IconVisible = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft)
    //console.log(scrollLeftValue)
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth

    // Verificando a condicional do valor do Scroll.
    leftBtn.style.display = scrollLeftValue > 0 ? "block" : "none"
    rightBtn.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
    // Essa regra consiste em fazer com que quando scrollar para esquerda a seta da direito fica em 
    // Display NONE -- mesmo caso da quando volta scrolando para direito (inicio) 
}

rightBtn.addEventListener('click', () => {
    tabMenu.scrollLeft += 150 // Valor cocatenado do scroll width 150
    //IconVisible()
    setTimeout(() => IconVisible(), 50)
})

leftBtn.addEventListener('click', () => {
    tabMenu.scrollLeft -= 150
    //IconVisible()
    setTimeout(() => IconVisible(), 50)
})

// Funcao ao Carregar o Windows
window.onload = function() {
    rightBtn.style.display = tabMenu.scrollWidth > tabMenu.clientWidth ||
                            tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    leftBtn.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none"
}  

window.onresize = function() {
    rightBtn.style.display = tabMenu.scrollWidth > tabMenu.clientWidth ||
                            tabMenu.scrollWidth >= window.innerWidth ? "block" : "none"
    leftBtn.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none"

    let scrollLeftValue = Math.round(tabMenu.scrollLeft)
    leftBtn.style.display = scrollLeftValue > 0 ? "block" : "none"
}

// Javascript to make the tab navigation daggable - Arrastar com o Mouse point
let activeDrag = false
 
// Realizar o movimneto do Mouse no tab Menu.
tabMenu.addEventListener('mousemove', (drag) => {
    if(!activeDrag) return
    tabMenu.scrollLeft -= drag.movementX
    IconVisible()

    tabMenu.classList.add('dragging')
})

// Retirar o mouse do tab Menu
document.addEventListener('mouseup', () => {
    activeDrag = false

    tabMenu.classList.remove('dragging')
})

// Ativar o uso do Mouse no tab Menu
tabMenu.addEventListener('mousedown', () => {
    activeDrag = true
})

// Javascript to view tab contents on click tab buttons
const tabs = document.querySelectorAll(".tab")
const tabBtns = document.querySelectorAll(".tab-btn")

const tab_Nav = function(tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active")
    })
    tabs.forEach((tab) => {
        tab.classList.remove("active")
    })


    tabBtns[tabBtnClick].classList.add('active')
    tabs[tabBtnClick].classList.add('active')
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener('click', () => {
        tab_Nav(i)
    })
})