(() => {
  "use strict";

  const canvas = document.getElementById("bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const cores = navigator.hardwareConcurrency || 4;

  // =========================
  // QUALITY / TUNING
  // =========================
  const Q = {
    dprCap: isMobile ? 1.5 : 2.2,
    particles: prefersReducedMotion ? 120 : (isMobile ? 220 : Math.min(900, cores * 220)),
    speed: prefersReducedMotion ? 0.15 : (isMobile ? 0.28 : 0.34),
    connectDist: prefersReducedMotion ? 80 : (isMobile ? 110 : 140),
    maxLinks: prefersReducedMotion ? 1 : (isMobile ? 2 : 3),
    pulseEvery: prefersReducedMotion ? 9999 : 8.5,
    pulseDuration: 2.1,
    noise: prefersReducedMotion ? 0 : 0.012
  };

  let w = 0, h = 0, dpr = 1;
  let last = performance.now();
  let time = 0;

  const pointer = { x: -1e9, y: -1e9, vx: 0, vy: 0 };
  const parts = [];
  const links = [];

  let nextPulse = 2;
  let pulseT = 1;

  const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
  const lerp  = (a,b,t)=>a+(b-a)*t;
  const smooth = (a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};

  function resize(){
    const cw = Math.max(1, innerWidth);
    const ch = Math.max(1, innerHeight);
    dpr = Math.min(devicePixelRatio || 1, Q.dprCap);
    w = Math.floor(cw * dpr);
    h = Math.floor(ch * dpr);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = cw+"px";
    canvas.style.height = ch+"px";
    init(true);
  }

  function init(keep){
    if(!keep) parts.length = 0;
    while(parts.length > Q.particles) parts.pop();
    while(parts.length < Q.particles){
      const a = Math.random()*Math.PI*2;
      const s = (0.3+Math.random()*0.7)*Q.speed*dpr;
      parts.push({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: Math.cos(a)*s,
        vy: Math.sin(a)*s,
        r: (0.8+Math.random()*1.6)*dpr,
        ph: Math.random()*10
      });
    }
  }

  function movePointer(x,y,touch){
    const nx = x*dpr, ny = y*dpr;
    pointer.vx = lerp(pointer.vx, nx-pointer.x, 0.25);
    pointer.vy = lerp(pointer.vy, ny-pointer.y, 0.25);
    pointer.x = nx; pointer.y = ny;
    if(touch){ pointer.vx*=0.4; pointer.vy*=0.4; }
  }

  addEventListener("mousemove",e=>movePointer(e.clientX,e.clientY,false),{passive:true});
  addEventListener("touchmove",e=>{
    if(e.touches&&e.touches[0]) movePointer(e.touches[0].clientX,e.touches[0].clientY,true);
  },{passive:true});
  addEventListener("resize",resize,{passive:true});

  function getX(){
    const cx = w*0.5, cy = h*0.52;
    const s = Math.min(w,h)*(isMobile?0.22:0.26);
    const t = 1.5*dpr;
    const p1={x:cx-s,y:cy-s}, p2={x:cx+s,y:cy+s};
    const p3={x:cx+s,y:cy-s}, p4={x:cx-s,y:cy+s};
    const m12={x:(p1.x+p2.x)/2,y:(p1.y+p2.y)/2};
    const m34={x:(p3.x+p4.x)/2,y:(p3.y+p4.y)/2};
    return { t, segs:[[p1,m12],[m12,p2],[p3,m34],[m34,p4]] };
  }

  function update(dt){
    time+=dt;
    if(!prefersReducedMotion && time>=nextPulse){
      nextPulse=time+Q.pulseEvery;
      pulseT=0;
    }
    if(pulseT<1) pulseT=clamp(pulseT+dt/Q.pulseDuration,0,1);

    const pv = Math.hypot(pointer.vx,pointer.vy);
    const pInf = clamp(pv/(60*dpr),0,1);

    for(const p of parts){
      const wob = Math.sin(time*0.6+p.ph)*0.12*dpr;
      p.x += (p.vx+wob)*(dt*60);
      p.y += (p.vy-wob)*(dt*60);

      const dx=p.x-pointer.x, dy=p.y-pointer.y;
      const d2=dx*dx+dy*dy, r=170*dpr;
      if(d2<r*r){
        const d=Math.sqrt(d2)+1e-6;
        const f=(1-d/r)*(0.18+0.25*pInf);
        p.x+=(dx/d)*f*(dt*60)*dpr;
        p.y+=(dy/d)*f*(dt*60)*dpr;
      }
      if(p.x<-20*dpr) p.x=w+20*dpr;
      if(p.x>w+20*dpr) p.x=-20*dpr;
      if(p.y<-20*dpr) p.y=h+20*dpr;
      if(p.y>h+20*dpr) p.y=-20*dpr;
    }

    links.length=0;
    const md=Q.connectDist*dpr, md2=md*md;
    for(let i=0;i<parts.length;i++){
      let c=0;
      for(let j=i+1;j<parts.length && c<Q.maxLinks;j++){
        const a=parts[i], b=parts[j];
        const dx=a.x-b.x, dy=a.y-b.y, d2=dx*dx+dy*dy;
        if(d2<md2){ links.push({ax:a.x,ay:a.y,bx:b.x,by:b.y,d2}); c++; }
      }
    }
  }

  function draw(){
    ctx.fillStyle="#000";
    ctx.fillRect(0,0,w,h);

    if(Q.noise>0){
      const step=Math.max(3,Math.floor(6*dpr));
      for(let y=0;y<h;y+=step){
        for(let x=0;x<w;x+=step){
          const v=(Math.random()-0.5)*Q.noise;
          const c=Math.floor((v+0.5)*8);
          ctx.fillStyle=`rgb(${c},${c},${c})`;
          ctx.fillRect(x,y,step,step);
        }
      }
    }

    for(const L of links){
      const a=1-Math.sqrt(L.d2)/(Q.connectDist*dpr);
      ctx.strokeStyle=`rgba(255,255,255,${0.06*a})`;
      ctx.lineWidth=1*dpr;
      ctx.beginPath();
      ctx.moveTo(L.ax,L.ay);
      ctx.lineTo(L.bx,L.by);
      ctx.stroke();
    }

    for(const p of parts){
      const b=0.85+0.15*Math.sin(time*0.8+p.ph);
      ctx.fillStyle=`rgba(255,255,255,${0.22*b})`;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }

    if(!prefersReducedMotion){
      const {t,segs}=getX();
      const env=Math.sin(Math.PI*pulseT)*0.85;
      if(env>0.02){
        ctx.lineCap="round"; ctx.lineJoin="round";
        for(let pass=0;pass<2;pass++){
          ctx.strokeStyle=`rgba(255,255,255,${(pass?0.12:0.035)*env})`;
          ctx.lineWidth=(pass?1.6:4.2)*t;
          ctx.beginPath();
          for(const [A,B] of segs){ ctx.moveTo(A.x,A.y); ctx.lineTo(B.x,B.y); }
          ctx.stroke();
        }
        const head=smooth(0.1,0.95,pulseT);
        const i=Math.min(segs.length-1,Math.floor(head*segs.length));
        const tt=head*segs.length-i;
        const A=segs[i][0], B=segs[i][1];
        const hx=lerp(A.x,B.x,tt), hy=lerp(A.y,B.y,tt);
        const r=(10+16*env)*dpr;
        const g=ctx.createRadialGradient(hx,hy,0,hx,hy,r);
        g.addColorStop(0,`rgba(255,255,255,${0.3*env})`);
        g.addColorStop(0.4,`rgba(255,255,255,${0.1*env})`);
        g.addColorStop(1,"rgba(255,255,255,0)");
        ctx.fillStyle=g;
        ctx.beginPath(); ctx.arc(hx,hy,r,0,Math.PI*2); ctx.fill();
      }
    }
  }

  function loop(now){
    const dt=Math.min(0.033,Math.max(0.001,(now-last)/1000));
    last=now;
    update(dt);
    draw();
    requestAnimationFrame(loop);
  }

  resize();
  if(prefersReducedMotion) draw();
  else requestAnimationFrame(loop);
})();
