FROM node:12-alpine AS STAGE_BUILD
RUN apk --no-cache add git

WORKDIR /work_dir/

ADD package*.json /work_dir/

RUN npm ci

ADD . /work_dir/

RUN npm run lint
RUN npm test

ENV NODE_ENV production

RUN npm run build
RUN npm run build:server
RUN npm run test:bundlesize

FROM node:12-alpine AS STAGE_SERVE

WORKDIR /work_dir/

ENV NODE_ENV production

ADD package*.json /work_dir/

RUN npm ci --production &&  npm cache clean -f

COPY --from=STAGE_BUILD /work_dir/dist /work_dir/dist
COPY --from=STAGE_BUILD /work_dir/build /work_dir/build

# Dynamic Env injection
COPY --from=STAGE_BUILD /work_dir/.env /work_dir/.env
COPY --from=STAGE_BUILD /work_dir/init.sh /work_dir/init.sh
RUN chmod +x /work_dir/init.sh

EXPOSE 3000
CMD [ "/bin/sh", "-c", "/work_dir/init.sh && node build/server.js" ]
