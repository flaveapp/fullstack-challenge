# Express API

### Building
```
docker build -t flave/flave-api .
```

### Running
```
docker run -d -t --name flave-api -p 3000:3000 flave/flave-api
```

### Entering container
```
docker exec -it flave-api bash
```

### Killing
```
docker stop flave-api && docker rm flave-api
```