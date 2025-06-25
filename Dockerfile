FROM node:24-alpine AS dev
RUN npm i -g npm@latest
USER node
WORKDIR /home/node/app
CMD ["npm", "run", "dev"]

FROM dev AS prod-builder
COPY --chown=node:node package.json package-lock.json ./
RUN npm i
COPY --chown=node:node . ./
RUN npm run build

FROM nginx:1.29-alpine AS prod
RUN rm -rf /usr/share/nginx/html/*
COPY --from=prod-builder --chown=root:root /home/node/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]