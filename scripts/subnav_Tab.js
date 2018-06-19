
var $subTab=$('.nav-item')
$subTab.click(function(){
  var $this=$(this)
  var idx=$this.index()
  console.log(idx)
  $this.find('a').addClass('subActive')
         .parent().siblings().find('a').removeClass('subActive');
  $('.tab-contents').find('.navtab-ct').addClass('hide')
                    .parent().find('.navtab-ct').eq(idx).removeClass('hide');
})



/* ES6
document.addEventListener('click',function(event){
    let target = event.target
    if(target.dataset.role !== 'tab') return
    [].forEach.call(targrt.parentElement.children, tab => {
        tab.classList.remove('active')
    })
    target.classList.add('active')

    let content = document.querySelector(target.dataset.view)
    if(content){
        [].fotEach.call(content.parentElement.children, child => {
            child.style.display = 'none'
        })
        content.style.display = 'block'
    }
})
*/