<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
]
items.findById(2)
  `
</script>

<Header>findById()</Header>
<section>
  <span>Finds the first item in the array that has an id property matching the provided id.</span>
  <Code value={codeContent.trim()} />
</section>
