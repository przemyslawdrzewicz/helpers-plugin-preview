<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { content } from "helpers-plugin"
content.isNotEmptyObject({})
      `
</script>

<Header>isNotEmptyObject()</Header>
<section>
  <span>Checks if the provided value is an object and contains at least one key.</span>
  <Code value={codeContent.trim()} />
</section>
