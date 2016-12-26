import React from 'react';
import { Container } from 'semantic-ui-react';
import Wiki from './Wiki';
import Footer from './Footer';
import './App.css';

const App = ({ children, params }) => (
	<div>
		<Container text={params && !!params.id}>
			{children}
		</Container>
		<Wiki />
		<Footer />
	</div>
);

export default App;