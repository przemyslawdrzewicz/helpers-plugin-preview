<script>
  import Header from '@/components/ui/Header.svelte'
  import Code from '@/components/ui/Code.svelte'
  import Tag from '@/components/ui/Tag.svelte'

  const installCodeContent = `
    npm install helpers-plugin
  `

  const registerCodeContent = `
import { register } from 'helpers-plugin'
register({ identifierName: 'customId' })
  `
</script>

<Header>Installation</Header>
<section>
  <span>Install via npm:</span>
  <Code value={installCodeContent.trim()} />
</section>
<section>
  <span>Register component in your main file:</span>
  <Code value={registerCodeContent.trim()} />
</section>
<section>
  <p>
    <Tag>identifierName</Tag> is a needed field when you use methods like for example filter. Thanks
    to this you don't have to write
    <Tag>filter(item => item.id === id)</Tag>
    You can just write <code>filterById(id)</code>.
  </p>
</section>
