<script>
  import '@/assets/style.css'
  import Navigation from '@/components/documentation/Navigation.svelte'
  import Appbar from '@/components/ui/Appbar.svelte'

  let { children } = $props()
</script>

<div class="container">
  <Appbar />
  <div class="content">
    <div class="documentation">
      <div class="documentation__navigation_container"><Navigation /></div>
      <div class="documentation__selected_container">
        {@render children()}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    min-height: 100vh;
    background: linear-gradient(#0b132c, #050814);
    color: white !important;
    border: none;
    text-align: left;
    width: 100%;
  }

  .content {
    padding: 30px;
    padding-top: 40px;
    display: flex;
    justify-content: center;
  }

  .documentation {
    width: 900px;
    display: flex;
  }

  .documentation__navigation_container {
    width: 30%;
    position: sticky;
    top: 120px;
    height: 80vh;
    overflow-y: auto;
  }

  @media (max-width: 800px) {
    .documentation {
      width: 100% !important;
      display: block;
    }

    .documentation__navigation_container {
      display: none;
    }

    .documentation__selected_container {
      width: 100% !important;
      padding: 0 !important;
    }
  }

  .documentation__selected_container {
    width: 70%;
    font-weight: 300;
    padding-left: 40px;
  }
</style>
