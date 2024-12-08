<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
import { content } from "helpers-plugin"
content.isNotEmptyString("")
      `
</script>

<Header>isNotEmptyString()</Header>
<section>
  <span>Checks if the provided value is a non-empty string.</span>
  <Code value={codeContent.trim()} />
</section>
