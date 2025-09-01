window.addEventListener('DOMContentLoaded', ()=> {
    const chewronUp = document.querySelector('.arrow-top');
        
    function showShewron() {
        if(window.scrollY >= 800) {
            chewronUp.style.display = 'flex'
        } else {
            chewronUp.style.display = 'none'
        }
    }
    window.addEventListener('scroll', ()=> {
        console.log(window.scrollY)
        showShewron();
    })
})