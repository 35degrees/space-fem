import { c as create_ssr_component, a as subscribe, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
/* empty css                                             */
import { U as Underline } from "../../chunks/Underline.js";
/* empty css               */
const currPage = writable("Home");
const css$2 = {
  code: ".hamburger-menu.svelte-1qyeggf.svelte-1qyeggf{width:32px;height:32px;position:relative;top:8px;right:8%;cursor:pointer;transition:all 0.2s;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:20}.hamburger-menu-top.svelte-1qyeggf.svelte-1qyeggf,.hamburger-menu-middle.svelte-1qyeggf.svelte-1qyeggf,.hamburger-menu-bottom.svelte-1qyeggf.svelte-1qyeggf{width:32px;height:2px;background-color:#fff;position:absolute;transform:rotate(0);transition:all 0.32s}.hamburger-menu-middle.svelte-1qyeggf.svelte-1qyeggf{transform:translateY(10px);width:24px;right:0}.hamburger-menu-bottom.svelte-1qyeggf.svelte-1qyeggf{transform:translateY(20px)}.open.svelte-1qyeggf.svelte-1qyeggf{transform:rotate(90deg);transform:translateY(0px)}.open.svelte-1qyeggf .hamburger-menu-top.svelte-1qyeggf{transform:rotate(45deg) translateY(6px) translate(6px)}.open.svelte-1qyeggf .hamburger-menu-middle.svelte-1qyeggf{display:none}.open.svelte-1qyeggf .hamburger-menu-bottom.svelte-1qyeggf{transform:rotate(-45deg) translateY(6px) translate(-6px)}",
  map: '{"version":3,"file":"Hamburger.svelte","sources":["Hamburger.svelte"],"sourcesContent":["<script>\\n\\nexport let open = false\\n\\n\\n\\n<\/script>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events -->\\n<!-- svelte-ignore a11y-no-static-element-interactions -->\\n<div class=\\"hamburger-menu block md:hidden z-20\\" class:open on:click={()=> open = !open}>\\n<!-- <div class=\\"hamburger-menu block md:hidden z-99\\" class:open={isOpen} on:click={toggleIsOpen}> -->\\n  <span class=\\"hamburger-menu-top\\"></span>\\n  <span class=\\"hamburger-menu-middle\\"></span>\\n  <span class=\\"hamburger-menu-bottom\\"></span>\\n</div>\\n\\n<style>\\n  .hamburger-menu {\\n    width: 32px;\\n    height: 32px;\\n    position: relative;\\n    top: 8px;\\n    right: 8%;\\n    cursor: pointer;\\n    transition: all 0.2s;\\n    outline: none;\\n    -webkit-user-select: none;\\n       -moz-user-select: none;\\n            user-select: none;\\n    z-index: 20;\\n  }\\n\\n  .hamburger-menu-top,\\n  .hamburger-menu-middle,\\n  .hamburger-menu-bottom {\\n    width: 32px;\\n    height: 2px;\\n    background-color: #fff;\\n    position: absolute;\\n    transform: rotate(0);\\n    transition: all 0.32s;\\n  }\\n\\n  .hamburger-menu-middle {\\n    transform: translateY(10px);\\n    width: 24px;\\n    right: 0;\\n  }\\n\\n  .hamburger-menu-bottom {\\n    transform: translateY(20px);\\n  }\\n\\n  .open {\\n    transform: rotate(90deg);\\n    transform: translateY(0px);\\n  }\\n\\n  .open .hamburger-menu-top {\\n    transform: rotate(45deg) translateY(6px) translate(6px);\\n  \\n  }\\n\\n  .open .hamburger-menu-middle {\\n    display: none;\\n  }\\n\\n  .open .hamburger-menu-bottom {\\n    transform: rotate(-45deg) translateY(6px) translate(-6px);\\n\\n  }\\n\\n</style>"],"names":[],"mappings":"AAkBE,6CAAgB,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,EAAE,CACT,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACzB,OAAO,CAAE,EACX,CAEA,iDAAmB,CACnB,oDAAsB,CACtB,oDAAuB,CACrB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,CACtB,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,OAAO,CAAC,CAAC,CACpB,UAAU,CAAE,GAAG,CAAC,KAClB,CAEA,oDAAuB,CACrB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,CACT,CAEA,oDAAuB,CACrB,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,mCAAM,CACJ,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,WAAW,GAAG,CAC3B,CAEA,oBAAK,CAAC,kCAAoB,CACxB,SAAS,CAAE,OAAO,KAAK,CAAC,CAAC,WAAW,GAAG,CAAC,CAAC,UAAU,GAAG,CAExD,CAEA,oBAAK,CAAC,qCAAuB,CAC3B,OAAO,CAAE,IACX,CAEA,oBAAK,CAAC,qCAAuB,CAC3B,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,WAAW,GAAG,CAAC,CAAC,UAAU,IAAI,CAE1D"}'
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  $$result.css.add(css$2);
  return `  <div class="${["hamburger-menu block md:hidden z-20 svelte-1qyeggf", open ? "open" : ""].join(" ").trim()}" data-svelte-h="svelte-124hjmm"> <span class="hamburger-menu-top svelte-1qyeggf"></span> <span class="hamburger-menu-middle svelte-1qyeggf"></span> <span class="hamburger-menu-bottom svelte-1qyeggf"></span> </div>`;
});
const css$1 = {
  code: ".current.svelte-1u8kx7a.svelte-1u8kx7a{border-bottom:4px solid white;border-bottom-left-radius:1px;border-bottom-right-radius:1px}.counter.svelte-1u8kx7a.svelte-1u8kx7a{counter-reset:nav-counter -1}.counter.svelte-1u8kx7a>li.svelte-1u8kx7a{counter-increment:nav-counter}.counter.svelte-1u8kx7a li a.svelte-1u8kx7a::before{content:counter(nav-counter,decimal-leading-zero);margin-right:9px;font-weight:500}",
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\nimport { currPage } from \\"../stores\\";\\nimport Hamburger from \\"./Hamburger.svelte\\"\\nimport Underline from \\"./Underline.svelte\\";\\nexport let sidebar = false;\\nconst navItems = ['Home','Destination','Crew','Technology']\\n\\nlet nav;\\nlet ul;\\nlet width = 0\\nlet x = 0 \\nlet y = 0\\nlet open = false\\nlet ulWidth\\nlet ulX\\nlet navWidth\\nlet navX\\nlet height\\n\\nfunction handleEnter(e) {\\n  const ulCoords = ul.getBoundingClientRect()\\n  ulWidth = ulCoords.width\\n  ulX = ulCoords.x\\n  const thisA = e.target\\n  width = thisA.getBoundingClientRect().width\\n  height = thisA.getBoundingClientRect().height\\n  x = thisA.getBoundingClientRect().x\\n  y = thisA.getBoundingClientRect().y\\n}\\n\\nfunction classTrue() {\\n  open = true\\n}\\n\\nfunction classFalse() {\\n  open = false\\n}\\n\\nconsole.log('storesam',$currPage);\\n\\n// TRYING CURRPAGE ROUTING TO SIDEBAR - REVERT IF NEEDED\\n// export let currPage = 'Home'\\n// export let currPage;\\n\\n// function styleNav(e) {\\n//   currPage = e.target.textContent\\n//   console.log(currPage);\\n// }\\n\\nconst updateCurrPage = (e) => {\\n    currPage.update(page => page = e.target.textContent)\\n  }\\n\\n<\/script>\\n\\n<nav bind:this={nav} id=\\"nav\\" class=\\"w-full mx-auto overflow-x-hidden overflow-y-hidden select-none absolute z-10 top-0\\">\\n  <div class=\\"relative container flex flex-row items-center justify-between mx-auto pt-14 md:pt-10\\">\\n    <div class=\\"hidden md:block top-[48px] md:left-[8rem] lg:left-[45%] backdrop-blue bg-white/10 absolute backdrop-blur border-none py-12 w-[100rem]\\"></div>\\n    <div class=\\"pt-2 lg:w-1/2 px-6 relative\\">\\n      <img src=\\"src/lib/assets/shared/logo.svg\\" alt=\\"logo\\">\\n      <img src=\\"src/lib/assets/shared/logo.svg\\" alt=\\"logo\\" class=\\"absolute top-0 left-0 pt-2 px-6\\">\\n      <div class=\\"header-line ml-[20%] relative top-[-25px] hidden lg:block lg:w-[90%] h-[0.5px] bg-white opacity-30 z-30\\"></div>\\n    </div>\\n    <ul bind:this={ul} class=\\"grid-auto-fit counter md:md-counter relative hidden md:w-[85%] lg:w-[55%] mt-1 md:flex flex-row justify-end items-center md:gap-6 lg:gap-10 lg:px-8 md:px-6\\" on:mouseenter={classTrue} on:mouseleave={classFalse}>\\n      {#each navItems as item}\\n      <li class=\\"cursor-pointer border-transparent border-b-2 px-4 py-8 font-extralightselect-none outline-none\\" on:mouseenter={handleEnter}><a href=\\"/{item.toLowerCase() === 'home' ? '' : item.toLowerCase()}\\" class=\\"py-8 font-subCondensed text-white text-xl uppercase font-extralight\\" on:click={updateCurrPage} class:current={$currPage === item}>{item}</a></li>\\n      {/each}\\n      <Underline {width} {x} {y} {open} {ulX} {navWidth} {height}/>\\n    </ul>\\n\\n    <Hamburger bind:open={sidebar} />\\n  </div>\\n</nav>\\n\\n\\n<!-- <li class=\\"cursor-pointer hover:border-white border-transparent border-b-2 px-4 py-8 font-extralightselect-none outline-none\\"><a href=\\"/\\" class=\\"font-subCondensed text-white text-xl uppercase\\">Home</a></li>\\n<li class=\\"cursor-pointer md:md-count px-4 py-8 font-extralight hover:border-white border-transparent border-b-2 select-none outline-none\\"><a href=\\"/destination\\" class=\\"font-subCondensed text-white text-xl uppercase\\">Destination</a></li>\\n<li class=\\"cursor-pointer md:md-count px-4 py-8 font-extralight hover:border-white border-transparent border-b-2 select-none outline-none\\"><a href=\\"/crew\\" class=\\"font-subCondensed text-white text-xl uppercase\\">Crew</a></li>\\n<li class=\\"cursor-pointer md:md-count px-4 py-8 font-extralight hover:border-white border-transparent border-b-2 select-none outline-none\\"><a href=\\"/technology\\" class=\\"font-subCondensed text-white text-xl uppercase\\">Technology</a></li> -->\\n\\n<style>\\n\\n\\n/* nav {\\n  background-color: red;\\n} */\\n\\n.current {\\nborder-bottom: 4px solid white;\\nborder-bottom-left-radius: 1px;\\nborder-bottom-right-radius: 1px;\\n\\n}\\n\\n  .counter {\\n    counter-reset: nav-counter -1;\\n  }\\n\\n  .counter > li {\\n    counter-increment: nav-counter;\\n  }\\n\\n  .counter li a::before {\\n    content: counter(nav-counter,decimal-leading-zero);\\n    margin-right: 9px;\\n    font-weight: 500;\\n  }\\n\\n\\n\\n\\n\\n\\n</style>"],"names":[],"mappings":"AAuFA,sCAAS,CACT,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAC9B,yBAAyB,CAAE,GAAG,CAC9B,0BAA0B,CAAE,GAE5B,CAEE,sCAAS,CACP,aAAa,CAAE,WAAW,CAAC,EAC7B,CAEA,uBAAQ,CAAG,iBAAG,CACZ,iBAAiB,CAAE,WACrB,CAEA,uBAAQ,CAAC,EAAE,CAAC,gBAAC,QAAS,CACpB,OAAO,CAAE,QAAQ,WAAW,CAAC,oBAAoB,CAAC,CAClD,YAAY,CAAE,GAAG,CACjB,WAAW,CAAE,GACf"}`
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currPage, $$unsubscribe_currPage;
  $$unsubscribe_currPage = subscribe(currPage, (value) => $currPage = value);
  let { sidebar = false } = $$props;
  const navItems = ["Home", "Destination", "Crew", "Technology"];
  let nav;
  let ul;
  let width = 0;
  let x = 0;
  let y = 0;
  let open = false;
  let ulX;
  let navWidth;
  let height;
  console.log("storesam", $currPage);
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0) $$bindings.sidebar(sidebar);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<nav id="nav" class="w-full mx-auto overflow-x-hidden overflow-y-hidden select-none absolute z-10 top-0"${add_attribute("this", nav, 0)}><div class="relative container flex flex-row items-center justify-between mx-auto pt-14 md:pt-10"><div class="hidden md:block top-[48px] md:left-[8rem] lg:left-[45%] backdrop-blue bg-white/10 absolute backdrop-blur border-none py-12 w-[100rem]"></div> <div class="pt-2 lg:w-1/2 px-6 relative" data-svelte-h="svelte-q32xm8"><img src="src/lib/assets/shared/logo.svg" alt="logo"> <img src="src/lib/assets/shared/logo.svg" alt="logo" class="absolute top-0 left-0 pt-2 px-6"> <div class="header-line ml-[20%] relative top-[-25px] hidden lg:block lg:w-[90%] h-[0.5px] bg-white opacity-30 z-30"></div></div> <ul class="grid-auto-fit counter md:md-counter relative hidden md:w-[85%] lg:w-[55%] mt-1 md:flex flex-row justify-end items-center md:gap-6 lg:gap-10 lg:px-8 md:px-6 svelte-1u8kx7a"${add_attribute("this", ul, 0)}>${each(navItems, (item) => {
      return `<li class="cursor-pointer border-transparent border-b-2 px-4 py-8 font-extralightselect-none outline-none svelte-1u8kx7a"><a href="${"/" + escape(item.toLowerCase() === "home" ? "" : item.toLowerCase(), true)}" class="${[
        "py-8 font-subCondensed text-white text-xl uppercase font-extralight svelte-1u8kx7a",
        $currPage === item ? "current" : ""
      ].join(" ").trim()}">${escape(item)}</a></li>`;
    })} ${validate_component(Underline, "Underline").$$render($$result, { width, x, y, open, ulX, navWidth, height }, {}, {})}</ul> ${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { open: sidebar },
      {
        open: ($$value) => {
          sidebar = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></nav> `;
  } while (!$$settled);
  $$unsubscribe_currPage();
  return $$rendered;
});
const css = {
  code: "aside.svelte-j5whvg.svelte-j5whvg{right:-100%;transition:right 0.38s ease-in-out}aside.svelte-j5whvg.svelte-j5whvg::before{content:'';width:100%;height:100%;background-color:hsla(230, 33%, 7%, 0.58);position:absolute;z-index:-20}.open.svelte-j5whvg.svelte-j5whvg{right:0}.current.svelte-j5whvg.svelte-j5whvg{border-bottom:4px solid white}.counter.svelte-j5whvg.svelte-j5whvg{counter-reset:nav-counter -1}.counter.svelte-j5whvg>a.svelte-j5whvg{counter-increment:nav-counter}.counter.svelte-j5whvg a.svelte-j5whvg::before{content:counter(nav-counter,decimal-leading-zero);margin-right:9px;font-weight:500}",
  map: `{"version":3,"file":"Sidebar.svelte","sources":["Sidebar.svelte"],"sourcesContent":["<script>\\n  import { currPage } from \\"../stores\\";\\n  import Underline from \\"./Underline.svelte\\";\\n  export let open = false\\n  let hover = false\\n  let asideX = 0\\n  let asideY = 0\\n  let asideWidth = 0\\n  let asideHeight = 0\\n\\n  const navItems = ['Home','Destination','Crew','Technology']\\n\\n  // export let currPage = 'Home'\\n\\n  function handleEnter(e) {\\n    const thisA = e.target.getBoundingClientRect()\\n    console.log(thisA);\\n    asideX = thisA.x\\n    asideY = thisA.y\\n    asideWidth = thisA.width\\n    asideHeight = thisA.height\\n    hover = true\\n}\\n\\nfunction handleLeave() {\\n  hover = false\\n  asideHeight = 0\\n}\\n\\nconst updateCurrPage = (e) => {\\n    currPage.update(page => page = e.target.textContent)\\n  }\\n\\n<\/script>\\n\\n<aside class=\\"absolute z-10 top-0 w-full h-full backdrop-blur bg-white/10 shadow-lg select-none md:hidden\\" class:open>\\n  <nav class=\\"p-12 text-3xl flex flex-col counter mt-[7rem] items-center\\">\\n    {#each navItems as item}\\n      <a href=\\"/{item.toLowerCase() === 'home' ? '' : item.toLowerCase()}\\" class=\\"border-transparent border-b-[4px] py-6 my-2 font-subCondensed text-white uppercase font-extralight text-white\\" class:current={$currPage === item} on:click={updateCurrPage} on:click={() => open = !open} on:mouseenter={handleEnter} on:mouseleave={handleLeave}>{item}</a>\\n    {/each}\\n    <Underline {asideWidth} {asideX} {asideY} {hover} />\\n    <!-- <div class=\\"text-white z-88\\">asideHeight: {asideHeight}, asideWidth: {asideWidth}, asideX: {asideX}, asideY: {asideY}, hover: {hover}</div> -->\\n  </nav>\\n</aside>\\n\\n<style>\\n\\n  aside {\\n    right: -100%;\\n    transition: right 0.38s ease-in-out;\\n  }\\n\\n  aside::before {\\n    content: '';\\n    width: 100%;\\n    height: 100%;\\n    background-color: hsla(230, 33%, 7%, 0.58);\\n    position: absolute;\\n    z-index: -20;\\n  }\\n\\n  .open {\\n    right: 0;\\n  }\\n  .current {\\n    border-bottom: 4px solid white;\\n  }\\n\\n  .counter {\\n    counter-reset: nav-counter -1;\\n  }\\n\\n  .counter > a {\\n    counter-increment: nav-counter;\\n  }\\n\\n  .counter a::before {\\n    content: counter(nav-counter,decimal-leading-zero);\\n    margin-right: 9px;\\n    font-weight: 500;\\n  }\\n\\n\\n</style>"],"names":[],"mappings":"AA+CE,iCAAM,CACJ,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,WAC1B,CAEA,iCAAK,QAAS,CACZ,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAC1C,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,GACX,CAEA,iCAAM,CACJ,KAAK,CAAE,CACT,CACA,oCAAS,CACP,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAC3B,CAEA,oCAAS,CACP,aAAa,CAAE,WAAW,CAAC,EAC7B,CAEA,sBAAQ,CAAG,eAAE,CACX,iBAAiB,CAAE,WACrB,CAEA,sBAAQ,CAAC,eAAC,QAAS,CACjB,OAAO,CAAE,QAAQ,WAAW,CAAC,oBAAoB,CAAC,CAClD,YAAY,CAAE,GAAG,CACjB,WAAW,CAAE,GACf"}`
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currPage, $$unsubscribe_currPage;
  $$unsubscribe_currPage = subscribe(currPage, (value) => $currPage = value);
  let { open = false } = $$props;
  let hover = false;
  let asideX = 0;
  let asideY = 0;
  let asideWidth = 0;
  const navItems = ["Home", "Destination", "Crew", "Technology"];
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  $$result.css.add(css);
  $$unsubscribe_currPage();
  return `<aside class="${[
    "absolute z-10 top-0 w-full h-full backdrop-blur bg-white/10 shadow-lg select-none md:hidden svelte-j5whvg",
    open ? "open" : ""
  ].join(" ").trim()}"><nav class="p-12 text-3xl flex flex-col counter mt-[7rem] items-center svelte-j5whvg">${each(navItems, (item) => {
    return `<a href="${"/" + escape(item.toLowerCase() === "home" ? "" : item.toLowerCase(), true)}" class="${[
      "border-transparent border-b-[4px] py-6 my-2 font-subCondensed text-white uppercase font-extralight text-white svelte-j5whvg",
      $currPage === item ? "current" : ""
    ].join(" ").trim()}">${escape(item)}</a>`;
  })} ${validate_component(Underline, "Underline").$$render($$result, { asideWidth, asideX, asideY, hover }, {}, {})} </nav> </aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let open = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    data.pathname;
    $$rendered = ` ${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Nav, "Nav").$$render(
      $$result,
      { sidebar: open },
      {
        sidebar: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div>${slots.default ? slots.default({}) : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
