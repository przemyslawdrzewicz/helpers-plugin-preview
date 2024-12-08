<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { types } from "helpers-plugin"
types.isBoolean(true)
      `
</script>

<Header>isBoolean()</Header>
<section>
  <span>Checks if the provided value is a boolean.</span>
  <Code value={codeContent.trim()} />
</section>
