# Polls

Polls is a simple web application that allows users to create polls and vote in them. It is build using microservice architecture, which means it is comprised of five different microservices that work together to provide the full functionality of the application. Each microservice is designed to handle a specific set of tasks and they communicate with each other through APIs.  

## Deployment options

You can deploy the application with docker-compose or you can alternatively deploy application into your Kubernetes cluster.

### Docker-compose deployment

To deploy application with docker-compose you first have to create docker network for application containers. 

```bash
$ docker network create mynetwork
```

When the network is created you can build and deploy your application with docker-compose.

```bash
$ docker compose up --build -d
```

With this command you will build your containers and deploy your application in detached mode (containers will run in the background).

If you at any point in time wish to stop your application you can do so by running the following command.

```bash
$ docker compose stop
```

### Kubernetes deployment

Alternatively you can also run this application in Kubernetes. The deployment files can be found in the infra folder.

#### Minikube

One of the options for running this application in Kubernetes is [minikube](https://minikube.sigs.k8s.io/docs/start/). Along side minikube, [nginx-ingress controller](https://kubernetes.github.io/ingress-nginx/deploy/) add-on is also required to successfuly deploy this application. 

Start the minikube.

```bash
$ minikube start
```

Install nginx-ingress controller addon.

```bash
$ minikube addons enable ingress
```

After successful intstallation of nginx-ingress controller you can build and deploy the application.

```bash
$ skaffold run 
```

The following command will build and deploy application in your minikube cluster and the application will be available at the hostpath specified in the ./infra/ingress.yaml file. Specified FQDN has to be mapped to minikube ip address to be accessible from browser. 

Additionaly you can set up nginx-reverse proxy as a docker image on your local machine to expose your application to the external traffic.

Configure your ip in nginx.conf file.

```conf
server_name http://<ipAddress>;
```

Build docker file and run it in detached mode on port 80 and in minikube network.

```bash
$ docker build -t nginx-reverse-proxy-minikube .
```

```bash
$ docker run -d -p 80:80 --network minikube 
```

