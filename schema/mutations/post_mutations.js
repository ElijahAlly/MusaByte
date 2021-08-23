const graphql = require('graphql');
const { GraphQLString, GraphQLNonNull, GraphQLID } = graphql;

const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const PostType = require('../types/post_type');

const validateCreatePost = require('../../validation/create_post');

const PostMutations = {
	createPost: {
		type: PostType,
		args: {
			title: { type: new GraphQLNonNull(GraphQLString) },
			body: { type: new GraphQLNonNull(GraphQLString) },
			author: { type: new GraphQLNonNull(GraphQLID) },
		},
		async resolve(parentValue, args) {
			const { errors, isValid } = validateCreatePost(args);
			if (!isValid) return { postErrors: errors };
			const { title, body, author } = args;

			const newPost = new Post({
				title,
				body,
				author,
			});

			try {
				await newPost.save();
				return newPost;
			} catch (err) {
				return { postErrors: err };
			}
		},
	},
};

module.exports = PostMutations;
