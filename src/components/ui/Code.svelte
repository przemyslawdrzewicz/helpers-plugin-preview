<script>
  import Highlight from 'svelte-highlight'
  import typescript from 'svelte-highlight/languages/typescript'
  import materialDarker from 'svelte-highlight/styles/material-darker'

  let props = $props()
  const code = props?.value || ''
</script>

<svelte:head>
  {@html materialDarker}
</svelte:head>

<div class="code">
  <Highlight language={typescript} {code} />
</div>

<style>
  :global(.hljs) {
    border-radius: 8px;
    background: linear-gradient(#202b47, #151d31) !important;
  }
</style>
