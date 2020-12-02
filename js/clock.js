const localTime = document.querySelector('.clock');

const viewLocaleTime = () => {
    localTime.textContent = (new Date()).toLocaleTimeString('hu');
    localTime.textContent.length != 8 ? localTime.textContent = '0' + localTime.textContent : localTime.textContent;
    window.setTimeout(() => {
        viewLocaleTime();
    }, 1000);
}

viewLocaleTime();