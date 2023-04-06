# Answers microservice

Microservice for handling answers and voting.

## REST API
### POST Requests
<details>
    <summary>
        <code>POST</code> <code><b>/api/answers/answer/{pollId}</b></code> <code>(creates new answer for poll)</code>
    </summary>

#### Parameters
-----------------------------------

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | string   | poll id        |

#### Request body
-----------------------------------
```json
{
    "answer": "string"
}
```

#### Responses
-----------------------------------

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`        | `{"answer":"string", "count":"number","pollId":"string"}`                                |


</details>

-----------------------------------

<details>
    <summary>
        <code>POST</code> <code><b>/api/answers/vote/{id}</b></code> <code>(increases vote count for answer)</code>
    </summary>

#### Parameters
-----------------------------------

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | string   | Answer id        |

#### Request body
-----------------------------------

> None


#### Responses
-----------------------------------

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`       | `{"answer":"string","count":"number","pollId":"string"}`                                |
> | `500`         | `text/plain;charset=UTF-8`        | `Answer not found`                                |


</details>

-----------------------------------


### GET requests
<details>
 <summary><code>GET</code> <code><b>/api/answers/answer</b></code> <code>(gets all answers in db)</code></summary>

#### Parameters
-----------------------------------
> None

#### Responses
-----------------------------------
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        |  `[{"answer":"string","count":"number","pollId":"string"}]`  |



</details>

-----------------------------------

<details>
 <summary><code>GET</code> <code><b>/api/answers/answer/{id}</b></code> <code>(get answer)</code></summary>

#### Parameters
-----------------------------------
> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `pollId` |  required | string   | Answer id        |

#### Responses
-----------------------------------
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"answer":"string","count":"number","pollId":"string"}`|



</details>

-----------------------------------

### PUT requests

<details>
  <summary><code>PUT</code> <code><b>/api/answers/answer/{id}</b></code> <code>(updates answer)</code></summary>

#### Parameters
-----------------------------------
> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | answer id        |

#### Request body
-----------------------------------
```json
{
    "answer": "string"
}
```

#### Responses
-----------------------------------
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"answer":"string","count":"number","pollId":"string"}`        |

</details>

-----------------------------------

### DELETE requests

<details>
  <summary><code>DELETE</code> <code><b>/api/answers/answer/{id}</b></code> <code>(deletes answer)</code></summary>

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
> | `500`         | `text/plain;charset=UTF-8`        | `Answer not found`                |


</details>

-----------------------------------



