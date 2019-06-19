NodeMicro
===

- Apis
- Config
- Service Discovery and Config manager
- Resources


APIs
---
Fill this in 
all routes beginning /api/
go to file ./api/index.js


Config
---

Go to the config tab and set it with what ever info

```json

```

Service Discovery and Config manager
===

## API
```js
const Meta = require('@mutable/meta')
```

  All methods are asynchronous, and take a node-style error-first callback as last argument.
  If no callback is supplied, a promise is returned instead.


Service Discovery
---


### Meta.services() -> Array<String>

  Returns all the currently known service names.

### Meta.service(service: String) -> Service

  Returns a particular service.



Example:
```js

  Meta.service("email")
    .then((service) => {
      request.post(`http://${service}/api/demo/email`,
        {json:req.body},
        (error, response, body) => {
          if(error){
            console.error('can not reach email service')
            return res.send(500,{error:error,result:'can not reach email service'})
          } 
          res.send({result:"email sent"})
        })
    })

```

or 


```js

  Meta.service("email", (config) => {

    // returns a object 
    // {"hostname":"127.0.0.1", "port":3001, toString(): "127.0.0.1:3001" }
    // in a string it prints concat host and port

    request.post(`http://${service}/api/v1/demo/email`,
    {json:req.body},
    (error, response, body) => {
      if(error){
        console.error('can not reach email service')
        return res.send(500,{error:error,result:'can not reach email service'})
      } 

      res.send({result:"email sent"})
    })
  })

```

### Service

  * `hostname`: String // the hostname or IP address of the service
  * `port`: Integer // the port of the service
  * `toString() { return this.hostname + ':' + this.port }`

Config
---


### Meta.config() -> JSON

  Fetches the JSON configuration for the current service.

Example:
```js

  Meta.config()
    .then((_config) => {
      // returns an object {}
    })

```

Resources
---
- [Service Discovery and Config](https://github.com/mutable)
- [Mutable.io Docs](https://github.com/mutable/docs)




