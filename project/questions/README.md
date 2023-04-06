# Answers microservice

Microservice for handling answers and voting.

## REST API
### POST Requests
<details>
    <summary>
        <code>POST</code> <code><b>/api/questions/question/</b></code> <code>(creates new question)</code>
    </summary>

#### Parameters
-----------------------------------
> None

#### Request body
-----------------------------------
```json
{
    "title": "string",
    "author": "string",
    "multipleAnswers": boolean,
    "addAnswers": boolean,
}
```

#### Responses
-----------------------------------

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`        | `{"title": "string", "author": "string","multipleAnswers": boolean, "addAnswers": boolean}`|


</details>

-----------------------------------



### GET requests
<details>
 <summary><code>GET</code> <code><b>/api/questions/question</b></code> <code>(gets all questions in db)</code></summary>

#### Parameters
-----------------------------------
> None

#### Responses
-----------------------------------
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        |  `[{"title": "string", "author": "string","multipleAnswers": boolean, "addAnswers": boolean}]`  |



</details>

-----------------------------------

<details>
 <summary><code>GET</code> <code><b>/api/questions/question/{id}</b></code> <code>(get question)</code></summary>

#### Parameters
-----------------------------------
> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | Question id        |

#### Responses
-----------------------------------
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"title": "string", "author": "string","multipleAnswers": boolean, "addAnswers": boolean}`|



</details>

-----------------------------------

### PUT requests

<details>
  <summary><code>PUT</code> <code><b>/api/questions/question/{id}</b></code> <code>(updates answer)</code></summary>

#### Parameters
-----------------------------------
> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | answer id        |

#### Request body
-----------------------------------
```json
{
    "title": "string",
    "addAsnwers": boolean,
    "multipleAnswers":boolean
}
```

#### Responses
-----------------------------------
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"title": "string", "author": "string","multipleAnswers": boolean, "addAnswers": boolean}`        |

</details>

-----------------------------------

### DELETE requests

<details>
  <summary><code>DELETE</code> <code><b>/api/questions/question/{id}</b></code> <code>(deletes answer)</code></summary>

##### Parameters
-----------------------------------
> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | answer id        |

##### Responses
-----------------------------------
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | ``                |
> | `500`         | `text/plain;charset=UTF-8`        | `Question not found`                |


</details>

-----------------------------------

