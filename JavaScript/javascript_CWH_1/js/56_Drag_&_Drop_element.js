const imgbox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
imgbox.addEventListener('dragstart',(e)=>{
    console.log('DragStart has been triggerd');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide'
    }, 0);
})
imgbox.addEventListener('dragend',(e)=>{
    console.log('Dragend has been triggerd');
    e.target.className = 'imgBox';
})

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('dragover has been triggered');
    })
    
    whiteBox.addEventListener('dragenter', (e)=>{
        console.log('dragenter has been triggered');
        e.target.className += ' dashed'
    })
    
    whiteBox.addEventListener('dragleave', (e)=>{
        console.log('dragleave has been triggered');
        e.target.className = ' whiteBox'
    })
    
    whiteBox.addEventListener('drop', (e)=>{
        console.log('drop has been triggered');
        e.target.append(imgbox)
    })

}