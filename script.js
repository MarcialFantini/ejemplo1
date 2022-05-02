const activeMenuButton = document.getElementById('btnActive')

activeMenuButton.addEventListener('click', (event) => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('nav_active')
    console.log(nav.classList)
})

const desactiveMenuButton = document.getElementById('exitButtonMenu')

desactiveMenuButton.addEventListener('click', (event) => {
    const nav = document.getElementById('nav')

    nav.classList.toggle('nav_active')
    console.log(nav.classList)
})
