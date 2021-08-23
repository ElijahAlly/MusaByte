const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const PostErrorsType = new GraphQLObjectType({
	name: 'PostErrorsType',
	fields: () => ({
		title: { type: GraphQLString },
		body: { type: GraphQLString },
		author: { type: GraphQLString },
	}),
});

module.exports = PostErrorsType;
