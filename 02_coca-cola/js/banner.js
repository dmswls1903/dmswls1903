//banner.js


/*----------------------------banner--------------------------*/
function banner( ) {
    $('.left_btn').on('click', function( ) { 
         var banner_li = $('.banner_box').find('li'),
                banner_li_width = banner_li.width();
        
        banner_li.first().stop().animate({marginLeft:banner_li_width}, 500, function( ) {             
            banner_li.css({marginLeft:0}).last().prependTo('.banner_box');
            
        });
    });
    
    
    
    $('.right_btn').on('click', function( ) { 
        var banner_li = $('.banner_box').find('li'),
                banner_li_width = banner_li.width();                
        banner_li.first().stop().animate({marginLeft:-banner_li_width}, 500, function( ) {             
            banner_li.css({marginLeft:0}).first().appendTo('.banner_box');
        });
    });
    
    
    
    var timer;
    //일정한 시간간격을 두고 움직이는 기능 : setInterval    
    function startBtn( ) { timer = setInterval( '$(".right_btn").click()', 4000 ) };
    
    startBtn();
    //setInterval을 없애는 기능
    function stopBtn( ) { clearInterval ( timer ) };
    
    $(".banner_box").on( { 'mouseover' : stopBtn ,'mouseout' : startBtn } );
    
    };




/*----------------------------coke_brands--------------------------*/
function brs( ) {
    $('.left_btn_brs').on('click', function( ) { 
         var brs_li = $('.brs_box').find('li'),
                brs_li_width = brs_li.width();
        
        brs_li.first().stop().animate({marginLeft:brs_li_width}, 960, function( ) {             
            brs_li.css({marginLeft:0}).last().prependTo('.brs_box');
            
        });
    });
    
    
    
    $('.right_btn_brs').on('click', function( ) { 
        var brs_li = $('.brs_box').find('li'),
                brs_li_width = brs_li.width();                
        brs_li.first().stop().animate({marginLeft:-brs_li_width}, 960, function( ) {             
            brs_li.css({marginLeft:0}).first().appendTo('.brs_box');
        });
    });
    
    
    
/*    var timer;
    //일정한 시간간격을 두고 움직이는 기능 : setInterval    
    function startBtn( ) { timer = setInterval( '$(".right_btn_brs").click()', 4000 ) };*/
    
    startBtn();
    //setInterval을 없애는 기능
    function stopBtn( ) { clearInterval ( timer ) };
    
//    $(".brs_box").on( { 'mouseover' : stopBtn ,'mouseout' : startBtn } );
    
    };
