const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields:{
        email:{type: GraphQLString},
        id:{type: GraphQLString}
    }
})
module.exports = UserType; 