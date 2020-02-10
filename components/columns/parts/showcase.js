class Showcase extends React.Component {

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
                </div>
                <style jsx>{`
                    .showcase{
                        height: 36.8vh;
                        background-color: #fff;

                        text-align: center;
                    }
                `}</style>
            </>
        )
    }
}

export default Showcase