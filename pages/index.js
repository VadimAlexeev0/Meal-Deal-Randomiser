import Layout from "../components/layout";
import Randomiser from "../components/randomiser";

const mealDealData = require("../mealDealData.json");

class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: mealDealData,
		};
	}

	render() {
		return (
			<Layout>
				<h1>Index</h1>

				<Randomiser data={this.state.data} />
			</Layout>
		);
	}
}

export default Index;
