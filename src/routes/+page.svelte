<script>
  import { register, types, content } from 'helpers-plugin'
  import { base } from '$app/paths'

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
    changeInput()
  }
</script>

<div class="container">
  <div class="content">
    <h1>
      <a href="https://www.npmjs.com/package/helpers-plugin" target="_blank">helpers plugin</a>
    </h1>
    <h2>
      try and install using <span>npm i helpers-plugin</span>
    </h2>
    <a href={base + '/documentation/getting-started/installation'}>
      <button class="documentation">Documentation</button>
    </a>
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
              <button on:click={() => handleSuggestClick(item)}>{item.text}</button>
            {/each}
          </div>
        {/if}
      </div>
      <pre>{JSON.stringify(contentValue, null, 4)}</pre>
    </div>
  </div>
</div>

<style>
  .container {
    min-height: 100vh;
    background: linear-gradient(#080e20, #03050c);
    color: white !important;
    border: none;
    text-align: left;
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
    font-size: 56px;
    width: 600px;
    opacity: 0;
    animation: fadeInUp 1.5s 0.5s forwards;
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
    animation: fadeInUp 1.5s 1.5s forwards;
  }

  h2 span {
    color: #00dc82;
  }

  .documentation {
    border: 0;
    padding: 20px 30px;
    /* margin-top: 30px; */
    background: transparent;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #00dc82;
    opacity: 0;
    animation: fadeIn 1.5s 2.5s forwards;
  }

  .documentation:hover {
    border: 1px solid #00dc80c0;
    color: #ffffffd2;
  }

  .code {
    border-radius: 8px;
    font-size: 18px;
    background: linear-gradient(#202b47, #151d31);
    display: block;
    padding: 40px;
    animation: fadeIn 1.5s 3s forwards;
    opacity: 0;
    margin-top: 20px;
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

  .suggestion button {
    padding: 15px;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    display: block;
    border: none;
    width: 100%;
    text-align: left;
    background: #121929;
    color: white;
    font-size: 16px;
  }

  .suggestion button:hover {
    background: #121929;
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }

  input {
    border: 0;
    outline: 0;
    background: transparent;
    color: rgb(224, 105, 69);
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
