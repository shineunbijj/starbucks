// 검색 ------------------------------------------
const searchEl = document.querySelector('.search_bar');
const searchInputEl = searchEl.querySelector('input');
console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener(
    'click', function(){ 
        searchInputEl.focus() 
});

searchInputEl.addEventListener(
    'focus', function(){ 
        searchEl.classList.add('focused');
        searchInputEl.setAttribute('placeholder','검색어를 입력해주세요.') 
});
searchInputEl.addEventListener(
    'blur', function(){ 
        searchEl.classList.remove('focused');
        searchInputEl.setAttribute('placeholder','') 
});
