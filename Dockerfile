FROM arm64v8/node:18.15-alpine as build-stage

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM arm64v8/nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/kronus-integration-tool-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]