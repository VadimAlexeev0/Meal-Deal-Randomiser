function Icon(props) {
    switch (props.id) {
        case 1:
            return (
                <>
                    <pre>Sandwich Icon</pre>
                </>
            )
            break;
        case 2:
            return (
                <>
                    <pre>Pasta Icon</pre>
                </>
            )
            break;
        case 3:
            return (
                <>
                    <pre>Wrap Icon</pre>
                </>
            )
            break;
        case 4:
            return (
                <>
                    <pre>Sub Icon</pre>
                </>
            )
            break;
        case 5:
            return (
                <>
                    <pre>Sushi Icon</pre>
                </>
            )
            break;
        case 6:
            return (
                <>
                    <pre>Crisp Icon</pre>
                </>
            )
            break;
        case 7:
            return (
                <>
                    <pre>Fruits Icon</pre>
                </>
            )
            break;
        case 8:
            return (
                <>
                    <pre>Savoury Icon</pre>
                </>
            )
            break;
        case 9:
            return (
                <>
                    <pre>Sweets Icon</pre>
                </>
            )
            break;
        case 11:
            return (
                <>
                    <pre>Bottle of Fizzy Drink Icon</pre>
                </>
            )
            break;
        case 12:
            return (
                <>
                    <pre>Juice Icon</pre>
                </>
            )
            break;
        case 13:
            return (
                <>
                    <pre>Water Icon</pre>
                </>
            )
            break;
        case 14:
            return (
                <>
                    <pre>Energy Drink Icon</pre>
                </>
            )
            break;

        default:
            return (
                <pre>Icon: {props.id}</pre>
            )
            break;
    }
}

export default Icon