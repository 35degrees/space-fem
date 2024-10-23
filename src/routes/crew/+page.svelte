<script>
  import Nav from "../../components/Nav.svelte";
  import { fade } from 'svelte/transition'
  import data from '/src/data/data.json'


  let crew = data.crew
  let currCrewIndex = 0
  </script>
  
  <div class="absolute w-screen h-screen bg-cover bg-center bg-no-repeat top-0 sm:bg-[url('src/lib/assets/crew/background-crew-mobile.jpg')] md:bg-[url('src/lib/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('src/lib/assets/crew/background-crew-desktop.jpg')] -z-20"></div>

  <section in:fade={{duration:260, delay:720}} id="crew" class="md:relative">
  
    <div class="container flex flex-col mx-auto sm:mt-36 md:mt-60 gap-10 lg:flex-row lg:mt-60">

      <!-- SECTION ONE - HEADER,  TEXT, DOTS  -->

      <div class="px-6 flex flex-col h-1/2 text-white text-center justify-center items-center gap-10 md:gap-8 md:w-4/5 md:mx-auto lg:w-1/2 lg:h-auto lg:pl-32 lg:justify-around lg:mt-56 md:relative">
        <h3 class="text-white text-xl md:text-2xl uppercase flex flex-row gap-6 font-subCondensed font-medium tracking-wide text-center lg:text-3xl md:absolute md:-top-14 md:-left-8 lg:-top-[17rem] lg:left-12"><span class="font-light">02</span>Meet your crew</h3>
        <div in:fade={{duration: 700, delay: 2100}} out:fade={{duration:200}}  class="text-blurb text-white w-full text-center flex flex-col gap-3 lg:items-start lg:gap-6">
          <h5 class="opacity-60 font-main text-lg uppercase md:text-xl lg:text-2xl">{crew[currCrewIndex].role}</h5>
          <h2 class="opacity-90 font-main text-3xl uppercase md:text-5xl">{crew[currCrewIndex].name}</h2>
          <h2 class="opacity-70 font-sub text-md text-balance md:text-lg lg:text-left sm:h-[102px] md:h-[100px]">{crew[currCrewIndex].bio}</h2>
        </div>
        <div in:fade={{duration: 700, delay: 2100}} out:fade={{duration:200}} class="dots flex flex-row gap-6 mx-auto mt-2 lg:ml-2">
          {#each crew as member,i}
            <div on:click={() => currCrewIndex = i} class:current={currCrewIndex === i} class="bg-white opacity-35 cursor-pointer w-[14px] h-[14px] lg:w-[20px] lg:h-[20px] rounded-full hover:opacity-70 border-2 shadow-inner"></div>
          {/each}
        </div>
      </div>

      <!-- SECTION TWO - IMAGE  -->

      <div in:fade={{duration: 500, delay: 1400}} out:fade={{duration:200}} class="w-full h-auto m-0 flex mx-auto justify-center items-center relative lg:w-1/2 crew-image">
        <img class="h-[450px] md:h-[620px] lg:h-[800px]" src={crew[currCrewIndex].images.png} alt="crew image">

      
      </div>

    </div>
   
  </section>


  <style>

   

    /* .crew-image::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 15%;
      top: 90%;
      backdrop-filter: blur(2px);
      background-color: hsla(230, 33%, 7%, 0.111);
  
    } */

    .current {
      opacity: 100%;
      &:hover {
        opacity: 100%;
      }
    }

  </style>
