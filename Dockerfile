# ベースイメージの指定
FROM node:18.16.0-bullseye
# 作業ディレクトリの指定

USER root
# ADD . /ins_env
# WORKDIR /ins_env

# 環境変数 proxy設定
ENV http_proxy=http://proxy.otsuka-shokai.co.jp:8080
ENV https_proxy=http://proxy.otsuka-shokai.co.jp:8080
ENV TZ=Asia/Tokyo

# # npm ver. 9.6.7
# RUN npm install -g npm@9.6.7

# npm proxy 設定
RUN npm -g config set proxy ${http_proxy}\
    && npm -g config set https-proxy ${https_proxy}

# yarn proxy 設定
RUN yarn config set proxy ${http_proxy} -g\
    && yarn config set https-proxy ${https_proxy} -g

# tar@6
RUN npm install -g tar@latest


# react.js
# RUN npm install --save prop-types
RUN npm install -g create-react-app
# RUN npx create-react-app react-todo --template typescript

WORKDIR /projects/reacto-todo
# ### material UI
# RUN npm install -g @mui/material @emotion/react @emotion/styled
# RUN yarn add -g @mui/material @emotion/react @emotion/styled

# コンテナログイン時のディレクトリ指定
WORKDIR /projects/
