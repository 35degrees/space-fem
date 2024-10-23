<script>

export let open = false



</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="hamburger-menu block md:hidden z-20" class:open on:click={()=> open = !open}>
<!-- <div class="hamburger-menu block md:hidden z-99" class:open={isOpen} on:click={toggleIsOpen}> -->
  <span class="hamburger-menu-top"></span>
  <span class="hamburger-menu-middle"></span>
  <span class="hamburger-menu-bottom"></span>
</div>

<style>
  .hamburger-menu {
    width: 32px;
    height: 32px;
    position: relative;
    top: 8px;
    right: 8%;
    cursor: pointer;
    transition: all 0.2s;
    outline: none;
    user-select: none;
    z-index: 20;
  }

  .hamburger-menu-top,
  .hamburger-menu-middle,
  .hamburger-menu-bottom {
    width: 32px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    transform: rotate(0);
    transition: all 0.32s;
  }

  .hamburger-menu-middle {
    transform: translateY(10px);
    width: 24px;
    right: 0;
  }

  .hamburger-menu-bottom {
    transform: translateY(20px);
  }

  .open {
    transform: rotate(90deg);
    transform: translateY(0px);
  }

  .open .hamburger-menu-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  
  }

  .open .hamburger-menu-middle {
    display: none;
  }

  .open .hamburger-menu-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);

  }

</style>