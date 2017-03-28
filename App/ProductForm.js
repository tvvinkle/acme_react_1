import React,{Component} from 'react';


class ProductForm extends Component{

	constructor(props){
		super(props);
		this.state = {
			product:''
		}

		this.addProduct = this.addProduct.bind(this);
	}

	addProduct(){
		this.props.addNewProduct(this.state.product);
	}

	render(){
		return(

			<div>
				<form>
			  	<label>
			    Produdct name: 
			    <input type="text" name="name" values={this.state.product}/>
			  	</label>
			  	<input type="submit" value="Post" onClick={this.addProduct}/>
				</form>
			</div>

		)
	}

}

export default ProductForm;
