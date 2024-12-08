<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Apple" },
]
items.filterById(1)
        `
</script>

<Header>filterById()</Header>
<section>
  <span>Filters the array and returns all items where the id matches the provided id.</span>
  <Code value={codeContent.trim()} />
</section>
