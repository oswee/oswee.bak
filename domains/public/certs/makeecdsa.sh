#!/bin/bash
# call this script with an email address (valid or not).
# like:
# ./build/makeecdsa.sh dzintars.klavins@gmail.com
# Before calling it, make it executable
# sudo chmod +x ./build/makeecdsa.sh

# openssl req -new -x509 -nodes -newkey ec:<(openssl ecparam -name secp384r1) -keyout certs/server.ecdsa.key -out certs/server.ecdsa.crt -days 3650 -sha256 -extfile v3.ext -subj "/C=LV/ST=Riga/L=Earth/O=Oswee/OU=IT/CN=localhost/emailAddress=$1"
# ln -sf certs/server.ecdsa.key certs/server.key
# ln -sf certs/server.ecdsa.crt certs/server.crt

openssl req -x509 -nodes -days 3650 -newkey rsa:4096 -keyout certs/cert.key -out certs/cert.crt -config certs/req.cnf -sha256