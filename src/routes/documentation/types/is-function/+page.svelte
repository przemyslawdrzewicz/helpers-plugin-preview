<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { types } from "helpers-plugin"
types.isFunction(() => {})
      `
</script>

<Header>isFunction()</Header>
<section>
  <span>Checks if the provided value is a function.</span>
  <Code value={codeContent.trim()} />
</section>
