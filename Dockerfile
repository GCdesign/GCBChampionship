FROM mongo
RUN apt-get update; \
 
apt-get install -y  python-software-properties; \
 
apt-get install -y apt-file; \
 
apt-file update; \
 
apt-get install -y  software-properties-common; \
 
apt-get install -y vim
 
