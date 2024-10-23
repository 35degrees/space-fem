<script>
  import { currPage } from '../stores';
  import Circle from '../components/Circle.svelte';
  import Layout from './+layout.svelte';
  import LandingIntro from '../components/LandingIntro.svelte';


  </script>


<div class="absolute w-screen pointer-events-none h-screen bg-cover bg-center bg-no-repeat sm:bg-[url('https://github.com/35degrees/space-fem/blob/main/src/lib/assets/home/background-home-mobile.jpg?raw=true')] top-0 md:bg-[url('https://github.com/35degrees/space-fem/blob/main/src/lib/assets/home/background-home-tablet.jpg?raw=true')] lg:bg-[url('https://github.com/35degrees/space-fem/blob/main/src/lib/assets/home/background-home-desktop.jpg?raw=true')]"></div>
<section id="home" class="relative lg:mt-[36rem]" >
  <div class="container flex flex-col items-center gap-12 justify-center text-center mx-auto mt-48 py-6 lg:flex-row lg:justify-between lg:items-end lg:px-12 select-none">
    <LandingIntro />
    <Circle />
  </div>
</section>

