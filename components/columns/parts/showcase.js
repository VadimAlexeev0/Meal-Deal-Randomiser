import RandomButton from "./randomButton"

class Showcase extends React.Component {

    remove = () => {
        this.props.callbackFromParent();
    }

    render() {
        let showCaseElement;

        // If there is no selected item say to select something from list
        if (this.props.selected) {
            showCaseElement = (
                <>
                    <pre>Icon: {this.props.selected[1]}</pre>
                    <h1>{this.props.selected[0]}</h1>
                </>
            )
        } else {
            showCaseElement = (
                <h1>Please Select An Element From Below</h1>
            )
        }

        return (
            <>

                <div className="showcase">
                    {showCaseElement}
                    <RandomButton selected={this.props.selected} callbackFromParent={this.remove} />
                </div>
                <style jsx>{`
                    .showcase{
                        height: 36.8vh;
                        background-color: #fff;

                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-content: center;
                    }
                `}</style>
            </>
        )
    }
}

export default Showcase