
    let bar = document.getElementById('bars')
    let mobile = document.getElementById('mobile')
    let close = document.getElementById('close')
    bar.onclick = () => {
        mobile.classList.remove('selected')
    }  
    close.onclick = () => {
        mobile.classList.add('selected')
    }  
    
