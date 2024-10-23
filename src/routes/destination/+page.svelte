<script>
import Underline from '../../components/Underline.svelte';

import { fade,fly } from 'svelte/transition'

import data from '/src/data/data.json'
	import { text } from '@sveltejs/kit'

let img;
let textBox;


let planets = data.destinations
$: currPlanet = "Moon"
let currPlanetIndex = 0
let ontop = false
let ul;
let planetwidth = 0
let planetx = 0 
let planety = 0
let planetulX
let planetheight
let planetxmd; 
let planetleft
let offsetX

let linkCoordsWidth;
let linkCoordsLeft;
let linkCoordsTop;
let linkCoordsHeight;
let textOffsetH

function updateCurrPlanet(e) {
  currPlanet = e.target.textContent;
  img.classList.remove('fade-and-slide')
  setTimeout(() => {
    img.classList.add('fade-and-slide')
  },100)
  img.classList.add('fade-and-slide')
  setTimeout(() => {
      img.classList.remove('fade-and-slide')
    },580)
}

function handleEnter(e) {
  const a = e.target.firstChild;
  const li = e.target
  const linkCoords = a.getBoundingClientRect()
  const offsetWidth = li.offsetWidth
  const offsetHeight = li.offsetHeight
  const textBoxCoords = textBox.getBoundingClientRect()
//  textOffsetH = textBox.offsetHeight
//   console.log({textOffsetH});
//   console.log(textBoxCoords);

//   console.log(linkCoords);
//   linkCoordsWidth = linkCoords.width
//   linkCoordsLeft = linkCoords.left
//   linkCoordsTop = textOffsetH
//   linkCoordsHeight = linkCoords.height
//   console.log({linkCoordsLeft});
 
}



function classTrue() {
  ontop = true
}

function classFalse() {
  ontop = false
}

</script>
<div class="absolute w-screen h-screen bg-cover bg-center bg-no-repeat sm:bg-[url('src/lib/assets/destination/background-destination-mobile.jpg')] top-0 md:bg-[url('src/lib/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('src/lib/assets/destination/background-destination-desktop.jpg')] -z-20"></div>
<section in:fade={{duration:260, delay:720}} id="destination" class="relative">
  <div class="container flex flex-col justify-center items-center gap-1 mx-auto mt-48 py-6 lg:flex-row lg:gap-0 md:relative lg:h-[800px] ">

  <!-- LG LEFT  -->
    <div class="flex flex-col justify-center items-center sm:w-full md:w-1/2 lg:w-3/5 lg:h-[600px] mx-auto ">

      <h3 class="text-white text-xl md:text-2xl uppercase flex flex-row gap-6 font-subCondensed font-medium tracking-wide text-center absolute sm:-top-12 md:-top-1 md:left-12 lg:text-3xl"><span class="font-light">01</span>Pick your destination</h3>
      <div in:fade={{duration: 500, delay: 1200}} out:fade={{duration:400, opacity: 0}}  class="sm:w-1/2 md:w-full lg:h-[500px] py-8 lg:py-4 flex justify-center items-center">
  
        <img bind:this={img} out:fade={{duration: 120}} src={data.destinations[currPlanetIndex].images.png} alt="planet" class="fade-and-slide">
  
      </div>
    </div>

    <!-- LG RIGHT SECTION  -->
    <div bind:this={textBox} in:fade={{duration: 600, delay: 2100}} out:fade={{duration:200}} class="flex flex-col items-center lg:items-start lg:w-1/2 gap-2 lg:justify-start lg:gap-4">
      <ul bind:this={ul} class="flex flex-row justify-center items-center sm:gap-2 md:gap-3 sm:w-1/8 mx-auto lg:mx-0 lg:justify-normal " on:mouseenter={classTrue} on:mouseleave={classFalse}>
        {#each planets as planet, i} 
        <li class=" border-transparent border-b-2 px-4 py-8 font-extralightselect-none outline-none" on:mouseenter={handleEnter}><a class="cursor-pointer py-4 font-subCondensed text-white text-xl uppercase font-extralight" on:click={()=> currPlanetIndex = i} on:click={updateCurrPlanet} class:current={currPlanet === planet.name}>{planet.name}</a></li>
        <!-- <h3 class="text-white uppercase font-subCondensed text-xl tracking-wider font-light">{planet.name}</h3> -->
        {/each}
        <Underline {linkCoordsWidth} {linkCoordsLeft} {linkCoordsTop} {linkCoordsHeight} {ontop} />
      </ul>
      <h1 class="font-main text-center text-white uppercase sm:text-6xl md:text-8xl lg:text-9xl lg:text-left">{planets[currPlanetIndex].name}</h1>
      <p class="font-sub sm:text-md md:text-xl text-white opacity-60 text-balance sm:w-7/8 sm:py-2 md:w-3/4 sm:h-[90px] md:h-[103px] text-center lg:text-left">{planets[currPlanetIndex].description}</p>
      <div class="bg-white w-full h-[1px] opacity-20 sm:w-4/5 md:w-3/4 my-4 lg:mt-8"></div>
      <section class="flex flex-col justify-center items-center text-white gap-2 md:flex-row md:justify-evenly lg:justify-start lg:gap-8 md:w-2/3 lg:items-start lg:gap-1 lg:text-left">
        <div class="distance flex flex-col gap-2 justify-center items-center lg:items-start lg:w-[200px]">
          <h5 class="font-subCondensed opacity-55 font-normal tracking-widest sm:text-md md:text-lg uppercase lg:text-left">Avg. Distance</h5>
          <h3 class="font-main text-white sm:text-3xl md:text-4xl">{planets[currPlanetIndex].distance}</h3>
        </div>
        <div class="distance flex flex-col gap-2 items-center lg:items-start">
          <h5 class="font-subCondensed opacity-55 font-normal tracking-widest sm:text-md md:text-lg uppercase lg:text-left">Est. Travel Time</h5>
          <h3 class="font-main text-white sm:text-3xl md:text-4xl uppercase">{planets[currPlanetIndex].travel}</h3>
        </div>
      </section>
    </div>
  </div>

 
</section>

<style>
.current {
border-bottom: 4px solid white;
border-bottom-left-radius: 1px;
border-bottom-right-radius: 1px;

}

.sam {
  position: absolute;
  top: 690px;
  left: 512.665px;
  height: 5px;
  width: 2px;
  background-color: #fff;
}
.fade-and-slide {
		animation: fade-and-slide 600ms ease-in;
    animation-delay: 1200;
	}
  :global(.fade-and-slide-reverse) {
		animation: fade-and-slide 1500ms linear reverse forwards;
	}
	@keyframes fade-and-slide {
		0% {
			opacity: 0;
			transform: translateX(-320px);
		}
		50% {
			opacity: 0.85;

		}
		100% {
      opacity: 1;
			transform: translateX(0);
		}
	}

</style>
