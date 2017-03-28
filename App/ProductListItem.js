import React from 'react';


const ProductListItem = (({product, onDelete, onSelect})=>

<li className='list-group-item'>
<a onClick={()=>onSelect(product)}>

{product.name}
</a>
{' '}
<button className='btn btn-warning' onClick={()=>onDelete(product)}> Delete </button>
</li>

);

export default ProductListItem;