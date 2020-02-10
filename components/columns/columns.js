import Column from "./column"

class Columns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main: this.props.data[0],
            side: this.props.data[1],
            drink: this.props.data[2],
        }
        //console.log(this.state)
    }
    render() {
        return (
            <>
                <div className="container">
                    <Column name="Main" data={this.state.main} />
                    <Column name="Side" data={this.state.side} />
                    <Column name="Drink" data={this.state.drink} />
                </div>
                <style jsx>{`
                    .container{
                        height: 100vh;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        align-items: flex-start;
                    }
                `}</style>
            </>
        )
    }
}
export default Columns;