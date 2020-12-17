Esta é uma API REST criada em Typescript voltada para a necessidade de gerenciamento de um inventário de uma cozinha

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

# schemes:
# - Verbos http
paths:
  /alimentos:
    post:
      tags:
      - alimentos
      summary: Adicionar um novo alimento ao banco de dados
      operationId: addFood
      consumes:
      - application/json
      - application/xml
      produces:
      - application/json
      - application/xml
      parameters:
      - in: body
        name: body
        description: Um objeto json de alimentos que deve entrar na despensa
        required: true
        schema:
          $ref: '#/definitions/Alimentos'
      responses:
        400:
          description: Invalid input
        200:
          description: Inserção do alimento feita com sucesso
  put:
      tags:
      - alimentos
      summary: Alterar um alimento existente
      operationId: updateFood
      consumes:
      - application/json
      - application/xml
      produces:
      - application/json
      - application/xml
      parameters:
      - in: body
        name: body
        description: Um objeto json de alimento que deve ter algum parametro alterado na despensa
        required: true
        schema:
          $ref: '#/definitions/Alimentos'
      responses:
        400:
          description: Invalid ID supplied
        200:
          description: Alteração feita com sucesso
  /alimentos/{id}:
    get:
      tags:
      - alimentos
      summary: Procurar o alimento por seu id
      description: retorna apenas um alimento
      operationId: getAlimentosById
      produces:
      - application/json
      - application/xml
      parameters:
      - name: idDoAlimento
        in: path
        description: Retorna o alimento a partir da busca por seu id
        required: true
        type: integer
        format: int64
      responses:
        200:
          description: Busca feita com sucesso
          schema:
            $ref: '#/definitions/Alimentos'
        400:
          description: Invalid ID supplied 
    delete:
      tags:
      - alimentos
      summary: Deleta um alimento
      operationId: deleteAlimento
      produces:
      - application/json
      - application/xml
      parameters:
      - name: api_key
        in: header
        required: false
        type: string
      - name: id
        in: path
        description: Id do alimento a ser deletado
        required: true
        type: integer
        format: int64
      responses:
      200:
          description: Item deletado com sucesso
        400:
          description: Invalid ID supplied
definitions:
  Alimentos:
      type: object
      properties:
        id:
          type: integer
          format: int64
        nome:
          type: string
          required: true
        quantidade:
          type: number
          required: true
          min: 1
        perecivel:
          type: boolean
          required: true
        vegano:
          type: boolean
          required: true
      xml:
        name: Alimentos
