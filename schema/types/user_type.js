const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString } = graphql;
const UserErrorsType = require('./errors/user_errors')

const UserType = new GraphQLObjectType({
	name: 'UserType',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		posts: {
			type: new GraphQLList(require('./post_type')),
			async resolve(parentValue) {
				const user = User.findById(parentValue.id).populate('posts');
				return user.posts;
			},
		},
		userErrors: {
			type: UserErrorsType,
		},
	}),
});


module.exports = UserType;
