import Layout from "../components/layout";
import Randomiser from "../components/randomiser";

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
                <h1>Tesco Meal Deal Randomiser</h1>

                <Randomiser data={this.state.data} />
            </Layout>
        );
    }
}

export default Index;
