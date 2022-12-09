if((localStorage.getItem('check')) === null){
    localStorage.setItem('check', 1);
    document.getElementsByTagName('a')[0].click();
}
else if((localStorage.getItem('check')) == 1){
    localStorage.clear();
    document.getElementsByTagName('a')[1].click();
}