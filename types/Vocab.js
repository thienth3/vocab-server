export default /* GraphQL */ `
  type Vocab {
    _id: ID
    content: String
    comment: String
    sentence: String
    paragraph: String
    image: String
    position: String
    url: String
    references: [Reference]
  }
  
  type Feed {
    _id: ID
    content: String
    comment: String
    sentence: String
    paragraph: String
    image: String
    position: String
    url: String
    count: Int
  }

  type Reference {
    content: String
    sentence: String
    paragraph: String
    position: String
  }
  
  type GImage {
    url: String
    width: String
    height: String
  }
  
  input ReferenceInput {
    content: String
    sentence: String
    paragraph: String
    position: String
  }

  extend type Query {
    getAllVocab: [Vocab]
    getFeed(keySearch: String, filter: Int, page: Int, size: Int): [Feed]
    getOneVocab(content: String!): Vocab
    searchImage(content: String!): [GImage]
  }

  extend type Mutation {
    addVocab(content: String!
      comment: String
      sentence: String!
      paragraph: String!
      image: String
      position: String!
      url: String!): Vocab!
    updateVocab(content: String!
      comment: String
      image: String): Vocab!
    addReferenceByPage(references: [ReferenceInput!], url: String!): Boolean
    removeVocab(content: String!): Boolean
    setTopVocab(content: String!): Boolean
  }
`;
