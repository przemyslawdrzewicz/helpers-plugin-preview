<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
const items = ['🍌', '🍎', '🍊'] 
items.first()
        `
</script>

<Header>first()</Header>
<section>
  <span>Gets the first element of the array.</span>
  <Code value={codeContent.trim()} />
</section>
