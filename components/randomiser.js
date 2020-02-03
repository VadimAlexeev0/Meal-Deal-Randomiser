const mealDealData = require("../mealDealData.json");

class Randomiser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: mealDealData,

			Main: "",
			Snack: "",
			Drink: "",
		};
	}

	componentDidMount() {
		this.updateRandomCombo();
	}

	randomNumber(min, max) {
		max--;
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	updateRandomCombo() {
		let data = this.state.data;
		console.log(data);
		this.setState({
			Main: data[0][this.randomNumber(0, data[0].length)],
			Snack: data[1][this.randomNumber(0, data[1].length)],
			Drink: data[2][this.randomNumber(0, data[2].length)],
		});
		/*
		this.setState({
			Main: this.randomNumber(this.state.data[0].length),
			Snack: this.randomNumber(this.state.data[1].length),
			Drink: this.randomNumber(this.state.data[2].length),
        });
        */
	}

	render() {
		return (
			<>
				<h1>Component</h1>
				<p>Main: {this.state.Main}</p>
				<p>Snack: {this.state.Snack}</p>
				<p>Drink: {this.state.Drink}</p>
			</>
		);
	}
}

export default Randomiser;
