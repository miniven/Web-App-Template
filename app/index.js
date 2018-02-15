import './styles/main.css';

const b = {
	a: 1,
	b: 2
};

const c = {
	...b,
	c: 3
};

Object.keys(c).forEach(key => console.log(key, c[key]));