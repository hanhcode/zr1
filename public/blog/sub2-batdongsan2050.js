//jQuery Simple Spy
(function(a){a.simpleSpy=function(d,f){var b=this;b.$el=a(d);b.init=function(){b.options=a.extend({},a.simpleSpy.defaultOptions,f);var c=b.$el,d=!0,g=[],e=b.options.limit,h=0,l=c.find("> .items:first").outerHeight(!0),m=c.find("> .items:first").height();c.find("> .items").each(function(){g.push('<div class="items">'+a(this).html()+"</div>")});h=g.length;c.wrap('<div class="spyWrapper" />').parent().css({height:l*b.options.limit});c.find("> .items").filter(":gt("+(b.options.limit-1)+")").remove();
    c.bind("stop",function(){d=!1}).bind("start",function(){d=!0});var k=function(){if(d){var f=a(g[e]).css({height:0,opacity:0}).prependTo(c);c.find("> .items:last").animate({opacity:0},1E3,function(){f.animate({height:m},1E3).animate({opacity:1},1E3);a(this).remove()});e++;e>=h&&(e=0)}setTimeout(k,b.options.interval)};k()};b.init()};a.simpleSpy.defaultOptions={limit:4,interval:4E3};a.fn.simpleSpy=function(d){return this.each(function(){new a.simpleSpy(this,d)})}})(jQuery);

// highlight v4 by Johann Burkard http://johannburkard.de
(function(e){e.fn.highlight=function(c){function e(b,c){var d=0;if(3==b.nodeType){var a=b.data.toUpperCase().indexOf(c);if(0<=a){d=document.createElement("span");d.className="highlight";a=b.splitText(a);a.splitText(c.length);var f=a.cloneNode(!0);d.appendChild(f);a.parentNode.replaceChild(d,a);d=1}}else if(1==b.nodeType&&b.childNodes&&!/(script|style)/i.test(b.tagName))for(a=0;a<b.childNodes.length;++a)a+=e(b.childNodes[a],c);return d}return this.length&&c&&c.length?this.each(function(){e(this,c.toUpperCase())}):
    this};e.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()}})(jQuery);

//hanhcode

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
//Hanhcode Contact Form Pro
$(document).ready(function(){
    $("input#ContactForm10_contact-form-submit").hover(function(){
        var contactFormPhone = $("input#ContactForm10_contact-form-phone").val();
        var contactFormEMClone =$("textarea#ContactForm10_contact-form-email-message-clone").val();
        if( contactFormEMClone.length === 0 ) {
            $("textarea#ContactForm10_contact-form-email-message").val('');
        } else {
            $("textarea#ContactForm10_contact-form-email-message").val(contactFormEMClone + "\n" + contactFormPhone);
        }
    });
});
