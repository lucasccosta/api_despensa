import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import alimentosRoute from './routes/alimentos.route'


export class App {
  private express: express.Application
  private porta = 9000


  constructor() {
    this.express = express()
    this.middlewares();
    this.database();
    this.routes()
    this.listen();
  }

  public getApp(): express.Application{
    return this.express
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  // como a function listen não retorna nada, seu tipo é void
  private listen(): void {
    this.express.listen(this.porta, () => {
      console.log(`Server is running at localhost://${this.porta}`)
    })
  }

  private database(): void {
    mongoose.connect('mongodb+srv://admin_cozinha:cozinha123@cluster0.8al7w.mongodb.net/apicozinha?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).catch(err => console.log('Mongoose error', err))
  }
  
  private routes(): void {
    this.express.use('/alimentos', alimentosRoute)
  }

}