!function($){wp.customize("blogname",function(value){value.bind(function(to){$(".site-title a").text(to)})}),wp.customize("blogdescription",function(value){value.bind(function(to){$(".site-description").text(to)})}),wp.customize("header_textcolor",function(value){value.bind(function(to){"blank"===to?$(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):($(".site-title, .site-description").css({clip:"auto",position:"relative"}),$(".site-title a, .site-description").css({color:to}))})})}(jQuery),function($){"use strict";$(".webalive-inline-menu li").find(".sub-menu").addClass("hide"),$(".webalive-inline-menu li").find("> .sub-menu").before('<span class="mb-toggle"><i class="fas fa-chevron-down"></i></span>'),991<$(window).width()&&($(document.body).on("mouseover",".webalive-inline-menu li",function(e){e.preventDefault(),$("li > .sub-menu",this).stop(!0,!0),$(this).find("> .sub-menu").removeClass("hide").addClass("open")}),$(document.body).on("mouseleave",".webalive-inline-menu li",function(e){e.preventDefault(),$("li > .sub-menu",this).stop(!0,!0),$(this).find("> .sub-menu").removeClass("open").addClass("hide")})),$(window).width()<991&&($(".webalive-main-menu").addClass("hide"),$(".webalive-navbar-toggler").on("click",function(e){$(this).closest("body").addClass("menu-open")}),$(".webalive-mobile-menu-wrap .close-menu").on("click",function(e){$(this).closest("body").removeClass("menu-open")}),$(".mb-toggle").on("click",function(e){e.preventDefault(),$(this).parent().find(" > .sub-menu").toggleClass("hide"),$(this).parent().find(" > .sub-menu").toggleClass("open"),$(this).find(".fas").toggleClass("fa-chevron-up")}));var c,currentScrollTop=0,navbar=$("nav#site-navigation");$(window).scroll(function(){var a=$(window).scrollTop(),b=navbar.height();c<(currentScrollTop=a)&&b+b<a?navbar.addClass("scrollUp"):currentScrollTop<c&&!(a<=b)&&navbar.removeClass("scrollUp"),c=currentScrollTop}),$(window).on("scroll",function(e){var scrollTop=$(window).scrollTop(),topMenu=$(".webalive-navbar");0<scrollTop?topMenu.addClass("in-scroll"):topMenu.removeClass("in-scroll")})}(jQuery),function($){"use strict";window.postDataReset=!1;var postsSortList=function(){$(document.body).on("click",".post-shorting-menu ul li",function(e){e.preventDefault();$(this);var postsPerPage=theme_localizer.posts_per_page,postsShown=theme_localizer.posts_per_page;$("#js-loadmore-posts").show();var appnedTo=$("#js-loadmore-post-appender"),template=wp.template("posts");$(".post-shorting-menu ul li").removeClass("active"),$(this).addClass("active");var termName=$(this).data("term");window.postDataReset=!0,$.ajax({url:theme_localizer.ajax_url,type:"post",data:{termName:termName,perPage:postsPerPage,postsShown:postsShown,action:"posts_list_by_term"},success:function(res){var data=JSON.parse(res);$(".middle-content").empty(),postsShown=parseInt(postsPerPage,10)+parseInt(postsShown,10),appnedTo.append(template(data)),data.total_posts<=postsPerPage&&$("#js-loadmore-posts").hide()}})})};postsSortList();var loadmorePosts=function(){var postsPerPage=theme_localizer.posts_per_page,postOffset=parseInt(postsPerPage,10)+1,postsShown=theme_localizer.posts_per_page,loadMoreCounter=0;$(document.body).on("click","#js-loadmore-posts",function(e){e.preventDefault();var _self=$(this);$(".lds-ellipsis").removeClass("fade-me");var appnedTo=$("#js-loadmore-post-appender"),template=wp.template("loadmore-posts"),termName=$(".post-shorting-menu ul li.active").data("term");1==window.postDataReset&&(postsPerPage=theme_localizer.posts_per_page,postsShown=postOffset=postsPerPage),$.ajax({url:theme_localizer.ajax_url,type:"post",data:{perPage:postsPerPage,offset:postOffset,postsShown:postsShown,term:termName,action:"loadmore_posts"},success:function(res){var data=JSON.parse(res);$(".lds-ellipsis").addClass("fade-me"),postOffset=parseInt(postOffset,10)+parseInt(postsPerPage,10),postsShown=parseInt(data.posts.length,10)+parseInt(postsShown,10),window.postDataReset=!1,appnedTo.append(template(data)),(data.total_posts<=postOffset||data.total_posts==postsPerPage)&&_self.hide(),postsPerPage=(loadMoreCounter+=1)%2==0?10:11}})})};loadmorePosts();var searchInBlogPosts=function(){$(document.body).on("submit","form#js-search-blog-posts",function(e){e.preventDefault();$(this);var niddle=$(this).find("#js-blog-search").val();if(""!=niddle){var postsPerPage=-1;$("#js-loadmore-posts").hide(),$(".webalive-sticky-post").hide()}else{postsPerPage=theme_localizer.posts_per_page-1;$("#js-loadmore-posts").show(),$(".webalive-sticky-post").show()}var appnedTo=$("#js-loadmore-post-appender"),template=wp.template("search-posts");appnedTo.empty(),$.ajax({url:theme_localizer.ajax_url,type:"post",data:{niddle:niddle,perPage:postsPerPage,action:"search_blog_posts"},success:function(res){var data=JSON.parse(res);appnedTo.append(template(data))}})})};searchInBlogPosts();var pageProgressBar=function(){function addEvent(el,evt,fn,bub){el.attachEvent?el.attachEvent("on"+evt,fn):el.addEventListener(evt,fn,bub)}function scrollProgress(){var top=window.pageYOffset||html.scrollTop,dist=Math.round(top/docY*100);circ.className=100<=dist?"p100":"p"+dist,document.querySelector("#circ > span").innerHTML=dist+"%"}document.body;var fn,ms,time,html=document.documentElement,docY=$(".text-area").height(),circ=(window.innerHeight||html.clientHeight,document.querySelector("#circ"));addEvent(window,"resize",(fn=function(){docY=$(".text-area").height(),scrollProgress()},ms=100,time=null,function(){var a=arguments,t=this;clearTimeout(time),time=setTimeout(function(){fn.apply(t,a)},ms)}),!1),addEvent(window,"scroll",function(fn,ms){var time,last=0;return function(){var a=arguments,t=this,now=+new Date,exe=function(){last=now,fn.apply(t,a)};clearTimeout(time),last+ms<=now?exe():time=setTimeout(exe,ms)}}(scrollProgress,100),!1)};$("#circ").length&&pageProgressBar();var pageProgressCirclebar=function(){var blogWrapperHeight=$(".text-area").height(),totalHeight=($(".blog-head-section").height(),parseInt(blogWrapperHeight,10)-100);$(window).scroll(function(e){var windowScrolledHeight=parseInt($(window).scrollTop(),10);totalHeight<windowScrolledHeight?$(".webalive-post-sharer-aside").css({opacity:0,transition:"all 0.3s ease-in-out"}):$(".webalive-post-sharer-aside").css("opacity",1)})};pageProgressCirclebar();var scroller=function(){$("#arrow-down").click(function(){$("body").animate({scrollTop:eval($("#"+$(this).attr("target")).offset().top-70)},1e3)})};scroller();var scrollerToTop=function(){$("#js-scroll-to-top").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},1500,"linear")})};scrollerToTop();var stickySidebar=function(){var stickySidebar=$(".webalive-post-sharer-aside").offset().top;$(window).scroll(function(){$(window).scrollTop()>stickySidebar?$(".webalive-post-sharer-aside").addClass("affix"):$(".webalive-post-sharer-aside").removeClass("affix")})};$(".webalive-post-sharer-aside").length&&stickySidebar();var keepCategoryItemSelected=function(){$("#js-category-dropdown-menu li a").on("click",function(e){var categoryName=$(this).text();$("#js-category-dropdown").html(categoryName),"All"==categoryName?($(".webalive-sticky-post").show(),$(".category-title .title").html("")):($(".webalive-sticky-post").hide(),$(".category-title .title").html(categoryName))})};keepCategoryItemSelected();var searchToggler=function(){$(".js-serach-box").on("click",function(e){e.stopPropagation(),e.preventDefault(),$(".js-search-container").toggleClass("hide")}),$(document).on("click",function(e){$(".js-serach-box").is(e.target)||$(".js-search-container").addClass("hide")}),$(document).on("click",function(e){$("#js-blog-search").is(e.target)&&$(".js-search-container").removeClass("hide")})};searchToggler();var contactFormRedirect=function(){var wpcf7Elm=document.querySelector(".wpcf7");void 0!==wpcf7Elm&&null!=wpcf7Elm&&wpcf7Elm.addEventListener("wpcf7mailsent",function(event){is_page("contact-us")&&(window.location.href=theme_localizer.home_url+"thank-you-contact-us")},!1)};contactFormRedirect(),$(".customer-video .webalive-offgrid-canvas .play-btn").click(function(){$(".customer-video .offgrid-video-player").addClass("open")}),$(".customer-video .offgrid-video-player .frame-close").click(function(){$(".customer-video .offgrid-video-player").removeClass("open")})}(jQuery);
//# sourceMappingURL=theme.min.js.map