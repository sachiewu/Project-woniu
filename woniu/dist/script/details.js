"use strict";!function(){document.querySelector(".section");var f=document.querySelector(".part-l-image"),t=document.querySelector(".pic"),o=document.querySelector(".title"),i=document.querySelector(".sellprice"),e=location.search.substring(1).split("=")[1],c=document.querySelector(".carBtns"),u=document.querySelector(".pro_num"),d=document.querySelector(".alertbox"),n=document.querySelector(" .alertbox span"),s=document.querySelector(".btn2"),a=document.querySelector(".nav_a_c"),l=document.querySelector(".dt"),r=document.querySelector(".xf"),p=document.querySelector(".df"),y=document.querySelector(".part-l");ajax({url:"http://10.31.158.24/1905-js/project/woniu/php/details.php",data:{picid:e},dataType:"json",success:function(e){l.src=e.url,t.src=e.url,f.setAttribute("sid",e.picid),o.innerHTML=e.title,i.innerHTML=e.price}}),f.onmouseover=function(){console.log(1),r.style.display="block",p.style.display="block",r.style.width=f.offsetWidth*p.offsetWidth/l.offsetWidth+"px",r.style.height=f.offsetHeight*p.offsetHeight/l.offsetHeight+"px";var i=l.offsetWidth/f.offsetWidth;this.onmousemove=function(e){var t=(e=e||window.event).clientX-y.offsetLeft-r.offsetWidth/2,o=e.clientY-y.offsetTop-r.offsetHeight/2;t<0?t=0:t>=f.offsetWidth-r.offsetWidth-2&&(t=f.offsetWidth-r.offsetWidth-2),o<0?o=0:o>=f.offsetHeight-r.offsetHeight-2&&(o=f.offsetHeight-r.offsetHeight-2),r.style.left=t+"px",r.style.top=o+"px",l.style.left=-t*i+"px",l.style.top=-o*i+"px"}},f.onmouseout=function(){console.log(2),r.style.display="none",p.style.display="none"};var m=[],h=[];c.onclick=function(){getcookie("cookiesid")&&getcookie("cookienum")&&(m=getcookie("cookiesid").split(","),h=getcookie("cookienum").split(","));var e=f.getAttribute("sid");if(-1===m.indexOf(e))m.push(e),h.push(u.value),setcookie("cookiesid",m.toString(),30),setcookie("cookienum",h.toString(),30);else{var t=parseInt(h[m.indexOf(e)])+parseInt(u.value);h[m.indexOf(e)]=t,setcookie("cookienum",h.toString(),30)}var o=document.createElement("div");o.style.cssText="width:50px;height:50px;background:grey;position:absolute;left:400px;top:400px;border-radius:50%",document.body.append(o);var i=o.offsetLeft,c=o.offsetTop,n={x:a.offsetLeft-i,y:a.offsetTop-c};console.log(n.x);var s=(n.y-5e-4*n.x*n.x)/n.x,l=0,r=setInterval(function(){o.offsetLeft>=a.offsetLeft?(clearInterval(r),document.body.removeChild(o)):(l+=50,o.style.left=i+l+"px",o.style.top=c+5e-4*l*l+s*l+"px")},30);d.style.display="block"},n.onclick=function(){d.style.display="none"},s.onclick=function(){d.style.display="none"};var v=document.querySelector(".morebtn"),g=document.querySelector(".lessbtn");v.onclick=function(){var e=u.value;e++,u.value=e},g.onclick=function(){if(1==u.value)return!1;var e=u.value;e--,u.value=e}}();