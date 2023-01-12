FROM ubuntu:latest


RUN apt-get update
RUN apt-get install -y wget xz-utils unzip nginx vim

# install nodejs
WORKDIR /root/
RUN wget https://cdn.npm.taobao.org/dist/node/v14.17.6/node-v14.17.6-linux-x64.tar.xz
RUN xz -d node-v14.17.6-linux-x64.tar.xz
RUN tar xvf node-v14.17.6-linux-x64.tar
RUN ln -s /root/node-v14.17.6-linux-x64/bin/npm /usr/local/bin/
RUN ln -s /root/node-v14.17.6-linux-x64/bin/node /usr/local/bin/

# set npm permission
RUN npm config set user 0
RUN npm config set unsafe-perm true

# install npm packages
RUN npm install babel-plugin-component -D
RUN npm install babel-plugin-import babel-preset-env babel-plugin-component babel-preset-es2015 webpack-bundle-analyzer compression-webpack-plugin@5.0.0 uglifyjs-webpack-plugin --save-dev

RUN apt-get install nginx
# install python3.8.1
WORKDIR /root/

RUN apt-get install zlib1g-dev libbz2-dev libssl-dev libncurses5-dev libsqlite3-dev wget tar -y
RUN wget https://www.python.org/ftp/python/3.8.1/Python-3.8.1.tar.xz
RUN tar -xvJf Python-3.8.1.tar.xz
RUN apt-get install gcc make -y
WORKDIR /root/Python-3.8.1
RUN ./configure prefix=/usr/local/python3
RUN make && make install
RUN ln -s /usr/local/python3/bin/python3\.8 /usr/bin/python

# install pip3 
RUN apt-get install python3-pip -y
RUN rm /usr/bin/pip
RUN ln -s /usr/bin/pip3 /usr/bin/pip
RUN pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple/

# install py lib
RUN pip install flask pyyaml numpy flask_apscheduler -i https://pypi.tuna.tsinghua.edu.cn/simple/
RUN pip install jionlp -i https://pypi.tuna.tsinghua.edu.cn/simple/

RUN rm /usr/bin/python
RUN ln -s /usr/bin/python3\.8 /usr/bin/python

WORKDIR /root/jionlp_online/

EXPOSE 16666
EXPOSE 17777
EXPOSE 18888
EXPOSE 19999

