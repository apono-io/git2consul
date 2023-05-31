FROM --platform=$BUILDPLATFORM alpine:3.18.0

WORKDIR /app

RUN apk --update add nodejs npm git openssh ca-certificates && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /etc/git2consul.d

COPY package.json .
RUN npm install

COPY . /app

ENTRYPOINT [ "/usr/bin/node", "/app/index.js" ]
