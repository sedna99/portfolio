sudo apt install -y apache2

sudo systemctl start apache2 //시작
sudo systemctl stop apache2 //중지
sudo systemctl status apache2 //상태
sudo systemctl enable apache2 //서비스등록



vi /etc/apache2/site-available/000-default.conf

<Directory /path/to/directory> -> directory 권한 설정
  Options None
  AllowOverride None
  Require all granted
</Directory>

<VirtualHost *:80>
  ServerAdmin -> error page 시 관리자 이메일 
  DocumentRoot /path/to/directory -> document home path 설정
  .
  .
  .
 </VirtualHost>
