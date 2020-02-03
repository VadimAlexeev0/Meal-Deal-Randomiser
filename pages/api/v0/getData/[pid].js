export default (req, res) => {

    if (req.method === "GET") {
        res.statusCode = 200
        const { query: { pid } } = req

        //Send Data
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(require("../../../../tescoData.json")))
    } else {
        res.statusCode = 404
        res.end()
    }
}
