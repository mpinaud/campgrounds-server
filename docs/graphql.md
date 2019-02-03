# GraphQL
Description: Server side Data model, schema definitions and custom CRUD API examples.

### Schema
campground:
```
type Campground {
  name: String!
  image: String
}

type User {
  firtName: String!
  lastName: String!
}
```

### Type Definitions
querys:
```
type Query {
  campground: [Campground]!
  campgrounds: [Campground]!
}
```

mutations:
```
type Mutation {
  createCampground(name: String!, image: String!): Campground
  deleteCampground(id: ID!): Campground
}
```

### Playground Queries and Mutations
mutations:
```
mutation CreateCampground($name: String!, $image: String!) {
  createCampground(name: $name, image: $image){
    name
    image
  }
}

mutation DeleteCampground($id: ID!) {
  deleteCampground(id: $id) {
    name
  }
}
```