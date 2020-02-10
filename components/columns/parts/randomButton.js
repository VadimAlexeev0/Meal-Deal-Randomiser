class RandomButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    remove = () => {
        this.props.callbackFromParent();
    }

    render() {
        let undoButton;
        if (this.props.selected) {
            undoButton = (
                <>
                    <div className="undo" onClick={this.remove}>
                        Undo
                    </div>
                    <style jsx>{`
                        .undo{
                            width: 20%;
                            padding: 20px;
                            background-color: purple;
                        }
                    `}</style>
                </>
            )
        } else {
            //Do nothing if there is already
        }

        return (
            <>
                <div className="container">
                    {undoButton}
                    <div className="feelingLucky">
                        I'm Feeling Lucky
                    </div>
                </div>

                <style jsx>{`
                    .container{
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        align-content: space-between;
                        cursor: pointer;
                    }
                    .feelingLucky{
                        
                        background-color: grey;
                        padding: 20px;
                    }
                `}</style>
            </>
        )
    }
}

export default RandomButton