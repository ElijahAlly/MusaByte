const Validator = require('validator');
const isEmpty = Validator.isEmpty;
const validText = require('./valid_text');

module.exports = function validateCreatePost(data) {
	let errors = {};

	data.title = validText(data.title) ? data.title : '';
	data.body = validText(data.body) ? data.body : '';
	data.author = validText(data.author) ? data.author : '';

	if (isEmpty(data.title)) {
		errors.title = 'title field is required';
	}

	if (isEmpty(data.body)) {
		errors.body = 'body field is required';
	}

	if (isEmpty(data.author)) {
		errors.author = 'author field is required';
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0,
	};
};

