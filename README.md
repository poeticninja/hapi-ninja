Hapi Ninja
==========

Boilerplate Hapi Web and API Server Example

## The Goal:
Create a base boilerplate example showing how easy it is to get started with Hapi as a web server.

## The Stack:
**Node.js** - Because it's fast, easy to get started, and Javscript is awesome.
[http://nodejs.org/](http://nodejs.org/)

**Hapi** - A very well designed server framework that is easy to understand, easy to create your own plugins, scales very well, cache options built in, and more.
[http://spumko.github.io/](http://spumko.github.io/)

**Swig** - It looks like HTML, it's very fast, great for template inheritance, and allows you to use HTML syntax with the server and with front-end client Javascript includes.
[http://paularmstrong.github.io/swig/](http://paularmstrong.github.io/swig/docs/#browser)

**CSS Framework** - None. Choose your own CSS preprocessor and CSS framework.

### Requirements:
Install Node.js by using the big install button on the [http://nodejs.org/](http://nodejs.org/) homepage.

After Node.js is installed clone this repo. Go into the cloned directory and run:
```
$ npm install
```

Start the server by running the command:
```
$ node server
```

To see any changes you can manually just shutdown and restart the node server. This can be a pain so I use Supervisor to watch for file changes and restart the server [https://github.com/isaacs/node-supervisor](https://github.com/isaacs/node-supervisor).

To install run:
```
$ npm install -g supervisor
```

To use it run:
```
$ supervisor -e html,js  server
```
Now all of your server html and js files are being watched and on change the node server gets restarted automatically.

### Named Routes
One thing that I have done is added names to the routes. This allows you to have access to the path in the templates just by using the path.nameofroute variable. [https://github.com/poeticninja/hapi-named-routes](https://github.com/poeticninja/hapi-named-routes)

### Folder Structure
There are two main folders in the stack. The "**public**" folder for front-end (client side) code, and "**server**" folder for server side code.

By having the front-end folder and server side folder be specific, it provides for better consistency when changing projects. This way when you change from a full front-end app (Phonegap), to a front-end and server side app you get to keep the same folder structure. Allowing for better consistency with your stack, projects, and tools.

This project is just getting started and will be moving very fast in a short amount of time.

## Contributers

[Saul Maddox](https://github.com/poeticninja),
You?


## Credits
Credit goes to all of the source code, tutorials, and blogs that people have made available.

#### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
