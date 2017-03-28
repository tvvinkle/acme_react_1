const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
	name: conn.Sequelize.STRING
});

const Product = conn.define('product', {
	name: conn.Sequelize.STRING
})

const sync = () => conn.sync({force:true});

const seed = () => {
	var user = ['Alice', 'Ben', 'Chuck'];
	var product = ['Apple', 'Pear', 'Watermelon'];

	return sync()
		.then(()=>Promise.all(user.map(name => User.create({name}))))
		.then(()=>Promise.all(product.map(name => Product.create({name}))))
		;
};

module.exports = {
	sync,
	seed,
	models: {
		User,
		Product
	}
} 