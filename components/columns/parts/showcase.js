import RandomButton from "./randomButton"

class Showcase extends React.Component {

    remove = () => {
        this.props.callbackFromParent();
    }
    randomise = () => {
        this.props.randomise();
    }

    render() {
        let showCaseElement;

        // If there is no selected item say to select something from list
        if (this.props.selected) {
            showCaseElement = (
                <>
                    <h1>{this.props.selected.name}</h1>
                    <img src={`/images/${this.props.selected.id}.jpeg`} className="image" alt={this.props.selected.id} />
                    <style jsx>{`
                        h1{
                            margin-top: 0;
                            margin-bottom: 5px;
                        }
                        .image{
                            height: 85%;
                        }
                    `}</style>
                </>
            )
        } else {
            showCaseElement = (
                <h1>Please Select An Item From Below</h1>
            )
        }

        return (
            <>

                <div className="showcase">
                    <div className="top">
                        {showCaseElement}
                    </div>
                    <div className="bottom">
                        <RandomButton selected={this.props.selected} callbackFromParent={this.remove} randomiseParent={this.randomise} />
                    </div>
                </div>
                <style jsx>{`
                    .showcase{
                        height: 36vh;
                        background-color: #101721;
                        color: #fff;
                        text-align: center;

                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-content: center;

                        font-family: Arial, Helvetica, sans-serif;
                    }
                    .top{
                        height: 75%;
                    }
                `}</style>
            </>
        )
    }
}

export default Showcase