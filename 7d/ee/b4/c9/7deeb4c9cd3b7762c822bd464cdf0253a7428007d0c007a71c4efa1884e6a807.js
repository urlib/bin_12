((e,t)=>{const n={P:"#ea7e82",G:"#006e54",W:"#c0c0c0"};function l(e,n,l,i){let o=null===n?"-":n.toString();t.querySelector("#status-msg").textContent=e,t.querySelector("#score-value").textContent=o,""!==l&&(l="[error] "+l),t.querySelector("#error-msg").textContent=l;let r=t.querySelector("#warning-msg");for(;r.firstElementChild;)r.removeChild(r.firstElementChild);for(let e of i){let n=t.createElement("div");n.textContent="[warning] "+e,r.appendChild(n)}}function i(e){l("",null,e,[])}const o=[0,1,1,1],r=[1,0,1,-1],s=["-","|","\\","/"];let a=e=>{for(let t=0;t<4;t+=1)if(e===s[t])return t;return-1};async function f(i){let f=t.querySelector("#result"),c=await i.text();!function(t){let n=t.getContext("2d");n.fillStyle=e.getComputedStyle(t).backgroundColor,n.fillRect(0,0,t.width,t.height)}(f);let[u,d,h]=function(e){let t=e.split("\n").map(e=>e.trimEnd()).filter(e=>""!==e);if(0==t.length)throw"the file is blank";let n=t[0],l=t,i=null,o=null;/\d+ \d+/.test(n)&&(l=t.slice(1),i=parseInt(n.split(" ")[0]),o=parseInt(n.split(" ")[1]));let r=l.length,a=l.map(e=>e.length).reduce((e,t)=>Math.max(e,t),0);if(r>2e3||a>2e3)throw"R and C must be less than or equal to 2000";if(null!==i&&i!==r)throw"R is inconsistent with the rest of the file";if(null!==o&&o!==a)throw"C is inconsistent with the rest of the file";for(let e=0;e<r;e+=1)if(l[e].length!==a)throw`line ${e+1} is too short`;for(let e=0;e<r;e+=1)for(let t=0;t<a;t+=1){let n=l[e][t];if(s.some(e=>e===n));else if("W"!=n&&"P"!=n&&"G"!=n)throw`line ${e+1} contains invalid character '${n}'`}return[l,r,a]}(c),[m,g,p]=function(e,t,n){let l=(e,l)=>e>=0&&l>=0&&e<t&&l<n,i=(e,t)=>"P"===e&&"G"===t,s=[],f=[],c=(e,t,n)=>{s.length>=8||(s.push(e),void 0!==t&&f.push({x:t,y:n}))},u=Array.from({length:t*n},()=>0),d=(e,t)=>{l(e,t)&&(1==u[e*n+t]&&c(`the dango at (${e+1}, ${t+1}) is used more than once`,e,t),u[e*n+t]+=1)},h=0;for(let s=0;s<t;s+=1)for(let t=0;t<n;t+=1){let n=e[s][t],f=a(n);if(-1==f)continue;h+=1;let u=o[f],p=r[f],y=s-u,v=s+u,C=t-p,S=t+p;if(l(y,C)&&l(v,S)){let n=e[y][C],l=e[v][S];i(m=n,g=l)||i(g,m)||c(`the stick centered at (${s+1}, ${t+1}) is not beautiful`,s,t)}else c(`the stick centered at (${s+1}, ${t+1}) is out of range`,s,t);d(s,t),d(y,C),d(v,S)}var m,g;return[s,f,h]}(u,d,h);!function(e,t,l,i,s){let f=e.getContext("2d"),c=Math.max(l,i),u=Math.min(e.width,e.height),d=Math.min(u/c,56),h=d/2*.9,m=.3*d,g=1.5*m,p=2*Math.PI;for(let e=0;e<l;e++)for(let l=0;l<i;l++){let i=t[e][l];"P"!==i&&"G"!==i&&(i="W");let o=n[i],r=(l+.5)*d,s=(e+.5)*d;f.beginPath(),f.fillStyle=o,f.arc(r,s,h,0,p),f.fill()}let y=(e,t,n,l,i,o)=>{let r=n-e,s=l-t,a=Math.sqrt(r*r+s*s),c=i/2,u=-s/a*c,d=r/a*c,h=r/a*c,m=s/a*c;f.beginPath(),f.fillStyle=o,f.moveTo(e+u-h,t+d-m),f.lineTo(n+u+h,l+d+m),f.lineTo(n-u+h,l-d+m),f.lineTo(e-u-h,t-d-m),f.fill()};for(let e=0;e<l;e++)for(let n=0;n<i;n++){let l=t[e][n],i=a(l);if(-1===i)continue;let s=o[i],f=r[i],c=(n+.5-f)*d,u=(e+.5-s)*d,h=(n+.5+f)*d,p=(e+.5+s)*d;y(c,u,h,p,g,"#ffffff"),y(c,u,h,p,m,"#202020")}}(f,u,d,h),function(e,t){l("loaded",e,"",t)}(p,m)}function c(n){let o=t.querySelector("#file-name");if(0==n.length)return void(o.textContent="...");let r=n[0];o.textContent=r.name,0!==r.size?r.size>1e7?i("the file is too large (> 10MB)"):(l("loading...",null,"",[]),e.setTimeout(()=>{f(r).catch(e=>i(e))},20)):i("the file is empty")}t.addEventListener("DOMContentLoaded",()=>{let e=t.querySelector("#file-input"),n=t.querySelector("#update-button"),l=t.querySelector("#file-input-button"),i=t.querySelector("#file-name");e.addEventListener("input",()=>{c(e.files)}),n.addEventListener("click",()=>{c(e.files)}),l.addEventListener("click",()=>{e.click()}),i.addEventListener("click",()=>{e.click()}),e.files.length>0&&(i.textContent=e.files[0].name);let o=t.querySelector("#page"),r=e=>t=>{t.stopPropagation(),t.preventDefault(),e(t)};o.addEventListener("dragenter",r(()=>{})),o.addEventListener("dragover",r(()=>{})),o.addEventListener("drop",r(t=>{let n=t.dataTransfer.files;e.files=n,c(n)}));let s=t.querySelector("#zoom-button"),a=t.querySelector("#result");s.addEventListener("click",()=>{a.classList.contains("zoomed-out")?(a.classList.remove("zoomed-out"),s.textContent="zoom out"):(a.classList.add("zoomed-out"),s.textContent="zoom in")})})})(window,document);