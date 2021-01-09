FROM node:12-alpine AS STAGE_TEST

WORKDIR /work_dir/

ADD package*.json /work_dir/

RUN npm ci

ADD . /work_dir/

RUN npm run lint
RUN npm test

ENV NODE_ENV production

RUN npm run build
RUN npm run build:server

FROM node:12-alpine AS STAGE_BUILD

WORKDIR /work_dir/

ENV NODE_ENV production

ADD package*.json /work_dir/

RUN npm ci --production &&  npm cache clean -f

COPY --from=STAGE_TEST /work_dir/dist /work_dir/dist
COPY --from=STAGE_TEST /work_dir/build /work_dir/build

EXPOSE 3000

CMD [ "node", "build/server.js" ]
