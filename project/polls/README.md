# Polls microservice

Microservice for handling poll querries.

## REST API

### GET requests
<details>
 <summary><code>GET</code> <code><b>/api/polls/poll/</b></code> <code>(gets all polls in db)</code></summary>

#### Parameters
-----------------------------------
> None

#### Responses
-----------------------------------
<table>
<tr>
<td> http code </td> <td> content-type </td> <td> response </td>
</tr>
<tr>
<td>200</td> <td>application/json</td> 

<td>

```json
[{
    "_id":"string",
    "title":"string", 
    "author":"string",
    "multipleAnswers":boolean,
    "addAnswers":boolean, 
    "answers": [{
                "answerId":"string", 
                "answer":"string", 
                "count":"number",
                "pollId":"string"
                }]
}]
```

</td>
</tr>

</table>

</details>

-----------------------------------

<details>
 <summary><code>GET</code> <code><b>/api/polls/poll/{id}</b></code> <code>(get poll)</code></summary>

#### Parameters
-----------------------------------
> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   |  poll id        |

#### Responses
-----------------------------------
<table>
<tr>
<td> http code </td> <td> content-type </td> <td> response </td>
</tr>
<tr>
<td>200</td> <td>application/json</td> 

<td>

```json
{
    "_id":"string",
    "title":"string", 
    "author":"string",
    "multipleAnswers":boolean,
    "addAnswers":boolean, 
    "answers": [{
                "answerId":"string", 
                "answer":"string", 
                "count":"number",
                "pollId":"string"
                }]
}
```

</td>
</tr>

</table>

</details>

-----------------------------------



