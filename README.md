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
    │   │   └── layout.pug
    │   ├── images
    │   ├── scripts
    │   │   ├── helpers.js
    │   │   └── images.js
    │   ├── styles
    │   │   ├── _modules
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

You have to import every image you are going to use in your app in `images.js`:

If your image is less then 8KB:

```
import icon from '../images/icon.png';
setImageSrc('.image', icon);
```

Webpack will automatically generate Base64 inline image.

Otherwise webpack will optimize you image and put it in `dist/images/`:

```
import '../images/background.jpg';
```

## Authors

* **Veniamin Trepachko** - *Front-End-Developer*