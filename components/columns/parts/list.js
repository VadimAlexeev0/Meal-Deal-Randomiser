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
                            <div className="details">
                                <h4>Price: £2.50</h4>

                                <h4>Calories: 700</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    .details > *{
                        display: inline;
                    }

                    h4:nth-child(1){
                        margin-right: 5px;
                    }

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

                        border-top: 1px solid #848589;
                    }
                    .item{
                        margin-bottom: 10px;
                        width: 45%;
                        height: 40%;
                        margin: 10px;
                        background-color: #2A2D32;
                        text-align: center;
                        color: #fff;
                        
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;

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