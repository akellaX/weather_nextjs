FROM node:20.4.0 as test-stage

WORKDIR /app

RUN apt-get update -y

RUN apt-get -y install xvfb
RUN apt-get -y install libnss3
RUN apt-get -y install libgtk2.0-0
RUN apt-get -y install libgtk-3-0
RUN apt-get -y install libgbm-dev
RUN apt-get -y install libnotify-dev
RUN apt-get -y install libgconf-2-4
RUN apt-get -y install libxss1
RUN apt-get -y install libasound2
RUN apt-get -y install libxtst6
RUN apt-get -y install xauth
RUN apt-get -y install xvfb

RUN rm -rf /var/lib/apt/lists/* /var/cache/apt/*

COPY . .

RUN npm install
CMD ["npm", "run", "test:screenshot"]
