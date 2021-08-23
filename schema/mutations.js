const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const UserMutations = require('./mutations/user_mutations');
const { createUser, deleteUser, updateUser, login } = UserMutations;

const PostMutations = require('./mutations/post_mutations');
const { createPost } = PostMutations;

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		// users
		createUser,
		deleteUser,
		updateUser,
		login,

		// posts
		createPost,
	},
});

module.exports = mutation;
