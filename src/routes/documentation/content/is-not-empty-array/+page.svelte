<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { content } from "helpers-plugin"
content.isNotEmptyArray([])
      `
</script>

<Header>isNotEmptyArray()</Header>
<section>
  <span>Checks if the provided value is an array and contains at least one item.</span>
  <Code value={codeContent.trim()} />
</section>
