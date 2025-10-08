# Imagem base
FROM node:20-alpine

# Cria diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json para o WORKDIR
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o WORKDIR
COPY . .

# A porta que o container irá expor
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]