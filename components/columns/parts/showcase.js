import RandomButton from "./randomButton"
import Icon from "./icon"

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
                    <Icon id={this.props.selected[1]} />
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
                    <RandomButton selected={this.props.selected} callbackFromParent={this.remove} randomiseParent={this.randomise} />
                </div>
                <style jsx>{`
                    .showcase{
                        height: 36.7vh;
                        background-color: #101721;
                        color: #fff;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-content: center;

                        font-family: Arial, Helvetica, sans-serif;
                    }
                `}</style>
            </>
        )
    }
}

export default Showcase