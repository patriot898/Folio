docker login && docker stop folioapp && docker rmi kiefer898/folio:latest && docker run -d --rm -p 80:3000 --name folioapp kiefer898/folio:latest
