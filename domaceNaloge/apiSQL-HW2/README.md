# Homework 2

TASK: Implement REST API for your project.

## REST API
### POST Requests
<details>
    <summary>
        <code>POST</code> <code><b>/poll</b></code> <code>(creates new poll)</code>
    </summary>

#### Parameters
-----------------------------------

> No parameters

#### Request body
-----------------------------------
```json
{
    "question": "string",
    "author": "string",
    "multipleAnswers": "boolean",
    "addAnswer": "boolean"
}
```

#### Responses
-----------------------------------

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Poll is created`                                |


</details>

-----------------------------------

<details>
    <summary>
        <code>POST</code> <code><b>/answer</b></code> <code>(creates new answer)</code>
    </summary>

#### Parameters
-----------------------------------
> No parameters

#### Request body
-----------------------------------
```json
{
    "answer": "string",
    "count": "integer",
    "pollId": "integer"
}
```

#### Responses
-----------------------------------

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Answer is created`                                |


</details>

-----------------------------------


### GET requests
<details>
 <summary><code>GET</code> <code><b>/polls</b></code> <code>(gets all polls)</code></summary>

#### Parameters

> None

#### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | JSON string                                                         |



</details>

-----------------------------------

<details>
 <summary><code>GET</code> <code><b>/pollsAnswers/{id}</b></code> <code>(gets poll with answers)</code></summary>

#### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | int ($int64)   | None        |

#### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | JSON string                                                         |



</details>

-----------------------------------

<details>
 <summary><code>GET</code> <code><b>/polls/{id}</b></code> <code>(gets all polls)</code></summary>

#### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | int ($int64)   | None        |

#### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | JSON string                                                         |



</details>

-----------------------------------

<details>
 <summary><code>GET</code> <code><b>/answers</b></code> <code>(gets all answers)</code></summary>

#### Parameters

> None

#### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | JSON string                                                         |



</details>

-----------------------------------

<details>
 <summary><code>GET</code> <code><b>/answer/{id}</b></code> <code>(gets answer)</code></summary>

#### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | int ($int64)   | None        |

#### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | JSON string                                                         |



</details>

-----------------------------------

### PUT requests

<details>
  <summary><code>PUT</code> <code><b>/polls/{id}</b></code> <code>(updates question)</code></summary>

#### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | int ($int64)   | None        |

#### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Poll is updated`        |

</details>

### DELETE requests

<details>
  <summary><code>DELETE</code> <code><b>/polls/{id}</b></code> <code>(deletes poll)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | int ($int64)   | None        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Poll deleted`                |


</details>


## Database

### Installing dependencies

Install dependencies with npm

`$ npm install sqlite3 sequelize`

### Creating database

Create database with running database.js.

### Defining models

Define models in models.js. Model example:

```js
class Poll extends Model {}

Poll.init({
    question: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    multipleAnswers: {
        type: DataTypes.BOOLEAN
    },
    addAnswer: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize,
    modelName: 'poll'
});
```
## API Server

