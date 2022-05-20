---
title: Install Apache 2.4 on EC2 instance
author: sedna99
date: 2022-05-17
category: AWS
layout: post
---

Environments and Used Application:

ubuntu 22.04 LTS Image on AWS EC2 instance

1. ssh connection with ec2 instance

2. install apache with shell script
```sudo apt install -y apache2```

3. start apache server on ubuntu by script
```sudo systemctl start apache2```

4. check status by script
```sudo systemctl status apache2```

5. stop apache server by script
```sudo systemctl stop apache2```

6. add apache2 as linux service by script
```sudo systemctl enable apache2```

7. configure your apache home path by change /etc/apache2/site-available/000-default.conf file

ex) 
<VirtualHost *:80>
  ServerAdmin: admin-mail-adress@foo.bar
  DocumentRoot: /path/to/your/homepath
  .
  .
  .
</VirtualHost>

8. add permission to your home path

ex)
<Directory /path/to/your/directory>
  Options None
  AllowOverride None
  Require all granted
</Directory>

*available options for Section(VirtualHost, Directory, e.t.c) can check on [this site][ApacheOfficial]


9. and just open your webpage by input http://address.for.your.ec2Instance on your browser!

references:

  https://httpd.apache.org/docs/2.4/ko/sections.html


[ApacheOfficial]: https://httpd.apache.org/docs/2.4/ko/sections.html
