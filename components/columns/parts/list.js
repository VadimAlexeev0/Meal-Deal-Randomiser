import Icon from "./icon";

class Showcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.data,
        }
    }

    changeShowcase = (data) => {
        this.props.callbackFromParent(data);
    }
    render() {
        return (
            <>

                <div className="list">
                    {this.props.data.map((data, index) => (
                        <div key={index} className="item" id={this.props.selected === data ? "selected" : "no"} onClick={() => this.changeShowcase(data)}>
                            <Icon id={data[1]} />
                            <h3>{data[0]}</h3>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    .list{
                        overflow-y: scroll;
                        height: 50vh;
                        background-color: #101721;

                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        align-content: flex-start;
                        padding: 20px;

                        font-family: Arial, Helvetica, sans-serif;
                    }
                    .item{
                        margin-bottom: 10px;
                        width: 30%;
                        height: 30%;

                        background-color: #2A2D32;
                        text-align: center;
                        color: #fff;

                        box-shadow: inset -18px -18px 20px #30343A, inset 18px 18px 20px #24262B;
                        border-radius: 20px;
                    }

                    #selected{
                        border: solid 1px green;
                    }
                `}</style>
            </>
        )
    }
}

export default Showcase