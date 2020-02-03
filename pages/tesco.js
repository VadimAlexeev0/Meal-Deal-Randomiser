import Layout from "../components/layout";
import Randomiser from "../components/randomiser";

const mealDealData = require("../tescoData.json");

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
                <h1>Tesco Meal Deal Randomiser</h1>

                <Randomiser data={this.state.data} />
            </Layout>
        );
    }
}

export default Index;
