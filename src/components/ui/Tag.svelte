<script>
  let props = $props()
  const smallClass = props.small ? 'small' : ''
  const typeClass = props.type
</script>

<code class={`${smallClass} ${typeClass}`}>{@render props.children()}</code>

<style>
  code {
    border: 1px solid rgba(255, 255, 255, 0.13);
    background: rgba(255, 255, 255, 0.116);
    padding: 4px 8px;
    border-radius: 8px;
  }

  .small {
    font-size: 12px;
  }

  .primary {
    background: #0ffa981e;
    border: 1px solid #0ffa9881;
    color: white;
  }
</style>
