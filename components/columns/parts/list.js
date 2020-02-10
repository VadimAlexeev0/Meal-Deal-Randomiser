class Showcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.data,
            selected: ""
        }
    }

    changeShowcase = (data) => {
        this.setState({
            selected: data[0],
        })
        this.props.callbackFromParent(data);
    }
    render() {
        return (
            <>

                <div className="list">
                    {this.props.data.map((data, index) => (
                        <div key={index} className="item" id={this.state.selected === data[0] ? "selected" : "no"} onClick={() => this.changeShowcase(data)}>
                            <pre>Icon: {data[1]}</pre>
                            <h3>{data[0]}</h3>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    .list{
                        overflow-y: scroll;
                        height: 50vh;
                        background-color: grey;

                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        align-content: flex-start;
                        padding: 20px;
                    }
                    .item{
                        margin-bottom: 10px;
                        width: 20%;
                        height: 30%;
                        border 2px solid blue; 

                        text-align: center;
                    }

                    #selected{
                        background-color: green!important;
                    }
                `}</style>
            </>
        )
    }
}

export default Showcase