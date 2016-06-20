# sails-hook-request-info

Request info hook for [Sails JS](http://sailsjs.org)

### Installation

run `npm install sails-hook-request-info` in your sails appliaction

### Log format

| Field | Format | Extract from the example above
|:------------- |:---------------:| -------------:|
| 1 | Request user-agent | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) | 
| 2 | Request referer | referer:http://localhost:8002/ |
| 3 | Request x-forwarded-for | ::1 | 
| 4 | Request method | GET | 
| 5 | Request url | /api/v1/userAutoshow/getUserCount | 
| 6 | Http version | HTTP/1.1 | 
| 7 | Response status code | 200 | 
| 8 | Response size | response size : 621B | 
| 9 | Response time | time 321ms | 

### Example

after installation complete, you will see request info in your terminal

like this :

#### Response status code is 2xx 

```info: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" "referer:http://localhost:8002/" "::1 GET /api/v1/userAutoshow/getUserCount HTTP/1.1 200" response size : 621B need time 321ms```

#### Response status code is 4xx or 5xx

```error: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" "referer:" "::1 GET /sdfdsf HTTP/1.1 404" response size : 6.68kB need time 71ms.```

#### Request is caching in client's browser (response size is -1)

```info: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" "referer:http://localhost:8002/" "::1 GET /api/v1/userAutoshow/getUserCount HTTP/1.1 304" response size : -1 need time 368ms.```

