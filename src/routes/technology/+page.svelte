<script>
  import Nav from "../../components/Nav.svelte";
    import { fade } from 'svelte/transition'
  import data from '/src/data/data.json'

  let tech = data.technology
  let currTechIndex = 0
  let innerWidth = window.innerWidth

  console.log(tech[0].name);

  </script>
  
  <div class="absolute w-screen h-screen top-0 bg-cover bg-center bg-no-repeat sm:bg-[url('src/lib/assets/technology/background-technology-mobile.jpg')] md:bg-[url('src/lib/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('src/lib/assets/technology/background-technology-desktop.jpg')] -z-20"></div>
  <section in:fade={{duration:260, delay:720}} id="technology" class="relative">
  
    <div class="container flex flex-col text-center items-center justify-center gap-4 mx-auto mt-48 sm:mt-36 md:mt-60 gap-8 lg:flex-row lg:mt-60 lg:h-[800px] md:relative">
      <h3 class="text-white text-xl md:text-2xl uppercase flex flex-row gap-6 font-subCondensed font-medium tracking-wide text-center lg:text-3xl md:absolute md:-top-14 md:left-12 lg:-top-[2rem] lg:left-[4rem]"><span class="font-light">03</span>space launch 101</h3>
      <div in:fade={{duration: 500, delay: 1400}} out:fade={{duration:200}}  class="img w-screen h-[340px] md:max-h-[600px] lg:max-h-[800px] md:h-screen object-cover lg:order-last lg:w-1/2 lg:mx-auto lg:my-0 lg:flex lg:justify-center">
        {#if innerWidth < 1440}
        <img class="object-cover" src={tech[currTechIndex].images.landscape} alt="">
        {:else}
        <img class="rounded-2xl" src={tech[currTechIndex].images.portrait} alt="">
        {/if}
      </div>
      
      <div in:fade={{duration: 600, delay: 2100}} out:fade={{duration:200}}  class="crew-nav flex flex-row gap-8 text-center items-center justify-center lg:flex-col lg:mt-60 lg:ml-12">
        {#each tech as item,i}
        <div class="nav-item font-main text-white text-2xl w-[62px] h-[62px] rounded-full bg-transparent cursor-pointer border-[1px] border-white flex justify-center items-center hover:bg-white hover:text-black hover:font-semibold hover:opacity-70 border-2" on:click={() => currTechIndex = i} class:current={currTechIndex === i}>{i+1}</div>
        {/each}
      </div>
      <div in:fade={{duration: 600, delay: 2100}} out:fade={{duration:200}}  class="crew-text flex flex-col gap-6 lg:w-1/3 lg:items-start lg:px-3 lg:mt-60">
        <h3 class="font-main text-white font-extralight opacity-70 uppercase text-2xl tracking-wide">The Terminology...</h3>
        <h1 class="font-main font-light text-5xl text-center text-white uppercase -mt-2">{tech[currTechIndex].name}</h1>
        <p class="text-white font-subCondensed text-xl tracking-wide opacity-65 text-balance leading-7 lg:text-left">{tech[currTechIndex].description}</p>
      </div>
    </div>
   
  </section>

  <svelte:window bind:innerWidth />
  <style>
    .img img {
      height: 100%;
      object-fit: cover;
      object-position: 50%;
    }

    .current {
      background-color: #fff;
      color: #000;
      font-weight: 700;
      &:hover {
        opacity: 1;
      }
    }

  </style>