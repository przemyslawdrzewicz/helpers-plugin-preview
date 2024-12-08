<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
const items = ['🍌', '🍎', '🍊'] 
items.last()
        `
</script>

<Header>last()</Header>
<section>
  <span>Gets the last element of the array.</span>
  <Code value={codeContent.trim()} />
</section>
