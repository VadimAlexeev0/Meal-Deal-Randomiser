import Layout from "../components/layout";
import Columns from "../components/columns/columns"


class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: require("../tescoData.json"),
		};
	}
	render() {
		return (
			<Layout>
				<Columns data={this.state.data} />
				{/*<Randomiser data={this.state.data} />*/}
			</Layout>
		);
	}
}

export default Index;
