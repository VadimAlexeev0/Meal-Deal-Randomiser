import Layout from "../components/layout";
import Randomiser from "../components/randomiser";
import Columns from "../components/columns/columns"


import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
	static async getInitialProps(ctx) {
		const res = await fetch('http://localhost:3000/api/v0/getdata/tesco')
		const json = await res.json()
		return { data: json }
	}


	constructor(props) {
		super(props);

		this.state = {
			data: this.props.data,
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
