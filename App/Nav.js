import React, {Component} from 'react';

const Nav = ({users}) => (

	<ul className='list-group'>
		{users.map(user => <li key={user.id} className='list-group-item'>{user.name}</li>)}
	</ul>
);


export default Nav;
