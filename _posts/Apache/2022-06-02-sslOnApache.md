---
title: Setting SSL with Apache2.4 
author: sedna99
date: 2022-06-02
category: Apache
layout: post
---

Environments and Used Application
- Apache v2.4

1. change apache config  
- in my case change "/etc/apache2/site-available/000-default.conf" file  
`sudo vi /etc/apache2/site-available/000-default.conf`  
<pre>
<code>
<VirtualHost *:443>
  ServerName servername
  CustomLog "/path/to/common/log"
  ErrorLog "/path/to/error/log"

  SSLEngine on
  SSLProxyEngine on
  SSLProtocol all

  SSLCertificateKeyFile /path/to/ssl/key
  SSLCertificateFile /path/to/ssl/crt

  RequestHeader set X-Forwarded-Proto "https"
  RequestHeader set X-Forwarded-Port "443"
</VirtualHost>
</code>
</pre>

2. check config options  
`apache2ctl configtest`

3. handle errors  
- in my case "Apache: Invalid command 'SSLEngine', perhaps misspelled or defined by a module not included in the server configuration"  
+ `sudo a2enmod ssl`  
- "Invalid command 'RequestHeader', perhaps misspelled or defined by a module not included in the server configuration"  
+ `sudo a2enmod headers`

4. restart apache2  
`sudo systemctl restart apache2`

