FROM node
ADD ./ fe-app
EXPOSE 3000
ENTRYPOINT exec npm start --prefix /fe-app

