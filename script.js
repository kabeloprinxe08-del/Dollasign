/* ===== EDIT ME: all the brand content lives here ===== */
var CFG={wa:"27747933007",email:"Legwatilesego@gmail.com",phone:"074 793 3007",addr:"Brits, North West, South Africa. Full street address coming soon."};
/* Drop countdown. Example: "2026-12-01T18:00:00+02:00". Leave empty to show "coming soon". */
var DROP_DATE="";
/* null means closed. These hours are placeholders until the real ones are confirmed. */
var HOURS=[["Sunday",null,null],["Monday","09:00","17:00"],["Tuesday","09:00","17:00"],["Wednesday","09:00","17:00"],["Thursday","09:00","17:00"],["Friday","09:00","17:00"],["Saturday","09:00","15:00"]];
var STORY=["Dollasign was born in Brits, North West, where music runs through everything. The beat, the DJ booth and the street are all in the clothes.","Every piece is built heavy and cut clean: premium 180gsm to 300gsm tees, panel caps and crop tops made to be worn loud. Add the founder's real story here: who started Dollasign, when, and what the name means."];
var FAQ=[
 {q:"How long does delivery take?",a:"We deliver nationwide. Most orders arrive within 3 to 5 business days after your order is confirmed."},
 {q:"Where do you deliver?",a:"Anywhere in South Africa. Send your delivery address with your order and we will confirm the delivery fee on WhatsApp."},
 {q:"How do I order?",a:"Pick your pieces and size, add them to your cart, then tap Order on WhatsApp. We confirm your order and payment details with you personally."},
 {q:"What are the tees made of?",a:"Our tees are premium heavyweight tees from 180gsm to 300gsm. The higher the gsm, the thicker and heavier the fabric. Prices run from R400 to R500."},
 {q:"How do I choose my size?",a:"Use the size filter on the shop to see what is available. Not sure? Message us on WhatsApp with your usual size and we will help you pick."},
 {q:"Can I collect my order?",a:"Message us first on WhatsApp and we will arrange it with you. Add your collection details and policy here."}];
var REVIEWS=[{t:"Add a real customer review here. One or two sentences work best.",a:"Customer name"},{t:"A second customer review goes here. Copy it exactly as they wrote it.",a:"Customer name"},{t:"A third review goes here. Ask customers for permission first.",a:"Customer name"}];
/* PRODUCTS: photos go in images/product1.jpg to images/product8.jpg. Caps and crop top prices are samples. */
var PRODUCTS=[
 {id:"t180",cat:"Tees",n:"Heavyweight Tee",sub:"180gsm",p:400,sizes:["S","M","L","XL","XXL"],b:"New",type:"tee",gsm:180},
 {id:"t220",cat:"Tees",n:"Heavyweight Tee",sub:"220gsm",p:430,sizes:["S","M","L","XL","XXL"],b:"",type:"tee",gsm:220},
 {id:"t250",cat:"Tees",n:"Heavyweight Tee",sub:"250gsm",p:460,sizes:["S","M","L","XL","XXL"],b:"Best seller",type:"tee",gsm:250},
 {id:"t300",cat:"Tees",n:"Oversized Heavy Tee",sub:"300gsm",p:500,sizes:["M","L","XL","XXL"],b:"New",type:"tee",gsm:300},
 {id:"c1",cat:"Caps",n:"Panel Cap",sub:"Aqua",p:250,sizes:["One size"],b:"New",type:"cap"},
 {id:"c2",cat:"Caps",n:"Panel Cap",sub:"Midnight",p:250,sizes:["One size"],b:"",type:"cap"},
 {id:"k1",cat:"Crop tops",n:"Ladies Crop Top",sub:"Everyday fit",p:300,sizes:["XS","S","M","L","XL"],b:"New",type:"crop"},
 {id:"k2",cat:"Crop tops",n:"Ladies Crop Top",sub:"Heavy fabric",p:350,sizes:["XS","S","M","L"],b:"",type:"crop"}];
var SOCIAL=[{k:"WhatsApp",i:"wa",url:"https://wa.me/"+CFG.wa},{k:"Instagram",i:"ig",url:""},{k:"Facebook",i:"fb",url:""},{k:"TikTok",i:"tt",url:""}];
var SIZES=["XS","S","M","L","XL","XXL"];
var COLORS=[["Aqua","#A8DCE7"],["Midnight","#101422"],["White","#FFFFFF"],["Teal","#27B2B3"]];
var TEE_GSM={180:400,220:430,250:460,300:500};
/* ================================================== */
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function R(n){return"R "+n}
var IMG=["jpg","jpeg","png","webp","JPG","JPEG","PNG"];
var HOVER=matchMedia("(hover:hover) and (pointer:fine)").matches;
function sv(x){return'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+x+"</svg>"}
var ICONS={ig:sv('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor"/>'),fb:sv('<path d="M14 21v-8h2.6l.4-3h-3V8.4c0-.9.3-1.4 1.5-1.4H17V4.2A15 15 0 0 0 14.9 4C12.7 4 11.2 5.3 11.2 7.7V10H8.5v3h2.7v8"/>'),wa:sv('<path d="M3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 8 19.5l-4.5 1z"/><path d="M9.2 8.6c-.3.7-.1 1.7.8 2.9.9 1.2 2 1.9 3 2.2.7.2 1.4-.2 1.7-.9l-1.3-.9-.7.5c-.6-.3-1.2-.9-1.6-1.6l.5-.7-.9-1.3z"/>'),tt:sv('<path d="M14 3.5v10.2a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3.5c.3 2.3 1.8 3.9 4 4.1"/>')};
function cands(path,exts){var o=[],p=path.split("/"),f=p.pop(),F=f.charAt(0).toUpperCase()+f.slice(1);[f,F].forEach(function(n){exts.forEach(function(x){o.push(p.join("/")+"/"+n+"."+x)})});return o}
function load(el,list,fail){var i=0;function next(){if(i<list.length)el.src=list[i++];else fail()}el.addEventListener("error",next);next()}
function slot(box,list,hint){var el=document.createElement("img");el.alt=hint;el.decoding="async";el.loading="lazy";el.addEventListener("load",function(){box.classList.add("rdy")});box.appendChild(el);load(el,list,function(){box.innerHTML="Add "+list[0].replace(/\.[^.]+$/,"")+".jpg"})}
function toast(t){var e=$("toast");e.textContent=t;e.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove("on")},1800)}

/* ---------- logo (top left): images/logo.png, falls back to the text wordmark ---------- */
var LOGO_IMG=null;
(function(){var im=$("logoimg");im.addEventListener("load",function(){im.hidden=false;$("logotxt").hidden=true;LOGO_IMG=im;if(window.onLogo)window.onLogo(im)});load(im,cands("images/logo",IMG),function(){})})();

/* ---------- cart ---------- */
var CART={};
function totals(){var n=0,t=0;Object.keys(CART).forEach(function(k){n+=CART[k].q;t+=CART[k].q*CART[k].p});return{n:n,t:t}}
function renderCart(bump){
  var T=totals(),c=$("cn");c.hidden=T.n===0;c.textContent=T.n;
  if(bump){c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump")}
  $("dl").innerHTML=T.n?Object.keys(CART).map(function(k){var it=CART[k];return'<div class="dr"><b>'+esc(it.n)+"</b><span>"+R(it.q*it.p)+"</span><small>Size: "+esc(it.s)+'</small><div class="qty"><button type="button" data-k="'+esc(k)+'" data-d="-1" aria-label="Remove one">&minus;</button>'+it.q+'<button type="button" data-k="'+esc(k)+'" data-d="1" aria-label="Add one">+</button></div></div>'}).join(""):'<p class="empty">Your cart is empty. Pick something from the shop.</p>';
  $("dt").textContent=R(T.t);if(!T.n)closeDrawer();
}
function addToCart(name,size,price){if(!size){toast("Pick a size first");return false}var k=name+"|"+size;if(CART[k])CART[k].q++;else CART[k]={n:name,s:size,p:price,q:1};renderCart(true);toast("Added to cart");return true}
function openDrawer(){$("drawer").classList.add("on");$("dback").classList.add("on");$("drawer").setAttribute("aria-hidden","false")}
function closeDrawer(){$("drawer").classList.remove("on");$("dback").classList.remove("on");$("drawer").setAttribute("aria-hidden","true")}
$("cbtn").addEventListener("click",openDrawer);$("dx").addEventListener("click",closeDrawer);$("dback").addEventListener("click",closeDrawer);
$("dl").addEventListener("click",function(e){var k=e.target.getAttribute("data-k");if(!k)return;CART[k].q+=+e.target.getAttribute("data-d");if(CART[k].q<=0)delete CART[k];renderCart(false)});
$("of").addEventListener("submit",function(e){e.preventDefault();var T=totals();if(!T.n){$("dl").innerHTML='<p class="empty">Add something to your cart first.</p>';return}
  var d=new FormData($("of")),m="Order - Dollasign\n"+Object.keys(CART).map(function(k){var i=CART[k];return i.q+" x "+i.n+" ("+i.s+") - "+R(i.q*i.p)}).join("\n")+"\nSubtotal: "+R(T.t)+"\nName: "+d.get("name")+"\nPhone: "+d.get("phone")+"\nDelivery address: "+d.get("address")+"\nNotes: "+(d.get("note")||"-");
  window.open("https://wa.me/"+CFG.wa+"?text="+encodeURIComponent(m),"_blank")});
renderCart(false);

/* ---------- shop ---------- */
(function(){
  var cats=["All"].concat(PRODUCTS.map(function(p){return p.cat}).filter(function(v,i,a){return a.indexOf(v)===i})),cat="All",size="",sort="feat",pick={};
  function draw(){
    $("tabs").innerHTML=cats.map(function(c){return'<button type="button" class="'+(c===cat?"on":"")+'" data-c="'+esc(c)+'">'+esc(c)+"</button>"}).join("");
    $("sizes").innerHTML=['<button type="button" class="'+(size?"":"on")+'" data-s="">All</button>'].concat(SIZES.map(function(s){return'<button type="button" class="'+(s===size?"on":"")+'" data-s="'+s+'">'+s+"</button>"})).join("");
    var r=PRODUCTS.filter(function(p){return(cat==="All"||p.cat===cat)&&(!size||p.sizes.indexOf(size)>-1||p.sizes[0]==="One size")});
    if(sort==="lo")r=r.slice().sort(function(a,b){return a.p-b.p});if(sort==="hi")r=r.slice().sort(function(a,b){return b.p-a.p});
    $("grid").innerHTML=r.length?r.map(function(p){var i=PRODUCTS.indexOf(p),sel=pick[p.id]||(size&&p.sizes.indexOf(size)>-1?size:"");
      return'<article class="card glass tilt" data-id="'+p.id+'"><div class="im">'+(p.b?'<span class="bdg">'+esc(p.b)+"</span>":"")+'</div><div class="info"><h3>'+esc(p.n)+"</h3><small>"+esc(p.sub)+'</small><span class="pr">'+R(p.p)+'</span></div><div class="csz">'+p.sizes.map(function(s){return'<button type="button" class="'+(s===sel?"on":"")+'" data-p="'+p.id+'" data-s="'+esc(s)+'">'+esc(s)+"</button>"}).join("")+'</div><div class="cact"><button class="btn solid" type="button" data-add="'+p.id+'">Add to cart</button><button class="btn" type="button" data-v="'+p.id+'">View in 3D</button></div></article>'}).join(""):'<p class="empty">No pieces in that size right now. Try another size.</p>';
    document.querySelectorAll("#grid .card").forEach(function(c){var p=PRODUCTS.filter(function(x){return x.id===c.getAttribute("data-id")})[0],k=PRODUCTS.indexOf(p);slot(c.querySelector(".im"),cands("images/product"+(k+1),IMG),p.n);c.classList.add("rv","in")});
    document.querySelectorAll("#grid .csz button.on").forEach(function(b){});
    tilt();
  }
  function tilt(){if(!HOVER)return;document.querySelectorAll(".tilt").forEach(function(el){
    el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform="rotateY("+x*9+"deg) rotateX("+-y*9+"deg)"});
    el.addEventListener("pointerleave",function(){el.style.transform=""})})}
  $("tabs").addEventListener("click",function(e){var c=e.target.getAttribute("data-c");if(c){cat=c;draw()}});
  $("sizes").addEventListener("click",function(e){var s=e.target.getAttribute("data-s");if(s!==null){size=s;draw()}});
  $("sort").addEventListener("change",function(){sort=this.value;draw()});
  $("grid").addEventListener("click",function(e){var t=e.target,p;
    if(t.getAttribute("data-p")){pick[t.getAttribute("data-p")]=t.getAttribute("data-s");t.parentNode.querySelectorAll("button").forEach(function(b){b.classList.toggle("on",b===t)})}
    else if(t.getAttribute("data-add")){p=PRODUCTS.filter(function(x){return x.id===t.getAttribute("data-add")})[0];var s=pick[p.id]||(p.sizes.length===1?p.sizes[0]:(size&&p.sizes.indexOf(size)>-1?size:""));addToCart(p.n+" "+p.sub,s,p.p)}
    else if(t.getAttribute("data-v")){p=PRODUCTS.filter(function(x){return x.id===t.getAttribute("data-v")})[0];studio.show(p.type,p.gsm);$("studio").scrollIntoView({behavior:"smooth"})}});
  draw();
})();

/* ---------- 3D studio UI (works even if WebGL is unavailable) ---------- */
var studio=(function(){
  var st={type:"tee",gsm:220,col:0,size:"",gl:null};
  var TYPES=[["tee","T-shirt"],["cap","Panel cap"],["crop","Crop top"]];
  function price(){return st.type==="tee"?TEE_GSM[st.gsm]:st.type==="cap"?250:300}
  function name(){return(st.type==="tee"?"Heavyweight Tee "+st.gsm+"gsm":st.type==="cap"?"Panel Cap":"Ladies Crop Top")+" ("+COLORS[st.col][0]+")"}
  function sizes(){return st.type==="cap"?["One size"]:st.type==="crop"?["XS","S","M","L","XL"]:["S","M","L","XL","XXL"]}
  function draw(){
    $("vt").innerHTML=TYPES.map(function(t){return'<button type="button" class="'+(t[0]===st.type?"on":"")+'" data-t="'+t[0]+'">'+t[1]+"</button>"}).join("");
    $("vn").textContent=st.type==="tee"?"Heavyweight tee":st.type==="cap"?"Panel cap":"Ladies crop top";
    $("gsw").hidden=st.type!=="tee";
    $("vg").innerHTML=Object.keys(TEE_GSM).map(function(g){return'<option value="'+g+'"'+(+g===st.gsm?" selected":"")+">"+g+"gsm - "+R(TEE_GSM[g])+"</option>"}).join("");
    $("vc").innerHTML=COLORS.map(function(c,i){return'<button type="button" class="'+(i===st.col?"on":"")+'" data-c="'+i+'" style="background:'+c[1]+'" aria-label="'+c[0]+'" title="'+c[0]+'"></button>'}).join("");
    var sz=sizes();if(sz.indexOf(st.size)<0)st.size=sz.length===1?sz[0]:"";
    $("vs").innerHTML=sz.map(function(s){return'<button type="button" class="'+(s===st.size?"on":"")+'" data-s="'+esc(s)+'">'+esc(s)+"</button>"}).join("");
    $("vp").textContent=R(price());
    if(st.gl)st.gl.set(st.type,COLORS[st.col][1]);
  }
  $("vt").addEventListener("click",function(e){var t=e.target.getAttribute("data-t");if(t){st.type=t;draw()}});
  $("vc").addEventListener("click",function(e){var c=e.target.getAttribute("data-c");if(c!==null){st.col=+c;draw()}});
  $("vs").addEventListener("click",function(e){var s=e.target.getAttribute("data-s");if(s){st.size=s;draw()}});
  $("vg").addEventListener("change",function(){st.gsm=+this.value;draw()});
  $("vadd").addEventListener("click",function(){addToCart(name(),st.size,price())});
  draw();
  return{show:function(t,g){st.type=t;if(g)st.gsm=g;draw()},attach:function(g){st.gl=g;g.set(st.type,COLORS[st.col][1])}};
})();

/* ---------- story, faq, reviews, hours, contact ---------- */
$("storytxt").innerHTML=STORY.map(function(p){return"<p>"+esc(p)+"</p>"}).join("");
$("faq").innerHTML=FAQ.map(function(f,i){return"<details"+(i===0?" open":"")+"><summary>"+esc(f.q)+"</summary><p>"+esc(f.a)+"</p></details>"}).join("");
$("rvs").innerHTML=REVIEWS.map(function(r){return'<div class="rc glass"><div class="st" aria-label="5 stars">\u2605\u2605\u2605\u2605\u2605</div><p>\u201C'+esc(r.t)+"\u201D</p><b>"+esc(r.a)+"</b></div>"}).join("");
function jhb(){var o={};new Intl.DateTimeFormat("en-US",{timeZone:"Africa/Johannesburg",weekday:"long",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date()).forEach(function(x){o[x.type]=x.value});return{day:o.weekday,min:(+o.hour%24)*60+ +o.minute}}
function mins(s){var a=s.split(":");return+a[0]*60+ +a[1]}
function hours(){var n=jhb(),open=false;
  $("hrs").innerHTML=HOURS.map(function(h){var t=h[0]===n.day;if(t&&h[1])open=n.min>=mins(h[1])&&n.min<mins(h[2]);return'<div class="'+(t?"today":"")+'"><span>'+h[0]+"</span><span>"+(h[1]?h[1]+" to "+h[2]:"Closed")+"</span></div>"}).join("")+'<p class="fine">Hours are placeholders until confirmed. Message us on WhatsApp to be sure.</p>';
  var b=$("badge");b.textContent=open?"Open now":"Closed now";b.className="badge "+(open?"open":"closed")}
hours();setInterval(hours,60000);
$("addr").textContent=CFG.addr;$("yr").textContent=new Date().getFullYear();
[$("mail"),$("fmail")].forEach(function(e){e.textContent=CFG.email;e.href="mailto:"+CFG.email});
[$("call"),$("fcall")].forEach(function(e){e.textContent=CFG.phone;e.href="tel:"+CFG.phone.replace(/\s/g,"")});
$("fsoc").innerHTML=SOCIAL.map(function(s){return'<a class="'+(s.url?"":"off")+'" aria-label="'+esc(s.k)+'" title="'+esc(s.k)+(s.url?"":" (coming soon)")+'" '+(s.url?'href="'+esc(s.url)+'" target="_blank" rel="noopener"':"")+">"+ICONS[s.i]+"</a>"}).join("");
$("totop").addEventListener("click",function(e){e.preventDefault();scrollTo({top:0,behavior:"smooth"})});
$("nf").addEventListener("submit",function(e){e.preventDefault();var p=new FormData($("nf")).get("phone");window.open("https://wa.me/"+CFG.wa+"?text="+encodeURIComponent("Hi Dollasign, please notify me about the Ride The Wind drop. My number: "+p),"_blank")});
function cmsg(){var d=new FormData($("f"));return"Message - Dollasign\nName: "+d.get("name")+"\nPhone: "+d.get("phone")+"\n\n"+d.get("msg")}
$("f").addEventListener("submit",function(e){e.preventDefault();window.open("https://wa.me/"+CFG.wa+"?text="+encodeURIComponent(cmsg()),"_blank")});
$("mailbtn").addEventListener("click",function(){if(!$("f").reportValidity())return;location.href="mailto:"+CFG.email+"?subject="+encodeURIComponent("Dollasign enquiry")+"&body="+encodeURIComponent(cmsg())});
(function(){var d=DROP_DATE?new Date(DROP_DATE):null;if(!d||isNaN(d)||d<=new Date())return;$("cd").hidden=false;
  function tick(){var s=Math.max(0,Math.floor((d-new Date())/1000));$("cdD").textContent=Math.floor(s/86400);$("cdH").textContent=Math.floor(s%86400/3600);$("cdM").textContent=Math.floor(s%3600/60);$("cdS").textContent=s%60}tick();setInterval(tick,1000)})();

/* ---------- scroll: nav, progress, story slides, reveals ---------- */
var heroP=0,heroAlpha=1;
(function(){
  var hd=$("hd"),pr=$("prog"),sc=$("top"),slides=document.querySelectorAll(".sl"),dots=document.querySelectorAll("#sdots i"),cur=-1,tk=false,links={};
  document.querySelectorAll(".nl a").forEach(function(a){links[a.getAttribute("href").slice(1)]=a});
  function u(){tk=false;var y=scrollY,h=document.documentElement.scrollHeight-innerHeight,span=sc.offsetHeight-innerHeight;
    hd.classList.toggle("sc",y>40);pr.style.width=(h>0?y/h*100:0)+"%";
    heroP=Math.max(0,Math.min(1,y/span));heroAlpha=1-Math.max(0,Math.min(1,(y-span)/(innerHeight*.7)));
    var i=heroP<.34?0:heroP<.68?1:2;if(i!==cur){cur=i;slides.forEach(function(s,k){s.classList.toggle("on",k===i)});dots.forEach(function(d,k){d.classList.toggle("on",k===i)})}}
  addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(u)}},{passive:true});addEventListener("resize",u);u();
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)Object.keys(links).forEach(function(n){links[n].classList.toggle("on",n===e.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});
  Object.keys(links).forEach(function(n){var s=$(n);if(s)o.observe(s)});
  var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");rv.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll(".sh,.fbar,.stu,.drop>*,.vin,.stxt,.dlv,.faq details,.rc,.vtxt,.mapbox,.ctxt,#f,.trust").forEach(function(el,i){el.classList.add("rv");el.style.transitionDelay=(i%4)*70+"ms";rv.observe(el)});
  var mb=$("mbtn"),mn=$("mnav");mb.addEventListener("click",function(){var on=mn.classList.toggle("on");mn.setAttribute("aria-hidden",!on)});
  mn.addEventListener("click",function(){mn.classList.remove("on")});
  addEventListener("keydown",function(e){if(e.key==="Escape"){closeDrawer();mn.classList.remove("on")}});
})();

/* ================= THREE.JS ================= */
function glowTex(){var c=document.createElement("canvas");c.width=c.height=64;var g=c.getContext("2d"),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)");r.addColorStop(.5,"rgba(255,255,255,.35)");r.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=r;g.fillRect(0,0,64,64);return new THREE.CanvasTexture(c)}
function teeShape(crop){var s=new THREE.Shape();
  if(!crop){s.moveTo(-.55,1.9);s.lineTo(-1.35,1.75);s.lineTo(-2.35,.85);s.lineTo(-2.0,.35);s.lineTo(-1.3,.75);s.lineTo(-1.3,-1.9);s.lineTo(1.3,-1.9);s.lineTo(1.3,.75);s.lineTo(2.0,.35);s.lineTo(2.35,.85);s.lineTo(1.35,1.75);s.lineTo(.55,1.9)}
  else{s.moveTo(-.55,1.9);s.lineTo(-1.35,1.75);s.lineTo(-2.1,1.0);s.lineTo(-1.8,.5);s.lineTo(-1.3,.75);s.lineTo(-1.25,-.55);s.lineTo(1.25,-.55);s.lineTo(1.3,.75);s.lineTo(1.8,.5);s.lineTo(2.1,1.0);s.lineTo(1.35,1.75);s.lineTo(.55,1.9)}
  s.quadraticCurveTo(0,.8,-.55,1.9);return s}
function shirtGeo(crop){var g=new THREE.ExtrudeGeometry(teeShape(crop),{depth:.16,bevelEnabled:true,bevelThickness:.05,bevelSize:.05,bevelSegments:3,curveSegments:20});g.translate(0,0,-.08);g.computeVertexNormals();return g}
/* chest print: uses images/logo if found, otherwise the DOLLA$IGN wordmark */
function printTex(ink,sub){var c=document.createElement("canvas");c.width=c.height=512;var g=c.getContext("2d");g.clearRect(0,0,512,512);g.fillStyle=ink;g.textAlign="center";
  if(LOGO_IMG&&LOGO_IMG.naturalWidth){try{var w=380,h=w*LOGO_IMG.naturalHeight/LOGO_IMG.naturalWidth;g.drawImage(LOGO_IMG,66,(512-h)/2,w,h);g.getImageData(0,0,1,1)}catch(e){g.clearRect(0,0,512,512);LOGO_IMG=null}}
  if(!LOGO_IMG||!LOGO_IMG.naturalWidth){g.font="800 74px 'Unbounded','Arial Black',Impact,sans-serif";g.fillText("DOLLA$IGN",256,250);if(sub){g.font="700 30px 'Manrope',Arial,sans-serif";g.fillText("RIDE THE WIND",256,310)}}
  return new THREE.CanvasTexture(c)}

/* Scene 1: a flowing 3D t-shirt in a wind tunnel, driven by scroll and cursor */
function heroScene(){
  var cv=$("hero3d"),Rn=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
  Rn.setPixelRatio(Math.min(devicePixelRatio,1.75));
  var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(36,1,.1,80);C.position.set(0,.4,12);
  S.add(new THREE.AmbientLight(0xffffff,.55));
  var key=new THREE.PointLight(0xffffff,2.4,50);key.position.set(4,5,7);S.add(key);
  var rim=new THREE.PointLight(0x27B2B3,2.6,50);rim.position.set(-7,2,-3);S.add(rim);
  var fill=new THREE.PointLight(0xA8DCE7,1.5,50);fill.position.set(2,-4,6);S.add(fill);
  var rig=new THREE.Group(),spin=new THREE.Group();rig.add(spin);S.add(rig);
  var geo=shirtGeo(false),pos=geo.attributes.position,orig=pos.array.slice(),i;
  var body=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:0xA8DCE7,roughness:.82,metalness:0,side:THREE.DoubleSide}));spin.add(body);
  var collar=new THREE.Mesh(new THREE.TorusGeometry(.55,.055,8,28,Math.PI),new THREE.MeshStandardMaterial({color:0x8cc3cf,roughness:.8}));collar.rotation.z=Math.PI;collar.position.set(0,1.9,0);spin.add(collar);
  var dg=new THREE.PlaneGeometry(2,2,24,24),dpos=dg.attributes.position,dorig=dpos.array.slice();
  var decal=new THREE.Mesh(dg,new THREE.MeshBasicMaterial({map:printTex("#101422",true),transparent:true,depthWrite:false}));decal.position.set(0,.4,.2);spin.add(decal);
  window.onLogo=function(){decal.material.map=printTex("#101422",true);decal.material.needsUpdate=true};
  function wave(x,y,t){return Math.sin(x*1.5-t*3+y*.4)*(.05+.09*Math.abs(x)/2.4)}
  var NS=130,lp=new Float32Array(NS*6),lc=new Float32Array(NS*6),lg=new THREE.BufferGeometry(),ST=[];
  lg.setAttribute("position",new THREE.BufferAttribute(lp,3));lg.setAttribute("color",new THREE.BufferAttribute(lc,3));
  for(i=0;i<NS;i++)ST.push({x:(Math.random()-.5)*28,y:(Math.random()-.5)*11,z:(Math.random()-.5)*9-1,len:1+Math.random()*3.4,v:4+Math.random()*8,ph:Math.random()*6.28,k:Math.random()});
  var lines=new THREE.LineSegments(lg,new THREE.LineBasicMaterial({vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));lines.frustumCulled=false;S.add(lines);
  var tex=glowTex(),NP=90,pp=new Float32Array(NP*3),pg=new THREE.BufferGeometry();
  for(i=0;i<NP*3;i+=3){pp[i]=(Math.random()-.5)*20;pp[i+1]=(Math.random()-.5)*10;pp[i+2]=(Math.random()-.5)*8}
  pg.setAttribute("position",new THREE.BufferAttribute(pp,3));
  var dust=new THREE.Points(pg,new THREE.PointsMaterial({color:0xA8DCE7,size:.16,map:tex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,sizeAttenuation:true}));dust.frustumCulled=false;S.add(dust);
  var t=0,last=performance.now(),mx=0,my=0,burst=0,frame=0,live=true,intro=0;
  function layout(){var w=innerWidth,h=innerHeight;Rn.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix();if(w>=900){rig.userData.b=[3.1,0];rig.scale.setScalar(1)}else{rig.userData.b=[0,1.5];rig.scale.setScalar(w<520?.62:.8)}}
  layout();addEventListener("resize",layout);
  addEventListener("pointermove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
  addEventListener("pointerdown",function(e){if(heroAlpha>.3&&!(e.target.closest&&e.target.closest("a,button,input,select,textarea,header,aside")))burst=1});
  document.addEventListener("visibilitychange",function(){live=!document.hidden});
  (function loop(now){requestAnimationFrame(loop);var dt=Math.min(.05,(now-last)/1000||.016);last=now;
    var op=heroAlpha*Math.min(1,intro);cv.style.opacity=op;
    if(!live||heroAlpha<=.01)return;
    t+=dt;intro=Math.min(1.5,intro+dt*.7);burst*=.94;frame++;
    var b=rig.userData.b,p=heroP,e=1-Math.pow(1-Math.min(1,intro),3);
    rig.position.set(b[0],b[1]+(1-e)*-3-Math.sin(p*Math.PI)*.2,0);
    spin.rotation.y=p*Math.PI*2.4+mx*.7+Math.sin(t*.6)*.12;spin.rotation.x=-my*.25+Math.sin(p*Math.PI)*.15;spin.rotation.z=Math.sin(t*.8)*.04;
    rig.scale.setScalar((innerWidth>=900?1:innerWidth<520?.62:.8)*(1+p*.18));
    C.position.z=12-p*2.4;C.position.x+=(mx*1.4-C.position.x)*.05;C.position.y+=(.4-my*.8-C.position.y)*.05;C.lookAt(0,.2,0);
    rim.intensity=2.6+Math.sin(t*2)*.5+burst*3;
    for(i=0;i<pos.count;i++){var x=orig[i*3],y=orig[i*3+1];pos.array[i*3+2]=orig[i*3+2]+wave(x,y,t)*(1+burst*1.6)}
    pos.needsUpdate=true;if(frame%2===0)geo.computeVertexNormals();
    for(i=0;i<dpos.count;i++){var dx=dorig[i*3]*1.0,dy=dorig[i*3+1]*1.0;dpos.array[i*3+2]=wave(dx*1.1,dy*1.1+.4,t)*(1+burst*1.6)+.0}
    dpos.needsUpdate=true;
    var sp=1+burst*3+p*1.4;
    for(i=0;i<NS;i++){var s=ST[i];s.x-=s.v*dt*sp;if(s.x<-14){s.x=14;s.y=(Math.random()-.5)*11}
      var yy=s.y+Math.sin(t*1.4+s.ph)*.3,edge=Math.max(0,1-Math.abs(s.x)/14),f=edge*(.35+s.k*.65),o=i*6;
      lp[o]=s.x;lp[o+1]=yy;lp[o+2]=s.z;lp[o+3]=s.x+s.len;lp[o+4]=yy+Math.sin(t+s.ph)*.05;lp[o+5]=s.z;
      lc[o]=.66*f;lc[o+1]=.86*f;lc[o+2]=.91*f;lc[o+3]=0;lc[o+4]=0;lc[o+5]=0}
    lg.attributes.position.needsUpdate=true;lg.attributes.color.needsUpdate=true;
    dust.rotation.y=t*.03;
    try{Rn.render(S,C)}catch(x){}
  })(performance.now());
}

/* Scene 2: the 3D studio. Drag to rotate, change colour, cap and crop top included */
function studioScene(){
  var cv=$("view3d"),box=cv.parentNode,Rn=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
  Rn.setPixelRatio(Math.min(devicePixelRatio,1.75));
  var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(32,1,.1,80);C.position.set(0,1.2,11.5);
  S.add(new THREE.AmbientLight(0xffffff,.6));
  var key=new THREE.PointLight(0xffffff,2.4,50);key.position.set(5,6,7);S.add(key);
  var rim=new THREE.PointLight(0x27B2B3,2.4,50);rim.position.set(-6,2,-4);S.add(rim);
  var fill=new THREE.PointLight(0xA8DCE7,1.4,50);fill.position.set(-3,-3,6);S.add(fill);
  var plat=new THREE.Mesh(new THREE.CylinderGeometry(2.9,2.9,.12,80),new THREE.MeshStandardMaterial({color:0x1a2036,metalness:.6,roughness:.3}));plat.position.y=-2.3;S.add(plat);
  var ring=new THREE.Mesh(new THREE.TorusGeometry(2.9,.03,8,96),new THREE.MeshBasicMaterial({color:0xA8DCE7}));ring.rotation.x=Math.PI/2;ring.position.y=-2.24;S.add(ring);
  var hold=new THREE.Group();S.add(hold);
  var mat=new THREE.MeshStandardMaterial({color:0xA8DCE7,roughness:.82,side:THREE.DoubleSide}),cmat=new THREE.MeshStandardMaterial({color:0x8cc3cf,roughness:.8}),dmat=new THREE.MeshBasicMaterial({transparent:true,depthWrite:false});
  var tee=new THREE.Group(),crop=new THREE.Group(),cap=new THREE.Group();
  function shirt(g,crp){var m=new THREE.Mesh(shirtGeo(crp),mat);g.add(m);var c=new THREE.Mesh(new THREE.TorusGeometry(.55,.055,8,28,Math.PI),cmat);c.rotation.z=Math.PI;c.position.set(0,1.9,0);g.add(c);
    var d=new THREE.Mesh(new THREE.PlaneGeometry(1.9,1.9),dmat);d.position.set(0,crp?.95:.4,.17);g.add(d)}
  shirt(tee,false);shirt(crop,true);tee.position.y=-.1;crop.position.y=-.5;
  var dome=new THREE.Mesh(new THREE.SphereGeometry(1.55,56,28,0,Math.PI*2,0,Math.PI/2),mat);dome.scale.y=.86;cap.add(dome);
  for(var k=0;k<3;k++){var sm=new THREE.Mesh(new THREE.TorusGeometry(1.56,.014,6,56,Math.PI),new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:.28}));sm.rotation.y=k*Math.PI/3;sm.scale.y=.86;cap.add(sm)}
  var bs=new THREE.Shape();bs.moveTo(-1.3,0);bs.quadraticCurveTo(-1.55,1.9,0,2.05);bs.quadraticCurveTo(1.55,1.9,1.3,0);bs.lineTo(-1.3,0);
  var brim=new THREE.Mesh(new THREE.ExtrudeGeometry(bs,{depth:.07,bevelEnabled:true,bevelThickness:.02,bevelSize:.02,bevelSegments:2,curveSegments:16}),mat);brim.rotation.x=Math.PI/2-.12;brim.position.set(0,.02,1.1);cap.add(brim);
  var btn=new THREE.Mesh(new THREE.SphereGeometry(.1,12,10),cmat);btn.position.y=1.33;cap.add(btn);
  var cd=new THREE.Mesh(new THREE.PlaneGeometry(1.1,1.1),dmat);cd.position.set(0,.55,1.52);cd.rotation.x=-.28;cap.add(cd);
  cap.position.y=-1.1;cap.scale.setScalar(1.15);
  hold.add(tee);hold.add(crop);hold.add(cap);
  var cur="tee";
  function lum(h){var c=new THREE.Color(h);return c.r*.299+c.g*.587+c.b*.114}
  function setKind(type,hex){cur=type;tee.visible=type==="tee";crop.visible=type==="crop";cap.visible=type==="cap";
    mat.color.set(hex);cmat.color.set(hex).multiplyScalar(.85);
    dmat.map=printTex(lum(hex)>.5?"#101422":"#A8DCE7",false);dmat.needsUpdate=true}
  window.onLogoStudio=function(){setKind(cur,"#"+mat.color.getHexString())};
  var prevLogo=window.onLogo;window.onLogo=function(im){if(prevLogo)prevLogo(im);window.onLogoStudio()};
  studio.attach({set:setKind});
  var ry=.4,vy=0,drag=false,lx=0,idle=0,vis=false,t=0,mx=0;
  cv.addEventListener("pointerdown",function(e){drag=true;lx=e.clientX;vy=0;idle=0;cv.setPointerCapture(e.pointerId);cv.style.cursor="grabbing"});
  cv.addEventListener("pointermove",function(e){mx=e.clientX/innerWidth-.5;if(!drag)return;var d=(e.clientX-lx)*.012;lx=e.clientX;ry+=d;vy=d;idle=0});
  function up(){drag=false;cv.style.cursor="grab"}cv.addEventListener("pointerup",up);cv.addEventListener("pointercancel",up);
  function size(){var w=box.clientWidth,h=box.clientHeight;Rn.setSize(w,h,false);C.aspect=w/h;C.position.z=C.aspect<.9?15.5:C.aspect<1.3?13:11.5;C.updateProjectionMatrix()}
  size();addEventListener("resize",size);
  new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(box);
  var last=performance.now();
  (function loop(now){requestAnimationFrame(loop);var dt=Math.min(.05,(now-last)/1000||.016);last=now;if(!vis||document.hidden)return;
    t+=dt;idle+=dt;if(!drag){ry+=vy;vy*=.95;if(idle>2)ry+=.006}
    hold.rotation.y=ry;hold.position.y=Math.sin(t*1.3)*.08;ring.rotation.z=t*.3;
    C.position.x+=(mx*1.2-C.position.x)*.04;C.lookAt(0,-.2,0);
    try{Rn.render(S,C)}catch(x){}
  })(performance.now());
}

/* Scene 3: a spinning DJ vinyl with an equaliser, for the Brits music roots */
function vinylScene(){
  var cv=$("vinyl3d"),box=cv.parentNode,Rn=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
  Rn.setPixelRatio(Math.min(devicePixelRatio,1.75));
  var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(34,1,.1,80);C.position.set(0,1.6,10.5);
  S.add(new THREE.AmbientLight(0xffffff,.5));
  var key=new THREE.PointLight(0xffffff,2.2,40);key.position.set(3,6,6);S.add(key);
  var rim=new THREE.PointLight(0x27B2B3,3,40);rim.position.set(-5,2,-2);S.add(rim);
  var tilt=new THREE.Group();S.add(tilt);tilt.rotation.x=-.95;tilt.position.y=-.3;
  var disc=new THREE.Group();tilt.add(disc);
  disc.add(new THREE.Mesh(new THREE.CylinderGeometry(2.3,2.3,.09,96),new THREE.MeshStandardMaterial({color:0x090c18,metalness:.75,roughness:.28})));
  for(var r=1.05;r<2.2;r+=.1){var g=new THREE.Mesh(new THREE.RingGeometry(r,r+.014,96),new THREE.MeshBasicMaterial({color:0x232a48,side:THREE.DoubleSide}));g.rotation.x=-Math.PI/2;g.position.y=.05;disc.add(g)}
  var lc=document.createElement("canvas");lc.width=lc.height=256;var lx=lc.getContext("2d");lx.fillStyle="#A8DCE7";lx.beginPath();lx.arc(128,128,128,0,7);lx.fill();lx.fillStyle="#101422";lx.textAlign="center";lx.font="800 78px 'Arial Black',Impact,sans-serif";lx.fillText("$",128,130);lx.font="700 22px Arial";lx.fillText("DOLLASIGN",128,176);lx.font="600 16px Arial";lx.fillText("RIDE THE WIND",128,204);
  var lab=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,.11,64),[new THREE.MeshStandardMaterial({color:0xA8DCE7}),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(lc)}),new THREE.MeshStandardMaterial({color:0xA8DCE7})]);lab.position.y=.01;disc.add(lab);
  var spin=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.3,16),new THREE.MeshStandardMaterial({color:0xffffff,metalness:.9,roughness:.2}));spin.position.y=.08;disc.add(spin);
  var arm=new THREE.Group();arm.position.set(2.9,.2,-1.8);tilt.add(arm);
  var rod=new THREE.Mesh(new THREE.BoxGeometry(.08,.08,3.1),new THREE.MeshStandardMaterial({color:0xdfe7f5,metalness:.8,roughness:.25}));rod.position.z=1.4;arm.add(rod);
  var head=new THREE.Mesh(new THREE.BoxGeometry(.28,.1,.5),new THREE.MeshStandardMaterial({color:0x27B2B3,metalness:.5,roughness:.3}));head.position.z=3.0;arm.add(head);
  var pivot=new THREE.Mesh(new THREE.CylinderGeometry(.28,.34,.3,24),new THREE.MeshStandardMaterial({color:0x1a2036,metalness:.7,roughness:.3}));pivot.position.y=-.05;arm.add(pivot);
  var bars=[],NB=26;
  for(var i=0;i<NB;i++){var a=(i/(NB-1))*Math.PI-Math.PI,bm=new THREE.Mesh(new THREE.BoxGeometry(.2,1,.2),new THREE.MeshStandardMaterial({color:i%2?0xA8DCE7:0x27B2B3,emissive:i%2?0x2a5560:0x0f4040,roughness:.4}));bm.position.set(Math.cos(a)*3.5,0,Math.sin(a)*3.5-.2);bm.userData.a=a;S.add(bm);bars.push(bm)}
  var t=0,vis=false,mx=0,my=0,last=performance.now(),sy=scrollY,boost=0;
  cv.parentNode.addEventListener("pointermove",function(e){var r=box.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5});
  function size(){var w=box.clientWidth,h=box.clientHeight;Rn.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}
  size();addEventListener("resize",size);
  new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(box);
  (function loop(now){requestAnimationFrame(loop);var dt=Math.min(.05,(now-last)/1000||.016);last=now;if(!vis||document.hidden)return;
    t+=dt;boost=boost*.92+Math.min(2,Math.abs(scrollY-sy)*.05);sy=scrollY;
    disc.rotation.y+=dt*(1.9+boost);
    tilt.rotation.x=-.95+my*.25;tilt.rotation.z=mx*.18;
    arm.rotation.y=-.62+Math.sin(t*.7)*.015;
    for(var i=0;i<bars.length;i++){var b=bars[i],h=.5+Math.abs(Math.sin(t*3+i*.7))*1.6*(.6+Math.abs(Math.sin(t*1.3+i*.3)))+boost*.4;b.scale.y=h;b.position.y=h/2-1.6}
    try{Rn.render(S,C)}catch(x){}
  })(performance.now());
}

function boot(){
  try{heroScene()}catch(e){$("hero3d").style.display="none"}
  try{studioScene()}catch(e){var h=document.querySelector(".vhint");if(h)h.textContent="3D preview needs WebGL. You can still pick and order."}
  try{vinylScene()}catch(e){var v=$("vinyl3d");if(v)v.style.display="none"}
}
if(window.THREE)boot();
else{var s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js";s.onload=boot;s.onerror=function(){$("hero3d").style.display="none";var h=document.querySelector(".vhint");if(h)h.textContent="3D preview needs an internet connection."};document.head.appendChild(s)}