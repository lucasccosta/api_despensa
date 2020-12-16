import alimentosRoute from './routes/alimentos.route'

const swaggerDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Api da Despensa',
      description: "Uma api em que podemos fazer a gestão de uma despensa",
      contact: {
        name: "Spot Metrics"
      },
      servers: ['http://localhost:9000']
    }
  },
  apis: ['./routes/alimentos.controller']
}

const swaggerDocs = swaggerDoc(swaggerOptions);
alimentosRoute.use['/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)]