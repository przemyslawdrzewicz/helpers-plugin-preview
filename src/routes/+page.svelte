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
  let inputValue = 'items'

  // function validateInput() {
  //   const words = [
  //     'items.first()',
  //     'items.last()',
  //     'items.findById(0)',
  //     'items.findById(1)',
  //     'items.findById(2)',
  //     'items.findById(3)',
  //     'types.isNumber()',
  //   ]
  //   return words.includes(inputValue)
  // }

  function changeInput(input) {
    try {
      const value = eval(input.target.value)
      contentValue = value
    } catch (e) {
      console.log(e, 'e?')
    }
  }

  function handleBlur(refresh = false) {
    const oldValue = inputValue
    inputElement.focus()

    if (refresh) {
      inputValue = ''

      setTimeout(() => {
        inputValue = oldValue
      }, 10)
    }
  }

  onMount(() => {
    handleBlur(true)
  })
</script>

<button class="container" on:click={() => handleBlur()}>
  <div class="content">
    <h1>helpers plugin</h1>
    <h2>try and install using <span>npm i helpers-plugin</span></h2>
    <div class="code">
      <div class="input">
        <span class="bomb">🔥</span>
        <input
          bind:this={inputElement}
          on:blur={() => handleBlur()}
          bind:value={inputValue}
          on:input={(value) => changeInput(value)}
        />
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
    /* width: 250px; */
    display: block;
    padding: 40px;
  }

  .input {
    display: flex;
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
</style>
