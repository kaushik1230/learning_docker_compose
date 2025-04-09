## Manual installion

-install nodejs locally
-clone the repo
-install dependencies(npm install)
-start the db locally

- docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Go to neon.tech and get yourself a new DB

-change the .env file and update your DB credentials
-npx prisma generate
-npm run build
-npm run start

## Docker installation

-install docker
-create a network - docker netwrok create user_project
-start postgress

- docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
  -build the image - `docker build --network=host  -t user-project .`
  -start the image - `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres --network user_project -p 3000:3000 user-project`

## Docker compose installation steps

-install docker , docker-compose
-run `docker-compose up`
