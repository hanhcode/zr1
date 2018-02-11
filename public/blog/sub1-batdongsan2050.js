var atag = 'a',imgtag = 'img', ifrtag = 'iframe';
//JS Cookie
function createCookie(c,d,e){if(e){var b=new Date();b.setTime(b.getTime()+(e*24*60*60*1000));var a="; expires="+b.toGMTString()}else{var a=""}document.cookie=c+"="+d+a+"; path=/"}function readCookie(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length)}}return null}function eraseCookie(a){createCookie(a,"",-1)};

//jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);
function ts_isRTL(){var t=$("#dectdirect").hasClass("rtl")?!0:!1;return t}

// Simple Tab JQuery Plugin by Taufik Nurrohman https://plus.google.com/108949996304093815163/about
!function(a){a.fn.simpleTab=function(e){return e=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},e),this.each(function(){var i=a(this),n=i.children("[data-tab]"),t=e.active-1;i.addClass("simpleTab").prepend('<ul class="tab-wrapper"></ul>'),n.addClass("tab-content").each(function(){a(this).hide(),i.find(".tab-wrapper").append("<li><"+atag+' href="#">'+a(this).data("tab")+"</"+atag+"></li>")}).eq(t).show(),i.find(".tab-wrapper a").on("click",function(){var i=a(this).parent().index();return a(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab"),a(this).addClass("activeTab"),n.eq(i).is(":hidden")&&n.hide().eq(i).fadeIn(e.showSpeed),!1}).eq(t).addClass("activeTab")})}}(jQuery);

// JQuery hover event with timeout by Taufik Nurrohman https://plus.google.com/108949996304093815163/about
!function(n){n.fn.hoverTimeout=function(t,u,e,i){return this.each(function(){var o=null,c=n(this);c.hover(function(){clearTimeout(o),o=setTimeout(function(){u.call(c)},t)},function(){clearTimeout(o),o=setTimeout(function(){i.call(c)},e)})})}}(jQuery);