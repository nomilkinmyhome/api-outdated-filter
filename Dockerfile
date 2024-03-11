FROM node:18

RUN mkdir /home/app
COPY . /home/app

WORKDIR /home/app

RUN npm i && npm run build
CMD ["npm", "run", "start:prod"]