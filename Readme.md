## créer un reseau

'''
 docker network create sa-network
'''

### créer la BBD 
'''
docker run --detach --network sa-network --name sa-database --env MARIADB_USER=sa-user --env MARIADB_PASSWORD=sa-password --env MARIADB_ROOT_PASSWORD=sa-root-password mariadb:11.3.2-jammy
'''

### créer l'interface avec la BBD
'''
docker run --network sa-network --name sa-database-ihm -d -p 8080:8080 adminer:4.8.1-standalone
'''
'''
localhost:8080
serveur:sa-network
utilisateur:root
mot de passe:sa-root-password
'''

## visualiser les containers qui sont lancer
'''
docker ps
'''
## start et stop les container
'''
docker container stop image id de mysql
docker container stop image id de adminer
docker container start image id de mysql
docker container start image id de adminer
'''
## construction de l'image
'''
docker build -t sa-backend:1.0.0 .
'''
## executer l'application
'''
docker run --network sa-network --name sa-backend -d -p 8081:8080 sa-backend:1.0.0
'''"# docker-formation" 
"# docker" 
