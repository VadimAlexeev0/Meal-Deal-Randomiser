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
                            {/*<img src={`/images/${data.id}.jpeg`} className="image" alt={data.id} />*/}
                            <h3>{data.name}</h3>
                            
                            <div className="details">
                                <h4>Price: £{data.price}</h4>

                                <h4>Calories: {data.calories}</h4>
                            </div>
                            

                        </div>
                    ))}
                </div>
                <style jsx>{`
                    h4{
                        font-weight: lighter;
                    }

                    .image{
                        height: 70%!important;
                        width: auto!important;
                    }

                    .details > *{
                        display: inline;
                    }
                    
                    .details {
                        margin-bottom: 2px;
                    }

                    h4:nth-child(1){
                        margin-right: 5px;
                    }

                    .list{
                        overflow-y: scroll;
                        height: 54vh;
                        bottom: 0px;
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
                        height: 25%;
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
                        /*border: solid 1px green;*/
                        box-shadow: 0px 0px 5px 3px rgba(25,150,56,1);
                    }

                    @media only screen and (max-width: 441px){
                        .item{
                            width: 100%;
                            height: 50%;
                        }
                        .list{
                            height: 40vh;
                        }
                    }
                `}</style>
            </>
        )
    }
}

export default Showcase