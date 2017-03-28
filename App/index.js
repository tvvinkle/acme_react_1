import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import axios from 'axios';

const root = document.getElementById('root');

class App extends Component {
	
	constructor(){
		super();		
		this.state = {
			users: [],
			products: []
		}	
	this.onDelete = this.onDelete.bind(this);
	this.onSelect = this.onSelect.bind(this);
	}

	onDelete(product){
		//console.log(product);
		const products = this.state.products.filter((_product)=> _product.id != product.id);
		this.setState({products});
		axios.delete(`/api/products/${product.id}`)
			.then(()=> console.log('deleted'))
	}

	onSelect(product){
		console.log(product.name);
	}

	handleSubmit(e){
		event.preventDefault();
	}

	componentDidMount(){
		//console.log('mounted');
		axios.get('/api/users')
			.then( res => res.data )
			.then( users => this.setState({users}))

		axios.get('/api/products')
			.then(res => res.data)
			.then( products => this.setState({products}))	
	}

	render(){
		return(
			<div className='container'>
				<h1>ACME REACT 1</h1>
				
				users: {this.state.users.length}
				products: {this.state.products.length}

				<ul className='list-group'> </ul>
				
				<Nav users={this.state.users} />

				<ProductForm handleSubmit={this.handleSubmit} products={this.state.products}/>			
				<ProductList products={this.state.products} onDelete={this.onDelete} onSelect={this.onSelect}/>

			</div>
			)
	}
}


ReactDOM.render(<App />, root)