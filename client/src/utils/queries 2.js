import {gql} from '@apollo/client'

//this will find the user/comments/any query based on typedef using graphQL syntax

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      comments {
        _id
        commentText
        createdAt
    }
      }
    }
    `;


    export const QUERY_ME = gql`
      query me {
        me {
          _id
          username
          email
          comments {
            _id
            CommentText
            commentAuthor
            createdAt
          }
        }
      }
    `;

