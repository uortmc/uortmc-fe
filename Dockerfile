FROM node
ADD fe-app fe-app
EXPOSE "3000:3000"
ENTRYPOINT exec npm start --prefix /fe-app

