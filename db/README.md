# Postgres DB

### Building
```
docker build -t flave/flave-db .
```

### Running
```
docker run -d -t --name flave-db -p 5432:5432 flave/flave-db
```

### Entering container
```
docker exec -it flave-db bash -c "psql -h localhost -p 5432 -d flave -U flave --password;"
```

### Killing
```
docker stop flave-db && docker rm flave-db
```