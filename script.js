/* ===== EDIT THESE ===== */
const NAME="My Love";
const START="2024-01-01T00:00:00";           // the day your story began
const HELLO="Hey "+NAME+", I made this for you.";
const CAPS=["Sunshine and us","Can't stop smiling","Same wall, new day","Being silly, as always","You in the green hallway","Lost in the moment","Waterfall girl","Standing tall among the pines"];
const REASONS=["Your smile makes my whole day","You make ordinary places feel special","I can be completely myself with you","You laugh at my silly jokes","Every adventure is better with you","You are my calm and my chaos"];
const LETTER="Dear "+NAME+",\n\nThank you for the laughs, the adventures, the quiet moments, and for simply being you.\n\nWith you, even a plain hallway becomes a favourite memory.\n\nI hope this made you smile.\n\nForever yours.";
/* ====================== */
const IM=["photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg", "photos/6.jpg", "photos/7.jpg", "photos/8.jpg"];
const $=s=>document.querySelector(s);
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
// background: floating glow + hearts
const cv=$("#bg"),cx=cv.getContext("2d");let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}addEventListener("resize",rs);rs();
function mk(x,y,burst){const a=Math.random()*6.28,s=burst?2+Math.random()*5:0;
P.push({x:x??Math.random()*W,y:y??H+20,vx:Math.cos(a)*s,vy:burst?Math.sin(a)*s-2:-(.3+Math.random()*.9),r:6+Math.random()*14,h:Math.random()<.45,c:Math.random()<.5?"#ff7a9c":"#ffb454",l:burst?1:.6,b:burst})}
function hrt(x,y,r){cx.beginPath();cx.moveTo(x,y+r*.3);cx.bezierCurveTo(x-r,y-r*.6,x-r*1.4,y+r*.5,x,y+r*1.2);cx.bezierCurveTo(x+r*1.4,y+r*.5,x+r,y-r*.6,x,y+r*.3);cx.fill()}
const S=Array.from({length:110},()=>[Math.random(),Math.random(),.5+Math.random()*2,Math.random()*6,1+Math.random()*1.6]);let SH=[];
for(let i=0;i<40;i++)mk(null,Math.random()*H);
(function loop(){cx.clearRect(0,0,W,H);const T=Date.now()/600;cx.shadowBlur=0;cx.fillStyle="#fff";
 S.forEach(s=>{cx.globalAlpha=.25+.55*Math.abs(Math.sin(T*s[2]+s[3]));cx.fillRect(s[0]*W,s[1]*H,s[4],s[4])});
 if(!RM&&Math.random()<.004)SH.push({x:Math.random()*W,y:Math.random()*H*.4,l:1});
 SH=SH.filter(s=>{s.x+=9;s.y+=4.5;s.l-=.02;cx.globalAlpha=s.l;cx.strokeStyle="#fff";cx.lineWidth=2;cx.beginPath();cx.moveTo(s.x,s.y);cx.lineTo(s.x-70,s.y-35);cx.stroke();return s.l>0});
 if(!RM&&P.length<70&&Math.random()<.08)mk();
 P=P.filter(p=>{p.x+=p.vx+Math.sin(p.y/50)*.3;p.y+=p.vy;if(p.b){p.vy+=.08;p.l-=.012}
  cx.globalAlpha=Math.max(p.l,0)*.8;cx.fillStyle=p.c;cx.shadowColor=p.c;cx.shadowBlur=12;
  p.h?hrt(p.x,p.y,p.r*.6):(cx.beginPath(),cx.arc(p.x,p.y,p.r*.3,0,6.28),cx.fill());
  return p.y>-30&&p.l>0});
 requestAnimationFrame(loop)})();
const boom=(x,y,n=30)=>{if(!RM)for(let i=0;i<n;i++)mk(x,y,true)};
let lt=0;addEventListener("pointermove",e=>{if(RM||Date.now()-lt<40)return;lt=Date.now();P.push({x:e.clientX,y:e.clientY,vx:(Math.random()-.5)*1.2,vy:Math.random()*-1.2,r:5,h:Math.random()<.3,c:"#ffe6a8",l:.7,b:true})});
addEventListener("pointerdown",e=>boom(e.clientX,e.clientY,8));
// type helper
function type(el,t,sp=45,cb){el.textContent="";let i=0;if(RM){el.textContent=t;cb&&cb();return}
 (function n(){el.textContent=t.slice(0,++i);if(i<t.length)setTimeout(n,sp);else cb&&cb()})()}
// gate
type($("#gtxt"),"Something for you, "+NAME+"…",60);
$("#gift").onclick=e=>{const g=e.currentTarget;g.classList.add("open");const r=g.getBoundingClientRect();boom(r.left+65,r.top+30,60);
 setTimeout(()=>{$("#gate").classList.add("gone");try{music();$("#mus").style.display="block"}catch(e){}$("#main").classList.add("on");boom(innerWidth/2,innerHeight/2,70);type($("#typed"),HELLO,70)},900)};
// soft original music (WebAudio)
let ac,tm,on=false;
function music(){ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createGain();o.gain.value=.13;const d=ac.createDelay();d.delayTime.value=.38;const f=ac.createGain();f.gain.value=.45;d.connect(f);f.connect(d);o.connect(d);d.connect(ac.destination);o.connect(ac.destination);
 const ch=[[261.6,329.6,392],[220,261.6,329.6],[174.6,220,261.6],[196,246.9,293.7]];let n=0;
 tm=setInterval(()=>{const c=ch[(n>>3)%4],fr=c[[0,1,2,1,2,1,0,2][n%8]]*(n%8>3?2:1),t=ac.currentTime,s=ac.createOscillator(),g=ac.createGain();s.type="sine";s.frequency.value=fr;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(1,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+1.7);s.connect(g);g.connect(o);s.start();s.stop(t+1.8);if(n%8==0){const b=ac.createOscillator(),h=ac.createGain();b.frequency.value=c[0]/2;h.gain.setValueAtTime(.001,t);h.gain.linearRampToValueAtTime(.8,t+.2);h.gain.exponentialRampToValueAtTime(.001,t+3);b.connect(h);h.connect(o);b.start();b.stop(t+3.1)}n++},430);on=true}
$("#mus").onclick=()=>{if(on){ac.suspend();on=false;$("#mus").style.opacity=.4}else{ac.resume();on=true;$("#mus").style.opacity=1}};
// build page
$("#heroimg").style.backgroundImage="url("+IM[1]+")";
const order=[0,1,2,3,4,5,6,7];
$("#wall").innerHTML=order.map((k,i)=>`<div class="pol" style="--r:${(i%2?1:-1)*(1+Math.random()*3).toFixed(1)}deg"><img src="${IM[k]}" alt="${CAPS[i]}"><span>${CAPS[i]}</span></div>`).join("");
$("#cards").innerHTML=REASONS.map(r=>`<button class="card"><i><b>♥</b><em>${r}</em></i></button>`).join("");
document.querySelectorAll(".card").forEach(c=>c.onclick=()=>{c.classList.toggle("f");const r=c.getBoundingClientRect();boom(r.left+r.width/2,r.top+40,10)});
const lb=$("#lb");document.querySelectorAll(".pol").forEach(p=>p.onclick=()=>{lb.querySelector("img").src=p.querySelector("img").src;lb.classList.add("on")});
lb.onclick=()=>lb.classList.remove("on");addEventListener("keydown",e=>e.key==="Escape"&&lb.classList.remove("on"));
// counter
const U=[["days",864e5],["hours",36e5],["minutes",6e4],["seconds",1e3]];
$("#count").innerHTML=U.map(u=>`<div><strong id="c_${u[0]}">0</strong>${u[0]}</div>`).join("");
setInterval(()=>{let d=Math.max(0,Date.now()-new Date(START));U.forEach((u,i)=>{const v=Math.floor(d/u[1]);d-=v*u[1];$("#c_"+u[0]).textContent=v})},1000);
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
 if(e.target.classList.contains("pol")){setTimeout(()=>e.target.classList.add("in"),(Math.random()*300)|0)}
 if(e.target.id==="note"&&!e.target.d){e.target.d=1;type($("#letter"),LETTER,55)}
 io.unobserve(e.target)}),{threshold:.25});
document.querySelectorAll(".pol,#note").forEach(x=>io.observe(x));
// movie
const rl=$("#reel"),rc=$("#rcap");IM.forEach((s,i)=>{const m=document.createElement("img");m.src=s;m.alt="";rl.prepend(m)});
const fr=[...rl.querySelectorAll("img")].reverse();let mi=0,mv=false;
function show(){fr.forEach((f,i)=>{f.classList.toggle("on",i===mi)});rc.textContent=CAPS[mi]}
show();setInterval(()=>{if(!mv)return;mi=(mi+1)%fr.length;show()},4500);
new IntersectionObserver(e=>{mv=e[0].isIntersecting},{threshold:.3}).observe(rl);
// hold the heart
const hb=$("#fin");let p=0,hd=false,done=false,lt2=0;
function tick(t){const dt=t-lt2;lt2=t;p=Math.min(1,Math.max(0,p+(hd?dt/2200:-dt/900)));hb.style.setProperty("--p",p);
 if(hd&&!RM&&Math.random()<.2){const r=hb.getBoundingClientRect();boom(r.left+r.width/2,r.top+r.height/2,2)}
 if(p>=1&&!done){done=true;finale()}
 if(!done)requestAnimationFrame(tick)}
const hs=()=>{hd=true;lt2=performance.now();requestAnimationFrame(tick)},he=()=>{hd=false};
hb.addEventListener("pointerdown",hs);addEventListener("pointerup",he);addEventListener("pointercancel",he);
hb.addEventListener("keydown",e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();if(!hd&&!e.repeat)hs()}});hb.addEventListener("keyup",he);
function finale(){hb.style.setProperty("--p",1);$("#end").classList.add("on");
 for(let i=0;i<8;i++)setTimeout(()=>boom(Math.random()*W,H*.6,45),i*320);
 IM.forEach((s,i)=>setTimeout(()=>{const d=document.createElement("div");d.className="fly";d.style.backgroundImage="url("+s+")";d.style.left=(8+i*11)+"%";document.body.append(d);setTimeout(()=>d.remove(),6200)},i*450))}
// old finale removed
const _unused=()=>{
};
