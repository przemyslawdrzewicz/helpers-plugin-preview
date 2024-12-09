<script>
  import { page } from '$app/stores'
  import { createEventDispatcher } from 'svelte'
  import { navigationList } from '@/constants/navigation'
  import { base } from '$app/paths'

  $: routePath = $page.route.id

  const items = navigationList

  const dispatch = createEventDispatcher()

  function navigationItemCLicked() {
    dispatch('update')
  }
</script>

<nav class="drawer">
  {#each items as item}
    <div>
      <button>{item.title}</button>
      {#if item.child}
        <div class="drawer__childlist">
          {#each item.child as childItem}
            {#if !childItem.subChild}
              <a href={base + childItem.to}>
                <button
                  class={routePath === childItem.to ? 'active' : ''}
                  on:click={navigationItemCLicked}
                >
                  {childItem.title}
                </button>
              </a>
            {:else}
              <span>{childItem.title}</span>
              <div class="drawer__subchildlist">
                {#each childItem.subChild as subChildItem}
                  <a href={base + subChildItem.to}>
                    <button
                      class={routePath === subChildItem.to ? 'active' : ''}
                      on:click={navigationItemCLicked}
                    >
                      {subChildItem.title}
                    </button>
                  </a>
                {/each}
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</nav>

<style>
  .drawer {
    overflow: auto;
  }

  @media (max-width: 800px) {
    .drawer {
      height: 94vh;
    }
  }

  button {
    background: transparent;
    border: 0;
    color: white;
  }

  .drawer__childlist {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 12px;
    padding-left: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.123);
  }

  .drawer__childlist span {
    padding-top: 7px;
    padding-bottom: 7px;
    display: block;
    font-weight: 300;
    font-size: 14px;
    color: white;
  }

  .drawer__childlist button {
    color: rgba(255, 255, 255, 0.747);
    padding-top: 7px;
    padding-bottom: 7px;
    display: block;
    cursor: pointer;
  }

  button:hover {
    color: white;
  }

  .drawer__subchildlist {
    padding-left: 30px;
  }

  a button.active {
    color: #0ffa98;
  }

  a {
    text-decoration: none;
  }
</style>
