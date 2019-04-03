SpaceX Launch Stats 
React, GraphQL, Apollo app that uses the SpaceX API to display launches

This code follow the Tutorial from Traversy Media on youtube:
GraphQL With React & Apollo [1] - Express GraphQL Server
#Video: https://youtu.be/SEMTj8w04Z8


# Install dependencies (server & client)
npm install
cd client && npm install

# Run server & client (:3000 & :5000)
npm run dev

# Server only (:5000)
npm run server

# Client only (:3000)
npm run client

# Build for production (Builds into server ./public)
cd client && npm run build

# Graphiql - http://localhost:5000/graphql


# *************************************************************
# To test when server is running:
# Go  to http://localhost:5000/graphql and do something like: 
{
  launches{
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket{
      rocket_id,
      rocket_name,
      rocket_type
    }
  }
}

# example to launch:

{
  launch(flight_number:2){
    mission_name,
    launch_year,
    launch_success,
    rocket{
      rocket_name
    }
  }
}
# ************************************************************* */