# Stage 1: Build the production React app
FROM node:18-alpine AS build

WORKDIR /mahey_tanuj_ui_garden

COPY package*.json ./
RUN npm install

COPY . .
ENV DISABLE_ESLINT_PLUGIN=true
ENV TSC_COMPILE_ON_ERROR=true
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:alpine

WORKDIR /mahey_tanuj_ui_garden

# Copy production build files to Nginx web root
COPY --from=build /mahey_tanuj_ui_garden/build /usr/share/nginx/html

# Expose default port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]