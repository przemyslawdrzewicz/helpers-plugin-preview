<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { types } from "helpers-plugin"
types.isObject({})
      `
</script>

<Header>isObject()</Header>
<section>
  <span>Checks if the provided value is an object.</span>
  <Code value={codeContent.trim()} />
</section>
