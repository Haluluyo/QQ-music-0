var pageIndex=0;
var isAnimate=false

var $sliderPanel=$('.panel-first');
var $imgCt=$('#slider-wrap .slider-list')
var $imgs=$('#slider-wrap .slider-list li')
var $bullet=$('#bullet li');
var $btnPre=$('.pre');
var $btnNext=$('.next');

var imgWidth=$imgs.width();
var btnWidth=$('.button').width();
var imgCount=$imgs.length;

$imgCt.prepend($imgs.eq(5).clone());
$imgCt.prepend($imgs.eq(4).clone());
$imgCt.append($imgs.eq(0).clone());
$imgCt.append($imgs.eq(1).clone());
//不把.slider-list的宽度写死
$imgCt.width((imgCount+4)*(imgWidth+20));
$imgCt.css({left: -imgWidth*2})

play();

$btnNext.click(function(){
  playNext(1);
})
$btnPre.click(function(){
  playPre(1);
})

/*自动播放效果 当鼠标悬停在页面上时停止自动播放*/
function play(){
  timer = setInterval(function(){
    playNext(1)
  },2000);
}
function stop(){
  clearInterval(timer);
}
$sliderPanel.hover(function(){
  stop();
},function(){
  play();
})

/*鼠标点击小点点按钮实现轮播效果*/
$bullet.click(function(){
  var index=$(this).index();
  if(index>pageIndex){
    playNext(index-pageIndex);
  }else{
    playPre(pageIndex-index);
  }
  
})

/*鼠标点击翻页按钮实现轮播效果*/
function playNext(idx){
    if(isAnimate) return
    isAnimate=true;
    $imgCt.animate({
      left: '-='+imgWidth*2*idx
    },function(){
      pageIndex+=idx;
      if(pageIndex===imgCount/2){
        pageIndex=0;
        $imgCt.css({left: -imgWidth*2})
      }
      setBullets();
      isAnimate=false;
    })   
}
function playPre(idx){
    if(isAnimate) return
    isAnimate=true;
    $imgCt.animate({
      left: '+='+imgWidth*2*idx
    },function(){
      pageIndex-=idx;
      if(pageIndex<0){
        pageIndex=imgCount/2-1;
        $imgCt.css({left: -imgWidth*imgCount})
      }
      setBullets();
      isAnimate=false;
    })
}

/*设置鼠标点击小点点时的显示样式*/
function setBullets(){
  $bullet.removeClass('active')
         .eq(pageIndex).addClass('active');
}
