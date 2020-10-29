import React from 'react';
import logo from './logo.png';
import './App.css';
import { Elephant } from './classification/species/elephant';
import { Lion } from './classification/species/lion';
import { Leopard } from './classification/species/leopard';

class App extends React.Component<any, any> {
	activeAnimal!: Elephant | Lion | Leopard;
	buffalo!: any;
	elephant!: Elephant;
	leopard!: Leopard;
	lion!: Lion;
	rhino!: any;

	constructor(props: any) {
		super(props);
		this.selectAnimal = this.selectAnimal.bind(this);
		this.elephant = new Elephant();
		this.leopard = new Leopard();
		this.lion = new Lion();
	}

	selectAnimal(evt: React.ChangeEvent<HTMLSelectElement>) {
		const selectedValue = evt.target.value;

		switch (selectedValue) {
			case 'buffalo':
				break;
			case 'elephant':
				this.activeAnimal = this.elephant;
				break;
			case 'leopard':
				this.activeAnimal = this.leopard;
				break;
			case 'lion':
				this.activeAnimal = this.lion;
				break;
			case 'rhino':
				break;
			default:
				break;
		}

		console.log(this.activeAnimal.makeSound());
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						<select onChange={this.selectAnimal}>
							<option value="">none</option>
							<option value="elephant">Elephant</option>
							<option value="lion">Lion</option>
							<option value="leopard">Leopard</option>
						</select>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
