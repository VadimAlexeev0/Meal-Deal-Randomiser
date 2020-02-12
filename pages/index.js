import { NextSeo } from 'next-seo';

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
				<NextSeo
					title="Meal Deal Generator"
					description="Look at all Tescos meal deal items"
				/>
				<Columns data={this.state.data} />
				{/*<Randomiser data={this.state.data} />*/}
			</Layout>
		);
	}
}

export default Index;
