---
title: Install Ubuntu 22.04
author: sedna99
date: 2022-05-14
category: Linux
layout: post
---

Environments and Used Application: 
- windows on C Drive (500G SSD)  
- some Files on D Driver (1TB HDD)  
- Sandisk 16GB USB  
- Rufus v3.1.8  

1. Backup and remove files on D drive

2. Download Ubuntu 22.04 LTS on [Ubuntu official website's download page][UbuntuOfficial]

3. Install [rufus-3.1.8][rufusDownload]

4. Execute rufus and make booting disk using USB

5. Enter BIOS setting menu and change booting priority USB to top or booting by USB
(If target computer has fast starting option on windows then disable option on System setting)

6. On installing ubuntu, you'll face Intstallation type with three or more options like
  * Intstall Ubuntu alongside Widows Boot Manager
  * Erase disk and install Ubuntu
  * Something else
  you can choose other options but in this post we select **Something else**
  
7. Setting partitions with proper storage volume In my case, I was helped [by this page][settingPartition] to choose an appropriate storage volume.
(If you are planning to use Docker with Ubuntu then assign more volume on /var partition. In my case, 4GB wasn't enough and finally setting 100GB)

references:

  https://shanepark.tistory.com/230
  https://zetawiki.com/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8C%8C%ED%8B%B0%EC%85%98_%EC%9A%A9%EB%9F%89_%EB%B0%B0%EB%B6%84

[UbuntuOfficial]: https://ubuntu.com/download/desktop
[rufusDownload]: https://rufus.ie/ko/
[settingPartition]: https://zetawiki.com/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8C%8C%ED%8B%B0%EC%85%98_%EC%9A%A9%EB%9F%89_%EB%B0%B0%EB%B6%84
