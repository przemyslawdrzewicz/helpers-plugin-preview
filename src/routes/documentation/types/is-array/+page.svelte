<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { types } from "helpers-plugin"
types.isArray([])
      `
</script>

<Header>isArray()</Header>
<section>
  <span>Checks if the provided value is an array.</span>
  <Code value={codeContent.trim()} />
</section>
