(function(){
    //let slider = new $slider(document.querySelector('#slider'))
    let slider = new Slider({
      el: document.querySelector('#slider'),
      slides: [
        {link: '#1', image: '../images/panel1_carousel_pic0.png'},
        {link: '#2', image: '../images/panel1_carousel_pic1.png'},
        {link: '#3', image: '../images/panel1_carousel_pic2.png'},
        {link: '#4', image: '../images/panel1_carousel_pic3.png'},
        {link: '#5', image: '../images/panel1_carousel_pic4.png'},
        {link: '#6', image: '../images/panel1_carousel_pic5.png'}
      ]
    

    })

    window.slider = slider
})()