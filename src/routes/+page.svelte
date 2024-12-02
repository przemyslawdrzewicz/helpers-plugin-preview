<script>
	import { register, types, content } from 'helpers-plugin';
	register({ identifierName: 'id' });

	const items = [
		{ id: 1, name: 'Apple' },
		{ id: 2, name: 'Banana' },
		{ id: 3, name: 'Orange' }
	];

	let contentValue = items;
	let inputValue = 'items';

	const changeInput = (input) => {
		console.log(input.target.value);
		try {
			const value = eval(input.target.value);
			contentValue = value;
		} catch (e) {
			console.log(e, 'e?');
		}
	};

	let inputElement;

	function handleBlur() {
		inputElement.focus(); // Refocus the input when it loses focus
	}
</script>

<div class="container" on:click={handleBlur}>
	<div class="content">
		<h1>helpers plugin</h1>
		<h2>try and install using <span>npm i helpers-plugin</span></h2>
		<div class="code">
			<div class="input">
				<span class="bomb">🔥</span><input
					bind:this={inputElement}
					autoFocus={true}
					on:blur={handleBlur}
					bind:value={inputValue}
					on:input={(value) => changeInput(value)}
				/>
			</div>
			<pre>{JSON.stringify(contentValue, null, 4)}</pre>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rowdies:wght@300;400;700&family=Rubik+Mono+One&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

	:global(*) {
		font-family: 'Poppins', sans-serif;
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

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white !important;
		background: linear-gradient(#080e20, #03050c);
		min-height: 100vh;
		/* padding-top: 40px;
		padding-bottom: 40px; */
	}

	.content {
		width: 500px;
	}

	.code {
		padding: 40px 40px;
		border-radius: 8px;
		font-size: 18px;

		background: linear-gradient(#202b47, #151d31);
		/* box-shadow: 4px 4px 4px 0px rgba(66, 68, 90, 0.158); */
	}

	input {
		border: 0;
		outline: 0;
		background: transparent;
		color: rgb(245, 86, 86);
		font-size: 18px;
	}

	.bomb {
		/* font-size: 16px; */
		padding-right: 10px;
	}

	.text {
		color: rgb(9, 184, 184);
	}

	button {
		background: #017545;
		/* width: 150px; */
		border: none;
		color: white;
		font-size: 16px;
		border-radius: 8px;
		padding: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		cursor: pointer;
	}

	button:hover {
		background: #0175453f;
	}

	.actions {
		margin-top: 40px;
	}
</style>
