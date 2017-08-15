import gql from 'graphql-tag';

export const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
    currentUser {
      login
      avatar_url
    }
  }
`;