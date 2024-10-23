<script>

export let width
export let x
export let y
export let open
export let ulX
export let planetwidth
export let planetx
export let planety
export let planetopen
export let planetulX
export let hover
export let asideWidth
export let asideX
export let asideY
export let asideHeight
export let ontop
export let planetxmd
export let linkCoordsLeft
export let linkCoordsTop
export let linkCoordsWidth
export let linkCoordsHeight

export let height

let widthmdp = (planetwidth * 0.54) + 'px'
let xmdp = (planetx -100) + 'px'
console.log({xmdp});
let topmdp = (planety - 118) + 'px'

</script>
 
<div class="underline sm:hidden md:block" class:open style="width: {width*0.69}px; left:{x-ulX+(width/6)-2}px; top:{height-4}px"></div>
<div class="underline sm:block md:hidden lg:hidden" class:hover style="width: {asideWidth}px; left:{asideX}px; top:{asideY + 84}px"></div>

<!-- <div class="underline" class:ontop style="width: {linkCoordsWidth}px; left:{linkCoordsLeft}px; top:{linkCoordsHeight}px"></div> -->
<!-- <div class="underline" class:ontop style="width: {planetwidth*0.54}px; left:{planetx+16}px; top:{planety-118}px"></div> -->



<style>


  .underline {
    width: 100px;
    height: 4px;
    right: 0;
    z-index: 20;
    position: absolute;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
		0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  }
  .underline.open {
    opacity: 0.4;
  }
  .underline.hover {
    opacity: 0.4;
  }
  .underline.ontop {
    opacity: 0.4;
    z-index: 10;
  }
</style>