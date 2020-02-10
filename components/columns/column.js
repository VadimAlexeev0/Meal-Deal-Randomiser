import Showcase from "./parts/showcase"
import List from "./parts/list"
class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "",
            data: this.props.data
        };
    }

    myCallback = (dataFromChild) => {
        //console.log(`Got Data from Child ${dataFromChild}`)
        this.setState({ selected: dataFromChild });
    }

    render() {
        return (
            <>
                <div className="column">
                    <div className="name">
                        <h1>{this.props.name}</h1>
                    </div>
                    <Showcase selected={this.state.selected} />
                    <List data={this.state.data} callbackFromParent={this.myCallback} />
                </div>
                <style jsx>{`
                    .column{
                        width: 33.28%;
                        border-right: 1px solid;

                        display: flex;
                        flex-direction: column;
                    }
                    .name{
                        text-align: center;
                        background-color: grey; 
                        height: 9vh;
                        line-height: 9vh;
                    }
                    h1{
                        margin: 0;
                    }
                `}</style>
            </>
        )
    }
}
export default Column;