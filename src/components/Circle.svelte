<script>
  import { currPage } from '../stores';
  import Layout from '../routes/+layout.svelte';
import { fade, fly } from 'svelte/transition'
  // export let currPage = 'Home'

  const updateCurrPage = () => {
    currPage.update(page => page = "Destination")
  }
</script>


<div in:fade={{duration: 500, delay: 1800}} out:fly={{x:300, duration: 440, delay:40}} class="relative explore-circle h-1/2 w-full md:h-full md:w-1/2 flex items-center justify-center py-20 lg:w-1/2 lg:px-2 lg:py-0 lg:justify-end">
  <a href="/destination" class="circle flex justify-center items-center cursor-pointer" on:click={updateCurrPage}>
   <h1 class="font-main text-blue300 text-3xl text-center uppercase pointer-events-none select-none relative z-25">Explore</h1>
  </a>
</div>


<style>
  .circle {
    height: 225px;
    width: 225px;
    background-color: #fff;
    border-radius: 100%;
    transition: transform 0.1s ease-in-out;
    z-index: 0;
    &:hover {
      transform: translateY(0.9px) scale(1.05);
    }
    &:active {
      transform: translateY(-2px) scale(1.01);
    }
  }

  .circle:hover::before {
    content: '';
    border-radius: 100%;
    padding: 2rem;
    background-color: #fff;
    position: absolute;
    animation: pulse 0.36s ease-in forwards;
    animation-fill-mode: none;
  }

  @media (min-width: 1440px) {
    .circle {
    height: 305px;
    width: 305px;
    transition: transform 0.14s ease-in;
    }
    .circle:hover::before {

    animation: pulse 0.36s ease-in forwards;
    animation-fill-mode: none;

  }
    @keyframes pulse {
    0% {
      height: 215px;
      width: 215px;
      opacity: 0.9;
    }
    70% {
      opacity: 0.6;
    }
    100% {
      height: 900px;
      width: 900px;
      opacity: 0.1;
    }

  }
  }

  @keyframes pulse {
    0% {
      height: 150px;
      width: 150px;
      opacity: 0.9;
    }
    70% {
      opacity: 0.6;
    }
    100% {
      height: 700px;
      width: 700px;
      opacity: 0.1;
    }

  }
</style>
