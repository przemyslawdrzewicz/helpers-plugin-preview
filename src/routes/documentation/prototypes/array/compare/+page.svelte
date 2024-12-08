<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'

  const codeContent = `
const arr1 = [{ id: 1, name: 'Apple' }]
const arr2 = [{ id: 1 }]
arr1.compare(arr2)
        `
</script>

<Header>compare()</Header>
<section>
  <span>Compares two arrays to see if they are equal in terms of length and content.</span>
  <Code value={codeContent.trim()} />
</section>
