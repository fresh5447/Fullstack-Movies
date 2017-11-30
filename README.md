1) Make sure mongo DB is runnining
`sudo mongod`

2) Install Client packages
`npm run install:client`

3) Install Server packages
`npm run install:server`

__Tip__
You can run both the previous steps in one command:
`npm run install:client && npm run install:server`

4) Start Client
`npm run run start:client`

5) Start Server
`npm run start:server`

Browser is loaded at `localhost:3000` and server api is located at `localhost:3001`