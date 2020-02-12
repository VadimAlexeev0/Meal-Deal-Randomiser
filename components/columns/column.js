import Showcase from "./parts/showcase"
import List from "./parts/list"
class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "",
            data: this.props.data
        };
        this.randomise = this.randomise.bind(this);

    }

    changeSelected = (dataFromChild) => {
        //console.log(`Got Data from Child ${dataFromChild}`)
        this.setState({ selected: dataFromChild });
    }
    removeSelected = () => {
        this.setState({ selected: "" });
    }

    randomNumber(min, max) {
        max--;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomise() {
        this.setState({
            selected: this.state.data[this.randomNumber(0, this.state.data.length)],
        });
        //console.log(this.state)
    }

    render() {
        return (
            <>
                <div className="column">
                    <div className="name">
                        <h1>{this.props.name}</h1>
                    </div>
                    <Showcase selected={this.state.selected} callbackFromParent={this.removeSelected} randomise={this.randomise} />
                    <List data={this.state.data} selected={this.state.selected} callbackFromParent={this.changeSelected} />
                </div>
                <style jsx>{`
                    .column{
                        width: 33.28%;
                        border-right: 1px solid ;

                        display: flex;
                        flex-direction: column;
                    }
                    .name{
                        text-align: center;
                        background-color: #2e26d9;
                        color: #fff;
                        font-family: Arial, Helvetica, sans-serif;
                        height: 9vh;
                        line-height: 9vh;
                        border-bottom: 1px solid #848589;
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