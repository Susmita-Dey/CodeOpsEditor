FROM node:lts-alpine

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./code-editor/package.json package.json
COPY ./code-editor/package-lock.json package-lock.json

USER node

RUN npm install --production

COPY --chown=node:node ./code-editor/.next .next
COPY --chown=node:node ./code-editor/public public

EXPOSE 3000

CMD npm start