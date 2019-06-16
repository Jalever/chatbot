# base image
FROM node:10.15.0

# set working directory
WORKDIR /root

# add `/root/node_modules/.bin` to $PATH
ENV PATH /root/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /root/package.json
COPY . /root/.


RUN npm install --silent

EXPOSE 5000

# start app
CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
