<script>

  import { fade,fly } from 'svelte/transition'
  import Nav from '../components/Nav.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import Circle from '../components/Circle.svelte';
  import LandingIntro from '../components/LandingIntro.svelte';
  import "../app.css";
  import Page from './+page.svelte';

  export let data
  // export let currPage 
  $: pathname = data.pathname;

  let open = false
</script>


<!-- page transitions: https://joshcollinsworth.com/blog/sveltekit-page-transitions#the-final-code -->



<Sidebar bind:open />
<Nav bind:sidebar={open} />
<!-- <Sidebar bind:open bind:currPage />
<Nav bind:sidebar={open} bind:currPage /> -->
{#key data.pathname }
<div in:fade={{ duration:320, delay:460}} out:fade={{duration:440, delay: 120}}>

  <slot />

</div>
{/key}

