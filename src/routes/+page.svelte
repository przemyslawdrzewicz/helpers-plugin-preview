<script>
  import { onMount } from 'svelte'
  import { register, types, content } from 'helpers-plugin'

  register({ identifierName: 'id' })

  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]

  let inputElement
  let contentValue = items
  let inputValue = ''
  let isInputFocused = false

  const hints = [
    { text: 'items', action: () => items },
    { text: 'items.first()', action: () => items.first() },
    { text: 'items.last()', action: () => items.last() },
    { text: 'items.findById(2)', action: () => items.findById(2) },
    { text: 'types.isNumber(2)', action: () => types.isNumber(2) },
    { text: 'content.isNotEmptyObject({})', action: () => content.isNotEmptyObject({}) }
  ]

  $: filteredHints = hints.filter(
    (hint) => hint.text.includes(inputValue) && hint.text !== inputValue
  )

  function validateInput() {
    return hints.some((hint) => hint.text === inputValue)
  }

  function changeInput() {
    const validate = validateInput()
    console.log(validate, 'validate')
    if (!validate) return

    const item = hints.find((hint) => hint.text === inputValue)
    contentValue = item.action()
  }

  function handleFocus() {
    isInputFocused = true
  }

  function handleBlur() {
    setTimeout(() => {
      isInputFocused = false
    }, 200)
  }

  function handleSuggestClick(item) {
    inputValue = item.text
    isInputFocused = false
    console.log(inputValue, 'input value?')
    changeInput()
  }
</script>

<button class="container">
  <div class="content">
    <h1>helpers plugin</h1>
    <h2>try and install using <span>npm i helpers-plugin</span></h2>
    <div class="code">
      <div class="input-section">
        <div class="input">
          <span class="bomb">🔥</span>
          <input
            bind:this={inputElement}
            on:focus={() => handleFocus()}
            bind:value={inputValue}
            on:blur={() => handleBlur()}
            placeholder="type some methods here ..."
          />
        </div>
        {#if isInputFocused}
          <div class="suggestion">
            {#each filteredHints as item}
              <div on:click={() => handleSuggestClick(item)}>{item.text}</div>
            {/each}
          </div>
        {/if}
      </div>
      <pre>{JSON.stringify(contentValue, null, 4)}</pre>
    </div>
  </div>
</button>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rowdies:wght@300;400;700&family=Rubik+Mono+One&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

  :global(*) {
    font-family: 'Poppins', sans-serif;
  }

  .container {
    min-height: 100vh;
    background: linear-gradient(#080e20, #03050c);
    color: white !important;
    border: none;
    text-align: left;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    max-width: 500px;
    width: 100%;
  }

  h1 {
    color: #00dc82;
    font-weight: 300;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 48px;
  }

  h2 {
    color: white;
    font-weight: 300;
    margin-bottom: 40px;
    font-size: 18px;
  }

  h2 span {
    color: #00dc82;
  }

  .code {
    border-radius: 8px;
    font-size: 18px;
    background: linear-gradient(#202b47, #151d31);
    display: block;
    padding: 40px;
  }

  .input-section {
    position: relative;
  }

  .input {
    display: flex;
  }

  .suggestion {
    position: absolute;
    left: 0;
    top: 40px;
    background: #161f33;
    width: 100%;
    box-shadow: 2px 2px 5px 0px rgba(11, 16, 68, 0.123);

    animation: fade 1s linear;
  }

  .suggestion div {
    padding: 15px;
    cursor: pointer;
  }

  .suggestion div:hover {
    background: #121929;
  }

  input {
    border: 0;
    outline: 0;
    background: transparent;
    color: rgb(245, 86, 86);
    font-size: 18px;
    width: 100%;
  }

  .bomb {
    padding-right: 10px;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
</style>
