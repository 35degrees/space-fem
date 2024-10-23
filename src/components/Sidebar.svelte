<script>
  import { currPage } from "../stores";
  import Underline from "./Underline.svelte";
  export let open = false
  let hover = false
  let asideX = 0
  let asideY = 0
  let asideWidth = 0
  let asideHeight = 0

  const navItems = ['Home','Destination','Crew','Technology']

  // export let currPage = 'Home'

  function handleEnter(e) {
    const thisA = e.target.getBoundingClientRect()
    console.log(thisA);
    asideX = thisA.x
    asideY = thisA.y
    asideWidth = thisA.width
    asideHeight = thisA.height
    hover = true
}

function handleLeave() {
  hover = false
  asideHeight = 0
}

const updateCurrPage = (e) => {
    currPage.update(page => page = e.target.textContent)
  }

</script>

<aside class="absolute z-10 top-0 w-full h-full backdrop-blur bg-white/10 shadow-lg select-none md:hidden" class:open>
  <nav class="p-12 text-3xl flex flex-col counter mt-[7rem] items-center">
    {#each navItems as item}
      <a href="/{item.toLowerCase() === 'home' ? '' : item.toLowerCase()}" class="border-transparent border-b-[4px] py-6 my-2 font-subCondensed text-white uppercase font-extralight text-white" class:current={$currPage === item} on:click={updateCurrPage} on:click={() => open = !open} on:mouseenter={handleEnter} on:mouseleave={handleLeave}>{item}</a>
    {/each}
    <Underline {asideWidth} {asideX} {asideY} {hover} />
    <!-- <div class="text-white z-88">asideHeight: {asideHeight}, asideWidth: {asideWidth}, asideX: {asideX}, asideY: {asideY}, hover: {hover}</div> -->
  </nav>
</aside>

<style>

  aside {
    right: -100%;
    transition: right 0.38s ease-in-out;
  }

  aside::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: hsla(230, 33%, 7%, 0.58);
    position: absolute;
    z-index: -20;
  }

  .open {
    right: 0;
  }
  .current {
    border-bottom: 4px solid white;
  }

  .counter {
    counter-reset: nav-counter -1;
  }

  .counter > a {
    counter-increment: nav-counter;
  }

  .counter a::before {
    content: counter(nav-counter,decimal-leading-zero);
    margin-right: 9px;
    font-weight: 500;
  }


</style>