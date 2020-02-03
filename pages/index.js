import Layout from "../components/layout";

function Index() {
	return (
		<Layout>
			<h1>Meal Deal Randomiser</h1>

			<div className="container">
				<a href="/tesco">
					<div className="box">
						<h1>Tesco Meal Deal</h1>
					</div>
				</a>

				<a href="/add">
					<div className="box">
						<h1>Add Data</h1>
					</div>
				</a>
			</div>

			<style jsx>{`
				.container{
					display: flex,
				}
				.box{
				}
			`}</style>
		</Layout>
	)
}

export default Index;
