<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Apple" },
]
items.findIndexById(2)
        `
</script>

<Header>findIndexById()</Header>
<section>
  <span
    >Finds the index of the item in the array that has an id property matching the provided id.</span
  >
  <Code value={codeContent.trim()} />
</section>
