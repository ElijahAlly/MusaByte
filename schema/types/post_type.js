const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const mongoose = require('mongoose');

const UserType = require('./user_type');
const User = mongoose.model('User');
const PostErrorsType = require('./errors/post_errors');

const PostType = new GraphQLObjectType({
	name: 'PostType',
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		body: { type: GraphQLString },
		date: { type: GraphQLString },
		author: {
			type: UserType,
			async resolve(parentValue) {
				try {
					const user = await User.findById(parentValue.author);
					return user;
				} catch (err) {
					return null;
				}
			},
		},
		postErrors: {
			type: PostErrorsType,
		},
	}),
});

module.exports = PostType;
