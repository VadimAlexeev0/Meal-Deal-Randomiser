import Layout from "../components/layout";
import Randomiser from "../components/randomiser";

class Index extends React.Component {
	render() {
		return (
			<Layout>
				<h1>Index</h1>

				<Randomiser />
			</Layout>
		);
	}
}

export default Index;
