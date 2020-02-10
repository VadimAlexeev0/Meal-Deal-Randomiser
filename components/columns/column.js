import Showcase from "./parts/showcase"
import List from "./parts/list"
class Column extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "",
            previous: [""],
            data: this.props.data
        };
        this.randomise = this.randomise.bind(this);

    }

    changeSelected = (dataFromChild) => {
        //console.log(`Got Data from Child ${dataFromChild}`)
        this.setState({
            selected: dataFromChild,
            previous: [...this.state.previous, dataFromChild]
        });
        console.log(this.state);
    }
    removeSelected = () => {
        this.setState({
            selected: "",
            previous: [...this.state.previous, ""]
        });
        console.log(this.state);
    }
    undoSelected = () => {
        this.setState({
            selected: this.state.previous[this.state.previous.length],
            previous: this.state.previous.slice(0, -1)
        });
        console.log(this.state)
    }

    randomNumber(min, max) {
        max--;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomise() {
        let newElement = this.state.data[this.randomNumber(0, this.state.data.length)]
        this.setState({
            selected: newElement,
            previous: [...this.state.previous, newElement]
        });
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div className="column">
                    <div className="name">
                        <h1>{this.props.name}</h1>
                    </div>
                    <Showcase selected={this.state.selected} callbackFromParent={this.undoSelected} randomise={this.randomise} />
                    <List data={this.state.data} selected={this.state.selected} callbackFromParent={this.changeSelected} />
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