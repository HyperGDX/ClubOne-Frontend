FROM node:16.20.2
COPY ./ /app
WORKDIR /app
RUN npm cache clean --force
RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
