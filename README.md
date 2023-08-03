# Создаю заготовку для webpack настройки css. js . html 


## Команды для подключения 

```
npm init -y
npm i -D webpack webpack-cli 
npm i -D mini-css-extract-plugin html-webpack-plugin webpack-dev-server css-loader html-loader
npm i -D css-loader
```


## Скрипты для package.json

    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production",


## Прописать импорты в index.js 