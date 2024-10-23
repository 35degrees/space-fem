<script>
  import { fade,fly } from 'svelte/transition'
</script>



  <div in:fade={{duration:620,delay:120}} out:fly={{x:-300, duration: 440, delay:40}} class="intro-text h-1/2 w-full md:w-1/2 md:h-full flex flex-col gap-5  md:w-4/5 lg:w-2/5 lg:items-start">
  
    <h3 class="font-subCondensed text-2xl uppercase text-white tracking-wider opacity-80">So, you want to travel to</h3>
    <h1 class="text-9xl font-main text-white uppercase lg:-ml-3">Space</h1>
    <p class="font-sub text-xl opacity-70 text-center text-white leading-8 px-12 md:px-0 lg:text-left lg:px-0">Let’s face it - if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!</p>
  </div>