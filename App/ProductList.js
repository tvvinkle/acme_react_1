import React,{Component} from 'react';
import ProductListItem from './ProductListItem';


const ProductList = ({products, onDelete, onSelect}) => (

	<ul className='list-group'>
		{products.map(product => <ProductListItem key={product.id} onDelete={onDelete} onSelect={onSelect} product={product} className='list-group-item'>{product.name}</ProductListItem>)}
	</ul>
);

export default ProductList;
 