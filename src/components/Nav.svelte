<script>
import { currPage } from "../stores";
import Hamburger from "./Hamburger.svelte"
import Underline from "./Underline.svelte";
export let sidebar = false;
const navItems = ['Home','Destination','Crew','Technology']

let nav;
let ul;
let width = 0
let x = 0 
let y = 0
let open = false
let ulWidth
let ulX
let navWidth
let navX
let height

function handleEnter(e) {
  const ulCoords = ul.getBoundingClientRect()
  ulWidth = ulCoords.width
  ulX = ulCoords.x
  const thisA = e.target
  width = thisA.getBoundingClientRect().width
  height = thisA.getBoundingClientRect().height
  x = thisA.getBoundingClientRect().x
  y = thisA.getBoundingClientRect().y
}

function classTrue() {
  open = true
}

function classFalse() {
  open = false
}

console.log('storesam',$currPage);

// TRYING CURRPAGE ROUTING TO SIDEBAR - REVERT IF NEEDED
// export let currPage = 'Home'
// export let currPage;

// function styleNav(e) {
//   currPage = e.target.textContent
//   console.log(currPage);
// }

const updateCurrPage = (e) => {
    currPage.update(page => page = e.target.textContent)
  }

</script>

<nav bind:this={nav} id="nav" class="w-full mx-auto overflow-x-hidden overflow-y-hidden select-none absolute z-10 top-0">
  <div class="relative container flex flex-row items-center justify-between mx-auto pt-14 md:pt-10">
    <div class="hidden md:block top-[48px] md:left-[8rem] lg:left-[45%] backdrop-blue bg-white/10 absolute backdrop-blur border-none py-12 w-[100rem]"></div>
    <div class="pt-2 lg:w-1/2 px-6 relative">
      <img src="https://raw.githubusercontent.com/35degrees/space-fem/refs/heads/main/src/lib/assets/shared/logo.svg" alt="logo">
      <img src="https://raw.githubusercontent.com/35degrees/space-fem/refs/heads/main/src/lib/assets/shared/logo.svg" alt="logo" class="absolute top-0 left-0 pt-2 px-6">
      <div class="header-line ml-[20%] relative top-[-25px] hidden lg:block lg:w-[90%] h-[0.5px] bg-white opacity-30 z-30"></div>
    </div>
    <ul bind:this={ul} class="grid-auto-fit counter md:md-counter relative hidden md:w-[85%] lg:w-[55%] mt-1 md:flex flex-row justify-end items-center md:gap-6 lg:gap-10 lg:px-8 md:px-6" on:mouseenter={classTrue} on:mouseleave={classFalse}>
      {#each navItems as item}
      <li class="cursor-pointer border-transparent border-b-2 px-4 py-8 font-extralightselect-none outline-none" on:mouseenter={handleEnter}><a href="/{item.toLowerCase() === 'home' ? '' : item.toLowerCase()}" class="py-8 font-subCondensed text-white text-xl uppercase font-extralight" on:click={updateCurrPage} class:current={$currPage === item}>{item}</a></li>
      {/each}
      <Underline {width} {x} {y} {open} {ulX} {navWidth} {height}/>
    </ul>

    <Hamburger bind:open={sidebar} />
  </div>
</nav>


<!-- <li class="cursor-pointer hover:border-white border-transparent border-b-2 px-4 py-8 font-extralightselect-none outline-none"><a href="/" class="font-subCondensed text-white text-xl uppercase">Home</a></li>
<li class="cursor-pointer md:md-count px-4 py-8 font-extralight hover:border-white border-transparent border-b-2 select-none outline-none"><a href="/destination" class="font-subCondensed text-white text-xl uppercase">Destination</a></li>
<li class="cursor-pointer md:md-count px-4 py-8 font-extralight hover:border-white border-transparent border-b-2 select-none outline-none"><a href="/crew" class="font-subCondensed text-white text-xl uppercase">Crew</a></li>
<li class="cursor-pointer md:md-count px-4 py-8 font-extralight hover:border-white border-transparent border-b-2 select-none outline-none"><a href="/technology" class="font-subCondensed text-white text-xl uppercase">Technology</a></li> -->

<style>


/* nav {
  background-color: red;
} */

.current {
border-bottom: 4px solid white;
border-bottom-left-radius: 1px;
border-bottom-right-radius: 1px;

}

  .counter {
    counter-reset: nav-counter -1;
  }

  .counter > li {
    counter-increment: nav-counter;
  }

  .counter li a::before {
    content: counter(nav-counter,decimal-leading-zero);
    margin-right: 9px;
    font-weight: 500;
  }






</style>