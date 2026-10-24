const nav=[...document.querySelectorAll('[data-nav]')];
const chapters=[...document.querySelectorAll('article > .chapter')];
function update(){
 const active=[...chapters].reverse().find(el=>el.getBoundingClientRect().top<=170)||chapters[0];
 for(const a of nav){const on=a.dataset.nav===active.id;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}
 const max=document.documentElement.scrollHeight-innerHeight;
 document.querySelector('.progress span').style.width=`${max>0?scrollY/max*100:0}%`;
}
let ticking=false;
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{update();ticking=false;});ticking=true;}},{passive:true});
addEventListener('resize',update);update();
