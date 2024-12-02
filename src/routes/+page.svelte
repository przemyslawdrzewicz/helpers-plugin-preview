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
    <h1>
      <a href="https://www.npmjs.com/package/helpers-plugin" target="_blank">helpers plugin</a>
    </h1>
    <h2>
      try and install using <span>npm i helpers-plugin</span>
    </h2>
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
    animation: fadeIn 1.5s ease-in-out;
  }

  .content {
    max-width: 500px;
    width: 100%;
    animation: slideUp 1s ease-out;
  }

  h1 {
    color: #00dc82;
    font-weight: 300;
    margin-top: 40px;
    margin-bottom: 20px;
    /* font-size: 48px; */
    font-size: 70px;
    opacity: 0;
    animation:
      fadeInUp 1.5s 0.5s forwards,
      titleShrink 1.5s ease-in-out 1.5s forwards;
  }

  h1 a {
    color: #00dc82;
    text-decoration: none;
  }

  h1 a:hover {
    text-decoration: underline;
  }

  h2 {
    color: white;
    font-weight: 300;
    margin-bottom: 40px;
    font-size: 18px;
    opacity: 0;
    animation: fadeInUp 1.5s 3s forwards;
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
    animation: fadeIn 1.5s 4s forwards;
    opacity: 0;
  }

  .input-section {
    position: relative;
  }

  .input {
    display: flex;
    align-items: center;
  }

  .suggestion {
    position: absolute;
    left: 0;
    top: 40px;
    background: #161f33;
    width: 100%;
    box-shadow: 2px 2px 5px 0px rgba(11, 16, 68, 0.123);
    animation: slideIn 0.5s ease-out;
  }

  .suggestion div {
    padding: 15px;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }

  .suggestion div:hover {
    background: #121929;
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }

  input {
    border: 0;
    outline: 0;
    background: transparent;
    color: rgb(245, 86, 86);
    font-size: 18px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
  }

  .bomb {
    padding-right: 10px;
  }

  /* Keyframe Animations */

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes titleShrink {
    0% {
      font-size: 70px;
      opacity: 1;
    }
    100% {
      font-size: 48px; /* Final smaller font size */
      opacity: 1;
    }
  }
</style>
