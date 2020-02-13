import { NextSeo } from 'next-seo';

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
			<>
				<NextSeo
					title="Meal Deal Generator"
					description="Look at all Tescos meal deal items"
				/>
				<Columns data={this.state.data} />
				{/*<Randomiser data={this.state.data} />*/}

				<style jsx global>{`
					body, html{
						margin: 0;
						overflow-x: hidden; 
						overflow-y: auto;
						background-color: #101721;
					}
				`}</style>
			</>
		);
	}
}

export default Index;
