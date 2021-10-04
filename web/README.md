# React website

### Building
```
docker build -t flave/flave-web .
```

### Running
```
docker run -d -t --name flave-web -p 8080:8080 flave/flave-web
```

### Entering container
```
docker exec -it flave-web bash
```

### Killing
```
docker stop flave-web && docker rm flave-web
```