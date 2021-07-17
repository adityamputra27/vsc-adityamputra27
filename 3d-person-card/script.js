window.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mouse-x', (e.clientX / document.body.offsetWidth) * 100)
    document.body.style.setProperty('--mouse-y', (e.clientY / document.body.offsetHeight) * 100)
}, false)