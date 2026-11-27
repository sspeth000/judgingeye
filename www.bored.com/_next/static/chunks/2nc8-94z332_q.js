(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,808341,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={cancelIdleCallback:function(){return n},requestIdleCallback:function(){return s}};for(var r in o)Object.defineProperty(t,r,{enumerable:!0,get:o[r]});let s="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let a=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-a))}})},1)},n="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},519083,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={ESCAPE_REGEX:function(){return n},htmlEscapeAttributeString:function(){return d},htmlEscapeJsonString:function(){return h}};for(var r in o)Object.defineProperty(t,r,{enumerable:!0,get:o[r]});let s={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},n=/[&><\u2028\u2029]/g,i={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},l=/[&"'<>]/g;function h(e){return e.replace(n,e=>s[e])}function d(e){return e.replace(l,e=>i[e])}},479520,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={default:function(){return k},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return w}};for(var r in o)Object.defineProperty(t,r,{enumerable:!0,get:o[r]});let s=e.r(555682),n=e.r(190809),i=e.r(843476),l=s._(e.r(174080)),h=n._(e.r(271645)),d=e.r(742732),c=e.r(922737),u=e.r(808341),p=e.r(519083),m=new Map,g=new Set,f=e=>{let{src:a,id:t,onLoad:o=()=>{},onReady:r=null,dangerouslySetInnerHTML:s,children:n="",strategy:i="afterInteractive",onError:h,stylesheets:d}=e,u=t||a;if(u&&g.has(u))return;if(m.has(a)){g.add(u),m.get(a).then(o,h);return}let p=()=>{r&&r(),g.add(u)},f=document.createElement("script"),y=new Promise((e,a)=>{f.addEventListener("load",function(a){e(),o&&o.call(this,a),p()}),f.addEventListener("error",function(e){a(e)})}).catch(function(e){h&&h(e)});s?(f.innerHTML=s.__html||"",p()):n?(f.textContent="string"==typeof n?n:Array.isArray(n)?n.join(""):"",p()):a&&(f.src=a,m.set(a,y)),(0,c.setAttributesFromProps)(f,e),"worker"===i&&f.setAttribute("type","text/partytown"),f.setAttribute("data-nscript",i),d&&(e=>{if(l.default.preinit)return e.forEach(e=>{l.default.preinit(e,{as:"style"})});if("u">typeof window){let a=document.head;e.forEach(e=>{let t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,a.appendChild(t)})}})(d),document.body.appendChild(f)};function y(e){let{strategy:a="afterInteractive"}=e;"lazyOnload"===a?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>f(e))}):f(e)}function w(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let a=e.id||e.getAttribute("src");g.add(a)})}function b(e){let{id:a,src:t="",onLoad:o=()=>{},onReady:r=null,strategy:s="afterInteractive",onError:n,stylesheets:c,...m}=e,{updateScripts:y,scripts:w,getIsSsr:b,appDir:k,nonce:v}=(0,h.useContext)(d.HeadManagerContext);v=m.nonce||v;let x=(0,h.useRef)(!1);(0,h.useEffect)(()=>{let e=a||t;x.current||(r&&e&&g.has(e)&&r(),x.current=!0)},[r,a,t]);let j=(0,h.useRef)(!1);if((0,h.useEffect)(()=>{if(!j.current){if("afterInteractive"===s)f(e);else"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>f(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>f(e))}));j.current=!0}},[e,s]),("beforeInteractive"===s||"worker"===s)&&(y?(w[s]=(w[s]||[]).concat([{id:a,src:t,onLoad:o,onReady:r,onError:n,...m,nonce:v}]),y(w)):b&&b()?g.add(a||t):b&&!b()&&f({...e,nonce:v})),k){if(c&&c.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)if(!t)return m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([0,{...m,id:a}]))})`}});else return l.default.preload(t,m.integrity?{as:"script",integrity:m.integrity,nonce:v,crossOrigin:m.crossOrigin}:{as:"script",nonce:v,crossOrigin:m.crossOrigin}),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([t,{...m,id:a}]))})`}});"afterInteractive"===s&&t&&l.default.preload(t,m.integrity?{as:"script",integrity:m.integrity,nonce:v,crossOrigin:m.crossOrigin}:{as:"script",nonce:v,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let k=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},227516,e=>{"use strict";var a=e.i(843476),t=e.i(770703);let o=(0,t.default)(()=>e.A(995140),{loadableGenerated:{modules:[453865]},ssr:!1}),r=(0,t.default)(()=>e.A(681260),{loadableGenerated:{modules:[224510]},ssr:!1});e.s(["default",0,function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{}),(0,a.jsx)(o,{})]})}])},271083,e=>{"use strict";var a=e.i(843476),t=e.i(263676),o=e.i(985357),r=e.i(272386);e.s(["default",0,function(){return(0,a.jsx)("button",{type:"button",onClick:()=>{document.documentElement.dataset.marquee="off";try{localStorage.setItem(o.MARQUEE_HIDDEN_KEY,"1")}catch{}(0,r.trackEvent)("marquee_hide","marquee")},"aria-label":"Hide fun facts",title:"Hide fun facts",className:"absolute inset-y-0 right-0 z-10 w-11 flex items-center justify-center bg-sun hover:bg-sun-soft border-l-2 border-black text-yellow-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black",children:(0,a.jsx)(t.X,{className:"w-4 h-4",strokeWidth:3,"aria-hidden":!0})})}])},835427,e=>{"use strict";var a=e.i(843476),t=e.i(271645);e.s(["default",0,function(){let e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let a=e.current?.closest(".marquee-wrapper");if(!a)return;let t=0,o=e=>{cancelAnimationFrame(t);let o=Array.from(a.querySelectorAll(".marquee-content")).flatMap(e=>e.getAnimations());if(0===o.length)return;let r=o[0].playbackRate,s=performance.now(),n=a=>{let i=Math.min(1,(a-s)/450),l=r+(e-r)*(1-(1-i)**3);o.forEach(e=>{e.playbackRate=l}),i<1&&(t=requestAnimationFrame(n))};t=requestAnimationFrame(n)},r=()=>o(0),s=()=>o(1);return a.addEventListener("pointerenter",r),a.addEventListener("pointerleave",s),()=>{cancelAnimationFrame(t),a.removeEventListener("pointerenter",r),a.removeEventListener("pointerleave",s)}},[]),(0,a.jsx)("span",{ref:e,hidden:!0})}])},110925,e=>{"use strict";var a=e.i(843476),t=e.i(271645),o=e.i(985357);e.s(["default",0,function(){let[e,r]=(0,t.useState)(()=>o.MARQUEE_FACTS.slice(0,20));(0,t.useEffect)(()=>{r(function(){let e=o.MARQUEE_FACTS.slice();for(let a=e.length-1;a>0;a--){let t=Math.floor(Math.random()*(a+1));[e[a],e[t]]=[e[t],e[a]]}return e.slice(0,20)}())},[]);let s=Math.round(12*e.join("").length/70),n=e.map(e=>(0,a.jsxs)("span",{className:"text-sm font-black uppercase tracking-widest text-yellow-900 inline-flex items-center gap-4 shrink-0 px-8",children:[(0,a.jsx)("span",{className:"text-xl leading-none -translate-y-[1px]",children:"★"}),(0,a.jsx)("span",{children:e})]},e));return(0,a.jsxs)("div",{className:"marquee-container",style:{"--marquee-duration":`${s}s`},children:[(0,a.jsx)("div",{className:"marquee-content",children:n}),(0,a.jsx)("div",{className:"marquee-content","aria-hidden":"true",children:n})]})}])},132211,e=>{"use strict";var a=e.i(843476),t=e.i(271645);e.s(["default",0,function(){let e,o,[r,s]=(0,t.useState)(0),[n,i]=(0,t.useState)(0),[l,h]=(0,t.useState)(0),[d,c]=(0,t.useState)(null),[u,p]=(0,t.useState)(0);(0,t.useEffect)(()=>{let e=setInterval(()=>{p(e=>e+1)},1e3);return()=>clearInterval(e)},[]),(0,t.useEffect)(()=>{let e=window.scrollY,a=()=>{let a=Math.abs(window.scrollY-e);s(e=>e+a),e=window.scrollY},t=e=>{c(a=>{if(a){let t=e.clientX-a.x,o=e.clientY-a.y,r=Math.sqrt(t*t+o*o);i(e=>e+r)}return{x:e.clientX,y:e.clientY}})},o=()=>{h(e=>e+1)};return window.addEventListener("scroll",a),window.addEventListener("mousemove",t),window.addEventListener("click",o),()=>{window.removeEventListener("scroll",a),window.removeEventListener("mousemove",t),window.removeEventListener("click",o)}},[]);let m=(r/1e4+n/5e4+.1*l).toFixed(2);return(0,a.jsx)("div",{id:"user-stats",className:"py-4 px-4 md:px-8",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 md:gap-12 text-center",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("span",{className:"text-xl md:text-2xl font-bold text-zinc-700 font-mono",children:(o=Math.floor(u/60),`${o.toString().padStart(2,"0")}:${(u%60).toString().padStart(2,"0")}`)}),(0,a.jsx)("span",{className:"text-xs text-zinc-500 uppercase tracking-wide",children:u<60?"Warming up":u<300?"Productivity dropping":u<900?"Time wasted":u<1800?"Go touch grass":"Official procrastinator"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("span",{className:"text-xl md:text-2xl font-bold text-zinc-700",children:r>=1e6?(r/1e6).toFixed(1)+"M":r>=1e3?(r/1e3).toFixed(1)+"K":Math.round(r).toString()}),(0,a.jsx)("span",{className:"text-xs text-zinc-500 uppercase tracking-wide",children:"Pixels scrolled"})]}),(0,a.jsxs)("div",{className:"hidden md:flex flex-col items-center",children:[(0,a.jsx)("span",{className:"text-xl md:text-2xl font-bold text-zinc-700",children:(e=2.54/96*n)>=100?(e/100).toFixed(2)+"m":e.toFixed(1)+"cm"}),(0,a.jsx)("span",{className:"text-xs text-zinc-500 uppercase tracking-wide",children:"Mouse odyssey"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("span",{className:"text-xl md:text-2xl font-bold text-zinc-700",children:l}),(0,a.jsx)("span",{className:"text-xs text-zinc-500 uppercase tracking-wide",children:"Clicks made"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("span",{className:"text-xl md:text-2xl font-bold text-zinc-700",children:m}),(0,a.jsx)("span",{className:"text-xs text-zinc-500 uppercase tracking-wide",children:"Calories burned"})]})]})})})}])},799291,e=>{"use strict";var a=e.i(843476),t=e.i(271645),o=e.i(689664),r=e.i(526347),r=r,s=e.i(96315);e.i(777778);var n=e.i(902163),i=e.i(272386);let l="contact+bored.com@floraict.com",h=`mailto:${l}?subject=${encodeURIComponent("Bored.com feedback")}`;e.s(["default",0,function(){let[e,d]=(0,t.useState)(!1),c=(0,t.useRef)(null);(0,t.useEffect)(()=>()=>{c.current&&clearTimeout(c.current)},[]);let u=(0,t.useCallback)(async()=>{try{await navigator.clipboard.writeText(l)}catch{return}(0,i.trackEvent)("feedback_copy_address","feedback"),d(!0),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>d(!1),2e3)},[]);return(0,a.jsx)("section",{"aria-labelledby":"feedback-block-title",className:"hide-when-customizing max-w-7xl mx-auto px-4 md:px-8 pb-8",children:(0,a.jsxs)("div",{className:"bg-sun border-2 border-black p-6 shadow-[5px_5px_0_0_rgba(0,0,0,1)] flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[(0,a.jsxs)("div",{className:"min-w-0",children:[(0,a.jsx)("h2",{id:"feedback-block-title",className:"text-lg font-black tracking-tight font-stretch-semi-expanded text-zinc-900",children:"Got feedback or a site to suggest?"}),(0,a.jsxs)("p",{className:"text-sm text-zinc-900 mt-1",children:["Spotted a broken link, found a hidden gem, or have an idea? Mail us at"," ",(0,a.jsx)("a",{href:h,className:"font-bold underline underline-offset-2 whitespace-nowrap",children:l}),"."]})]}),(0,a.jsxs)("div",{className:"flex flex-shrink-0 flex-wrap gap-2",children:[(0,a.jsxs)(n.default,{onClick:u,className:"py-2.5",ariaLabel:e?"Address copied":"Copy address",title:e?"Address copied":"Copy address",children:[e?(0,a.jsx)(o.Check,{className:"h-4 w-4","aria-hidden":!0}):(0,a.jsx)(r.default,{className:"h-4 w-4","aria-hidden":!0}),(0,a.jsx)("span",{className:"sr-only","aria-live":"polite",children:e?"Address copied":"Copy address"})]}),(0,a.jsxs)(n.ButtonLink,{href:h,variant:"dark",className:"py-2.5",onClick:()=>(0,i.trackEvent)("feedback_mail","feedback"),children:[(0,a.jsx)(s.Mail,{className:"h-4 w-4","aria-hidden":!0}),"Send feedback"]})]})]})})}],799291)},510582,e=>{"use strict";var a=e.i(843476),t=e.i(618566);e.s(["default",0,function(){return"/"!==(0,t.usePathname)()?(0,a.jsx)("p",{className:"mt-4 max-w-xs text-sm leading-relaxed text-white/75",children:"Cool sites to discover and free games to play, for whenever you are bored."}):(0,a.jsxs)("div",{className:"mt-4 max-w-xs",children:[(0,a.jsx)("h1",{className:"text-sm font-bold leading-snug text-white",children:"Fun, interesting and cool websites to explore"}),(0,a.jsx)("p",{className:"mt-1.5 text-sm leading-relaxed text-white/75",children:"Hundreds of fun websites, funny finds, free online games, cool tools and things to learn, collected in one place."})]})}])},579369,e=>{"use strict";var a=e.i(843476),t=e.i(271645);function o(e){window.location.assign(e)}var r=e.i(820140),s=e.i(566595);let n=({className:e="",onChange:t,...o})=>(0,a.jsx)("input",{className:`w-full h-11 px-4 bg-white text-zinc-900 font-bold placeholder:font-normal placeholder:text-zinc-500 focus:outline-none focus:ring-0 ${e}`,onChange:t,...o});var i=e.i(618566),l=e.i(418994),h=e.i(580430);function d({className:e=""}){let t=(0,i.usePathname)();return(0,a.jsx)("button",{type:"button",onClick:()=>{if(0===h.sortedLinks.length)return;let e=t?.startsWith("/link/")?t.replace(/^\/link\//,"").replace(/\/$/,""):null,a=window.matchMedia("(max-width: 767.98px)").matches,r=h.sortedLinks.filter(t=>t.id!==e&&!(a&&t.desktopOnly)),s=r[Math.floor(Math.random()*r.length)];if(s){{let e=window;"function"==typeof e.gtag&&e.gtag("event","random_site_clicked",{event_category:"engagement",event_label:s.id})}o(`/link/${s.id}/`)}},"aria-label":"Open a random website",title:"Open a random website",className:`h-11 px-5 bg-white hover:bg-zinc-100 text-black border-r-2 border-black transition-colors inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black ${e}`,children:(0,a.jsx)(l.Shuffle,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":"true"})})}var c=e.i(983284),u=e.i(486884),p=e.i(692463);let m=new Set(["best-browser-games","best-free-online-games-for-kids","best-free-online-games","best-online-mini-games","best-online-multiplayer-games","black-friday-websites-shop-without-spending","bored-button","building-our-own-arcade","christmas-websites-and-winter-games","four-new-games-from-a-bottomless-hole-to-a-tiny-town","games-to-play-when-bored","katana-kitchen-and-daily-games","more-daily-games-you-asked-for","play-free-games-online-without-downloading","spooky-websites-and-halloween-games","ten-new-games-in-the-arcade","two-player-games-and-arcade-filters"]);function g(e){return m.has(e)?`/brand/blog/${e}.webp`:null}let f={slug:"best-free-online-games",title:"Best free online games you can play right now",description:"A hand-picked list of the best free online games you can play in your browser. No downloads, no sign-ups, just great games.",date:"2026-01-08",readTime:"7 min read",keywords:["best free online games","free online games","online games","best online games","online games free","free games online"],cover:{bg:"bg-indigo-500",emoji:"🎮"},content:`
    <p>
      Browser games don't get enough credit. While everyone's busy arguing about
      the latest $70 release, there are thousands of free online games sitting
      right there in your browser, ready to go. No downloads, no installs, no
      "please create an account" popups. You just click and play.
    </p>
    <p>
      I've spent way too many hours testing these out, so here's my honest list
      of the best free online games you can jump into right now.
    </p>

    <h2>Puzzle and strategy games</h2>
    <p>
      If you like games that make you think, browser puzzle games are honestly
      some of the best out there. They're simple to pick up but surprisingly hard
      to put down.
    </p>
    <p>
      <a href="/arcade/2048/">2048</a> is a classic for a reason. You slide
      numbered tiles around a grid trying to combine them until you hit 2048.
      Sounds easy, right? Give it five minutes and you'll see why people get
      obsessed. Then there's
      <a href="/link/little-alchemy2/">Little Alchemy 2</a>, which is a totally
      different vibe. You start with basic elements like water, fire, earth, and
      air, then combine them to discover hundreds of new items. It's weirdly
      satisfying when you figure out a combo nobody told you about.
    </p>
    <p>
      Check out our full <a href="/category/mini-games/">mini games</a> section
      for more picks like these.
    </p>

    <h2>Multiplayer games you can play with friends</h2>
    <p>
      Some of the best free online games are the ones you play with other people.
      Browser multiplayer games have come a long way, and you don't need a gaming
      PC to enjoy them.
    </p>
    <p>
      Slither.io is basically the Snake game you
      played on old Nokia phones, but online with hundreds of other players. You
      grow your snake by eating glowing dots and try not to crash into anyone
      else. It's simple, it's chaotic, and it's a blast.
      <a href="/link/skribbl-io/">Skribbl.io</a> is perfect if you've got a
      group of friends online. One person draws, everyone else guesses. The worse
      you are at drawing, the funnier it gets.
    </p>
    <p>
      Browse more multiplayer picks in our
      <a href="/category/mini-games/">mini games</a> collection.
    </p>

    <h2>Classic and retro games</h2>
    <p>
      Sometimes you just want to play something familiar. The good news is that
      tons of retro classics have been rebuilt for the browser, and they play just
      as well as you remember.
    </p>
    <p>
      <a href="/link/tetris-web/">Tetris</a> needs no introduction. It's Tetris.
      It's perfect. The browser version runs smooth and feels exactly like it
      should. If you want a bigger collection of old school games,
      <a href="/link/cool-math/">Cool Math Games</a> has been around forever and
      still has a huge library of fun, simple games. Don't let the name fool you,
      most of them aren't really about math.
    </p>
    <p>
      Love the retro stuff? Our own <a href="/arcade/">arcade</a> is stuffed
      with the classics: <a href="/arcade/snake/">Snake</a>,
      <a href="/arcade/brick/">Brick</a> and
      <a href="/arcade/mole-mash/">Mole mash</a>.
    </p>

    <h2>Brain games that actually challenge you</h2>
    <p>
      Okay, so maybe you want something a bit more serious. Games that actually
      work your brain a little. There are some really good free options for that
      too.
    </p>
    <p>
      <a href="/link/chess-com/">Chess.com</a> and
      <a href="/link/lichess-org/">Lichess</a> are both excellent for playing
      chess online. Chess.com has more features and lessons, while Lichess is
      completely free and open source with zero ads. Both let you play against
      people at your skill level, so you won't get destroyed every game. If chess
      isn't your thing, <a href="/link/sudoku-web/">Sudoku.com</a> is a clean,
      no-nonsense way to get your daily sudoku fix.
    </p>
    <p>
      Want more games like these? Head over to our
      <a href="/category/brain-train/">brain training</a> section.
    </p>

    <h2>Indie games and hidden gems</h2>
    <p>
      Some of the best free online games are the ones you've never heard of.
      Indie developers put out incredible browser games all the time, and most
      people never find them.
    </p>
    <p>
      <a href="/link/itch-io/">Itch.io</a> is probably the best place to
      discover new free games. It's a huge platform where indie developers upload
      their projects, and a lot of them are browser playable. You'll find
      everything from short experimental art games to full RPGs.
      Armor Games and
      <a href="/link/new-grounds/">Newgrounds</a> are two other sites that have
      been supporting indie browser games for years. Newgrounds especially has a
      massive archive of Flash era classics that have been preserved and
      converted to run in modern browsers.
    </p>
    <p>
      Our <a href="/category/arcade-portals/">arcade portals</a> page has a
      curated list of sites like these if you want a starting point.
    </p>

    <h2>So, what should you play first?</h2>
    <p>
      Honestly, it depends on your mood. If you want something quick, go for
      2048. If you want to hang out with friends, fire up Skribbl.io. If you want
      to discover something totally new, browse Itch.io for a while.
    </p>
    <p>
      The point is, the best free online games are already right here in your
      browser. You don't need to spend money or wait for downloads. Just pick
      something from this list and start playing. That's the whole beauty of free
      online games. They're instant, they're fun, and there are way more of them
      than you'd expect.
    </p>
  `},y={slug:"games-to-play-when-bored",title:"Games to play when you're bored",description:"Stuck with nothing to do? Here are the best games to play when you're bored, all free and playable in your browser.",date:"2026-02-03",readTime:"6 min read",keywords:["games when bored","games to play when bored","bored games","things to do when bored"],cover:{bg:"bg-amber-400",emoji:"😴"},content:`
    <p>
      You know that feeling. You've scrolled through every app on your phone,
      checked social media twice, opened the fridge even though you're not
      hungry. You're bored. Really bored. The good news? There are tons of games
      to play when you're bored that don't cost anything and don't require you to
      install a single thing.
    </p>
    <p>
      Here's a list of games sorted by how much time you've got and what kind of
      mood you're in.
    </p>

    <h2>Quick games for a 5-minute break</h2>
    <p>
      Sometimes you just need a tiny distraction. Maybe you're between tasks at
      work or waiting for a friend to text back. These games are perfect for
      those little gaps in your day.
    </p>
    <p>
      <a href="/link/cookie-clicker/">Cookie Clicker</a> is dangerously
      addictive for how simple it is. You click a cookie. You get more cookies.
      You buy upgrades to get even more cookies. It sounds dumb, and it kind of
      is, but somehow twenty minutes will fly by before you notice.
      <a href="/link/find-cow/">Find The Invisible Cow</a> is exactly what it
      sounds like. You move your mouse around the screen and the mooing gets
      louder as you get closer. It's ridiculous and it will make you laugh.
      <a href="/arcade/2048/">2048</a> is another great one. Quick rounds,
      satisfying gameplay, and you can stop anytime. Well, you can try to stop
      anytime.
    </p>

    <h2>Games to lose an hour in</h2>
    <p>
      When you're properly bored with nothing planned, you want something that
      pulls you in and keeps you there. These games to play when bored are the
      ones where you look up and realize an hour just vanished.
    </p>
    <p>
      <a href="/link/little-alchemy2/">Little Alchemy 2</a> is perfect for this.
      You combine elements to create new ones, and there are over 700 items to
      discover. Every time you think you've found everything, you stumble onto
      some weird new combination. It's like a puzzle game that never really ends.
      Slither.io is another time sink. The "just
      one more game" feeling is real with this one. You keep thinking you can get
      a bigger snake next time, and before you know it you've played fifteen
      rounds.
    </p>

    <h2>Games to play with friends</h2>
    <p>
      Bored alone is one thing, but bored with friends? That's fixable. These
      multiplayer browser games are great when your whole group has nothing going
      on.
    </p>
    <p>
      <a href="/link/skribbl-io/">Skribbl.io</a> is the go-to for group fun.
      Someone draws a word, everyone guesses. It's Pictionary in your browser.
      The art is always terrible and that's what makes it great.
      <a href="/link/gartic-phone/">Gartic Phone</a> takes that idea further.
      It's like a mix of Pictionary and the telephone game. One person writes a
      sentence, the next person draws it, the next person describes the drawing,
      and so on. The results at the end are always hilarious.
    </p>
    <p>
      Find more group games in our
      <a href="/category/mini-games/">mini games</a> collection.
    </p>

    <h2>Brain games when you want something smarter</h2>
    <p>
      Maybe you're not just bored, maybe you actually want to use your brain for
      something. These bored games will keep your mind busy in a good way.
    </p>
    <p>
      <a href="/link/chess-com/">Chess</a> is the obvious one. Whether you're a
      beginner or you've been playing for years, online chess is one of the best
      things to do when bored. You can play quick 3-minute games or longer
      matches, whatever fits your mood. If you want something different,
      Brilliant has interactive math and
      science puzzles that are genuinely fun. It's the kind of site where you
      start with one puzzle and end up learning about fractals somehow.
    </p>
    <p>
      More options in our
      <a href="/category/brain-train/">brain training</a> section.
    </p>

    <h2>Geography games (seriously, they're fun)</h2>
    <p>
      I know, geography games don't sound exciting. But trust me on this. Once
      you start, they're weirdly addictive.
    </p>
    <p>
      <a href="/link/city-guesser/">City Guesser</a> drops you into a random
      street view video and you have to guess where in the world you are. It's
      like traveling without leaving your chair.
      Geotastic is similar but with more game
      modes and multiplayer support. You'll be shocked at how bad you are at
      first, and then weirdly proud when you start getting better.
    </p>
    <p>
      Check out all our <a href="/category/geo-games/">geography games</a> for
      more.
    </p>

    <h2>Typing games (yes, really)</h2>
    <p>
      This might sound boring, but typing games are actually super satisfying.
      There's something about watching your words per minute go up that just
      feels good.
    </p>
    <p>
      <a href="/link/monkey-type/">Monkeytype</a> is clean, fast, and
      customizable. It's the best typing test out there and it's completely free.
      <a href="/link/type-racer/">Typeracer</a> makes it competitive by letting
      you race against other people in real time. Nothing motivates you to type
      faster than watching someone else's little car pull ahead of yours.
    </p>
    <p>
      We've got a full
      <a href="/category/typing-speed/">typing games</a> section if these grab
      your interest.
    </p>

    <h2>Stop scrolling, start playing</h2>
    <p>
      Being bored doesn't have to mean staring at a ceiling. There are plenty of
      games to play when you're bored that are free, instant, and actually fun.
      Pick one from this list, give it a shot, and save this page for the next
      time boredom hits. Because it will.
    </p>
  `},w={slug:"best-online-mini-games",title:"Best online mini games for a quick break",description:"Need a quick distraction? These online mini games are perfect for short breaks. All free, all browser-based, zero commitment.",date:"2025-12-12",readTime:"5 min read",keywords:["online mini games","best online mini games","mini games online","quick browser games"],cover:{bg:"bg-emerald-500",emoji:"⚡"},content:`
    <p>
      We all need a break sometimes. Whether you're stuck on a homework problem,
      waiting for a meeting to start, or just need five minutes away from
      whatever you're working on, online mini games are the perfect reset button.
      They're small, they're free, and they don't ask for your email address.
    </p>
    <p>
      Here are some of the best online mini games you can play right in your
      browser whenever you need a quick distraction.
    </p>

    <h2>Puzzle mini games</h2>
    <p>
      Puzzle games are great for short breaks because they give your brain
      something to focus on without being too heavy. You can play a round or two
      and get back to what you were doing.
    </p>
    <p>
      <a href="/arcade/2048/">2048</a> is the king of puzzle mini games. Slide
      tiles, combine numbers, try to hit 2048. Each round takes just a few
      minutes, but the strategy keeps you coming back. If you're in a more
      relaxed mood, JigsawPuzzles.io lets you do
      digital jigsaw puzzles right in your browser. You can pick the number of
      pieces, so it's easy to find one that fits your break time.
    </p>

    <h2>Clicker and idle games</h2>
    <p>
      Clicker games are the ultimate low effort mini games. You click, things
      happen, numbers go up. It shouldn't be fun, but it is.
    </p>
    <p>
      <a href="/link/cookie-clicker/">Cookie Clicker</a> is the one that started
      it all. Click the big cookie to earn cookies, then spend those cookies on
      upgrades that earn you even more cookies. The whole thing is absurd in the
      best way possible. You can check in for two minutes, buy a few upgrades,
      and close the tab. Or you can fall down the rabbit hole and spend way
      longer than you planned. It works either way, which is what makes it one of
      the best online mini games around.
    </p>

    <h2>Drawing and word games</h2>
    <p>
      These mini games are especially fun when you've got friends to play with,
      but they also work great with random people online.
    </p>
    <p>
      <a href="/link/skribbl-io/">Skribbl.io</a> is a multiplayer drawing game
      where one player draws a word and everyone else tries to guess it. The time
      pressure makes it exciting, and watching people attempt to draw "elephant"
      with a mouse is endlessly entertaining.
      <a href="/link/gartic-phone/">Gartic Phone</a> is like a game of telephone
      but with drawings. Each round, the messages get more and more distorted as
      people try to draw what the previous person described. The final reveals
      are always worth it.
    </p>

    <h2>Weird and wonderful</h2>
    <p>
      Some of the best mini games online are the ones that don't fit into any
      category. They're just strange little experiences that make you smile.
    </p>
    <p>
      <a href="/link/find-cow/">Find The Invisible Cow</a> is a perfect example.
      The whole game is just a white screen. You move your mouse around and a
      voice yells "COW" louder and louder as you get closer to the invisible cow.
      When you find it, you get a point, and a new cow is hidden somewhere else.
      It's so stupid and so fun. Perfect for a 30-second laugh when you need one.
    </p>

    <h2>Typing mini games</h2>
    <p>
      Typing games might not be the first thing you think of as mini games, but
      they're actually perfect for quick breaks. A single typing test takes about
      a minute, and trying to beat your own score is surprisingly motivating.
    </p>
    <p>
      <a href="/link/monkey-type/">Monkeytype</a> is the best looking typing
      test on the internet. It's minimal, fast, and tracks your progress over
      time. You can do a quick 15-second test or a longer one depending on how
      much time you have. <a href="/link/keybr-type/">Keybr</a> is more focused
      on actually improving your typing. It figures out which keys you're slow on
      and gives you practice words that target those specific keys. It's a mini
      game that actually makes you better at something.
    </p>
    <p>
      More typing games in our
      <a href="/category/typing-speed/">typing speed</a> collection.
    </p>

    <h2>Where to find more</h2>
    <p>
      These are just a few of the best online mini games out there. If you want a
      bigger list, check out our full
      <a href="/category/mini-games/">mini games category</a> where we keep an
      updated collection of the best browser mini games we've found. You can also
      visit our <a href="/free-online-games/">free online games</a> page for a
      broader look at everything available.
    </p>
    <p>
      The best part about mini games is that they respect your time. Play for two
      minutes or twenty, it's up to you. Bookmark a few of these, and you'll
      never be stuck wondering what to do on your next break again.
    </p>
  `},b={slug:"play-free-games-online-without-downloading",title:"Play free games online without downloading anything",description:"No downloads, no installs, no storage space wasted. These free browser games load instantly and play right in your browser tab.",date:"2026-01-22",readTime:"6 min read",keywords:["play free games online without downloading","no download games","browser games free","play games online free"],cover:{bg:"bg-sky-500",emoji:"🌐"},content:`
<p>We've all been there. You find a game that looks fun, click the download button, and then you're waiting ten minutes for an installer to finish while it eats up 4 GB of your hard drive. And that's before the day-one patch. Browser games skip all of that. You click a link, the game loads in seconds, and you're playing. No installs, no updates, no "please restart your computer." Just games.</p>

<p>Whether you're on a work laptop, a Chromebook, or your phone's browser, you can play free games online without downloading a single file. Here's a solid list of games you can jump into right now.</p>

<h2>Instant multiplayer games you can play right now</h2>

<p>Some of the most addictive browser games are multiplayer ones where you're thrown into a lobby with random people from all over the world. No accounts needed, no friend codes. Just pick a name and go.</p>

<p>Slither.io is still one of the best examples. It's basically Snake, but you're competing against hundreds of other players on the same map. You eat little glowing dots, grow longer, and try to make other snakes crash into you. It sounds simple because it is, and that's exactly why it works. Games like this are perfect when you want something quick and competitive without any commitment.</p>

<p>If you're more into party games, <a href="/link/skribbl-io/">Skribbl.io</a> is a free online drawing and guessing game that's great with friends or strangers. One person draws, everyone else types guesses. It gets hilariously chaotic, especially when someone tries to draw "helicopter" with a mouse.</p>

<h2>Classic games that never get old</h2>

<p>Sometimes you don't want anything flashy. You just want a solid, familiar game that you know you'll enjoy. Browser versions of classic games are perfect for that.</p>

<p><a href="/link/tetris-web/">Tetris</a> has been ported to basically everything at this point, and the browser version plays just as well as any other. It's still the same satisfying block-stacking puzzle it's always been. Great for a quick session when you've got five minutes to kill.</p>

<p>Chess fans have it really good online. <a href="/link/chess-com/">Chess.com</a> lets you play against other people or bots at any skill level, and it runs entirely in your browser. You can play one-minute blitz games or slow matches that stretch over days. It's a complete chess experience with zero downloads.</p>

<p>And if numbers are more your thing, <a href="/link/sudoku-web/">Sudoku.com</a> has endless puzzles from easy to expert. It's clean, it's simple, and it's the kind of game you can play while half-watching something on TV.</p>

<h2>Puzzle games and brain teasers</h2>

<p>Browser games aren't all about reflexes and competition. There are tons of puzzle games that'll actually make you think, and they're free to play online without downloading anything.</p>

<p><a href="/arcade/2048/">2048</a> is the one that took over the internet a few years back. You slide numbered tiles around a grid, combining them to reach higher numbers. The goal is to hit 2048, but most people get stuck in the 500s for a while. It's the kind of game that seems easy until it really isn't.</p>

<p><a href="/link/little-alchemy2/">Little Alchemy 2</a> is something completely different. You start with four basic elements and combine them to discover new ones. Water plus earth makes mud. Mud plus fire makes brick. Before you know it, you've been playing for two hours trying to figure out how to make a unicorn. It's weirdly relaxing and genuinely clever.</p>

<p>If you're looking for more games that challenge your brain, check out our <a href="/category/brain-train/">brain training</a> category for a full collection.</p>

<h2>Big game portals with thousands of free games</h2>

<p>If you don't want to hunt for individual games, game portal sites are your best bet. These are websites that collect hundreds or even thousands of free browser games in one place.</p>

<p><a href="/link/cool-math/">Cool Math Games</a> has been around forever, and it's still one of the best. Don't let the name fool you. It's not all math. There are platformers, strategy games, puzzles, and tons of other stuff. It's especially popular with students because most schools don't block it.</p>

<p>Armor Games is another classic portal that's been hosting quality browser games for years. They've got everything from tower defense to RPGs, and the games are generally a step above what you'll find on other sites.</p>

<p><a href="/link/kongregate/">Kongregate</a> built its reputation on indie browser games, and their library is massive. If you like discovering smaller, creative games from independent developers, this is a goldmine. For more sites like it, have a look at our <a href="/category/arcade-portals/">arcade portals</a> collection.</p>

<h2>Card games and board games online</h2>

<p>You don't need a physical deck of cards or a board game box to play these classics. There are great browser versions that let you play solo or with other people online.</p>

<p><a href="/link/card-games/">CardGames.io</a> has clean, no-nonsense versions of Solitaire, Hearts, Spades, Go Fish, and a bunch of other card games. There's no login required, no ads covering half the screen. You just pick a game and play. It's refreshing how straightforward it is.</p>

<p>Tabletopia takes things further by putting entire board games online. We're talking actual tabletop games with full rules and 3D pieces you can move around. It's a great way to try new board games before buying them, or to play with friends who aren't in the same room. Check out our <a href="/category/board-games/">board games</a> section for more options.</p>

<h2>Start playing now</h2>

<p>The best part about all of these games is that you can try any of them in the next thirty seconds. No downloads, no sign-ups, no waiting. Just open a tab and play.</p>

<p>We keep an updated collection of the best free browser games over on our <a href="/free-online-games/">free online games</a> page. It's sorted by category so you can quickly find something that matches what you're in the mood for. Go have fun.</p>
`},k={slug:"best-online-multiplayer-games",title:"Best online multiplayer games to play with friends",description:"Looking for multiplayer games you can play online with friends? These free browser games are perfect for game nights and group fun.",date:"2026-02-12",readTime:"6 min read",keywords:["best online multiplayer games","online multiplayer games","multiplayer games free","games to play with friends online"],cover:{bg:"bg-rose-500",emoji:"👥"},content:`
<p>Playing games by yourself is fine, but everything gets better when you bring friends into it. The problem used to be that multiplayer meant everyone had to be in the same room with controllers and a TV. That's not the case anymore. There are tons of free online multiplayer games you can play together from anywhere, and most of them run straight in your browser.</p>

<p>Whether you're planning a proper game night over Discord or you just want something fun to do during a group call, these are the best multiplayer games to play with friends online.</p>

<h2>Drawing and guessing games</h2>

<p>If your friend group has even one person who can't draw, these games are going to be hilarious. That's sort of the whole point.</p>

<p><a href="/link/skribbl-io/">Skribbl.io</a> is the go-to drawing and guessing game for groups. One player gets a word and has to draw it while everyone else races to guess what it is. You can create private rooms so it's just your friends, and you can even add custom word lists to make things more personal (or more chaotic). Rounds are quick, so nobody's sitting around waiting too long.</p>

<p><a href="/link/gartic-phone/">Gartic Phone</a> puts a twist on the formula. It works like a game of telephone, but with drawings. One person writes a sentence. The next person draws it. The next person describes that drawing. By the time it comes back around, the original message has usually turned into something completely unrecognizable. It's one of those games where the results are funnier the worse everyone is at drawing.</p>

<h2>Competitive games for the tryhard friends</h2>

<p>Every friend group has that one person who takes everything way too seriously. These games are for them (and honestly, for everyone else too, because beating them feels great).</p>

<p>Slither.io drops you into a massive arena where you control a snake and try to outgrow and outlast everyone else. The controls are dead simple, but there's real strategy to how you move around the map and trap other players. It's free for all, so even though you can't team up officially, you and your friends can join the same server and see who survives the longest.</p>

<p><a href="/link/type-racer/">Typeracer</a> is surprisingly intense for a typing game. You race against other players by typing out a passage as fast and accurately as you can. Your car moves forward based on your typing speed. It's the kind of game that starts out casual and then turns into a genuine competition when someone in the group turns out to type 120 words per minute. Great for bragging rights.</p>

<h2>Strategy and board games online</h2>

<p>For friend groups that like to think a few moves ahead, online board games and strategy games are perfect. They're slower paced but way more satisfying when you pull off a good play.</p>

<p>Chess is the obvious one, and you've got two great options. <a href="/link/chess-com/">Chess.com</a> is the biggest platform with polished features and tons of game modes. <a href="/link/lichess-org/">Lichess</a> is completely free and open source, with no ads and no premium tiers. Both let you create private games and invite friends directly. If you're evenly matched, a chess game between friends gets really tense.</p>

<p><a href="/link/card-games/">CardGames.io</a> has multiplayer versions of classic card games like Hearts, Spades, and Euchre. You can set up private tables for your group, and the interface is clean and easy to figure out. It's the closest thing to sitting around a table with a real deck of cards.</p>

<p>Tabletopia is for when you want the full board game experience. They've digitized hundreds of actual tabletop games, complete with dice, tokens, and game boards. You move pieces around a virtual table just like you would in real life. It takes a minute to learn the controls, but once you do, it's a fantastic way to play board games with friends who live far away. Browse more options in our <a href="/category/board-games/">board games</a> section.</p>

<h2>Geography challenges</h2>

<p>Geography games have gotten really popular, and they're surprisingly fun to play as a group. You don't need to be a map expert either. Half the fun is watching someone confidently guess the wrong continent.</p>

<p><a href="/link/city-guesser/">City Guesser</a> shows you a video of someone walking through a city, and you have to guess where in the world it is. You can play it competitively with friends and see who gets closest. The videos are actual street-level footage, so you're picking up on clues like street signs, architecture, and what side of the road people drive on.</p>

<p>Geotastic is similar but uses street view imagery and has a bunch of different game modes. You can play in teams or head to head. It's free to play and has a solid multiplayer system. For more geography games, take a look at our <a href="/category/geo-games/">geo games</a> collection.</p>

<h2>Text adventures and co-op storytelling</h2>

<p>If your friends are the creative type, text-based games offer a completely different kind of multiplayer experience. Instead of competing, you're building a story together.</p>

<p>AI Dungeon uses AI to generate interactive stories where you can type literally anything and the game responds. The multiplayer mode lets multiple players contribute to the same adventure, which gets wild fast. One person might try to negotiate with a dragon while another decides to open a pizza shop in the same scene. It's unpredictable and that's what makes it fun. Check out our <a href="/category/text-games/">text games</a> category for more like this.</p>

<h2>Tips for a great online game night</h2>

<p>A few things that'll make your game night smoother. First, get everyone on a voice call. Discord works great, but a regular phone call or Zoom works too. Games are way more fun when you can hear everyone reacting in real time.</p>

<p>Second, pick games that match your group. If half the group is casual, don't jump straight into competitive chess. Start with something like Gartic Phone where everyone can participate and nobody feels left out. You can always move to something more competitive later.</p>

<p>Third, rotate who picks the game. That way everyone gets to play something they enjoy, and you'll probably discover new favorites you wouldn't have tried otherwise.</p>

<p>For a big list of games that work great in groups, check out our <a href="/free-online-games/">free online games</a> page. Everything there is free, runs in a browser, and most of it supports multiplayer. Happy gaming.</p>
`},v={slug:"best-free-online-games-for-kids",title:"Best free online games for kids",description:"Safe, fun, and free online games for kids of all ages. No downloads needed, just open the browser and start playing.",date:"2025-11-28",readTime:"6 min read",keywords:["best free online games for kids","free online games for kids","kids games online","safe online games for kids"],cover:{bg:"bg-lime-400",emoji:"🧒"},content:`
<p>Finding good online games for kids is trickier than it sounds. Half the "free" games out there are loaded with weird ads, and the other half get boring in about two minutes. But there are some genuinely great ones if you know where to look. These are all free, run in a browser with no downloads, and they're safe enough that you won't have to hover over your kid's shoulder the whole time.</p>

<p>The best part? A lot of these games are actually educational without feeling like homework. Kids just think they're playing a fun game. That's the sweet spot.</p>

<h2>Puzzle and learning games</h2>

<p>Puzzle games are great for kids because they build problem solving skills while still being fun. There are some really well-made ones that work perfectly in a browser.</p>

<p><a href="/link/little-alchemy2/">Little Alchemy 2</a> is one of the best. Kids start with four basic elements (water, fire, earth, air) and combine them to discover new things. Water plus earth makes mud. Fire plus mud makes brick. There are over 700 items to discover, and the game encourages experimentation and curiosity. Kids get genuinely excited when they figure out a new combination, and they're learning about how things relate to each other without even realizing it.</p>

<p><a href="/arcade/2048/">2048</a> is a number puzzle that's simple to understand but tricky to master. You slide tiles around a grid to combine matching numbers. It's great for developing logical thinking and planning ahead. Even younger kids can play the basic version once they understand the concept.</p>

<p><a href="/link/cool-math/">Cool Math Games</a> is an entire website full of games that mix fun with learning. Despite the name, it's not all math. There are logic puzzles, strategy games, and plenty of games that are just plain fun. Schools have been using this site for years because it's clean, ad-light, and the games are appropriate for all ages.</p>

<h2>Creative and drawing games</h2>

<p>Kids who like to draw and be creative have some excellent options online. These games let them express themselves while playing with others.</p>

<p><a href="/link/skribbl-io/">Skribbl.io</a> is a multiplayer drawing game where one player draws a word and everyone else guesses what it is. It's perfect for kids because the drawing tools are simple, the rounds are fast, and it's hilarious to see what everyone comes up with. You can create private rooms so kids are only playing with people they know, which is a nice safety feature.</p>

<p><a href="/link/gartic-phone/">Gartic Phone</a> works like the telephone game but with pictures. Someone writes a phrase, the next person draws it, the next person describes the drawing, and so on. The chain of misunderstandings is always funny, and kids love seeing how their original phrase got completely transformed by the end. It's a great game for birthday parties or playdates over video calls.</p>

<h2>Geography games that make learning fun</h2>

<p>Geography can be pretty dry in a textbook, but turn it into a game and suddenly kids want to learn where every country is. These games do exactly that.</p>

<p><a href="/link/seterra-geo/">Seterra</a> is a geography quiz game that covers countries, capitals, flags, and more. It has maps for every continent and difficulty levels that range from easy to genuinely challenging. Kids can work through it at their own pace, and the visual, map-based format makes it much easier to remember where things are compared to just reading a list.</p>

<p><a href="/link/city-guesser/">City Guesser</a> shows real video footage from cities around the world, and players have to guess the location. It's a great way for kids to see what other countries actually look like. The videos show street scenes, markets, and everyday life in places they might never visit. It turns into a fun guessing game that also builds world awareness. Find more geography games in our <a href="/category/geo-games/">geo games</a> category.</p>

<h2>Typing practice that doesn't feel like practice</h2>

<p>Typing is one of those skills kids will use for the rest of their lives, and these games make learning it actually enjoyable instead of boring.</p>

<p><a href="/link/keybr-type/">Keybr</a> is a typing tutor that adapts to each player's skill level. It starts with a few keys and gradually introduces more as the player improves. The interface is clean, there's no clutter, and kids can see their progress as they get faster. It's structured enough to actually teach proper technique but doesn't feel like a chore.</p>

<p><a href="/link/monkey-type/">Monkeytype</a> is a more freeform typing test that's popular with older kids and teens. You type words or quotes as fast as you can, and it tracks your speed and accuracy over time. The minimal design is appealing, and trying to beat your personal best becomes addictive fast. For more typing games, browse our <a href="/category/typing-speed/">typing speed</a> section.</p>

<h2>Brain training games</h2>

<p>These games are designed to challenge kids' thinking in different ways. They cover memory, logic, pattern recognition, and problem solving.</p>

<p>Lumosity offers bite-sized brain training games that target different cognitive skills. Each game session is short, so it's easy to fit into a daily routine. The games are colorful and engaging, and kids can track how they improve over time. The free version gives access to a limited number of daily games, which is honestly enough for most kids.</p>

<p>Brilliant takes a different approach with interactive lessons on math, science, and logic. It's more educational than the other options here, but the way they present problems is genuinely interesting. Kids work through challenges step by step, and the difficulty ramps up gradually. It's great for kids who like figuring things out on their own. More brain games are available in our <a href="/category/brain-train/">brain training</a> collection.</p>

<h2>Jigsaw puzzles</h2>

<p>Sometimes kids just want something calm and satisfying. Online jigsaw puzzles are perfect for that.</p>

<p>JigsawPuzzles.io has a huge library of puzzles with different piece counts and images. Kids can pick a puzzle that matches their skill level, from simple 20-piece ones for younger children to 500-piece challenges for older kids. There's something really satisfying about snapping digital puzzle pieces into place, and it's a nice screen activity that's actually relaxing instead of overstimulating.</p>

<h2>A safe place to start</h2>

<p>All of these games are free, run in any browser, and don't require downloads or complicated signups. They're the kind of games you can feel good about your kids playing because they're either teaching something useful or just providing clean, creative fun.</p>

<p>We keep a curated list of kid-friendly games (and a lot more) on our <a href="/free-online-games/">free online games</a> page. Everything is organized by category so you can quickly find something that fits what your kids are into. Whether they want puzzles, drawing games, or geography quizzes, there's something there for them.</p>
`},x={slug:"best-browser-games",title:"The best browser games",description:"The best browser games you can play instantly. No downloads, no installs, no pricey hardware. Just open your browser and start playing.",date:"2026-04-20",readTime:"6 min read",keywords:["best browser games","browser games","online browser games","free browser games","games to play in browser","best online games"],cover:{bg:"bg-fuchsia-500",emoji:"🕹️"},content:`
    <p>
      Browser games let you jump into fun instantly. You do not need downloads,
      installs, or pricey hardware. You just open your browser and start
      playing. They are perfect for quick breaks, killing time, or long
      sessions. Everything runs right in your tab.
    </p>
    <p>
      You can swap between work and play in seconds. Try a puzzle for a short
      coffee break. Or sink into a longer session with friends in a multiplayer
      lobby. Browser games fit your schedule, not the other way around. That
      flexibility makes them easy to love.
    </p>

    <h2><a href="/link/little-alchemy2/">Little Alchemy 2</a></h2>
    <p>
      Little Alchemy 2 looks simple at first. You start with basic elements
      like air, water, fire, and earth. Then you combine them to create new
      things. Soon you discover hundreds of items, from plants and animals to
      wild fantasy ideas. Each new discovery feels like a tiny achievement.
    </p>
    <p>
      The charm is in the experimentation. There is no timer or pressure, so
      you can relax and tinker. You try strange combinations just to see what
      happens. The logic is often clever and funny, which keeps you curious.
      It is perfect for casual play, short sessions, or quiet evenings. You
      always feel like there is one more combo to find.
    </p>

    <h2><a href="/link/cookie-clicker/">Cookie Clicker</a></h2>
    <p>
      Cookie Clicker is the classic idle clicker that started a whole genre.
      You begin by clicking a giant cookie. Every click gives you more cookies.
      Then you spend those cookies on upgrades, buildings, and weird helpers
      like grandmas and portals. Before you know it, the game is playing almost
      by itself.
    </p>
    <p>
      The magic is in the numbers exploding. You watch your cookies per second
      climb higher and higher. New upgrades unlock absurd themes and strange
      lore. You keep thinking, just one more upgrade. It feels both silly and
      strangely strategic. Cookie Clicker basically invented modern idle games,
      so it is a must try. You can leave it running in a tab and enjoy the
      progress all day.
    </p>

    <h2>Slither.io</h2>
    <p>
      Slither.io throws you into a huge online arena as a glowing snake. You
      eat colorful pellets to grow longer. When another snake hits your body,
      they explode into pellets you can gobble up. One smart move can turn you
      from a tiny worm to a massive giant.
    </p>
    <p>
      The controls are very simple, so anyone can jump right in. But the
      competition gets intense quickly. You try to trap other players, dodge
      their tricks, and climb the leaderboard. Every match feels different and
      quick to play. It is perfect for a short break or a long binge. You
      always think you can do just a little better next round.
    </p>

    <h2><a href="/arcade/2048/">2048</a></h2>
    <p>
      2048 is a clean, clever number puzzle that is easy to learn. You slide
      tiles on a grid. When two matching numbers touch, they merge into one
      higher number. You aim to reach the tile labeled 2048. The whole game
      uses just four arrow keys.
    </p>
    <p>
      It sounds simple, but every move matters. You balance risk and planning
      while the board fills up. Creating big tiles feels incredibly satisfying.
      Losing makes you instantly want to try again with a better strategy. The
      rules never change, yet each game plays out differently. That mix of
      clarity and challenge makes 2048 endlessly replayable in your browser.
    </p>

    <h2><a href="/link/tetris-web/">Tetris Official</a></h2>
    <p>
      Tetris Official brings the legendary block dropping game straight to
      your browser. You guide falling shapes to complete horizontal lines.
      Finished lines vanish and give you space for more pieces. As you play,
      the speed rises and your focus sharpens.
    </p>
    <p>
      The gameplay is timeless for a reason. It is free to play online and
      runs on almost any device. You can chase high scores or just enjoy the
      flow state. Rotating pieces at the last second always feels thrilling.
      Tetris remains one of the most beloved games ever made. The browser
      version keeps that classic feel, so you can jump in anytime for quick,
      pure puzzle fun.
    </p>

    <h2><a href="/link/find-cow/">Find The Invisible Cow</a></h2>
    <p>
      Find The Invisible Cow is wonderfully silly. The idea is extremely
      simple. You move your mouse around a blank field. The game shouts louder
      as you get closer to the hidden cow. When you finally find it, a goofy
      cow appears on screen.
    </p>
    <p>
      It feels like a joke, but it works. The audio hotter colder clue system
      makes you laugh while you search. Each round takes just a few moments,
      so it is perfect for quick breaks. You can swap turns with friends and
      compete for fastest finds. The humor, simplicity, and surprising tension
      make it weirdly addictive. It proves that even the strangest concept can
      be very entertaining.
    </p>

    <h2>JigsawPuzzles.io</h2>
    <p>
      JigsawPuzzles.io lets you enjoy classic jigsaw puzzles in your browser.
      You choose from many images, like landscapes, animals, art, and more.
      Pieces snap together with a satisfying click. You can zoom in and out
      to get the perfect view. No missing corner pieces here.
    </p>
    <p>
      You can solve puzzles alone for a calm, focused session. Or join public
      tables and piece together images with others. Watching strangers quietly
      help finish a sky or border feels surprisingly cozy. It is a great way
      to relax and unwind. You get that real puzzle feeling without clearing
      a table at home. It is perfect for slow evenings and low stress fun.
    </p>

    <h2><a href="/link/skribbl-io/">Skribbl.io</a></h2>
    <p>
      Skribbl.io is a fast, online drawing and guessing game. One player
      draws a secret word on a shared canvas. Everyone else types guesses in
      chat. The faster you guess correctly, the more points you earn. Then
      the artist role passes to the next player.
    </p>
    <p>
      The drawings are often terrible, which makes the game even funnier.
      Your friends try to sketch tricky prompts with simple tools.
      Misunderstandings and wild guesses fill the chat. It is perfect for
      voice calls, parties, or casual hangouts. You do not need drawing
      skills, just creativity and quick thinking. That mix keeps Skribbl.io
      a favorite choice for groups.
    </p>

    <h2><a href="/link/gartic-phone/">Gartic Phone</a></h2>
    <p>
      Gartic Phone takes the classic telephone game and mixes it with
      drawing. Each player starts by writing a funny or strange sentence.
      The next player sees a sentence and must draw it. Another player then
      describes that drawing in words. The cycle repeats for several rounds.
    </p>
    <p>
      At the end, you see the full chain for every starting sentence. The
      original idea usually mutates into something ridiculous. That reveal
      phase is where everyone loses it laughing. The rules are simple, but
      the creativity feels endless. It is perfect for groups, streams, and
      online hangouts. You get hilarious stories, bad art, and inside jokes
      from just one session.
    </p>
    <p>
      Want more picks like these? Browse our full
      <a href="/category/mini-games/">mini games</a> collection for even more
      browser games you can play right now.
    </p>
  `},j={slug:"building-our-own-arcade",title:"Why we are building our own arcade",description:"A behind the scenes look at the bored arcade. The games we built ourselves, why we keep adding more, and what is coming next.",date:"2026-04-30",updated:"2026-11-24",readTime:"5 min read",keywords:["bored arcade","browser games","free online games","mini games","building games"],cover:{bg:"bg-violet-500",emoji:"🎮"},related:[{href:"/arcade/",label:"Bored arcade"},{href:"/free-online-games/",label:"More free online games"},{href:"/arcade/snake/",label:"Play Snake"},{href:"/arcade/2048/",label:"Play 2048"},{href:"/arcade/word/",label:"Play Daily word"}],content:`
    <p>
      Bored.com started as a directory. We collected weird, funny, useful and
      time killing websites in one place, so you would never run out of things
      to click. Most of what we link to is made by other people, and we love
      that. But over the last few months we have been quietly building our own
      little arcade, right here on the site.
    </p>
    <p>
      No downloads. No sign ups. No ads. You open a tab, you pick a game, you
      play. This post is a quick tour of what is already in the
      <a href="/arcade/">bored arcade</a>, why we kept adding more, and
      what is on the way.
    </p>

    <h2>Why build our own games?</h2>
    <p>
      The honest answer is that we got jealous. We spend a lot of time playing
      the games we link to, and after a while you start thinking, I could try
      that. So we did. We started with the obvious classics, kept the scope
      small, and tried to make each one feel snappy.
    </p>
    <p>
      The other reason is control. When we link out, we cannot fix bugs, we
      cannot remove ads, and we cannot guarantee the link will still work next
      year. If a game lives on our own site, we can polish it, update it, and
      keep it free forever. That feels like the kind of fun the old web used
      to have.
    </p>

    <h2>What is in the arcade right now?</h2>
    <p>
      What started as eight small classics has grown past 180 games, all
      playable in seconds. They share the same chunky black borders and the
      same rule: you should be able to start playing in one click, with no
      account and no ads.
    </p>
    <p>
      The originals are still there: <a href="/arcade/snake/">Snake</a>,
      <a href="/arcade/2048/">2048</a>, <a href="/arcade/memory/">Memory</a>
      and <a href="/arcade/word/">Daily word</a>, which gives everyone in the
      world the same five-letter puzzle each day.
      <a href="/arcade/aim/">Aim trainer</a> and
      <a href="/arcade/reaction/">Reaction time</a> cover quick reflex checks,
      <a href="/arcade/liquid/">Liquid sort</a> handles calm colour sorting and
      <a href="/arcade/clicker/">Critter cuddler</a> is our idle pet game.
    </p>

    <h2>How it grew</h2>
    <p>
      Once the shared shell existed, we kept building across eight categories:
      daily word and logic puzzles (<a href="/arcade/word-ladder/">Word ladder</a>,
      <a href="/arcade/anagram-blitz/">Anagram blitz</a>,
      <a href="/arcade/mini-crossword/">Mini crossword</a>,
      <a href="/arcade/sudoku-mini/">Sudoku mini</a> and
      <a href="/arcade/bomb-sweep/">Bomb sweep</a>), trivia and comedy games
      (<a href="/arcade/daily-trivia/">Daily trivia</a>,
      <a href="/arcade/wrong-answers/">Wrong answers only</a>,
      <a href="/arcade/do-not-flip/">Do not flip</a>), physics and action games
      (<a href="/arcade/wobble-tower/">Wobble tower</a>,
      <a href="/arcade/katana-kitchen/">Katana kitchen</a>,
      <a href="/arcade/bottomless/">Bottomless</a>), local 2-player duels and
      quiet sandboxes like <a href="/arcade/sand-sandbox/">Sand sandbox</a> and
      <a href="/arcade/synth-grid/">Synth grid</a>.
    </p>

    <h2>How we make them</h2>
    <p>
      The stack is boring on purpose. Next.js for routing, React and Tailwind
      for the UI, plain TypeScript for the game logic, plus Three.js or
      Matter.js when a game needs 3D or physics. State lives in local storage
      so your best score and daily streak stick around between visits.
    </p>
    <p>
      Every game uses the same shared shell, so the header, the home button,
      the instructions popover and the share card behave the same way across
      the arcade.
    </p>

    <h2>The bigger plan</h2>
    <p>
      The plan has not changed. Keep every game fast to open, keep it free,
      keep it weird. Add new games when an idea earns its spot, polish the old
      ones when something annoys us, and keep the directory of external
      websites growing alongside it.
    </p>
    <p>
      Bored.com is supposed to be the place you go when you have nothing to
      do. Sometimes that means linking you to a strange site you would never
      have found on your own. Sometimes it means handing you a tiny puzzle we
      built ourselves and getting out of the way. Both are good.
    </p>
    <p>
      If you want to try the games yourself, the entrance is right here:
      <a href="/arcade/">bored arcade</a>. Pop in, beat your best score,
      tell us if something is broken, and check back soon. There will be more.
    </p>
  `},T={slug:"ten-new-games-in-the-arcade",title:"Ten new games in the bored arcade",description:"Word groups, Honey words, Mahjong, Solitaire and seven more. Here is what just landed in the bored arcade.",date:"2026-05-19",readTime:"4 min read",keywords:["bored arcade","new arcade games","word groups","spelling bee","letter box","country guess","mahjong solitaire","klondike solitaire","higher or lower","match three","daily trivia","block stack"],cover:{bg:"bg-orange-500",emoji:"🎲"},related:[{href:"/arcade/",label:"Bored arcade"},{href:"/arcade/word-groups/",label:"Play Word groups"},{href:"/arcade/honey-words/",label:"Play Honey words"},{href:"/arcade/string-along/",label:"Play String along"},{href:"/arcade/country-guess/",label:"Play Country guess"},{href:"/arcade/mahjong/",label:"Play Mahjong solitaire"},{href:"/arcade/solitaire/",label:"Play Solitaire"},{href:"/arcade/stack/",label:"Play Stack"},{href:"/arcade/higher-lower/",label:"Play Higher or lower"},{href:"/arcade/jewel-forge/",label:"Play Jewel forge"},{href:"/arcade/daily-trivia/",label:"Play Daily trivia"}],content:`
    <p>
      We just shipped ten new games in the
      <a href="/arcade/">bored arcade</a>. That is roughly double what
      we had a month ago. They split into three flavours: daily puzzles you
      do once a day, classics that eat a whole lunch break, and bite sized
      snack games for between meetings.
    </p>
    <p>
      Quick tour, in the order we are most proud of them.
    </p>

    <h2>Five new daily puzzles</h2>
    <p>
      These all share the same idea. One fresh puzzle per day, the same for
      everyone, no progression, no points farming. Come back tomorrow for
      the next one. The arcade overview shows a small 'new daily' badge if
      you have not played today, and a green check once you have, so you
      can see at a glance what is fresh.
    </p>
    <p>
      <a href="/arcade/word-groups/">Word groups</a> is our take on the
      Connections format. Sixteen words, find four groups of four with a
      shared theme. Easier than it looks until it is suddenly very hard,
      because of course one of the words fits two groups and you have to
      figure out which one is a trap.
    </p>
    <p>
      <a href="/arcade/honey-words/">Honey words</a> gives you seven
      letters in a honeycomb, with one in the middle that has to appear in
      every word. Find as many four letter and longer words as you can.
      We swapped in a full English dictionary so it actually accepts the
      words you would expect, instead of getting cranky about basic
      vocabulary.
    </p>
    <p>
      <a href="/arcade/string-along/">String along</a> is the puzzle where you
      chain words around a board of twelve letters. Each word has to start
      with the last letter of the previous one, no two consecutive letters
      from the same side, and you want to use all twelve in as few words as
      possible.
    </p>
    <p>
      <a href="/arcade/country-guess/">Country guess</a> picks a country
      every day. You type a country to guess, get back the distance to the
      target and a compass arrow that actually points the way you would
      walk on a flat map. Five tries to nail it.
    </p>
    <p>
      <a href="/arcade/daily-trivia/">Daily trivia</a> is ten multiple
      choice questions, mixed categories, score and streak. The kind of
      thing you finish in three minutes and then immediately want to
      compare with a friend.
    </p>

    <h2>Three classics with long sessions</h2>
    <p>
      These eat real time on purpose. Open them when you have a coffee.
    </p>
    <p>
      <a href="/arcade/stack/">Stack</a> is the falling block game you
      already know. Ten wide, line clears, level speed climbs. We rebuilt
      it on top of the canvas from our arcade prototype so the feel
      is right.
    </p>
    <p>
      <a href="/arcade/mahjong/">Mahjong solitaire</a> is the classic 144
      tile pyramid. Match free pairs, clear the board. Daily layout plus
      endless shuffle, with undo and shuffle buttons under the board for
      when you paint yourself into a corner.
    </p>
    <p>
      <a href="/arcade/solitaire/">Solitaire</a> is the Klondike one your
      dad played on Windows. Seven columns, four foundations, draw three.
      Auto complete kicks in once the board is winnable, so you do not
      have to click ten thousand times at the end.
    </p>

    <h2>Two snack sized games</h2>
    <p>
      <a href="/arcade/higher-lower/">Higher or lower</a> shows you two
      cards from the same category and asks if the next is higher or
      lower. We made the numeric value big with a coloured underline and
      kept the unit small underneath, so it is obvious that only the
      number counts. Build a streak in endless mode, or play the daily
      set of ten.
    </p>
    <p>
      <a href="/arcade/jewel-forge/">Jewel forge</a> is the gem swap
      classic. Sixty seconds, swap two adjacent gems, line up three or
      more, watch the cascade. Small floating combo numbers pop up on the
      board so you can see exactly how big a chain you triggered.
    </p>

    <h2>What else changed</h2>
    <p>
      We took the chance to tidy the entire arcade while we were in there.
      Every game with utility buttons, reset, undo, hint, shuffle, clear,
      now has them in a consistent action footer right under the play
      surface. That keeps the header clean on phones, where space is at a
      premium. Sharing also moved out of the game body completely. There
      is one share button in the header, and a 'challenge a friend' button
      on every end screen.
    </p>
    <p>
      Smaller fixes worth mentioning: the Honey words and letter box
      dictionaries are now massive, the country guess compass actually
      points the right way, the Jewel forge title is readable, and the
      daily badges on the arcade overview tell you what is new today
      versus what you have already played.
    </p>

    <h2>How to find them</h2>
    <p>
      All ten are listed on the
      <a href="/arcade/">arcade overview</a>, sorted by category. If you
      only have a minute, try
      <a href="/arcade/higher-lower/">Higher or lower</a> or
      <a href="/arcade/jewel-forge/">Jewel forge</a>. If you have ten,
      try <a href="/arcade/word-groups/">Word groups</a> or
      <a href="/arcade/string-along/">String along</a>. If you want a long
      sit, <a href="/arcade/mahjong/">Mahjong</a> and
      <a href="/arcade/solitaire/">Solitaire</a> are waiting.
    </p>
    <p>
      As always, free, no sign up, plays in your browser. Tell us when
      something feels off and we will tighten it up.
    </p>
  `},z={slug:"katana-kitchen-and-daily-games",title:"We put a 3D sushi game in the arcade",description:"Katana kitchen is a new sushi slicing game in the bored arcade, plus the daily puzzles got way more variety and a few small fixes.",date:"2026-06-02",readTime:"4 min read",keywords:["bored arcade","katana kitchen","sushi slicing game","3d browser game","three.js game","daily puzzles","new arcade games"],cover:{bg:"bg-rose-500",emoji:"🍣"},related:[{href:"/arcade/katana-kitchen/",label:"Play Katana kitchen"},{href:"/arcade/",label:"Bored arcade"},{href:"/arcade/word-ladder/",label:"Play Word ladder"},{href:"/arcade/mini-crossword/",label:"Play Mini crossword"},{href:"/arcade/honey-words/",label:"Play Honey words"}],content:`
    <p>
      It has been a quiet few weeks on the blog but not on the arcade. I kept
      meaning to write this up and kept getting pulled back into the thing I
      actually want to talk about, which is a new game. So here it is, a bit
      late, on a slow afternoon.
    </p>
    <p>
      The big one is <a href="/arcade/katana-kitchen/">Katana kitchen</a>, and
      it is the first proper 3D game we have made. Everything in the arcade so
      far has been flat, pixel art, canvas stuff. This one is real 3D with
      actual models flying around, and getting there was more of a fight than
      I expected.
    </p>

    <h2>Katana kitchen</h2>
    <p>
      If you have ever played Fruit Ninja you already get it. Ingredients get
      tossed up in front of you, you swipe to slice them, and you try not to
      let any drop. The twist is that it is sushi. You are stood behind the
      board in first person, knife ready, and salmon, tuna, squid, avocado and
      sea urchin come flying up. Slice one cleanly and it turns into a finished
      piece of nigiri that pops off the screen. Sea urchin is the rare one and
      worth a lot more, so when an uni shows up you really do not want to miss
      it.
    </p>
    <p>
      Slicing several in one swipe builds a combo, and the longer the chain the
      more each cut is worth, so the satisfying play is to wait half a second
      for three or four things to line up and take them all in one stroke.
      There are wasabi bombs mixed in, the angry green ones, and hitting one
      costs you points and a life and resets your combo. You get three lives.
      Let an edible ingredient fall past the board and that is a life gone too,
      so you cannot just stand there waiting around for a clean swipe forever.
    </p>
    <p>
      I will be honest, 3D in the browser was fiddly. It is built in Three.js
      with proper models for every ingredient and the finished sushi, in a
      little Japanese kitchen. Getting the slice to feel right was the hard
      part, because the swipe happens in 2D on your screen and the ingredients
      live in 3D space, so the game has to project each one back to where it
      actually is on screen and check if your line crossed it. It took way
      longer than it should have to get that to feel fair instead of either
      missing obvious cuts or slicing things you never touched. There is also
      a whole bit where the first tosses wait until every model has loaded, so
      you never get a grey placeholder block flying at you. Small thing, annoying
      to get right.
    </p>

    <h2>The daily puzzles got a lot deeper</h2>
    <p>
      The other thing I spent time on is less flashy but probably matters more
      day to day. A bunch of the daily games were running out of fresh puzzles
      too fast, so if you played every day you would start seeing repeats. I
      went through the pools for things like
      <a href="/arcade/word-ladder/">Word ladder</a>,
      <a href="/arcade/mini-crossword/">Mini crossword</a> and
      <a href="/arcade/honey-words/">Honey words</a> and made them a lot
      bigger, enough that you should get at least a month of new puzzles before
      anything comes back around.
    </p>
    <p>
      While I was in there I noticed a few games were secretly daily, one fresh
      puzzle a day, but never said so anywhere. Those now show the daily tag on
      the arcade overview like they always should have, so you can actually
      tell what resets each day and what you can just keep playing.
    </p>

    <h2>A few small fixes</h2>
    <p>
      Nothing dramatic, just stuff that was bugging me. Solitaire now highlights
      the whole stack you are dragging instead of just the top card, and I fixed
      the order the stock recycles in so it matches the classic Klondike you
      remember. Math sprint got a proper makeover and looks like an actual
      calculator now, and it flashes ERROR at you when you fumble an answer
      instead of doing nothing. And the Aim trainer targets now scale with your
      window, so the difficulty stays the same whether you are on a laptop or a
      big monitor. They used to feel easier on a bigger screen, which was a
      little silly for a trainer.
    </p>
    <p>
      That is the lot for now. Katana kitchen is the one to try first, it is the
      most fun thing we have put in the arcade in a while. As always it is free,
      no sign up, runs in your browser. If the slicing feels off on your setup
      let me know and I will keep tuning it.
    </p>
  `},N={slug:"more-daily-games-you-asked-for",title:"You asked for more daily games, so we added a bunch",description:"A batch of new daily games in the bored arcade: Word sense, Reverse trivia, Law or lie, Patches, Number path and more. One fresh puzzle a day, free in your browser.",date:"2026-06-18",readTime:"4 min read",keywords:["daily games","daily puzzle games","bored arcade","new arcade games","word sense game","reverse trivia","daily word game","free browser games"],cover:{bg:"bg-sky-500",emoji:"🗓️"},related:[{href:"/arcade/word-sense/",label:"Play Word sense"},{href:"/arcade/reverse-trivia/",label:"Play Reverse trivia"},{href:"/arcade/law-or-lie/",label:"Play Law or lie"},{href:"/arcade/patches/",label:"Play Patches"},{href:"/arcade/",label:"Bored arcade"}],content:`
    <p>
      Since we leaned into the daily stuff, the one fresh puzzle a day that
      resets at midnight, that has quietly turned into the thing people keep
      coming back for. The messages we get are almost all some version of the
      same thing: I finished today's, what else have you got. So we spent the
      last while building more of exactly that.
    </p>
    <p>
      Here is the new batch. Most of them are daily, a couple are just there
      for when you want to mess about with no streak to protect. All free, no
      sign up, all run in your browser.
    </p>

    <h2>A few new daily word and trivia games</h2>
    <p>
      <a href="/arcade/word-sense/">Word sense</a> is the one we are most
      attached to. There is a secret word each day and you guess by meaning, not by
      letters. Type any word and it tells you how close you are, from cold to
      warm to hot. It is slow and a bit addictive, and the moment it finally
      clicks is great. Plurals fold onto the single form, so boots counts as
      boot and one meaning only ever has one rank.
    </p>
    <p>
      <a href="/arcade/reverse-trivia/">Reverse trivia</a> flips a normal quiz
      around. We give you the answer and you pick the clue that fits it.
      <a href="/arcade/law-or-lie/">Law or lie</a> shows you five
      genuinely strange laws and       you decide which ones are real and which we made
      up, and some of the real ones are honestly harder to believe than the fake
      ones. And <a href="/arcade/wrong-answers/">Wrong answers only</a> is the
      silly one: a question, four deliberately wrong answers, you pick the
      funniest, then you see what everyone else went with.
    </p>
    <p>
      There is also <a href="/arcade/guess-the-year/">Guess the year</a>, where
      you match five things to the years they happened, and the daily opinion
      game <a href="/arcade/spicy-takes/">Spicy takes</a> if you missed it,
      where you agree or disagree with five bold takes and then see the crowd
      split.
    </p>

    <h2>Two new daily logic puzzles</h2>
    <p>
      If you are more of a quiet puzzle person, <a href="/arcade/patches/">Patches</a>
      is a cosy little grid puzzle. You fill a quilt with red and yellow flowers
      so every row and column ends up with exactly three of each, and you can
      never put three of the same flower in a row. It is the Binairo idea
      dressed up in fabric, and every board has one clean solution.
    </p>
    <p>
      <a href="/arcade/number-path/">Number path</a> is the other one. You draw a
      single line that fills the whole grid in one go while hitting the numbers
      in order. There is also <a href="/arcade/color-flood/">Color flood</a>,
      where you flood the board with one colour from the corner in as few moves
      as you can. All three give you a new puzzle every day.
    </p>

    <h2>And some for when you just want to mess about</h2>
    <p>
      Not everything needs a streak. <a href="/arcade/bubble-pop/">Bubble pop</a>
      got a proper redo this week so it actually feels and sounds like popping
      real bubble wrap, and it fills the whole screen now. There is also
      <a href="/arcade/planet-drop/">Planet drop</a>, a drop and merge game with
      little planets, <a href="/arcade/ten-seconds/">Ten seconds</a>, where you
      start a hidden clock and try to stop it at exactly ten, and a clean
      <a href="/arcade/tic-tac-toe/">Tic-tac-toe</a> with a tougher Ultimate
      mode if the normal one feels too easy.
    </p>
    <p>
      That is the lot. If you only try one, make it
      <a href="/arcade/word-sense/">Word sense</a>, but the whole set is sitting
      in the <a href="/arcade/">arcade</a> waiting for you. Keep the feedback
      coming, it genuinely decides what we build next.
    </p>
  `},S={slug:"two-player-games-and-arcade-filters",title:"2-player games are here, plus a better way to filter the arcade",description:"Seven new 2-player games, pass-and-play added to Drop four, Reversi and Tic-tac-toe, and a proper filter sidebar now that the bored arcade has grown past 90 games.",date:"2026-07-01",readTime:"4 min read",keywords:["2-player games","multiplayer browser games","pass and play games","bored arcade","arcade filters","twin fists","pixel duel","new arcade games","free browser games"],cover:{bg:"bg-teal-500",emoji:"🥊"},related:[{href:"/arcade/twin-fists/",label:"Play Twin fists"},{href:"/arcade/pixel-duel/",label:"Play Pixel duel"},{href:"/arcade/duo-gunners/",label:"Play Duo gunners"},{href:"/arcade/sumo-spheres/",label:"Play Sumo spheres"},{href:"/arcade/hop-quest/",label:"Play Hop quest"},{href:"/arcade/",label:"Bored arcade"}],content:`
    <p>
      The arcade quietly crossed 90 games a while back and it started to show.
      Two things kept coming up in the messages we get: people wanted more
      games they could play against a friend on the same laptop, and people
      were scrolling forever to find anything. So that is what this update is
      about. A batch of new 2-player games, pass-and-play added to a few
      classics that only had a computer opponent before, and an actual filter
      sidebar so the arcade is not just one long scroll anymore.
    </p>

    <h2>Seven new games you play against a friend</h2>
    <p>
      All of these are local pass-and-play. No accounts, no invite links,
      just two people and one keyboard.
    </p>
    <p>
      <a href="/arcade/twin-fists/">Twin fists</a> is a co-op brawler. You and
      a friend clear waves of thugs from both sides of the screen and take on
      a boss together at the end. <a href="/arcade/duo-gunners/">Duo
      gunners</a> is the same idea with guns instead of fists, a run and gun
      level built for two.
    </p>
    <p>
      If you would rather fight each other than side by side,
      <a href="/arcade/pixel-duel/">Pixel duel</a> is a proper versus fighter,
      punches, kicks, blocks and a fireball, best of three rounds.
      <a href="/arcade/sumo-spheres/">Sumo spheres</a> is a lot sillier, you
      build up momentum and try to shove your rival out of a shrinking ring.
      <a href="/arcade/block-volley/">Block volley</a> puts you on opposite
      sides of a net for a quick volleyball match, and
      <a href="/arcade/neon-trails/">Neon trails</a> is a light cycle duel
      where you box each other in with glowing trails until only one of you
      is left.
    </p>
    <p>
      For something that takes ten seconds, <a href="/arcade/quick-draw/">Quick
      draw</a> is a reflex duel. Wait for the signal, then draw faster than
      the other person. It is the kind of game you play once and then
      immediately demand a rematch for.
    </p>

    <h2>Pass-and-play added to the classics</h2>
    <p>
      A few board games in the arcade only let you play against the computer,
      which never made much sense for games that are normally played across a
      table. <a href="/arcade/drop-four/">Drop four</a>,
      <a href="/arcade/reversi/">Reversi</a> and
      <a href="/arcade/tic-tac-toe/">Tic-tac-toe</a> now all have a real
      2-player mode. Pick it on the start screen and you pass the device back
      and forth, same board, same rules, just an actual second player instead
      of a bot.
    </p>

    <h2>A proper filter sidebar, because the list got long</h2>
    <p>
      With close to a hundred games, sorting everything into one flat page
      stopped working. The arcade now groups games into eight categories,
      word and vocab, logic and puzzles, trivia and guessing, action and
      arcade, platformer and adventure, versus and 2-player, party and humor,
      and sandbox and idle, and there is a filter sidebar next to the games so
      you can narrow things down instead of scrolling past everything to find
      what you want.
    </p>
    <p>
      You can search by keyword, tick a category to only see that kind of
      game, or filter by daily, 2-player or no timer if you just want
      something relaxed. On mobile the whole thing tucks behind a filter
      button so it stays out of the way until you need it. Small change, but
      it makes a real difference once you have this many games sitting in one
      place.
    </p>

    <h2>A few solo games while we were at it</h2>
    <p>
      Not everything this round needs a second player.
      <a href="/arcade/hop-quest/">Hop quest</a> is a platformer with four
      themed levels, grass, tunnel, ice and fire, each with its own hazards.
      <a href="/arcade/blaster-bots/">Blaster bots</a> is a run and gun
      platformer with a boss at the end of each level. If you want something
      faster, <a href="/arcade/auto-dash/">Auto dash</a> is an endless runner
      that keeps speeding up, and <a href="/arcade/orbit-hook/">Orbit
      hook</a> has you swinging from planet to planet trying not to miss the
      next one. <a href="/arcade/wobble-tower/">Wobble tower</a> and
      <a href="/arcade/stack-slice/">Stack slice</a> are both about stacking
      blocks as high as you can without the whole thing toppling over, one
      with real physics, one with a timing twist.
    </p>

    <p>
      That is the update. Grab a friend and try
      <a href="/arcade/twin-fists/">Twin fists</a> or
      <a href="/arcade/pixel-duel/">Pixel duel</a> first, or just head to the
      <a href="/arcade/">arcade</a> and use the new filters to find whatever
      you are in the mood for. Free, no sign up, runs in your browser.
    </p>
  `},I={slug:"four-new-games-from-a-bottomless-hole-to-a-tiny-town",title:"Four new games, from a bottomless hole to a tiny town",description:"Bottomless, Pocket quarry, Weird catch and Snug town are four new games in the bored arcade. Here is what they are and which one to try first.",date:"2026-09-07",readTime:"4 min read",keywords:["new browser games","bored arcade","bottomless game","pocket quarry","weird catch","snug town","free online games","sandbox games"],cover:{bg:"bg-indigo-600",emoji:"🕳️"},related:[{href:"/arcade/bottomless/",label:"Play Bottomless"},{href:"/arcade/pocket-quarry/",label:"Play Pocket quarry"},{href:"/arcade/weird-catch/",label:"Play Weird catch"},{href:"/arcade/snug-town/",label:"Play Snug town"},{href:"/arcade/",label:"Browse the bored arcade"}],content:`
    <p>
      We have added quite a few games to the
      <a href="/arcade/">bored arcade</a> lately. Four of them kept turning
      into much bigger projects than planned, which is usually a good sign.
      They do not have much in common. One is a very long hole, one is a tiny
      block world, one has a lake full of strange fish and one lets you build
      a cosy village.
    </p>
    <p>
      Here is the short tour, starting with the easiest game to explain.
    </p>

    <h2>Bottomless</h2>
    <p>
      <a href="/arcade/bottomless/">Bottomless</a> asks you to scroll down.
      That is the whole control scheme. You start at sea level and pass real
      depths on the way: the deep end of a pool, the Channel Tunnel, the
      Titanic, the deepest fish ever filmed and the bottom of the Mariana
      Trench.
    </p>
    <p>
      The facts stay real until you reach 12,262 metres, the deepest hole
      people have ever drilled. After that, the shaft carries on and the facts
      get less reliable. Lost socks, old chargers and unread messages have all
      found their way down there. There is also one extra odd thing hidden at
      a new depth each day.
    </p>
    <p>
      It is not hard and it is not really possible to lose. It is just a long,
      strange scroll with enough real facts mixed in to make the distances
      feel a bit scary. Your deepest point is saved, so you can stop before
      your finger gets tired.
    </p>

    <h2>Pocket quarry</h2>
    <p>
      <a href="/arcade/pocket-quarry/">Pocket quarry</a> started as a small
      floating island and a pickaxe. You can dig out any block, turn the island
      around and stack the pieces back wherever you want. Then we added water.
      Then fire. It got a little out of hand after that.
    </p>
    <p>
      Water now runs downhill and looks for gaps. Lava moves more slowly, sets
      wood on fire and turns to stone when it meets water. Sand falls until it
      lands and bakes into glass beside heat. Ice can freeze a pond, then melt
      back into water near a flame. Plant a sapling and it grows into a tree.
      Cut the trunk down and the leaves slowly disappear.
    </p>
    <p>
      The island gets small visitors too. Rabbits show up when there is enough
      grass, fish need a pond that is at least two blocks deep, birds perch on
      wood or leaves and butterflies drift over the green bits. They never
      stay forever. A rabbit will leave when its patch of grass is gone, and a
      bird takes off if you build too close to it.
    </p>
    <p>
      There is no score and no job list. Build a hut, flood it, set it on fire,
      undo the mess or start a new island. Your island is saved in the browser
      between visits.
    </p>

    <h2>Weird catch</h2>
    <p>
      <a href="/arcade/weird-catch/">Weird catch</a> is a fishing game with
      one rule that changes halfway through each dive. On the way down, fish
      pass straight through the hook and you have to dodge boots, cans and
      crates. Hit one piece of junk and the line starts coming back up early.
      On the way up, the hook catches everything it touches.
    </p>
    <p>
      You only have ten hooks on the line, so filling them with rusty cans is
      a bad plan. Junk costs points at the dock and a clean line earns a bonus.
      The valuable creatures live deeper down, but they are heavier and slow
      the reel. Three dives make one run.
    </p>
    <p>
      The fish are all made up. There is a Grumpy guppy, a Sock eel, a Ghost
      anchovy and, right near the bottom, a Pale colossus that is worth plenty
      but looks far too heavy for the line. Every new creature goes into a
      logbook, which gives you a reason to make one more dive even after a
      terrible score.
    </p>

    <h2>Snug town</h2>
    <p>
      <a href="/arcade/snug-town/">Snug town</a> is for the days when even
      fishing feels too stressful. It is a small town builder with no money,
      no timer and no way to fail. You place houses, paths, trees, shops,
      ponds and other little pieces on an isometric grid.
    </p>
    <p>
      There are two ways to play. Free build gives you a village and lets you
      change it with no numbers attached. Build a town starts with bare land
      and adds people. A home needs a path beside it. Put water, a lamp and a
      shop close by and more people move in. The windows light up when a home
      has everything it needs.
    </p>
    <p>
      The useful trick is to build homes in small groups. One well and one
      lamp can serve a whole street, so a village that looks tidy usually
      works well too. If you do not care about any of that, pick free build
      and put the windmill wherever it looks nice.
    </p>

    <h2>Which one should you play?</h2>
    <p>
      Try Bottomless if you want to scroll and read. Pick Pocket quarry if you
      want to mess with things and see what breaks. Weird catch is the one for
      chasing a score, and Snug town is the quiet one for building something
      nice.
    </p>
    <p>
      All four are free, run in the browser and do not need an account. If one
      of them feels odd or breaks on your phone, tell us. These games tend to
      get better after people start poking at them.
    </p>
  `},C={slug:"bored-button",title:"The bored button and other buttons that pick a site for you",description:"Press one button and let someone else choose where you end up. The best bored buttons, plus two hidden on Bored.com.",date:"2026-10-08",updated:"2026-11-24",readTime:"3 min read",keywords:["bored button","random website","random website button","random website generator","useless web","stumbleupon alternative","things to do when bored"],cover:{bg:"bg-rose-500",emoji:"🔴"},related:[{href:"/category/random-rabbit-hole/",label:"Browse random rabbit holes"},{href:"/category/pointless-sites/",label:"Browse pointless portals"},{href:"/link/bored-button/",label:"Visit The Bored Button"},{href:"/link/useless-web/",label:"Visit The Useless Web"},{href:"/category/pointless-fun/",label:"Browse pointless fun"}],content:`
    <p>
      A bored button is the simplest idea on the internet. There is one
      button. You press it and it takes you to a website you did not choose.
      If you do not like where you ended up, you press it again. There are no
      menus, no search box and nothing to decide, which is exactly the point
      when you are too bored to pick something yourself.
    </p>
    <p>
      It is not really random, though. Behind almost every button is a list
      that somebody put together by hand, one site at a time. The button only
      decides which one you see next. That is the good part: you get the
      surprise without ending up somewhere sketchy.
    </p>
    <p>
      There are quite a few of these buttons around now, and they are not all
      the same. Some send you to silly toys, some to strangers' blogs and some
      to a street on the other side of the world. Here are the ones we keep
      going back to, plus two that are hidden on this site.
    </p>

    <h2>The classic buttons</h2>
    <p>
      <a href="/link/bored-button/">The Bored Button</a> is the one most people
      mean when they search for it. One button, one fun website from its list,
      and another one when you press it again. If you have never tried a
      button like this, start here.
    </p>
    <p>
      <a href="/link/useless-web/">The Useless Web</a> does the same thing with
      a stricter rule: every site on its list has to be pointless. Expect sites
      that do one odd thing and nothing else. Most of them take ten seconds. A
      few will quietly take twenty minutes.
    </p>
    <p>
      <a href="/link/clicktheredbutton-com/">Click the Red Button</a> has a big
      red button and more than 360 hand-picked sites behind it.
      <a href="/link/cloudhiker-net/">Cloudhiker</a> is the closest thing to
      the old StumbleUpon: hit the button and get flung to a corner of the web
      someone actually chose.
    </p>

    <h2>Buttons for people who like reading</h2>
    <p>
      Not every button has to lead to a toy.
      <a href="/link/kagi-com-smallweb/">Kagi Small Web</a> shows you one fresh
      post from somebody's personal blog. No ads and no algorithm, just a
      stranger writing about their week. It is oddly calming.
    </p>
    <p>
      Wikipedia is where things get properly random.
      <a href="/link/wikiroulette-co/">WikiRoulette</a> drops you on any of
      Wikipedia's millions of articles, and <a href="/link/wikitok-io/">WikiTok</a>
      turns the same idea into a scroll that never ends. If you would rather
      learn a skill you will never need, the
      <a href="/link/wikihow-rand/">WikiHow randomizer</a> picks a how-to
      article instead.
    </p>

    <h2>Buttons that take you somewhere</h2>
    <p>
      <a href="/link/random-street/">Random Street View</a> puts you on a
      street somewhere in the world. Most of the time it is an empty road in a
      country you have never visited, which is more interesting than it
      sounds.
    </p>
    <p>
      <a href="/link/walzr-com-img-0001/">IMG_0001</a> is a stranger one. It
      plays old iPhone home videos from YouTube at random, the kind nobody
      ever bothered to give a title. They are raw, unedited and usually
      seen by almost no one. It feels a little like looking through a
      stranger's window.
    </p>
    <p>
      If you would rather play something,
      <a href="/link/randoplay-com-what-game-should-i-play/">RandoPlay</a>
      asks for your device and mood and hands you one browser game. Or skip
      the questions and let it decide.
    </p>

    <h2>The two buttons on Bored.com</h2>
    <p>
      Bored.com has its own version, and it is easy to miss. The search bar
      at the top of the page, the one that says "I'm bored...", has a small
      shuffle button on its left end. Press it and you land on one of the more
      than 1,900 sites in our directory. We picked every one of them, so
      wherever you end up, somebody here thought it was worth a visit.
    </p>
    <p>
      The second one is less polite. In the bottom left corner sits a sleepy
      eye that watches you scroll. Poke it and it gets annoyed, then hands out
      your punishment: a slot machine that spins through the same directory
      and stops on a site or a game from the
      <a href="/arcade/">bored arcade</a>. Hit "Accept fate" to go there, or
      "Nope" to spin again. We will not tell anyone how many times you pressed
      "Nope".
    </p>

    <h2>Want to pick it yourself?</h2>
    <p>
      A surprise is fun until you land on the same kind of site three times in
      a row. When that happens, browse a category instead.
      <a href="/category/random-rabbit-hole/">Random rabbit hole</a> collects
      every button in this post and a couple more.
      <a href="/category/pointless-sites/">Pointless portals</a> lists whole
      collections of odd sites, and
      <a href="/category/pointless-fun/">Pointless fun</a> is the place for
      single sites that do one silly thing well.
    </p>
    <p>
      Know a good button we missed? Tell us and we will give it a few hundred
      presses before we add it.
    </p>
  `},A={slug:"spooky-websites-and-halloween-games",title:"Spooky websites and Halloween games to play online",description:"Free Halloween games, ghost stories and websites that feel slightly wrong, from a floppy skeleton to the Backrooms. All in your browser.",date:"2026-10-27",readTime:"5 min read",keywords:["halloween games online","free halloween games","spooky websites","creepy websites","ghost stories online","halloween things to do online","backrooms"],cover:{bg:"bg-orange-600",emoji:"🎃"},related:[{href:"/category/horror-vault/",label:"Browse the horror vault"},{href:"/category/liminal-space/",label:"Browse liminal spaces"},{href:"/arcade/haunted-house-inspector/",label:"Play Haunted house inspector"},{href:"/arcade/crypt-rush/",label:"Play Crypt rush"},{href:"/link/pumpkins-sh/",label:"Visit Pumpkin Patch"}],content:`
    <p>
      Spooky season does not need a costume or a plan. A browser and a dark
      room will do. We went through the directory and the arcade and pulled
      out everything with a ghost, a skeleton or a hallway that goes on a bit
      too long.
    </p>
    <p>
      The list starts silly and gets creepier the further you scroll, so stop
      wherever you like. Everything here is free and runs in your browser.
    </p>

    <h2>Start with something silly</h2>
    <p>
      <a href="/link/screen-toys-bones/">Spooky Bones</a> is a floppy skeleton
      that follows your mouse around. Its feet stay planted and the rest of it
      wobbles. There is nothing to win. It is just very funny to watch.
    </p>
    <p>
      <a href="/link/pumpkins-sh/">Pumpkin Patch</a> has a million pumpkins
      under one Halloween moon. Claim one, carve a face into it and leave it
      glowing for the next stranger who wanders past. It is the only pumpkin
      you will carve this year without getting seeds on the floor.
    </p>
    <p>
      If you would rather dress someone up,
      <a href="/link/ghostbutter-itch-io-dress-code-human/">Dress Code: Human</a>
      gives you a skeleton, a party that starts in two minutes and a dress code
      that says human.
      <a href="/link/kindanice-itch-io-frankenstyle/">Frankenstyle!</a> has you
      dig up outfits for a monster, and
      <a href="/link/pumpkin-cafe/">Pumpkin Caf\xe9</a> puts you behind the counter
      on Halloween night, making coffee for vampires, mummies and ghosts.
    </p>

    <h2>Halloween games in the bored arcade</h2>
    <p>
      A few games in our own <a href="/arcade/">arcade</a> fit the season.
      <a href="/arcade/haunted-house-inspector/">Haunted house inspector</a>
      gives you one reportedly haunted house a day. Read the clues and decide
      what is going on: a real ghost, the plumbing, cursed wallpaper or just a
      bad landlord. Everyone gets the same house, so you can argue about the
      wallpaper afterwards.
    </p>
    <p>
      <a href="/arcade/daily-dungeon-door/">Daily dungeon door</a> is another
      daily one. Read the odds on each door, then go deeper or walk out with
      what you have.
      <a href="/arcade/potion-label-panic/">Potion label panic</a> puts you at
      an apothecary counter, labelling cursed potions before the customers
      riot.
    </p>
    <p>
      For something louder, <a href="/arcade/crypt-rush/">Crypt rush</a> is a
      retro first-person shooter through five crypts full of skeletons. Find
      the keys, open the locked doors and save the rocket launcher for the
      brutes.
    </p>

    <h2>More spooky browser games</h2>
    <p>
      <a href="/link/dukope-itch-io-moida-mansion/">Moida Mansion</a> is a tiny
      haunted house game made to look like an old 80s handheld with three
      buttons. Search the rooms, rescue your club and stay away from the
      moida. It is by the maker of Papers, Please, and it is just as hard to
      put down.
    </p>
    <p>
      In <a href="/link/newgrounds-com-portal-view-591520/">The Summoning</a>
      you are the necromancer for once: raise skeletons and hold your lawn
      against waves of humans. <a href="/link/yorg-io/">YORG.io</a> is a base
      builder where you set up mines and turrets by day and survive the zombies
      at night.
      <a href="/link/newgrounds-com-portal-view-587552/">Brains Will Roll</a> is
      the gentle one: clear the blocks so a zombie brain rolls where it needs
      to go.
    </p>

    <h2>Ghost stories for after dark</h2>
    <p>
      Some nights you just want to read something that makes you check the
      hallway. <a href="/link/castleofspirits-com/">Castle of Spirits</a> has
      been collecting reader ghost stories since 1997, and
      <a href="/link/yourghoststories-com/">Your Ghost Stories</a> has
      thousands of first-person hauntings from ordinary people. Most of them
      are small and believable, which is exactly why they work.
    </p>
    <p>
      <a href="/link/nightscribe-co/">Nightscribe</a> is a library of indie
      creepypasta with a shuffle button, and many of the stories are narrated.
      If you would rather listen with the lights off,
      <a href="/link/thenosleeppodcast-com/">The NoSleep Podcast</a> has years
      of horror stories with full-cast narration.
    </p>
    <p>
      For the classics, <a href="/link/poestories-com/">PoeStories</a> has all
      of Poe's tales, from The Tell-Tale Heart to The Black Cat, and
      <a href="/link/hplovecraft-com/">The H.P. Lovecraft Archive</a> has every
      story Lovecraft wrote, free to read. And if you have never read
      <a href="/link/emcarroll-com/">Emily Carroll's comics</a>, start with
      His Face All Red. They use the scroll itself to make you flinch.
    </p>

    <h2>Places that feel wrong</h2>
    <p>
      Not everything creepy needs a monster.
      <a href="/link/onlinebackrooms-com/">Online Backrooms</a> lets you wander
      the yellow hallways yourself: humming lights, damp carpet and no exit.
      <a href="/link/backrooms-wiki-wikidot-com/">The Backrooms Wiki</a> has
      the lore if you want to know where you just were, and
      <a href="/link/liminals-pics/">Liminal Spaces Explorer</a> shows you one
      empty mall or drained pool after another.
    </p>
    <p>
      <a href="/link/thisman-org/">Ever Dream This Man?</a> is about a face
      that thousands of strangers say they have seen in their dreams. Read the
      dossier, then try not to think about it at bedtime.
      <a href="/link/mysteryfleshpitnationalpark-com/">Mystery Flesh Pit National Park</a>
      is a fake tourist site for a park built inside a giant living creature,
      complete with brochures, maps and incident reports. It is brilliant and
      a little queasy.
    </p>
    <p>
      And <a href="/link/geektyper-com-scp3/">SCP Terminal</a> lets you mash
      your keyboard and type out containment logs from a secret paranormal
      archive. You will look very busy.
    </p>

    <h2>A horror movie to end the night</h2>
    <p>
      The <a href="/link/archive-org-feature-films/">Internet Archive feature films</a>
      collection has thousands of public domain movies, including plenty of
      old drive-in horror. Pick something in black and white, turn off the
      lights and press play. No account and no ads.
    </p>

    <h2>Bored.com is dressed up too</h2>
    <p>
      Every year from October 15 to November 2, our sleepy logo turns into a
      yawning pumpkin and a sleepy spider hangs from the top of the page. Poke
      it and see what happens. Do not worry, it comes back.
    </p>
    <p>
      Want more? The <a href="/category/horror-vault/">horror vault</a> has
      every creepy corner we have found so far, and
      <a href="/category/liminal-space/">liminal space</a> collects the empty
      hallways. Know a spooky site we missed? Tell us. We will check it out,
      with the lights on.
    </p>
  `},P={slug:"christmas-websites-and-winter-games",title:"Christmas websites and winter games to play online",description:"Santa trackers, a paper snowflake maker, yule logs and cozy winter games. Free Christmas fun for December, all in your browser.",date:"2026-12-01",readTime:"5 min read",keywords:["christmas websites","christmas games online","free christmas games","santa tracker","online yule log","paper snowflake maker","winter games online"],cover:{bg:"bg-red-600",emoji:"🎄"},related:[{href:"/category/christmas-toys/",label:"Browse Santa season"},{href:"/link/supersnowflakemaker-com/",label:"Visit Super Snowflake Maker"},{href:"/link/webyulelog-com/",label:"Visit Web Yule Log"},{href:"/arcade/sidewalk-stand/",label:"Play Sidewalk stand"},{href:"/cozy-websites/",label:"Browse cozy websites"}],content:`
    <p>
      December is the one month where nobody judges you for spending an
      evening watching reindeer on a webcam. So we went through the directory
      and the arcade and pulled out everything with snow, a sleigh or a
      crackling fire.
    </p>
    <p>
      The Christmas sites all live in one place, our
      <a href="/category/christmas-toys/">Santa season</a> category. Below are
      the highlights, plus the winter games and cozy corners we found
      elsewhere. Everything is free and runs in your browser.
    </p>

    <h2>Is it Christmas yet?</h2>
    <p>
      <a href="/link/is-it-xmas/">Is It Christmas?</a> answers exactly one
      question with exactly one word, in the language of the country you are
      in. On every day but one, that word is no. It is somehow funnier the
      closer you get to the 25th, so check it every morning in December and
      enjoy the disappointment.
    </p>

    <h2>Follow the sleigh</h2>
    <p>
      Two trackers watch Santa on the big night.
      <a href="/link/noradsanta-org/">NORAD Tracks Santa</a> points the radar
      that watches the sky all year at one sleigh, with a live flight map on
      the 24th and a village of games and songs from December 1.
      <a href="/link/santatracker-google-com/">Google Santa Tracker</a> opens
      Santa's Village in December with elf mini games, a countdown clock and,
      on Christmas Eve, a sleigh crossing the map in real time.
    </p>
    <p>
      Before then, the reindeer need feeding.
      <a href="/link/reindeercam-com/">ReindeerCam</a> is a live feed from
      Santa's barn that has been running since 2011. Most of the time it is
      reindeer doing reindeer things, but from late November the man himself
      turns up every evening to feed them.
    </p>

    <h2>Write to Santa</h2>
    <p>
      <a href="/link/emailsanta-com/">EmailSanta</a> has been answering
      letters to Santa since 1998. Write one and you get an actual reply, plus
      a naughty or nice list, a countdown and a North Pole webcam. It looks
      exactly as old as it is, which is the whole charm.
    </p>

    <h2>Make a snowflake without the mess</h2>
    <p>
      <a href="/link/supersnowflakemaker-com/">Super Snowflake Maker</a> is
      the paper snowflake you made in school, minus the scissors and the
      confetti all over the floor. Fold the paper, draw your cuts and unfold.
      You can go from four folds up to 24, and if you want to make the real
      thing after all, there is a printable folding guide.
    </p>

    <h2>Winter games to play online</h2>
    <p>
      <a href="/link/line-rider/">Line Rider</a> is the browser classic where
      you draw a line and a tiny sledder rides it. There is no goal and no
      score, and people have still spent nearly twenty years on it.
      <a href="/link/sinerider-com/">SineRider</a> does the same with
      equations: type a formula and watch the sled ride your curve to the
      goal. It is the only maths homework that comes with snow.
    </p>
    <p>
      <a href="/link/ferryhalim-com/">Orisinal</a> brings back Ferry Halim's
      gentle little animal games from the Flash days. Start with Winterbells,
      where a bunny jumps from bell to bell up into a snowy sky.
    </p>
    <p>
      For something busier, <a href="/link/coolmathgames-com-0-penguin-diner/">Penguin Diner</a>
      puts you in charge of a restaurant full of very impatient penguins, and
      <a href="/link/newgrounds-com-portal-view-589307/">Penguin Slice</a> has
      you cut through ice and stone so the angry penguins tumble off. And if
      all the cheer gets a bit much,
      <a href="/link/flashmuseum-net-game-clickdeath-winter-wonder-land-es3/">ClickDeath Winter Wonder Land</a>
      gives you ski lifts, snowmen, a frozen pond and a slope full of stick
      tourists who are about to have a very bad holiday.
    </p>

    <h2>Cozy games in the bored arcade</h2>
    <p>
      A few games in our own <a href="/arcade/">arcade</a> fit the season.
      <a href="/arcade/sidewalk-stand/">Sidewalk stand</a> gives you twenty
      dollars, a folding table and fourteen days to sell lemonade or hot
      cocoa. Read the forecast, because nobody wants lemonade in a cold snap.
    </p>
    <p>
      <a href="/arcade/color-porch/">Color porch</a> has a new coloring page
      every morning, which is a nice way to sit quietly while the house fills
      up with relatives. And <a href="/arcade/patches/">Patches</a> has you
      piece quilt patches into a pattern, which is about as close to knitting
      by the fire as a browser game gets.
    </p>

    <h2>A fire in the corner of your screen</h2>
    <p>
      No fireplace? <a href="/link/webyulelog-com/">Web Yule Log</a> has seven
      of them, each built by a different coder: a pixel hearth, a fake Windows
      app, an old CRT and even a drive home through the snow. Pick one or let
      them take turns while your cocoa cools.
      <a href="/link/jasperbernaers-com-fireplace-screensaver/">Fireplace Screensaver</a>
      draws its flames live in code, with eight hearths, a crackle track and a
      key that pokes the fire when it gets lazy.
    </p>
    <p>
      If you would rather not sit by the fire alone,
      <a href="/link/neal-fun-cursor-camp/">Cursor Camp</a> lets you gather
      round a campfire with hundreds of other people's cursors. Put
      <a href="/link/lofi-cafe/">Lofi Cafe</a> on in the background and keep
      <a href="/link/puginarug-com/">Pug in a Rug</a> open in another tab, as
      a reminder of what peak cozy looks like.
    </p>

    <h2>Fireworks to end the year</h2>
    <p>
      <a href="/link/memalign-github-io-m-fireworks-index-html/">Fireworks Tap Toy</a>
      fires a rocket wherever you tap or click. Hold down and it keeps
      launching, type on your keyboard and the whole sky lights up, or switch
      on auto launch and leave it running at midnight. Fair warning: the sound
      is on from the first tap, brass band included.
    </p>

    <h2>Bored.com is dressed up too</h2>
    <p>
      Every year from December 1 to December 31, our sleepy logo turns into a
      yawning Santa, beard and all. A string of colored lights hangs along the
      top of the page and snow drifts down while you browse. If you like your screen still,
      turn on reduced motion on your device and the snow stays away.
    </p>
    <p>
      Want more? <a href="/category/christmas-toys/">Santa season</a> has every
      Christmas site we have found so far, and
      <a href="/cozy-websites/">cozy websites</a> has plenty more for long
      winter evenings. Know a festive site we missed? Tell us. We will check it
      out, with a mince pie.
    </p>
  `},_={slug:"black-friday-websites-shop-without-spending",title:"Black Friday websites: shop till you drop without spending a cent",description:"Spend a trillion dollars, guess Costco prices, browse gadgets nobody needs and run your own shop. Black Friday fun that leaves your bank account alone.",date:"2026-11-25",readTime:"5 min read",keywords:["black friday websites","black friday games","spend elon musk money","spend bill gates money","window shopping websites","weird gadget websites","price guessing games"],cover:{bg:"bg-fuchsia-500",emoji:"🛒"},related:[{href:"/category/weird-shops/",label:"Browse Weird shops"},{href:"/link/neal-fun-spend-elon/",label:"Visit Spend Elon's Money"},{href:"/link/costcodle-com/",label:"Visit Costcodle"},{href:"/arcade/spend-it-all/",label:"Play Spend it all"},{href:"/arcade/sidewalk-stand/",label:"Play Sidewalk stand"}],content:`
    <p>
      Black Friday is on November 27 this year. Which means your inbox is
      already full of countdown timers and "last chance" emails for things
      you weren't planning to buy anyway.
    </p>
    <p>
      So here's a different plan. Go shopping. Fill a cart. Spend amounts of
      money that don't exist. Just don't use your own.
    </p>

    <h2>Start with somebody else's money</h2>
    <p>
      <a href="/link/neal-fun-spend-elon/">Spend Elon's Money</a> gives you a
      trillion dollars and 26 things to spend it on. Coffee at one end,
      aircraft carrier at the other. Everything you buy shows up in a big
      white field, drawn at roughly its real size, next to a small man in a
      suit for scale. Buy a thousand coffees and you get a tidy grid of cups.
      Buy a couple of superyachts and there isn't much room left for anything
      else.
    </p>
    <p>
      It's been one of the most clicked sites on Bored.com this autumn. The
      older one is still up there too:
      <a href="/link/neal-fun-spend/">Spend Bill Gates' Money</a> only has
      100 billion to get through. That version builds a receipt as you go,
      and there's a Sell button for the moment you realize you don't need a
      second tank.
    </p>
    <p>
      <a href="/link/boringballs-com-spend-a-trillion/">Spend a Trillion</a>
      is the biggest catalogue of the three. A hundred items, from a banana
      for a dollar to a moon colony for 800 billion. It also saves your cart
      in the browser, so if you close the tab halfway through, your half
      spent trillion is still sitting there tomorrow.
    </p>
    <p>
      Ours is harder. <a href="/arcade/spend-it-all/">Spend it all</a> doesn't
      ask you to spend a fortune, it asks you to land on exactly zero. A
      gumball costs a dollar, a Mars mission costs billions, and you've got
      to make those two meet in the middle. There's a daily order too, with
      three things you have to buy and a par to beat. It's the one that will
      eat your lunch break if you let it.
    </p>
    <p>
      When you're done, <a href="/link/neal-fun-printing-money/">Printing Money</a>
      is worth two minutes. Rows of jobs and companies, each one spitting out
      bills at the rate the page gives each one. Minimum wage crawls at the
      top. Then there's a box where you type in your own hourly pay. Your row
      appears somewhere in the middle, and somehow that's the moment the page
      stops being funny.
    </p>

    <h2>Stuff nobody needs</h2>
    <p>
      Window shopping is most of the fun anyway, so the
      <a href="/category/weird-shops/">Weird shops</a> category does a lot of
      the work here. <a href="/link/thisiswhyimbroke-com/">ThisIsWhyImBroke</a>
      is exactly what the name promises: page after page of gadgets you
      didn't want ten seconds ago.
      <a href="/link/odditymall-com/">Odditymall</a> is the same idea with a
      straighter face, which somehow makes it worse.
    </p>
    <p>
      <a href="/link/weirdorconfusing-com/">Weird or Confusing</a> has one
      button. Press it and you land on a product that is genuinely for sale
      on Amazon and genuinely hard to explain. Press it again. It doesn't get
      more sensible.
    </p>
    <p>
      Then there's <a href="/link/vat19-com/">Vat19</a>, which will sell you
      gummy versions of almost anything, and
      <a href="/link/duckeys-com/">Duckeys</a>, a shop that makes keyboard
      keys that quack, meow or ribbit when you press them. Lovely for you.
      Less lovely for anyone sitting near you.
    </p>
    <p>
      The antidote is the
      <a href="/link/absolutelyworthless-com/">Museum of Absolutely Worthless Things</a>.
      Objects nobody needed, each one given a serious write-up and a
      worthlessness score. There's a weekly showdown to vote in if you want
      to feel superior about your own purchases. And
      <a href="/link/vole-wtf-overpriced-basic-url/">Overpriced Basic Title</a>
      does the luxury minimal brand thing perfectly, except the product is
      nothing at all. Clean type, premium layout, no product. It's hard to
      argue with.
    </p>

    <h2>How bad are you at prices?</h2>
    <p>
      Most of Black Friday is just this, really. A big discount sign next to
      a price you've never checked. So it's worth finding out how well you
      know what things cost before Friday.
    </p>
    <p>
      <a href="/link/costcodle-com/">Costcodle</a> is the daily one: a Costco
      item, six guesses, Wordle rules.
      <a href="/link/neal-fun-auction-game/">The Auction Game</a> shows you
      odd things that went under the hammer and asks what they fetched, and
      some of the answers are hard to believe.
      <a href="/link/autoguessr-com/">AutoGuessr</a> does cars, using real
      listings. If you haven't looked at car prices in a while, this one will
      sort that out quickly.
    </p>

    <h2>Or stand behind the till</h2>
    <p>
      <a href="/arcade/sidewalk-stand/">Sidewalk stand</a> is our shopkeeping
      game. Twenty five dollars, a folding table, fourteen days. You sell
      iced tea, hot cocoa or both, you set the recipe and the price, and the
      weather decides whether anyone shows up. Sell iced tea through a cold
      snap and you'll find out what a bad quarter feels like.
    </p>
    <p>
      <a href="/link/jetamp-itch-io-boba-simulator/">Boba Simulator</a> starts
      with quitting your job to sell boba to cats, which is a business plan
      we've heard worse versions of. And
      <a href="/link/memalign-github-io-m-spacetrader-index-html/">Space Trader</a>
      is a handheld game from 2002 that still holds up: buy cheap on one
      planet, sell on the next, keep an eye out for pirates, retire on your
      own moon if it goes well.
    </p>

    <h2>And one that isn't a joke</h2>
    <p>
      After an hour of fake billions, <a href="/link/playspent-org/">Spent</a>
      lands differently. A thousand dollars, a kid, one month to get through.
      Every decision costs something and there's never quite enough. Most
      people don't reach payday. It only takes a few minutes, which is
      somehow worse.
    </p>
    <p>
      If you did end up buying flat-pack furniture this week, look it up in
      the <a href="/link/ikea-greg-technology/">Ikea Complexity Index</a>
      before you open the box. It ranks 20,000 IKEA products by how painful
      they are to put together. Somewhere in there is a wardrobe with 743
      parts and a ten hour build. Better to know now.
    </p>
    <p>
      The rest of the strange shops are in
      <a href="/category/weird-shops/">Weird shops</a>, and the
      <a href="/arcade/">arcade</a> has more to do while you're waiting for a
      delivery that isn't coming.
    </p>
  `},E=new Date("2026-11-26T10:19:31.785Z"),M=`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}-${String(E.getDate()).padStart(2,"0")}`,W=[k,y,b,f,w,v,x,j,T,z,N,S,I,C,A,P,_].filter(function(e){return e.date<=M}).sort((e,a)=>new Date(a.date).getTime()-new Date(e.date).getTime()),B=[{kind:"link",label:"Websites"},{kind:"arcade",label:"Arcade games"},{kind:"category",label:"Categories"},{kind:"mood",label:"Moods"},{kind:"blog",label:"Blog posts"}],L=new Map(h.sortedCategories.map(e=>[e.id,e.name])),q=h.sortedLinks.map(e=>{let a=L.get(e.categoryId)??"";return{kind:"link",key:e.id,title:e.name,href:`/link/${e.id}/`,subtitle:a||void 0,favicon:function(e){try{return`/favicons/${new URL(e).hostname}-32.png`}catch{return}}(e.url),url:e.url,haystacks:[e.name.toLowerCase(),a.toLowerCase()],ranking:e.ranking??0}}),Y=(0,c.getReleasedArcadeGames)().map(e=>({kind:"arcade",key:e.slug,title:e.name,href:e.href,subtitle:e.blurb,image:e.image,haystacks:[e.name.toLowerCase()],ranking:0})),O=h.sortedCategories.map(e=>({kind:"category",key:e.id,title:e.name,href:`/category/${e.id}/`,subtitle:e.description,haystacks:[e.name.toLowerCase(),(e.description??"").toLowerCase()],ranking:e.ranking??0})),F=u.sortedMoods.map(e=>({kind:"mood",key:e.id,title:e.label,href:e.href,subtitle:e.blurb||e.title,image:(0,p.getMoodArt)(e.id)??void 0,haystacks:[e.label.toLowerCase(),e.title.toLowerCase(),e.slug.replace(/-/g," ")],ranking:e.ranking??0})),R={link:q,arcade:Y,category:O,mood:F,blog:W.map(e=>({kind:"blog",key:e.slug,title:e.title,href:`/blog/${e.slug}/`,subtitle:e.description,image:g(e.slug)??void 0,haystacks:[e.title.toLowerCase(),...e.keywords.map(e=>e.toLowerCase())],ranking:0}))};function H(e,a,t){let o=e.length,r=a.length;if(Math.abs(o-r)>t)return t+1;if(0===o)return r;if(0===r)return o;let s=Array(r+1);for(let e=0;e<=r;e++)s[e]=e;for(let n=1;n<=o;n++){let o=Array(r+1);o[0]=n;let i=n,l=e.charCodeAt(n-1);for(let e=1;e<=r;e++){let t=+(l!==a.charCodeAt(e-1)),r=Math.min(s[e]+1,o[e-1]+1,s[e-1]+t);o[e]=r,r<i&&(i=r)}if(i>t)return t+1;s=o}return s[r]}var D=e.i(272386),$=e.i(417478),G=e.i(981605),K=e.i(867927),U=e.i(530494);function J({src:e,name:o}){let[r,s]=(0,t.useState)(!1);return(0,a.jsx)("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center",children:e&&!r?(0,a.jsx)("img",{src:e,alt:"",width:20,height:20,loading:"lazy",className:"h-5 w-5 object-contain",onError:()=>s(!0),onLoad:e=>{let a=e.currentTarget;a.naturalWidth<=1&&a.naturalHeight<=1&&s(!0)}}):(0,a.jsx)(U.default,{name:o})})}let Q={link:"bg-logo",category:"bg-logo",arcade:"bg-berry",mood:"bg-sun",blog:"bg-cream"};function V({groups:e,highlightedIndex:t,indexOf:o,onSelect:r,onHover:s,listboxId:n}){return(0,a.jsx)("div",{id:n,role:"listbox",className:"absolute left-0 right-0 top-full mt-2 z-50 max-h-[70vh] overflow-y-auto border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",children:e.map(e=>{let n="arcade"===e.kind,i="link"===e.kind,l=e.showLabel??"link"!==e.kind;return(0,a.jsxs)("div",{className:"border-b-2 border-black last:border-b-0",children:[l?(0,a.jsx)("div",{className:`border-b-2 border-black px-3 pt-2.5 pb-1.5 font-arcade text-[10px] tracking-widest text-black ${Q[e.kind]}`,children:e.label}):null,(0,a.jsx)("ul",{className:"py-1",children:e.items.map(e=>{let l=o(e),h=l===t;return(0,a.jsxs)("li",{role:"presentation",onMouseEnter:()=>s(l),className:`flex items-stretch transition-colors ${h?"bg-primary-100":"hover:bg-primary-100"}`,children:[(0,a.jsxs)("button",{type:"button",role:"option","aria-selected":h,onMouseDown:e=>e.preventDefault(),onClick:()=>r(e),className:"flex min-w-0 flex-1 items-center gap-3 px-3 py-2 text-left text-zinc-900",children:[n&&e.image?(0,a.jsx)("img",{src:e.image,alt:"",width:48,height:48,loading:"lazy",className:"h-12 w-12 shrink-0 border-2 border-black object-cover"}):null,!n&&e.image?(0,a.jsx)("img",{src:e.image,alt:"",width:40,height:40,loading:"lazy",className:`shrink-0 border-2 border-black object-cover ${e.subtitle?"h-10 w-10":"h-7 w-7"}`}):null,i?(0,a.jsx)(J,{src:e.favicon,name:e.title}):null,(0,a.jsxs)("span",{className:"min-w-0 flex-1",children:[(0,a.jsx)("span",{className:"block truncate text-base font-semibold",children:e.title}),e.subtitle?(0,a.jsx)("span",{className:"block truncate text-xs text-zinc-500",children:e.subtitle}):null]})]}),e.url?(0,a.jsx)("a",{href:e.href,tabIndex:-1,"aria-label":`View details for ${e.title}`,onMouseDown:e=>e.preventDefault(),className:"flex w-11 shrink-0 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-900",children:(0,a.jsx)(K.ChevronRight,{className:"h-4 w-4",strokeWidth:2.5,"aria-hidden":!0})}):null]},`${e.kind}-${e.key}`)})})]},e.kind)})})}let X=new Map(h.sortedLinks.map(e=>[e.id,e])),Z=new Map(h.sortedCategories.map(e=>[e.id,e]));function ee({value:e,onChange:i,onSubmit:l,onNavigate:h,inputRef:c,className:u=""}){let p=(0,t.useRef)(null),m=(0,t.useId)(),[g,f]=(0,t.useState)(!1),[y,w]=(0,t.useState)(-1),[b,k]=(0,t.useState)(e);(0,t.useEffect)(()=>{let a=window.setTimeout(()=>k(e),120);return()=>window.clearTimeout(a)},[e]);let v=b.trim(),x=(0,t.useMemo)(()=>0===v.length?0===F.length?[]:[{kind:"mood",label:"Popular searches",items:F.map(e=>({kind:e.kind,key:e.key,title:e.title,href:e.href,image:e.image}))}]:function(e,a=5){let t=e.trim().toLowerCase();if(t.length<1)return[];let o=[];for(let{kind:e,label:r}of B){let s=function(e,a,t){let o=[];for(let t of R[e]){let e=function(e,a){let t=e.haystacks[0];if(t.startsWith(a))return 0;let o=t.split(/\s+/);if(o.some(e=>e.startsWith(a)))return 1;if(t.includes(a))return 2;for(let t=1;t<e.haystacks.length;t++)if(e.haystacks[t].includes(a))return 3;if(a.length>=3){let e=a.length<=4?1:2;for(let t of o){if(!t)continue;let o=t.slice(0,a.length);if(H(a,o,e)<=e)return 4}for(let t of o)if(t&&Math.abs(t.length-a.length)<=e&&H(a,t,e)<=e)return 5}return null}(t,a);null!==e&&o.push({entry:t,score:e})}return o.sort((e,a)=>e.score!==a.score?e.score-a.score:a.entry.ranking-e.entry.ranking),o.slice(0,t).map(({entry:e})=>({kind:e.kind,key:e.key,title:e.title,href:e.href,subtitle:e.subtitle,image:e.image,favicon:e.favicon,url:e.url}))}(e,t,a);s.length>0&&o.push({kind:e,label:r,items:s})}return o}(b),[b,v]),j=(0,t.useMemo)(()=>x.flatMap(e=>e.items),[x]),T=g&&x.length>0;(0,t.useEffect)(()=>{w(-1)},[b]),(0,t.useEffect)(()=>{if(!g)return;let e=e=>{p.current&&!p.current.contains(e.target)&&f(!1)};return document.addEventListener("pointerdown",e),()=>document.removeEventListener("pointerdown",e)},[g]);let z=e=>{(0,D.trackEvent)("search_suggestion","header",`${e.kind}:${e.key}`),f(!1),w(-1),"arcade"===e.kind&&(0,r.recordGameEntry)(e.href),h?.();let a="link"===e.kind?X.get(e.key):void 0;a?function(e){(0,G.recordOutboundClick)({link:e,category:Z.get(e.categoryId)});let a=(0,$.arcadePath)(e.url);if(a){(0,r.recordGameEntry)(a),o(a);return}window.open(e.url,"_blank","noopener")}(a):o(e.href)};return(0,a.jsxs)("div",{ref:p,className:`relative min-w-0 ${u}`,children:[(0,a.jsxs)("div",{className:"flex w-full min-w-0 overflow-hidden border-[3px] border-black shadow-[5px_5px_0_0_#71c7f6] transition-all hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#71c7f6]",children:[(0,a.jsx)(d,{}),(0,a.jsx)(n,{ref:c,type:"search",placeholder:"I'm bored...",value:e,onChange:e=>{i(e.target.value),f(!0)},onFocus:()=>f(!0),onBlur:()=>f(!1),onKeyDown:e=>{if("ArrowDown"===e.key&&T){e.preventDefault(),w(e=>(e+1)%j.length);return}if("ArrowUp"===e.key&&T){e.preventDefault(),w(e=>e<=0?j.length-1:e-1);return}if("Escape"===e.key){f(!1),w(-1);return}if("Enter"===e.key){if(T&&y>=0&&j[y]){e.preventDefault(),z(j[y]);return}f(!1),l()}},className:"border-0 min-w-0","aria-label":"Search",role:"combobox","aria-expanded":T,"aria-controls":T?m:void 0,"aria-autocomplete":"list",autoComplete:"off"}),(0,a.jsx)("button",{type:"button",onClick:()=>{f(!1),l()},className:"h-11 px-5 bg-black hover:bg-zinc-800 text-white border-l-2 border-black transition-colors shrink-0","aria-label":"Search",children:(0,a.jsx)(s.Search,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":!0})})]}),T?(0,a.jsx)(V,{groups:x,highlightedIndex:y,indexOf:e=>j.findIndex(a=>a.kind===e.kind&&a.key===e.key),onSelect:z,onHover:w,listboxId:m}):null]})}var ea=e.i(174080),et=e.i(263676);function eo({value:e,onChange:o,onSubmit:r}){let[n,i]=(0,t.useState)(!1),l=(0,t.useRef)(null);return(0,t.useEffect)(()=>{if(!n)return;document.body.style.overflow="hidden";let e=e=>{"Escape"===e.key&&i(!1)};return window.addEventListener("keydown",e),()=>{document.body.style.overflow="",window.removeEventListener("keydown",e)}},[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{type:"button",onClick:()=>{(0,ea.flushSync)(()=>i(!0)),l.current?.focus()},"aria-label":"Search","aria-expanded":n,className:"h-11 w-11 inline-flex items-center justify-center text-black hover:bg-black/5 active:bg-black/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",children:(0,a.jsx)(s.Search,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":!0})}),n&&(0,a.jsxs)("div",{className:"fixed inset-0 z-[60] flex flex-col bg-white lg:hidden",role:"dialog","aria-modal":"true","aria-label":"Search",children:[(0,a.jsxs)("div",{className:"flex shrink-0 items-center justify-between border-b-2 border-black px-4 py-4",children:[(0,a.jsx)("span",{className:"text-sm font-extrabold text-zinc-900",children:"Search"}),(0,a.jsx)("button",{type:"button",onClick:()=>i(!1),"aria-label":"Close search",className:"h-11 w-11 inline-flex items-center justify-center border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",children:(0,a.jsx)(et.X,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":!0})})]}),(0,a.jsx)("div",{className:"px-4 pt-4",children:(0,a.jsx)(ee,{value:e,onChange:o,onSubmit:()=>{i(!1),r()},onNavigate:()=>i(!1),inputRef:l})})]})]})}let er=["sudoku-mini","portrait-profiler","cubicle-wreck","odd-one-out","would-you-rather"];function es(e){return!!(e.id&&e.name&&e.url)&&!e.disabled&&!e.private&&!e.hidden&&!e.draft}function en(){return er.map(e=>c.ARCADE_GAMES.find(a=>a.slug===e)).filter(e=>!!e&&(0,c.isGameReleased)(e))}function ei(e=3){return W.slice(0,e)}let el=[{id:"categories",label:"Categories",href:"/categories/",intro:"Browse hand-picked link collections by topic.",layout:"categories",cta:{label:"All categories",href:"/categories/"},items:function(e=8){return h.sortedCategories.filter(e=>!!(e.id&&e.name)&&h.sortedLinks.some(a=>a.categoryId===e.id&&es(a))).slice(0,e).map(e=>({label:e.name,href:`/category/${e.id}/`,categoryId:e.id}))}()},{id:"arcade",label:"Arcade",href:"/arcade/",intro:"Free mini games built for Bored.com. No download, just play.",layout:"arcade",cta:{label:"All arcade games",href:"/arcade/"},items:[],quickLinks:[{label:"Word games",href:"/arcade/#word"},{label:"Logic puzzles",href:"/arcade/#logic"},{label:"Trivia",href:"/arcade/#trivia"},{label:"Action",href:"/arcade/#action"},{label:"Platformers",href:"/arcade/#platformer"},{label:"2-player",href:"/arcade/#versus"},{label:"Party",href:"/arcade/#party"},{label:"Sandbox",href:"/arcade/#sandbox"}]},{id:"moods",label:"Moods",href:"/moods/",intro:"Curated landing pages, sorted by what you feel like doing.",layout:"list",cta:{label:"See all moods",href:"/moods/"},items:u.sortedMoods.map(e=>{let a=e.navLabel??e.label,t=e.navDescription??e.customLabel,o=(0,p.getMoodArt)(e.id);return o?{label:(0,p.withoutEmoji)(a),href:e.href,description:(0,p.withoutEmoji)(t),image:o}:{label:a,href:e.href,description:t}})},{id:"blog",label:"Blog",href:"/blog/",intro:"Lists, guides and rabbit holes from the Bored team.",layout:"blog",cta:{label:"All posts",href:"/blog/"},items:[]},{id:"more",label:"More",href:"/about/",layout:"list",cta:{label:"About",href:"/about/"},items:[{label:"FAQ",href:"/faq/"},{label:"Privacy",href:"/privacy/"},{label:"Terms",href:"/terms/"},{label:"Home",href:"/"}]}];function eh(){let e=en(),t=ei(8),o=el.find(e=>"moods"===e.id)?.items??[],r=el.find(e=>"arcade"===e.id)?.quickLinks??[];return(0,a.jsxs)("nav",{"aria-hidden":"true",className:"sr-only","aria-label":"Site links",children:[(0,a.jsx)("h2",{children:"Categories"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/categories/",children:"All categories"})}),h.sortedCategories.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:`/category/${e.id}/`,children:e.name})},e.id))]}),(0,a.jsx)("h2",{children:"Arcade"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/arcade/",children:"All arcade games"})}),e.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.href,children:e.name})},e.slug)),r.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.href,children:e.label})},e.href))]}),(0,a.jsx)("h2",{children:"Moods"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/moods/",children:"All moods"})}),o.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.href,children:e.label})},e.href))]}),(0,a.jsx)("h2",{children:"Blog"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/blog/",children:"All posts"})}),t.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:`/blog/${e.slug}/`,children:e.title})},e.slug))]}),(0,a.jsx)("h2",{children:"Site"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/about/",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/faq/",children:"FAQ"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/privacy/",children:"Privacy"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/terms/",children:"Terms"})})]})]})}var ed=e.i(593583),ec=e.i(88653),eu=e.i(532181),ep=e.i(657688),em=e.i(768877),eg=e.i(552653);function ef(){let{lightsOut:e,toggleLights:o}=(0,eg.useLightsOut)(),r=(0,t.useRef)(null);return(0,a.jsxs)("button",{ref:r,onClick:()=>{let e=r.current?.getBoundingClientRect();o(e?{x:e.left+e.width/2,y:e.top+e.height/2}:void 0)},className:"relative w-11 h-11 bg-zinc-200 border-2 border-black flex flex-col overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all",title:e?"Lights on":"Lights out","aria-pressed":e,"aria-label":e?"Turn the lights on":"Turn the lights out",children:[(0,a.jsx)("div",{className:`flex-1 border-b-2 border-black flex items-center justify-center text-[10px] font-black transition-colors ${!e?"bg-white":"bg-zinc-400"}`,children:"I"}),(0,a.jsx)("div",{className:`flex-1 flex items-center justify-center text-[10px] font-black transition-colors ${e?"bg-white":"bg-zinc-400"}`,children:"O"})]})}function ey({post:e,className:t="",eager:o=!1}){let r=g(e.slug);return r?(0,a.jsx)("img",{src:r,alt:"",width:320,height:320,loading:o?"eager":"lazy",decoding:"async",className:`object-cover ${t}`}):(0,a.jsx)("span",{"aria-hidden":!0,className:`flex items-center justify-center leading-none ${e.cover.bg} ${t}`,children:e.cover.emoji})}function ew({panel:e,onNavigate:t}){return(0,a.jsxs)("div",{className:"border-t-2 border-black bg-white",children:[(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-6",children:[e.intro&&(0,a.jsx)("p",{className:"text-sm text-zinc-600 max-w-2xl mb-6 font-medium",children:e.intro}),"categories"===e.layout&&(0,a.jsx)(eb,{panel:e,onNavigate:t}),"arcade"===e.layout&&(0,a.jsx)(ex,{panel:e,onNavigate:t}),"list"===e.layout&&(0,a.jsx)(ej,{panel:e,onNavigate:t}),"blog"===e.layout&&(0,a.jsx)(eT,{panel:e,onNavigate:t})]}),(0,a.jsx)(eS,{cta:e.cta,panelId:e.id,onNavigate:t})]})}function eb({panel:e,onNavigate:t}){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Most popular"}),(0,a.jsx)("ul",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3",children:e.items.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(ek,{item:e,onNavigate:t})},e.href))})]})}function ek({item:e,onNavigate:t}){var o;let r,s=e.categoryId?(o=e.categoryId,(r=h.sortedCategories.find(e=>e.id===o))?{category:r,links:h.sortedLinks.filter(e=>e.categoryId===o&&es(e))}:null):null,n=s?.links??[],i=n.slice(0,5),l=Math.max(0,n.length-i.length),d=s?.category.name??e.label;return(0,a.jsxs)("a",{href:e.href,onClick:t,className:"group block border-2 border-black bg-white px-3 py-2.5 h-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all",children:[(0,a.jsx)("h3",{className:"text-sm font-bold text-zinc-900 mb-2 leading-tight",children:d}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[i.map(e=>(0,a.jsx)(ev,{url:e.url,name:e.name},e.id)),l>0&&(0,a.jsxs)("div",{className:"w-8 h-8 flex items-center justify-center bg-purple-300 border-2 border-black text-black text-xs font-bold",children:["+",l]})]})]})}function ev({url:e,name:o}){let r=function(e){try{let{hostname:a}=new URL(e);return`/favicons/${a}-32.png`}catch{return}}(e),[s,n]=(0,t.useState)(null);return(0,t.useEffect)(()=>{if(!r)return;let e=new window.Image;e.src=r,e.onload=()=>{n(1!==e.naturalWidth||1!==e.naturalHeight)},e.onerror=()=>n(!1)},[r]),(0,a.jsx)("div",{className:"w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-zinc-50",children:r&&null===s?null:r&&s?(0,a.jsx)("img",{src:r,alt:o+" logo",width:20,height:20,className:"w-5 h-5 object-contain",loading:"lazy"}):(0,a.jsx)(U.default,{name:o})})}function ex({panel:e,onNavigate:t}){let o=en();return(0,a.jsxs)("div",{className:"grid gap-6 sm:grid-cols-[1fr_minmax(140px,180px)]",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Featured games"}),(0,a.jsx)("ul",{className:"grid grid-cols-3 sm:grid-cols-5 gap-2 max-w-[600px]",children:o.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:e.href,onClick:t,className:"group block border-2 border-black bg-white p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all",children:[(0,a.jsx)("div",{className:"relative aspect-square w-full overflow-hidden border border-zinc-200 mb-1.5",children:(0,a.jsx)(ep.default,{src:e.image,alt:"",fill:!0,sizes:"110px",className:"object-cover"})}),(0,a.jsx)("span",{className:"text-xs font-extrabold text-zinc-900 leading-tight block truncate",children:e.name})]})},e.slug))})]}),e.quickLinks&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"By category"}),(0,a.jsx)("ul",{className:"flex flex-col gap-0.5",children:e.quickLinks.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.href,onClick:t,className:"block px-2 py-1.5 -mx-2 text-sm font-semibold text-zinc-800 hover:bg-primary-100 transition-colors",children:e.label})},e.href))})]})]})}function ej({panel:e,onNavigate:t}){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Pick a vibe"}),(0,a.jsx)("ul",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-1",children:e.items.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:e.href,onClick:t,className:"group flex items-start gap-3 px-3 py-2.5 h-full hover:bg-primary-100 transition-colors",children:[e.image?(0,a.jsx)("img",{src:e.image,alt:"",width:40,height:40,loading:"lazy",className:"h-10 w-10 shrink-0 border-2 border-black transition-transform duration-150 group-hover:-rotate-6"}):e.emoji?(0,a.jsx)("span",{className:"text-xl leading-none mt-0.5","aria-hidden":!0,children:e.emoji}):null,(0,a.jsxs)("span",{className:"min-w-0",children:[(0,a.jsx)("span",{className:"block text-base font-extrabold text-zinc-900 leading-tight",children:e.label}),e.description&&(0,a.jsx)("span",{className:"block text-xs text-zinc-500 font-medium mt-0.5",children:e.description})]})]})},e.href))})]})}function eT({panel:e,onNavigate:t}){let o=ei(6);return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Newest"}),(0,a.jsx)("ul",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-1",children:o.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:`/blog/${e.slug}/`,onClick:t,className:"group flex items-start gap-3 px-3 py-2.5 h-full hover:bg-primary-100 transition-colors",children:[(0,a.jsx)(ey,{post:e,className:"h-10 w-10 shrink-0 border-2 border-black text-xl transition-transform duration-150 group-hover:-rotate-6"}),(0,a.jsxs)("span",{className:"min-w-0",children:[(0,a.jsx)("span",{className:"block text-sm font-extrabold text-zinc-900 leading-tight",children:e.title}),(0,a.jsx)("span",{className:"block text-xs text-zinc-500 font-medium mt-0.5",children:new Date(e.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})})]})]})},e.slug))})]})}let ez={categories:{tab:"hover:bg-primary-100",tabOpen:"bg-primary-200",cta:"bg-logo hover:bg-primary-200"},arcade:{tab:"hover:bg-berry-pale",tabOpen:"bg-berry-soft",cta:"bg-berry hover:bg-berry-soft"},moods:{tab:"hover:bg-sun-pale",tabOpen:"bg-sun-soft",cta:"bg-sun hover:bg-sun-soft"},blog:{tab:"hover:bg-cream",tabOpen:"bg-cream",cta:"bg-cream hover:bg-sun-pale"},more:{tab:"hover:bg-primary-100",tabOpen:"bg-primary-200",cta:"bg-primary-200 hover:bg-primary-300"}};function eN({item:e,panelId:t,onNavigate:o}){return(0,a.jsxs)("a",{href:e.href,onClick:o,className:`group self-start inline-flex items-center gap-2 border-2 border-black ${ez[t].cta} transition-colors px-4 py-2 text-sm font-extrabold text-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`,children:[(0,a.jsx)("span",{children:e.label}),(0,a.jsx)(em.ArrowRight,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform","aria-hidden":!0})]})}function eS({cta:e,panelId:t,onNavigate:o}){return(0,a.jsx)("div",{className:"border-t-2 border-dashed border-zinc-300 bg-zinc-50",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4",children:[e?(0,a.jsx)(eN,{item:e,panelId:t,onNavigate:o}):(0,a.jsx)("span",{}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("span",{className:"text-xs font-bold text-zinc-700",children:"Lights"}),(0,a.jsx)(ef,{})]})]})})}var eI=e.i(24071);let eC=[.32,.72,0,1],eA=el.filter(e=>"more"!==e.id),eP={enter:e=>({x:e>0?"100%":"-100%"}),center:{x:0},exit:e=>({x:e>0?"-100%":"100%"})};function e_({open:e,onClose:o}){let[r,s]=(0,t.useState)("main"),[n,i]=(0,t.useState)(1);if((0,t.useEffect)(()=>{if(e)return;let a=setTimeout(()=>{s("main"),i(1)},250);return()=>clearTimeout(a)},[e]),!e)return null;let l="main"!==r?eA.find(e=>e.id===r)??null:null;return(0,a.jsxs)("div",{className:"fixed inset-0 z-[60] bg-white flex flex-col lg:hidden",role:"dialog","aria-modal":"true","aria-label":"Menu",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-4 py-4 border-b-2 border-black shrink-0",children:["main"===r?(0,a.jsx)("span",{className:"text-sm font-extrabold text-zinc-900",children:"Menu"}):(0,a.jsxs)("button",{type:"button",onClick:()=>{i(-1),s("main")},"aria-label":"Back to menu",className:"h-11 px-3 inline-flex items-center gap-1 text-sm font-extrabold text-zinc-900 hover:bg-primary-100",children:[(0,a.jsx)(eI.ChevronLeft,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":!0}),(0,a.jsx)("span",{children:"Menu"})]}),(0,a.jsx)("button",{type:"button",onClick:o,"aria-label":"Close menu",className:"h-11 w-11 inline-flex items-center justify-center border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",children:(0,a.jsx)(et.X,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":!0})})]}),(0,a.jsx)("div",{className:"relative flex-1 overflow-hidden",children:(0,a.jsx)(ec.AnimatePresence,{custom:n,initial:!1,children:(0,a.jsx)(eu.motion.div,{custom:n,variants:eP,initial:"enter",animate:"center",exit:"exit",transition:{duration:.28,ease:eC},className:"absolute inset-0 overflow-y-auto",children:"main"===r?(0,a.jsx)(eE,{onSelectPanel:e=>{i(1),s(e)},onClose:o}):l?(0,a.jsx)(eW,{panel:l,onClose:o}):null},r)})}),(0,a.jsx)("div",{className:"shrink-0 border-t-2 border-dashed border-zinc-300 px-4 py-3 bg-zinc-50",children:(0,a.jsxs)("div",{className:"flex items-center justify-between py-1",children:[(0,a.jsx)("span",{className:"text-sm font-semibold text-zinc-900",children:"Lights"}),(0,a.jsx)(ef,{})]})})]})}function eE({onSelectPanel:e,onClose:t}){return(0,a.jsxs)("div",{className:"px-4 py-6",children:[(0,a.jsx)("ul",{className:"flex flex-col",children:eA.map(t=>(0,a.jsx)("li",{children:(0,a.jsxs)("button",{type:"button",onClick:()=>e(t.id),className:"w-full flex items-center justify-between py-4 border-b border-zinc-200 text-lg font-extrabold text-zinc-900 hover:text-primary-700",children:[t.label,(0,a.jsx)(K.ChevronRight,{className:"w-5 h-5 text-zinc-400 shrink-0","aria-hidden":!0})]})},t.id))}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h2",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Info"}),(0,a.jsx)("ul",{className:"flex flex-col",children:eM.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:e.href,onClick:t,className:"flex items-center justify-between py-3 border-b border-zinc-200 text-base font-bold text-zinc-900 hover:text-primary-700",children:[e.label,(0,a.jsx)(K.ChevronRight,{className:"w-5 h-5 text-zinc-400 shrink-0","aria-hidden":!0})]})},e.href))})]})]})}let eM=[{label:"About",href:"/about/"},{label:"FAQ",href:"/faq/"},{label:"Privacy",href:"/privacy/"},{label:"Terms",href:"/terms/"}];function eW({panel:e,onClose:t}){return(0,a.jsxs)("div",{className:"px-4 py-6",children:[(0,a.jsx)("h1",{className:"text-2xl font-black tracking-tight font-stretch-semi-expanded text-zinc-900 mb-1",children:e.label}),e.intro&&(0,a.jsx)("p",{className:"text-sm text-zinc-500 font-medium mb-5",children:e.intro}),"categories"===e.layout&&(0,a.jsx)(eB,{panel:e,onClose:t}),"arcade"===e.layout&&(0,a.jsx)(eL,{panel:e,onClose:t}),"list"===e.layout&&(0,a.jsx)(eq,{panel:e,onClose:t}),"blog"===e.layout&&(0,a.jsx)(eY,{onClose:t}),e.cta&&(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)(eN,{item:e.cta,panelId:e.id,onNavigate:t})})]})}function eB({panel:e,onClose:t}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Most popular"}),(0,a.jsx)("ul",{className:"flex flex-col gap-3",children:e.items.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(ek,{item:e,onNavigate:t})},e.href))})]})}function eL({panel:e,onClose:t}){let o=en();return(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Featured games"}),(0,a.jsx)("ul",{className:"grid grid-cols-5 gap-2",children:o.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:e.href,onClick:t,className:"group block border-2 border-black bg-white p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all",children:[(0,a.jsx)("div",{className:"relative aspect-square w-full overflow-hidden border border-zinc-200 mb-1",children:(0,a.jsx)(ep.default,{src:e.image,alt:"",fill:!0,sizes:"(max-width: 640px) 90px, 160px",className:"object-cover"})}),(0,a.jsx)("span",{className:"text-xs font-extrabold text-zinc-900 leading-tight block truncate",children:e.name})]})},e.slug))})]}),e.quickLinks&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"By category"}),(0,a.jsx)("ul",{className:"flex flex-col",children:e.quickLinks.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:e.href,onClick:t,className:"flex items-center justify-between py-3 border-b border-zinc-200 text-base font-bold text-zinc-900 hover:text-primary-700",children:[e.label,(0,a.jsx)(K.ChevronRight,{className:"w-5 h-5 text-zinc-400 shrink-0","aria-hidden":!0})]})},e.href))})]})]})}function eq({panel:e,onClose:t}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Pick a vibe"}),(0,a.jsx)("ul",{className:"flex flex-col",children:e.items.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:e.href,onClick:t,className:"group flex items-start gap-3 py-3 border-b border-zinc-200 hover:bg-primary-100 -mx-2 px-2 transition-colors",children:[e.image?(0,a.jsx)("img",{src:e.image,alt:"",width:40,height:40,loading:"lazy",className:"h-10 w-10 shrink-0 border-2 border-black"}):e.emoji?(0,a.jsx)("span",{className:"text-xl leading-none mt-0.5","aria-hidden":!0,children:e.emoji}):null,(0,a.jsxs)("span",{className:"min-w-0 flex-1",children:[(0,a.jsx)("span",{className:"block text-base font-extrabold text-zinc-900 leading-tight",children:e.label}),e.description&&(0,a.jsx)("span",{className:"block text-xs text-zinc-500 font-medium mt-0.5",children:e.description})]}),(0,a.jsx)(K.ChevronRight,{className:"w-5 h-5 text-zinc-400 shrink-0 mt-1","aria-hidden":!0})]})},e.href))})]})}function eY({onClose:e}){let t=ei(6);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"font-arcade text-[10px] tracking-widest text-zinc-500 mb-3",children:"Newest"}),(0,a.jsx)("ul",{className:"flex flex-col",children:t.map(t=>(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:`/blog/${t.slug}/`,onClick:e,className:"flex items-start gap-3 py-3 border-b border-zinc-200",children:[(0,a.jsx)(ey,{post:t,className:"h-10 w-10 shrink-0 border-2 border-black text-xl"}),(0,a.jsxs)("span",{className:"min-w-0 flex-1",children:[(0,a.jsx)("span",{className:"block text-base font-extrabold text-zinc-900 leading-tight",children:t.title}),(0,a.jsx)("span",{className:"block text-xs text-zinc-500 font-medium mt-0.5",children:new Date(t.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})})]}),(0,a.jsx)(K.ChevronRight,{className:"w-5 h-5 text-zinc-400 shrink-0 mt-1","aria-hidden":!0})]})},t.slug))})]})}function eO({onClose:e,onPointerEnter:t,top:o,className:r=""}){return(0,a.jsx)(eu.motion.button,{type:"button","aria-label":"Close menu",className:`nav-backdrop fixed left-0 right-0 bottom-0 z-40 ${r}`,style:void 0!==o?{top:o}:void 0,onClick:e,onPointerEnter:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.22,ease:[.32,.72,0,1]}})}let eF=[.32,.72,0,1],eR=el.filter(e=>"more"!==e.id);function eH({panelTop:e,search:o}){let r=(0,t.useRef)(null),s=(0,t.useRef)(null),n=(0,t.useRef)(null),i=(0,t.useRef)(null),l=(0,t.useRef)(null),[h,d]=(0,t.useState)(null),[c,u]=(0,t.useState)(!1),[p,m]=(0,t.useState)(0),[g,f]=(0,t.useState)(0),y=(0,t.useCallback)(()=>{d(null),u(!1)},[]);(0,t.useEffect)(()=>{let e=null!==h||c;return document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}},[h,c]),(0,t.useEffect)(()=>{if(!h&&!c)return;let e=e=>{"Escape"===e.key&&y()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h,c,y]);let w=()=>{r.current&&(clearTimeout(r.current),r.current=null)},b=()=>{s.current&&(clearTimeout(s.current),s.current=null)};(0,t.useEffect)(()=>()=>{s.current&&clearTimeout(s.current),r.current&&clearTimeout(r.current)},[]);let k=()=>{b(),w(),r.current=setTimeout(()=>d(null),300)},v=(0,t.useCallback)(()=>{n.current&&m(n.current.getBoundingClientRect().bottom)},[]);(0,t.useLayoutEffect)(()=>{if(h&&!c)return v(),window.addEventListener("resize",v),window.addEventListener("scroll",v,{passive:!0}),()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v)}},[h,c,v,e]),(0,t.useLayoutEffect)(()=>{if(!l.current||!h||c)return void f(0);let e=l.current,a=()=>f(e.offsetHeight);a();let t=new ResizeObserver(a);return t.observe(e),()=>t.disconnect()},[h,c]);let x=Math.max(0,e-p),j=e=>e instanceof Node&&(n.current?.contains(e)===!0||i.current?.contains(e)===!0),T=e=>{if(j(e.relatedTarget))return;let a=document.elementFromPoint(e.clientX,e.clientY);a&&j(a)||k()},z=e=>{b(),w(),d(e),v()},N=h?eR.find(e=>e.id===h):null,S=null!==h&&!c,I=null!==h&&!c;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ec.AnimatePresence,{children:S&&(0,a.jsx)(eO,{top:e,onClose:y,onPointerEnter:k,className:"hidden lg:block"},"desktop-backdrop")}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{ref:n,className:"flex items-center gap-2 lg:gap-3",onMouseLeave:T,children:[(0,a.jsx)("nav",{"aria-label":"Main",className:"hidden lg:flex items-center gap-0.5 flex-1 min-w-0",children:eR.map(e=>(0,a.jsx)("div",{className:"relative",onMouseEnter:()=>{var a;return a=e.id,void(w(),b(),h!==a&&(s.current=setTimeout(()=>z(a),h?80:150)))},onMouseLeave:b,children:(0,a.jsx)("a",{href:e.href,className:`px-3 py-2 text-sm font-bold whitespace-nowrap transition-colors ${h===e.id?`${ez[e.id].tabOpen} text-zinc-900`:`text-zinc-900 ${ez[e.id].tab}`}`,"aria-expanded":h===e.id,onFocus:()=>z(e.id),children:e.label})},e.id))}),(0,a.jsxs)("div",{className:"lg:hidden ml-auto -mr-3 flex items-center",children:[o,(0,a.jsxs)("button",{type:"button",className:"h-11 px-3 gap-2 text-black hover:bg-black/5 active:bg-black/10 transition-colors inline-flex items-center justify-center font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black","aria-label":c?"Close menu":"Open menu","aria-expanded":c,onClick:()=>{d(null),u(e=>!e)},children:[c?(0,a.jsx)(et.X,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":!0}):(0,a.jsx)(ed.Menu,{className:"w-5 h-5",strokeWidth:2.5,"aria-hidden":!0}),(0,a.jsx)("span",{children:"Menu"})]})]})]}),(0,a.jsx)(ec.AnimatePresence,{children:I&&p>0&&(0,a.jsx)(eu.motion.div,{ref:i,className:"hidden lg:block fixed left-0 right-0 z-50 overflow-hidden",style:{top:p},onMouseEnter:w,onMouseLeave:T,initial:{height:0},animate:{height:g},exit:{height:0},transition:{duration:.32,ease:eF},children:(0,a.jsxs)("div",{ref:l,children:[x>0&&(0,a.jsx)("div",{className:"w-full",style:{height:x},"aria-hidden":!0}),(0,a.jsx)("div",{className:"border-b-2 border-black bg-white",children:(0,a.jsx)(ec.AnimatePresence,{mode:"popLayout",initial:!1,children:(0,a.jsx)(eu.motion.div,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.18,ease:eF},children:N&&(0,a.jsx)(ew,{panel:N,onNavigate:y})},h??"empty")})}),(0,a.jsx)("div",{className:"h-[6px] bg-black","aria-hidden":!0})]})},"desktop-panel-zone")})]}),(0,a.jsx)(e_,{open:c,onClose:y}),(0,a.jsx)(ec.AnimatePresence,{children:c&&(0,a.jsx)(eO,{onClose:y,className:"inset-0 z-[55] lg:hidden"},"mobile-menu-backdrop")})]})}var eD=e.i(854905),e$=e.i(380950),eG=e.i(497983);e.s(["default",0,function(){let[e,r]=(0,t.useState)(""),s=(0,t.useRef)(null),[n,i]=(0,t.useState)(0);(0,t.useEffect)(()=>{let e=()=>{r(new URLSearchParams(window.location.search).get("q")??"")};return e(),window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[]);let l=(0,t.useCallback)(()=>{s.current&&i(s.current.getBoundingClientRect().bottom)},[]);(0,t.useEffect)(()=>{l();let e=new ResizeObserver(l);return s.current&&e.observe(s.current),window.addEventListener("resize",l),window.addEventListener("scroll",l,{passive:!0}),()=>{e.disconnect(),window.removeEventListener("resize",l),window.removeEventListener("scroll",l)}},[l]);let h=()=>{let a=e.trim(),t=a?`/?q=${encodeURIComponent(a)}`:"/";"/"===window.location.pathname?(window.history.pushState(null,"",t),window.scrollTo({top:0})):o(t)};return(0,a.jsxs)("header",{ref:s,className:"sticky top-0 z-50 bg-paper border-b-2 border-black",children:[(0,a.jsx)(e$.HalloweenHeaderWeb,{}),(0,a.jsx)(eG.ChristmasLights,{surface:"light"}),(0,a.jsxs)("div",{className:"relative max-w-7xl mx-auto px-4 md:px-8 py-3 sm:py-4",children:[(0,a.jsx)(e$.HalloweenSpider,{}),(0,a.jsxs)("div",{className:"flex items-center gap-4 min-w-0",children:[(0,a.jsx)("a",{href:"/",className:"flex items-center shrink-0 cursor-pointer sm:mr-6 lg:mr-10 transition-transform duration-200 hover:-rotate-3 hover:scale-105",children:(0,a.jsx)(eD.default,{surface:"light",alt:"Bored logo",width:185,height:80,fetchPriority:"high",className:"h-16 w-[148px] sm:h-20 sm:w-[185px]"})}),(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)(eH,{panelTop:n,search:(0,a.jsx)(eo,{value:e,onChange:r,onSubmit:h})})}),(0,a.jsx)(ee,{value:e,onChange:r,onSubmit:h,className:"hidden xl:flex w-full max-w-[540px] 2xl:max-w-[620px] shrink-0"})]}),(0,a.jsx)("div",{className:"hidden lg:block xl:hidden mt-3",children:(0,a.jsx)(ee,{value:e,onChange:r,onSubmit:h})})]}),(0,a.jsx)(eh,{})]})}],579369)},854905,e=>{"use strict";var a=e.i(843476),t=e.i(838102);e.s(["default",0,function({surface:e,alt:o="",...r}){let s=(0,t.useSeasonalLogo)(e);return(0,a.jsx)("img",{src:s,alt:o,...r})}])},497983,e=>{"use strict";let a,t;var o=e.i(843476),r=e.i(271645),s=e.i(342947),n=e.i(838102);let i=(a=1225,t=()=>((a=16807*a%0x7fffffff)-1)/0x7ffffffe,Array.from({length:40},(e,a)=>{let o=11+12*t();return{left:100*t(),size:4+4*t(),fall:o,delay:-t()*o,drift:(t()-.5)*140,sway:3+3*t(),star:a%4==0,desktopOnly:a%2==1}}));function l(){return`snow${(0,r.useId)().replace(/[^a-zA-Z0-9_-]/g,"")}`}let h=["#e3262f","#febf03","#22c55e","#72c6f2","#fe308a"];e.s(["ChristmasFooterSnow",0,function(){let e=l();return"christmas"!==(0,n.useSeason)()?null:(0,o.jsxs)("svg",{"aria-hidden":!0,className:"pointer-events-none absolute inset-x-0 bottom-0 h-6 w-full",children:[(0,o.jsxs)("defs",{children:[(0,o.jsx)("pattern",{id:`${e}-back`,width:"230",height:"24",patternUnits:"userSpaceOnUse",children:(0,o.jsx)("path",{d:"M0 13Q40 3 80 11Q120 18 160 9Q196 3 230 13V24H0Z",fill:"#fff",fillOpacity:"0.35"})}),(0,o.jsx)("pattern",{id:`${e}-front`,width:"160",height:"24",patternUnits:"userSpaceOnUse",children:(0,o.jsx)("path",{d:"M0 18Q30 9 64 16Q100 22 128 13Q146 9 160 18V24H0Z",fill:"#fff"})})]}),(0,o.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${e}-back)`}),(0,o.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${e}-front)`})]})},"ChristmasLights",0,function({surface:e}){let a=l();if("christmas"!==(0,n.useSeason)())return null;let t="dark"===e?10:5;return(0,o.jsxs)("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-x-0 top-0 h-5 overflow-hidden",children:[(0,o.jsxs)("svg",{className:"absolute inset-0 h-full w-full",children:[(0,o.jsx)("defs",{children:(0,o.jsx)("pattern",{id:a,width:40,height:"20",patternUnits:"userSpaceOnUse",children:(0,o.jsx)("path",{d:"M0 1Q20 9 40 1",fill:"none",stroke:"dark"===e?"#71717a":"#27272a",strokeWidth:"1.25"})})}),(0,o.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${a})`})]}),Array.from({length:80},(e,a)=>{let r=h[a%h.length];return(0,o.jsxs)("span",{className:"absolute top-1 flex -translate-x-1/2 flex-col items-center",style:{left:`${40*a+20}px`},children:[(0,o.jsx)("span",{className:"h-[3px] w-1 bg-zinc-700"}),(0,o.jsx)("span",{className:"animate-light-twinkle h-[10px] w-[7px] rounded-full",style:{backgroundColor:r,boxShadow:`0 0 ${t}px ${r}`,animationDelay:`${-(a%4*.45)}s`}})]},a)})]})},"ChristmasSnow",0,function(){return"christmas"!==(0,n.useSeason)()?null:(0,o.jsx)("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-40 overflow-hidden motion-reduce:hidden",children:i.map((e,a)=>(0,o.jsx)("span",{className:`animate-snow-fall absolute top-0 ${e.desktopOnly?"max-sm:hidden":""}`,style:{left:`${e.left.toFixed(2)}%`,animationDuration:`${e.fall.toFixed(2)}s`,animationDelay:`${e.delay.toFixed(2)}s`,"--snow-drift":`${e.drift.toFixed(0)}px`},children:(0,o.jsx)("span",{className:"animate-snow-sway block",style:{animationDuration:`${e.sway.toFixed(2)}s`},children:e.star?(0,o.jsx)(s.Snowflake,{className:"text-logo",size:Math.round(2.4*e.size),strokeWidth:2.75}):(0,o.jsx)("span",{className:"block rounded-full bg-white shadow-[0_0_0_1.5px_#72c6f2,0_1px_2px_rgba(0,0,0,0.2)]",style:{width:`${e.size.toFixed(1)}px`,height:`${e.size.toFixed(1)}px`}})})},a))})}])},552653,e=>{"use strict";var a=e.i(843476),t=e.i(271645);let o=(0,t.createContext)(void 0);e.s(["LightsOutProvider",0,({children:e})=>{let[r,s]=(0,t.useState)(!1),[n,i]=(0,t.useState)({x:0,y:0});(0,t.useEffect)(()=>{if(!r)return;let e=e=>{i({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[r]);let l=(0,t.useCallback)(e=>{!r&&e&&i(e),s(!r);let a=window;"function"==typeof a.gtag&&a.gtag("event","lights_toggle",{event_category:"easter_egg",event_label:r?"lights_on":"lights_off"})},[r]);return(0,a.jsxs)(o.Provider,{value:{lightsOut:r,toggleLights:l},children:[e,r&&(0,a.jsx)("div",{className:"fixed inset-0 z-[9998] pointer-events-none",style:{background:`radial-gradient(circle 150px at ${n.x}px ${n.y}px, transparent 0%, transparent 100px, rgba(0,0,0,0.97) 150px)`}})]})},"useLightsOut",0,()=>{let e=(0,t.useContext)(o);if(void 0===e)throw Error("useLightsOut must be used within a LightsOutProvider");return e}])},985357,e=>{"use strict";e.s(["MARQUEE_FACTS",0,["In Switzerland it is illegal to keep a guinea pig on its own.","A group of crows is called a murder.","So far, two diseases have been eradicated: smallpox and rinderpest.","7% of American adults believe that chocolate milk comes from brown cows.","Bananas curve because they grow towards the sun.","Octopuses have three hearts and blue blood.","Archaeologists have found honey in Egyptian tombs that was thousands of years old and still edible.","A group of flamingos is called a flamboyance.","The shortest war in history lasted 38 to 45 minutes, between Britain and Zanzibar.","Scotland's national animal is the unicorn.","There are more possible games of chess than atoms in the observable universe.","The inventor of the Pringles can had some of his ashes buried in one.","Dolphins have signature whistles that work like names.","The moon has moonquakes.","Wombat poop is cube-shaped.","One species of jellyfish can turn itself back into a juvenile, again and again.","Sloths can hold their breath longer than dolphins can.","The Eiffel Tower grows up to 15 centimeters taller in summer heat.","A single cloud can weigh more than a million pounds.","The longest hiccuping spree lasted 68 years.","Octopuses can taste with their arms.","Bananas are berries, but strawberries are not.","A day on Venus is longer than a year on Venus.","Butterflies taste with their feet.","Sea otters hold hands while sleeping so they don't drift apart.","A pineapple takes about two years to grow.","A shrimp's heart is located in its head.","A group of owls is called a parliament.","Nintendo was founded in 1889 as a playing card company.","Humans blink about 15 to 20 times per minute.","The Great Wall of China is not visible from space with the naked eye.","A crocodile can't stick its tongue out.","Polar bears have black skin under their white fur.","The dot over the letter 'i' is called a tittle.","Koalas have fingerprints nearly identical to humans.","Tigers have striped skin, not just striped fur.","The Hawaiian alphabet has only 13 letters.","A blue whale's tongue can weigh as much as an elephant.","The voice actors of Mickey and Minnie Mouse were married in real life.","Sharks existed on Earth before trees did.","Saturn would float if you could find an ocean big enough.","Hippos produce a reddish oily liquid that works as sunscreen.","It takes about eight minutes for sunlight to reach Earth.","Rats laugh when tickled.","A hummingbird's heart can beat more than 1,200 times per minute.","A bolt of lightning is about five times hotter than the surface of the sun.","A lion's roar can be heard from up to 5 miles away.","We have better maps of Mars than of our own ocean floor.","A rhino's horn is made of keratin, the same stuff as your hair.","Dragonflies have been around for about 300 million years.","A group of frogs is called an army.","The smell of freshly cut grass is a chemical the plant releases when it is damaged.","One of the oldest known recipes is for beer.","Crows can recognize human faces and hold grudges for years.","The smell of rain has a name: petrichor.","There are more than 1,000 chemical compounds in a cup of coffee.","Mercury takes 59 Earth days to spin around once.","The human brain uses about 20% of the body's energy.","It is impossible to hum while holding your nose with your mouth closed.","The longest recorded flight of a chicken lasted 13 seconds.","Barbie's full name is Barbara Millicent Roberts.","Ketchup was sold as medicine in the 1830s.","Dolphins sleep with one half of their brain at a time.","Peanuts aren't nuts, they are legumes.","Cashews grow on the outside of a fruit.","A group of porcupines is called a prickle.","Sea cucumbers breathe through their butts.","Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid.","Sloths only poop about once a week.","A group of ferrets is called a business.","Cats can't taste sweetness.","Hippos can't actually swim, they walk along the riverbed.","A newborn kangaroo is about the size of a jellybean.","The Mona Lisa has no visible eyebrows or eyelashes.","Dutch men are among the tallest in the world.","Starfish can regrow lost arms.","Horses can't vomit.","Antarctica is the only continent without native reptiles.","A group of jellyfish is called a smack.","The fear of long words is called hippopotomonstrosesquippedaliophobia.","One of the first items ever sold on eBay was a broken laser pointer.","Bubble wrap was originally invented as wallpaper.","The microwave oven was invented after a chocolate bar melted in a researcher's pocket.","Cotton candy was co-invented by a dentist.","Your stomach replaces its lining every few days, otherwise it would digest itself.","The shortest scheduled flight, between two Scottish islands, takes about 90 seconds.","Only two countries officially start with 'The': The Gambia and The Bahamas.","A day on Jupiter lasts only about 10 hours.","Ancient Egyptians rested their heads on headrests made of wood or stone.","There is a village in Norway called Hell, and it freezes over every winter.","In medieval England a moment was a unit of time of about 90 seconds.","The first computer mouse was made of wood.","Bees can learn to recognize human faces.","The new car smell comes from dozens of chemicals released by the interior."],"MARQUEE_HIDDEN_KEY",0,"bored_marquee_hidden"])}]);