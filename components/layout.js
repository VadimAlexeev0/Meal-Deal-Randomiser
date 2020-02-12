function Layout(props) {
	return (
		<>
			<div>
				{props.children}
			</div>
			<style jsx global>{`
				body, html{
					margin: 0;
					overflow-x: hidden; 
					overflow-y: auto;
					background-color: #101721;
				}
			`}</style>
		</>
	);
}

export default Layout;
