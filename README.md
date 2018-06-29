# Baha Abuse Frontend

This is a project that crawled [BaHa(巴哈姆特)](https://www.gamer.com.tw/) forum's articles for administrators.  
To run this backend, the MongoDB is required to store articles.  
Detail [Backend](http://github.com/jackey8616/BahaAbuse) is at there.  

## Requirement
```
Nginx
```

## Docker
> Before you build, remember 
### Build Image
```sh
docker build -t baha-abuse-backend:latest .
```

### Run Image
```sh
docker run -ti -d -p <phisic port>:80 --restart always baha-abuse-backend:latest
```
