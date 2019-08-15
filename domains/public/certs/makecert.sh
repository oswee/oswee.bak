#!/bin/bash
# call this script with an email address (valid or not).
# like:
# ./makecert.sh dzintars.klavins@gmail.com
# Before calling it, make it executable
# sudo chmod +x ./build/makecert.sh

mkdir certs
rm certs/*
echo "make server cert"
openssl req -new -nodes -x509 -out certs/server.pem -keyout certs/server.key -days 3650 -subj "/C=LV/ST=Riga/L=Earth/O=Oswee/OU=IT/CN=www.oswee.com/emailAddress=$1"
echo "make client cert"
openssl req -new -nodes -x509 -out certs/client.pem -keyout certs/client.key -days 3650 -subj "/C=LV/ST=Riga/L=Earth/O=Oswee/OU=IT/CN=www.oswee.com/emailAddress=$1"