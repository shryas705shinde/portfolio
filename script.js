const cursor = document.querySelector('.cursor');
document.addEventListener('mouseover', (e)=>{
    cursor.style.left =e.pageX + 'px'
    cursor.style.top =e.pageY + 'px'
})