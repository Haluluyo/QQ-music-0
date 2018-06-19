var curPage = 0;
var perPageCount = 10;
var isDataArrive = true;

renderList();

$(window).scroll(function(){
    if(!isDataArrive) return
    if(isVisible($('#isload'))){
        renderList();
    }  
})
function renderList(){
    getData(function(newList){
      //console.log(newList)
        isDataArrive = true
        $.each(newList, function (idx, news) {
            //console.log(news)
            console.log(news.length)
            var $node = getNode(news)
            //console.log($node)
            $node.find('img').on('load', function () {
                $('.lazyload-list').append($node)
            })
        })
    })
    isDataArrive = false
}

function getData(callback){
    $.ajax({
        type: "GET",
        url: "../json/lazyload.json",
        dataType: "json",
        data: {
            num: perPageCount, 
            page: curPage
        },

　　　　 success: function(result){
            if(result && result.status && result.status.code === "0"){
                callback(result.data);
                curPage ++
                //console.log(curPage);
            }else{
                console.log('get error data');
            }
        }
    });
}

function getNode(list){
    var html='';
    html += '<li>';
    html += '<a class="cover" href="'+list.new_url+'" target="_blank">';
    html += '<img src="'+list.img_url+'" alt=""><div class="cover-img"></div></a>';
    html += '<div class="singer-info">';
    html += '<a href="'+list.new_url+'" target="_blank">'+list.short_intro+'</a>';
    html += '<a class="singer-name" href="#">'+list.short_name+'</a>';
    html += '<p>'+list.play_num+'</p>';
    html += '</div></li>';
    return $(html);
}

function isVisible($div){
    var windowHeight=$(window).height();
    var scrollTop=$(window).scrollTop();
    var offsetTop=$div.offset().top;
    if(offsetTop+200>windowHeight+scrollTop){
      return true;
    }else{
      return false;
    }
} 
/* 太麻烦啦=.=
function getNode(list){
    if(list.length === 0){
        $('.bottom').text('没有更多数据了…');
        return false;
    }
    for(var i=0;i<list.length;i++){
        var $li = $('<li></li>');
        var $coverLink = $('<a class="cover"></a>');
        var $coverImg = $('<img>');
        var $coverDiv = $('<div class="cover-img"></div>');
        var $div = $('<div class="singer-info"></div>');
        var $introLink = $('<a></a>');
        var $nameLink = $('<a class="singer-name"></a>');
        var $playNum = $('<p></p>');

        $coverLink.attr('href',list[i].new_url);
        $coverLink.attr('target','_blank');
        $coverImg.attr('src',list[i].img_url);
        $coverLink.append($coverImg).append($coverDiv);

        $introLink.attr('href',list[i].new_url);
        $introLink.attr('target','_blank');
        $introLink.text(list[i].short_intro);
        $nameLink.attr('href','#');
        $nameLink.text(list[i].short_name);
        $playNum.text(list[i].play_num);
        $div.append($introLink).append($nameLink).append($playNum)

        $li.append($coverLink).append($div)
        $('.lazyload-list').append($li)
    }
}
$(window).scroll(function(){
    if($('.bottom').text() !== ''){
        return false;
      }
    if(isVisible($('#isload'))){
        getData(getNode);
    }  
})
*/


