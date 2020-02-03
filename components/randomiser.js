
class Randomiser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			Main: "",
			Snack: "",
			Drink: "",
		};
		this.updateRandomCombo = this.updateRandomCombo.bind(this);
	}

	componentDidMount() {
		this.updateRandomCombo();
	}

	randomNumber(min, max) {
		max--;
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	updateRandomCombo() {
		let data = this.props.data;
		this.setState({
			Main: data[0][this.randomNumber(0, data[0].length)],
			Snack: data[1][this.randomNumber(0, data[1].length)],
			Drink: data[2][this.randomNumber(0, data[2].length)],
		});
		console.log(this.state)
	}

	render() {
		return (
			<>
				<h1>Component</h1>
				<p>Main: {this.state.Main}</p>
				<p>Snack: {this.state.Snack}</p>
				<p>Drink: {this.state.Drink}</p>

				<button onClick={this.updateRandomCombo}>Randomise</button>
			</>
		);
	}
}

export default Randomiser;
