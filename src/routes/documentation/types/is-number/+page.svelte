<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { types } from "helpers-plugin"
types.isNumber(1)
      `
</script>

<Header>isNumber()</Header>
<section>
  <span>Checks if the provided value is a number.</span>
  <Code value={codeContent.trim()} />
</section>
