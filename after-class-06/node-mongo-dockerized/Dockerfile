FROM node:16-alpine

# creando directorio para nuestra api
RUN mkdir -p /usr/src/app

#directorio de trabajo y estoy ubicado
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json dentro del WORKDIR del contenedor
COPY package*.json ./

# Copia todos los archivos de nuestra API en el WORKDIR
COPY . .

RUN npm install

# configurando la variable de entorno NODE_ENV
ENV NODE_ENV=production

# exponemos el puerto del contenedor usando el puerto 6000
EXPOSE 6000

CMD ["npm", "run", "start:prod"]