---
title: Next.js on Amazon Linux with nginx
author: sedna99
date: 2022-06-01
category: AWS
layout: post
---

Environments and Used Application:
Amazon Linux2 Image on AWS EC2 Innstance
Node.js v16.15 LTS
Next.js v12.1.6
Nginx v1.2.0 for SSL Certificate and reverse proxy

1. install node.js
```curl -sL https://rpm.nodesource.com/setup_14.x | bash -```
```sudo yum install nodejs```

2. install yarn
```npm install -g yarn```

3. install git
```sudo yum install git```

4. install nginx
```sudo amazon-linux-extras install -y nginx1```

5. start nginx
```sudo systemctl start nginx```

5. configure your nginx setting by change '/etc/nginx/nginx.conf' file
```vi /etc/nginx/nginx.conf```

reverse proxy example

server {
  listen       80;
  listen       [::]:80;
  server_name  foo.bar; //domain

  location / {
    root /path/to/index/directory;
    index indexFileName;

    proxy_pass http://localhost:3000; //web service url
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}

6. using reverse proxy and ssl connection

reverse proxy and ssl example

server {
  listen       80;
  listen       [::]:80;
  server_name  foo.bar; //domain

  location / {
    return 301 https://$host$request_uri;
  }
}
server {
  listen 443 ssl;
  listen [::]:443 ssl;
  server_name foo.bar; //domain

  ssl_certificate /path/to/certificate;
  ssl_certificate_key /path/to/key/file;
  ssl_prefer_server_ciphers on;
  ssl_session_timeout 5m;

  location / {
    root /path/to/index/directory;
    index indexFileName;

    proxy_pass http://localhost:3000; //web service url
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
