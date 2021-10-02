# url-shortener

Endpoint: `` POST {{URL}}/api/url/shorten ``

## Sample Request Payload
``` 
{
    "longUrl": "https://github.com/triverla"
} 
```

## Sample Response
```
{
    "id": 1,
    "urlCode": "abtuwOk6j",
    "longUrl": "https://github.com/triverla",
    "shortUrl": "http://{{URL}}/abtuwOk6j",
    "createdAt": "2021-09-30T10:40:11.000Z",
    "updatedAt": "2021-09-30T10:40:11.000Z"
}
```

Endpoint: `` GET http://ex.com/abtuwOk6j ``

Redirects to `` https://github.com/triverla ``
