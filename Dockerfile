FROM node:14

WORKDIR /code

COPY yarn.lock /code/yarn.lock
COPY package.json /code/package.json
COPY tsconfig.json /code/tsconfig.json
COPY gatsby-node.ts /code/gatsby-node.ts
COPY gatsby-config.js /code/gatsby-config.js
COPY gatsby-config.ts /code/gatsby-config.ts

COPY src /code/src

RUN yarn install

CMD ["yarn", "build"]