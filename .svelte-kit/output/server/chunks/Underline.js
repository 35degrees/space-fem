import { c as create_ssr_component, d as escape } from "./ssr.js";
/* empty css                                        */
const css = {
  code: ".underline.svelte-1k8pqkd{width:100px;height:4px;right:0;z-index:20;position:absolute;background-color:#fff;border-radius:4px;box-shadow:0 50px 100px rgba(50, 50, 93, 0.1),\n		0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);transition:all 0.3s, opacity 0.1s, transform 0.2s;transform-origin:50% 0;display:flex;justify-content:center;opacity:0}.underline.open.svelte-1k8pqkd{opacity:0.4}.underline.hover.svelte-1k8pqkd{opacity:0.4}",
  map: `{"version":3,"file":"Underline.svelte","sources":["Underline.svelte"],"sourcesContent":["<script>\\n\\nexport let width\\nexport let x\\nexport let y\\nexport let open\\nexport let ulX\\nexport let planetwidth\\nexport let planetx\\nexport let planety\\nexport let planetopen\\nexport let planetulX\\nexport let hover\\nexport let asideWidth\\nexport let asideX\\nexport let asideY\\nexport let asideHeight\\nexport let ontop\\nexport let planetxmd\\nexport let linkCoordsLeft\\nexport let linkCoordsTop\\nexport let linkCoordsWidth\\nexport let linkCoordsHeight\\n\\nexport let height\\n\\nlet widthmdp = (planetwidth * 0.54) + 'px'\\nlet xmdp = (planetx -100) + 'px'\\nconsole.log({xmdp});\\nlet topmdp = (planety - 118) + 'px'\\n\\n<\/script>\\n \\n<div class=\\"underline sm:hidden md:block\\" class:open style=\\"width: {width*0.69}px; left:{x-ulX+(width/6)-2}px; top:{height-4}px\\"></div>\\n<div class=\\"underline sm:block md:hidden lg:hidden\\" class:hover style=\\"width: {asideWidth}px; left:{asideX}px; top:{asideY + 84}px\\"></div>\\n\\n<!-- <div class=\\"underline\\" class:ontop style=\\"width: {linkCoordsWidth}px; left:{linkCoordsLeft}px; top:{linkCoordsHeight}px\\"></div> -->\\n<!-- <div class=\\"underline\\" class:ontop style=\\"width: {planetwidth*0.54}px; left:{planetx+16}px; top:{planety-118}px\\"></div> -->\\n\\n\\n\\n<style>\\n\\n\\n  .underline {\\n    width: 100px;\\n    height: 4px;\\n    right: 0;\\n    z-index: 20;\\n    position: absolute;\\n    background-color: #fff;\\n    border-radius: 4px;\\n    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\\n\\t\\t0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\\n\\ttransition: all 0.3s, opacity 0.1s, transform 0.2s;\\n  transform-origin: 50% 0;\\n  display: flex;\\n  justify-content: center;\\n  opacity: 0;\\n  }\\n  .underline.open {\\n    opacity: 0.4;\\n  }\\n  .underline.hover {\\n    opacity: 0.4;\\n  }\\n  .underline.ontop {\\n    opacity: 0.4;\\n    z-index: 10;\\n  }\\n</style>"],"names":[],"mappings":"AA4CE,yBAAW,CACT,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC;AACnD,EAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAClE,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CACjD,gBAAgB,CAAE,GAAG,CAAC,CAAC,CACvB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,CACT,CACA,UAAU,oBAAM,CACd,OAAO,CAAE,GACX,CACA,UAAU,qBAAO,CACf,OAAO,CAAE,GACX"}`
};
const Underline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { x } = $$props;
  let { y } = $$props;
  let { open } = $$props;
  let { ulX } = $$props;
  let { planetwidth } = $$props;
  let { planetx } = $$props;
  let { planety } = $$props;
  let { planetopen } = $$props;
  let { planetulX } = $$props;
  let { hover } = $$props;
  let { asideWidth } = $$props;
  let { asideX } = $$props;
  let { asideY } = $$props;
  let { asideHeight } = $$props;
  let { ontop } = $$props;
  let { planetxmd } = $$props;
  let { linkCoordsLeft } = $$props;
  let { linkCoordsTop } = $$props;
  let { linkCoordsWidth } = $$props;
  let { linkCoordsHeight } = $$props;
  let { height } = $$props;
  let xmdp = planetx - 100 + "px";
  console.log({ xmdp });
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0) $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.ulX === void 0 && $$bindings.ulX && ulX !== void 0) $$bindings.ulX(ulX);
  if ($$props.planetwidth === void 0 && $$bindings.planetwidth && planetwidth !== void 0) $$bindings.planetwidth(planetwidth);
  if ($$props.planetx === void 0 && $$bindings.planetx && planetx !== void 0) $$bindings.planetx(planetx);
  if ($$props.planety === void 0 && $$bindings.planety && planety !== void 0) $$bindings.planety(planety);
  if ($$props.planetopen === void 0 && $$bindings.planetopen && planetopen !== void 0) $$bindings.planetopen(planetopen);
  if ($$props.planetulX === void 0 && $$bindings.planetulX && planetulX !== void 0) $$bindings.planetulX(planetulX);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.asideWidth === void 0 && $$bindings.asideWidth && asideWidth !== void 0) $$bindings.asideWidth(asideWidth);
  if ($$props.asideX === void 0 && $$bindings.asideX && asideX !== void 0) $$bindings.asideX(asideX);
  if ($$props.asideY === void 0 && $$bindings.asideY && asideY !== void 0) $$bindings.asideY(asideY);
  if ($$props.asideHeight === void 0 && $$bindings.asideHeight && asideHeight !== void 0) $$bindings.asideHeight(asideHeight);
  if ($$props.ontop === void 0 && $$bindings.ontop && ontop !== void 0) $$bindings.ontop(ontop);
  if ($$props.planetxmd === void 0 && $$bindings.planetxmd && planetxmd !== void 0) $$bindings.planetxmd(planetxmd);
  if ($$props.linkCoordsLeft === void 0 && $$bindings.linkCoordsLeft && linkCoordsLeft !== void 0) $$bindings.linkCoordsLeft(linkCoordsLeft);
  if ($$props.linkCoordsTop === void 0 && $$bindings.linkCoordsTop && linkCoordsTop !== void 0) $$bindings.linkCoordsTop(linkCoordsTop);
  if ($$props.linkCoordsWidth === void 0 && $$bindings.linkCoordsWidth && linkCoordsWidth !== void 0) $$bindings.linkCoordsWidth(linkCoordsWidth);
  if ($$props.linkCoordsHeight === void 0 && $$bindings.linkCoordsHeight && linkCoordsHeight !== void 0) $$bindings.linkCoordsHeight(linkCoordsHeight);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  $$result.css.add(css);
  return `<div class="${["underline sm:hidden md:block svelte-1k8pqkd", open ? "open" : ""].join(" ").trim()}" style="${"width: " + escape(width * 0.69, true) + "px; left:" + escape(x - ulX + width / 6 - 2, true) + "px; top:" + escape(height - 4, true) + "px"}"></div> <div class="${["underline sm:block md:hidden lg:hidden svelte-1k8pqkd", hover ? "hover" : ""].join(" ").trim()}" style="${"width: " + escape(asideWidth, true) + "px; left:" + escape(asideX, true) + "px; top:" + escape(asideY + 84, true) + "px"}"></div>  `;
});
export {
  Underline as U
};
