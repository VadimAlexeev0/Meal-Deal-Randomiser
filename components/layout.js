function Layout(props) {
	return (
		<>
			<div>
				{props.children}
			</div>
			<style jsx global>{`
				body{
					margin: 0;
				}
			`}</style>
		</>
	);
}

export default Layout;
