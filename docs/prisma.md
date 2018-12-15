# Prisma
Description: Data model, schema definitions and GraphQL CRUD API examples.

### Schema
campground:
```
type Campground {
  id: ID! @unique
  name: String!
  image: String!
  user: User! @relation(name: "UserByCampground")
}

user:
type User {
  id: ID! @unique
  firstName: String!
  lastName: String!
  campgrounds: [Campground!]! @relation(name: "UserByCampground" onDelete: CASCADE)
}
```

### Playground Queries & Mutations
querys:
```
query queryCampgrounds {
  campgrounds {
    name
    id
    image
  }
}

query queryUsers {
  users {
    firstName
    lastName
    id
  }
}
```

mutations:
```
mutation createCampground {
  createCampground(data:{
    name: "Columbia River RV Park"
    image: "http://seabreezerv.com/system/images/slide2.jpg"
  }){
    name
    id
    image
  }
}

mutation updateCapmground {
  updateCampground(where:{
    id: "cjpktjqfrtlwq0a51ku8yfqki"
  }data: {
    name: "Columbia River Camp"
    image: "http://seabreezerv.com/system/images/slide2.jpg"
  }){
    id
    name
    image
  }
}

mutation deleteCampground {
  deleteCampground(where:{
    id: "cjpktjqfrtlwq0a51ku8yfqki"
  }){
    name
  }
}

mutation createUser {
  createUser(data:{
    firstName: "Mikey"
    lastName: "Pinaud"
  }){
    firstName
    lastName
    id
  }
}

mutation updateUser {
  updateUser(where:{
    id: "cjpj3cwlcbnjt0a150f8b6ay0"
  }data:{
    firstName: "Michael"
    lastName: "Pinaud"
  }){
    firstName
    lastName
  }
}

mutation deleteUser {
  deleteUser(where:{
    id: "cjpj3cwlcbnjt0a150f8b6ay0"
  }){
    firstName
  }
}
```