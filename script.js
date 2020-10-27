// selectors
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = box.style.backgroundColor;
        box.style.transition = 'all 0.3s ease-out';
    })
})

boxes.forEach(box => {
    box.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = 'transparent';
        box.style.transition = 'all 0.3s ease-out';
    })
})