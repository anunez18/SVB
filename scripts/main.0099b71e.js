$("#menu-toggle").click(function(a){a.preventDefault(),$("#wrapper").toggleClass("toggled")}),$.fn.scrollView=function(){return this.each(function(){$("html, body").animate({scrollTop:$(this).offset().top},1200)})},$('a[href^="#about"]').click(function(a){a.preventDefault(),$(".s-2").scrollView()}),$('a[href^="#services"').click(function(a){a.preventDefault(),$(".s-3").scrollView()}),$('a[href^="#advertise"').click(function(a){a.preventDefault(),$(".s-4").scrollView()}),$('a[href^="#contact"').click(function(a){a.preventDefault(),$(".s-5").scrollView()}),$('a[href^="#channels"').click(function(a){a.preventDefault(),$(".s-6").scrollView()});var scrollme=function(a){var b={},c=a(document),d=a(window);return b.body_height=0,b.viewport_height=0,b.viewport_top=0,b.viewport_bottom=0,b.viewport_top_previous=-1,b.elements=[],b.elements_in_view=[],b.property_defaults={opacity:1,translatex:0,translatey:0,translatez:0,rotatex:0,rotatey:0,rotatez:0,scale:1,scalex:1,scaley:1,scalez:1},b.scrollme_selector=".scrollme",b.animateme_selector=".animateme",b.update_interval=10,b.easing_functions={linear:function(a){return a},easeout:function(a){return a*a*a},easein:function(a){return a=1-a,1-a*a*a},easeinout:function(a){return.5>a?4*a*a*a:(a=1-a,1-4*a*a*a)}},b.init_events=["ready","page:load","page:change"],b.init_if=function(){return!0},b.init=function(){return b.init_if()?(b.init_elements(),b.on_resize(),d.on("resize orientationchange",function(){b.on_resize()}),d.load(function(){setTimeout(function(){b.on_resize()},100)}),setInterval(b.update,b.update_interval),!0):!1},b.init_elements=function(){a(b.scrollme_selector).each(function(){var c={};c.element=a(this);var d=[];a(this).find(b.animateme_selector).addBack(b.animateme_selector).each(function(){var c={};c.element=a(this),c.when=c.element.data("when"),c.from=c.element.data("from"),c.to=c.element.data("to"),c.crop=c.element.is("[data-crop]")?c.element.data("crop"):!0,c.easing=c.element.is("[data-easing]")?b.easing_functions[c.element.data("easing")]:b.easing_functions.easeout;var e={};c.element.is("[data-opacity]")&&(e.opacity=c.element.data("opacity")),c.element.is("[data-translatex]")&&(e.translatex=c.element.data("translatex")),c.element.is("[data-translatey]")&&(e.translatey=c.element.data("translatey")),c.element.is("[data-translatez]")&&(e.translatez=c.element.data("translatez")),c.element.is("[data-rotatex]")&&(e.rotatex=c.element.data("rotatex")),c.element.is("[data-rotatey]")&&(e.rotatey=c.element.data("rotatey")),c.element.is("[data-rotatez]")&&(e.rotatez=c.element.data("rotatez")),c.element.is("[data-scale]")&&(e.scale=c.element.data("scale")),c.element.is("[data-scalex]")&&(e.scalex=c.element.data("scalex")),c.element.is("[data-scaley]")&&(e.scaley=c.element.data("scaley")),c.element.is("[data-scalez]")&&(e.scalez=c.element.data("scalez")),c.properties=e,d.push(c)}),c.effects=d,b.elements.push(c)})},b.update=function(){window.requestAnimationFrame(function(){b.update_viewport_position(),b.viewport_top_previous!=b.viewport_top&&(b.update_elements_in_view(),b.animate()),b.viewport_top_previous=b.viewport_top})},b.animate=function(){for(var a=b.elements_in_view.length,c=0;a>c;c++)for(var d=b.elements_in_view[c],e=d.effects.length,f=0;e>f;f++){var g=d.effects[f];switch(g.when){case"view":case"span":var h=d.top-b.viewport_height,i=d.bottom;break;case"exit":var h=d.bottom-b.viewport_height,i=d.bottom;break;default:var h=d.top-b.viewport_height,i=d.top}g.crop&&(0>h&&(h=0),i>b.body_height-b.viewport_height&&(i=b.body_height-b.viewport_height));var j=(b.viewport_top-h)/(i-h),k=g.from,l=g.to,m=l-k,n=(j-k)/m,o=g.easing(n),p=b.animate_value(j,o,k,l,g,"opacity"),q=b.animate_value(j,o,k,l,g,"translatey"),r=b.animate_value(j,o,k,l,g,"translatex"),s=b.animate_value(j,o,k,l,g,"translatez"),t=b.animate_value(j,o,k,l,g,"rotatex"),u=b.animate_value(j,o,k,l,g,"rotatey"),v=b.animate_value(j,o,k,l,g,"rotatez"),w=b.animate_value(j,o,k,l,g,"scale"),x=b.animate_value(j,o,k,l,g,"scalex"),y=b.animate_value(j,o,k,l,g,"scaley"),z=b.animate_value(j,o,k,l,g,"scalez");"scale"in g.properties&&(x=w,y=w,z=w),g.element.css({opacity:p,transform:"translate3d( "+r+"px , "+q+"px , "+s+"px ) rotateX( "+t+"deg ) rotateY( "+u+"deg ) rotateZ( "+v+"deg ) scale3d( "+x+" , "+y+" , "+z+" )"})}},b.animate_value=function(a,c,d,e,f,g){var h=b.property_defaults[g];if(!(g in f.properties))return h;var i=f.properties[g],j=e>d?!0:!1;if(d>a&&j)return h;if(a>e&&j)return i;if(a>d&&!j)return h;if(e>a&&!j)return i;var k=h+c*(i-h);switch(g){case"opacity":k=k.toFixed(2);break;case"translatex":k=k.toFixed(0);break;case"translatey":k=k.toFixed(0);break;case"translatez":k=k.toFixed(0);break;case"rotatex":k=k.toFixed(1);break;case"rotatey":k=k.toFixed(1);break;case"rotatez":k=k.toFixed(1);break;case"scale":k=k.toFixed(3)}return k},b.update_viewport_position=function(){b.viewport_top=d.scrollTop(),b.viewport_bottom=b.viewport_top+b.viewport_height},b.update_elements_in_view=function(){b.elements_in_view=[];for(var a=b.elements.length,c=0;a>c;c++)b.elements[c].top<b.viewport_bottom&&b.elements[c].bottom>b.viewport_top&&b.elements_in_view.push(b.elements[c])},b.on_resize=function(){b.update_viewport(),b.update_element_heights(),b.update_viewport_position(),b.update_elements_in_view(),b.animate()},b.update_viewport=function(){b.body_height=c.height(),b.viewport_height=d.height()},b.update_element_heights=function(){for(var a=b.elements.length,c=0;a>c;c++){var d=b.elements[c].element.outerHeight(),e=b.elements[c].element.offset();b.elements[c].height=d,b.elements[c].top=e.top,b.elements[c].bottom=e.top+d}},c.on(b.init_events.join(" "),function(){b.init()}),b}(jQuery);