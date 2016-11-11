This POC is designed to test a shared cookie created by embeded content

In this example, one stylepoints user session id is shared across muliple domains.

Usage:
You must first add the following lines to your hosts file (`sudo vim /private/etc/hosts`)
```
127.0.0.1       local.stylepoints.com
127.0.0.1       local.publisher1.com
127.0.0.1       local.publisher2.com
```

then run with `docker-comose up`

This will spawn 3 separate node servers one each to simulate stylepoints.com and two "publisher" sites.  
A proxy container is also created and attached to port `80`. This is used for local testing to route domain names to the correct port on the docker host. So for example, `local.publisher.com` will redirect to the node server at `localhost:3001` and `local.publisher2.com` will redirect to `localhost:3002` 
