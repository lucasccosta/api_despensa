// Arquivo destinado a tentativa de uso do swagger

const express = require('express');
const app = express();
const swaggerDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const port = 9001

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Api da Despensa',
      description: "Uma api em que podemos fazer a gestão de uma despensa",
      contact: {
        name: "Spot Metrics"
      },
      servers: ['http://localhost:9001']
    }
  },

  apis: ["./src/routes/alimentos.routes.js", "src/controllers/alimentos.controller.js"]
}

const swaggerDocs = swaggerDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Routes
/**
 * @swagger
 * /alimentos:
 *  get:
 *    description: Usada para buscar alimentos pelo id
 *      responses:
 *        '200':
 *          description: StatusCode que indica sucesso na requisição
 */


app.listen(port, () => {
  console.log(`Server is running at localhost://${port}/`)
})