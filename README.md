## Everything you need for this app to start is only Docker/Docker Compose installed on your pc.So after you make sure you have it run:

`- docker-compose up --build;`

**If you are using MacOS, then first go to Docker desktop app to can configure shared paths _Preferences -> Resources -> File Sharing_, and add your current folder here (this option is added if you want to build migrations as the depend on 'volumes')**

## After you have started the app you can use 

` - docker-compose exec app ts-node node_modules/typeorm/cli.js migration:run -d ormconfig.js`

**To run the migrations, current migration will create a 'user' table.**

## If you want to create your own migrations using TypeORM then use
` - docker-compose exec app ts-node node_modules/typeorm/cli.js migration:create src/migrations/MigrationName
`