import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs } from './schema.js'
import db  from './_db.js';



const resolvers = {
    Query:{
         games(){//resolvers fxn
             return db.games  
         },
         reviews(){
             return db.reviews
         },
         authors(){
             return db.author
         },
         review(_ , args ){ // _ parent
             return db.reviews.find((review)=> review.id === args.id)
         },
         game(_ , args ){ 
             return db.games.find((game)=> game.id === args.id)
         },
         author(_ , args ){ 
             return db.reviews.find((author)=> author.id === args.id)
         }
    },
    Game:{
        reviews(parent){
            return db.reviews.filter((r)=>r.game_id === parent.id)
        }
},
Mutation:{
    deleteGame(_ , args){
        db.games = db.games.filter((g)=> g.id !== args.id)
        return db.games
    },
    addGame(_ , args){
        let game = {
            ...args.game,
            id:Math.floor(Math.random() * 10000).toString()
        }
        db.games.push(game)

        return game
    } ,
    updateGame(_,args){
       db.games = db.games.map((g)=>{
           if(g.id === args.id){
               return {...g , ...args.edits}
           }
           return g
       })  
       return db.games.find((g)=> g.id ==args.id) 
    }
}

}


const server = new ApolloServer({
    //1 . typeDefs
    typeDefs,
    //2. resolvers
    resolvers
    
})



//server setup
const { url }= await startStandaloneServer(server , {
    listen:{port:3567}
})

console.log('Server ready at port ' , 3567);