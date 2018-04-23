# Web Application Template

A Web Application template with Webpack and postCSS

## Usage

### 1. Clone repository

```
git clone https://github.com/miniven/Web-App-Template
```

### 2. Instal dependencies

```
npm install
```

or

```
yarn install
```

### 3. Run the App

```
npm run start
```

or

```
yarn start
```

App will be opened in browser at http://localhost:8080/

### 4. Build app for production


```
npm run build
```

or

```
yarn build
```

## Project Structure

    ├── app
    │   ├── base
    │   │   ├── layout
    │   │   └── index.pug
    │   ├── images
    │   ├── modules
    │   │   └── module-name
    │   │       ├── module-name.css
    │   │       ├── module-name.js (optional)
    │   │       └── module-name.pug (optional)
    │   ├── scripts
    │   │   └── helpers.js
    │   ├── styles
    │   │   ├── _base.css
    │   │   ├── _variables.css
    │   │   └── main.css
    │   ├── index.js
    │   └── index.pug
    └── dist
        ├── styles
        │   ├── main.css
        │   └── main.css.map
        ├── index.html
        ├── main.bundle.js
        └── main.bundle.js.map

## Work with images

You have to require every image you are going to use in your .pug file:

```pug
img(src=require('example.png') alt="Example")
```

If your image is less then 8KB Webpack will automatically generate Base64 inline image.

Otherwise webpack will optimize you image and put it in `dist/images/`.

## Environment Variables

In case you need conditional build you can use environment variables.

1. Create a script in package.json: `"build": "cross-env NAME='VALUE' webpack"`
2. Declare the variable in webpack.config.js via webpack.DefinePlugin: `'process.env': { NAME: JSON.stringify(process.env.VALUE) }`
3. Access it in your code this way: `process.env.VALUE`

This allows you to build same pages with different data depending on variables.

You also can declare variables in `.env` file.

## Authors

* **Veniamin Trepachko** - *Front-End-Developer*