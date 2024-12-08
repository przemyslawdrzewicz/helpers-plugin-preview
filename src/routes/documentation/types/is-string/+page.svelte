<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { types } from "helpers-plugin"
types.isString("")
      `
</script>

<Header>isString()</Header>
<section>
  <span>Checks if the provided value is a string.</span>
  <Code value={codeContent.trim()} />
</section>
