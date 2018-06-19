/*轮播组件 class的作用是方便以后复用，复用方式：app.js中new一个新的，传入新的id*/
class Slider{
    constructor(options = {}){
        this.$el = options.el
        //console.log('el',this.el)
        //this.innerHTML = ''
        //this.$wrap = this.$el.firstElementChild
        //this.length = this.$wrap.children.length
        //this.$wrap.style.width = $(this.length * 100)%
        this.slides = options.slides
        this.interval = options.interval || 2000 //刷新时间
        //this.autoplay = options.autoplay || true //自动播放
        this.index = 0
        this.render()
        this.start()

    }
    /*通过JS渲染页面，目前大部分网站的数据都是通过服务器接口获取 由js渲染到页面*/
    render(){
        this.$el.innerHTML = '<div class="qq-slider-wrap"></div>'
        this.$wrap = this.$el.firstElementChild
        this.$wrap.style.width = '${this.slides.length * 100}%'
        this.$wrap.innerHTML = this.slides.map(slide =>
          '<div class="qq-slider-item"><a href="${slide.link}" target="_blank"><img src="${slide.image}" alt=""></a></div>'
        ).join('')
    }

    start(){
        setInterval(this.next.bind(this),this.interval)
    }

    next(){
        this.index += 1
        if(this.index === this.slides.length){
          this.$wrap.style.transform = 'translate(0)'
          this.index = 0
          return
        }
        let x = '-${this.index * 100 / this.slides.length}%'
        this.$wrap.style.transform = 'translate(${x})'
        //this.$wrap.style.transform =''
    }
}