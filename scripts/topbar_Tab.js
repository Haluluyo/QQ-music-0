var topTabs=document.querySelectorAll('#navigation li');
topTabs.forEach(function(tab){
  tab.addEventListener('click',function(){
    topTabs.forEach(function(node){
      node.classList.remove('navActive');
    });
    this.classList.add('navActive'); 
  })
})
var homeTab=document.querySelector('#home');
var loginTab=document.querySelector('#login');
var subNav=document.querySelector('.subnav');
var subTab=document.querySelector('.tab-contents');
var unlogin=document.querySelector('.unlogin');
homeTab.addEventListener('click',function(){
  console.log('音乐馆')
  subNav.classList.remove('hide');
  subTab.classList.remove('hide');
  unlogin.classList.add('hide'); 
})

loginTab.addEventListener('click',function(){
  console.log('我的音乐')
  subNav.classList.add('hide');
  subTab.classList.add('hide');
  unlogin.classList.remove('hide');  
})