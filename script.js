// selectors
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = box.style.backgroundColor;
    })
})

boxes.forEach(box => {
    box.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = 'transparent';
    })
})