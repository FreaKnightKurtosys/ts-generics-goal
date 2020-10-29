import React from 'react';
import logo from './logo.png';
import './App.css';
import { Elephant } from './classification/species/elephant';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.selectAnimal = this.selectAnimal.bind(this);
	}

	activeAnimal: any;

	selectAnimal(evt: React.ChangeEvent<HTMLSelectElement>) {
		const selectedValue = evt.target.value;

		if (selectedValue === 'elephant') {
			this.activeAnimal = new Elephant();
			console.log(this.activeAnimal.makeSound());
		}
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
						</select>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
