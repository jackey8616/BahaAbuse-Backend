# Baha Abuse Frontend

This is a project that crawled [BaHa(巴哈姆特)](https://www.gamer.com.tw/) forum's articles for administrators.  
To run this backend, the MongoDB is required to store articles.  
Detail [Backend](http://github.com/jackey8616/BahaAbuse) is at there.  

## Requirement
** For user: **  
> Any HTTP server can host static pages.  
> Such as Nginx / Apache / Express / even GithubPage  

** For developer and little modifier: **  
> Basic environement to host a vue-cli  
> Proper node and npm version.  

## Usage
> Running this frontend.  
> You need a HTTP server to host these pages such as Nginx / Apache or Express and so on.  

> **Be adviced that:**  
> This frontend page is design for single machine.  
> Which means the every API will request with 127.0.0.1.  
> If you want to sepearate Frontend and Backend.  
> Make sure properly manage every API interact address by you own.  

> **I may design a global varaible for further settup on this.**  
> **To make sure you won't missed any API address setup**  

## Docker
> If you modified any thing and want to build your own images.  
> Remember to build the vue in order to generate static pages.  
> And also be sure you COPY the dist folder into image build in Dockerfile.  
### Build Image
```sh
$ npm run build
$ docker build -t baha-abuse-backend:latest .
```

### Run Image
> This image is on DockerHub and maintain by me.  
> It use Nginx to host static pages.  
```sh
$ docker run -ti -p <phisic port>:80 --restart always -d clooooode/baha-abuse-backend
```
