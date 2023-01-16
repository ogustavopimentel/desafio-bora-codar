
function show360() {

    const getStatusProduct = document.querySelector("#product");
    const getIdIcon = document.querySelector("#icon");
    const getIdImageProduct = document.querySelector("#image-product");
    

    if(getStatusProduct.classList.contains('hide-360')) {
        getIdIcon.setAttribute('src', './assets/icon-close.svg')
        getIdImageProduct.setAttribute('src', './assets/sofa.gif')
        getStatusProduct.classList.remove('hide-360')
        getStatusProduct.classList.add('close-360')
    } else {
        getIdIcon.setAttribute('src', './assets/icon-360.svg')
        getIdImageProduct.setAttribute('src', './assets/sofa.png')
        getStatusProduct.classList.remove('close-360')
        getStatusProduct.classList.add('hide-360')
    }
    
}