<script>
  import Navigation from '@/components/documentation/Navigation.svelte'
  import Tag from '@/components/ui/Tag.svelte'
  import { base } from '$app/paths'

  let dialog = false

  function openDialog() {
    dialog = true
  }

  function closeDialog() {
    setTimeout(() => {
      dialog = false
    }, 100)
  }
</script>

<button on:click={openDialog}>
  <img src={base + '/menu.svg'} alt="hamburger" />
</button>
<dialog open={dialog}>
  <div class="header">
    <Tag small type="primary">1.0.8</Tag>
    <div class="links">
      <a href="https://www.npmjs.com/package/helpers-plugin">
        <button>
          <img src={base + '/npm.svg'} alt="npm" />
        </button>
      </a>
      <a href="https://github.com/przemyslawdrzewicz/helpers-plugin">
        <button>
          <img src={base + '/github.svg'} alt="github" />
        </button>
      </a>
    </div>
    <button on:click={closeDialog}>
      <img src={base + '/close.svg'} alt="close" />
    </button>
  </div>
  <Navigation on:update={closeDialog} />
</dialog>

<style>
  button {
    background: transparent;
    border: 0;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: white;
  }

  dialog {
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: #0b132c;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding-right: 38px;
    padding-top: 14px;
    padding-bottom: 40px;
  }

  .links {
    display: flex;
  }
</style>
