# Real Life Financial Math
#### _From Financial Mentors of America_

This project is the management website for the Real Life Financial Math course.

Introduction of the important files:

- ".bowerrc" file is hidden, and is used for config Twitter [Bower](bower.io)
- "bower.json" is the JSON file of Twitter [Bower](bower.io).
- "Gruntfile.js" is the configure file of Grunt(gruntjs.com). It is used to configure or define tasks and load Grunt plugins.
- "package.json" is the JSON file of Grunt. This file is used by npm to store metadata for projects published as npm modules. 
You will list grunt and the Grunt plugins your project needs as [devDependencies](https://npmjs.org/doc/json.html#devDependencies) in this file.

## Dependencies Management with Bower
Bower is a front-end package manager for the web by Twitter. 
We use Bower to manage all the front end dependencies, make things clean, tidy and simple.
Inside the bower.json file of Bower, you'll see the list dependencies (package name and version):
If you want to know more about the packages, you can [click here](bower.io/search). 
Search the package and click the link to know more.

<pre> 
  "dependencies": {
    "jquery": "~2.1.0",
    "angular": "~1.3.0",
    "angular-resource": "~1.3.0",
    "angular-cookies": "~1.3.0",
    "angular-sanitize": "~1.3.0",
    "angular-route": "~1.3.0",
    "angular-animate": "~1.3.0",
    "angular-aria": "~1.3.0",
    "angular-bootstrap": "~0.13.0",
    "font-awesome": "~4.3.0",
    "toastr": "~2.1.0",
    "underscore": "~1.7.0",
    "seiyria-bootstrap-slider": "~4.8.1",
    "bootstrap": "~3.3.0",
    "bootstrap-file-input": "~1.0.0",
    "holderjs": "~2.3.1",
    "jquery.easy-pie-chart": "~2.1.6",
    "morris.js": "~0.5.1",
    "jquery.slimscroll": "~1.3.1",
    "jquery.easing": "~1.3.0",
    "gauge.js": "~1.2.1",
    "flot": "~0.8.3",
    "jquery-spinner": "~0.1.5",
    "jquery-steps": "~1.1.0",
    "angular-wizard": "~0.4.0",
    "weather-icons": "~1.3.2",
    "textAngular": "1.3.11",
    "flot.tooltip": "~0.8.0",
    "angular-loading-bar": "~0.7.1",
    "angular-scroll": "~0.7.0"
  }
</pre>

## Automation with Grunt
Grunt is a JavaScript task runner (Automation), save yourself from repetitive tasks.

- "Gruntfile.js"
is the configure file of Grunt. It is used to configure or define tasks and load Grunt plugins.
- "package.json"
is the JSON file of Grunt. This file is used by npm to store metadata for projects published as npm modules. 
You will list grunt and the Grunt plugins your project needs as devDependencies in this file.
Inside package.json file, you'll see all the Grunt plugins that help to automate the tasks.

And all the plugins are configured in Gruntfile.js file.

If you want to know more about the plugins, you can click here.
<pre>
 "devDependencies": {
    "connect-livereload": "~0.5.3",
    "grunt": "^0.4.5",
    "grunt-autoprefixer": "~3.0.0",
    "grunt-concurrent": "~1.0.0",
    "grunt-contrib-clean": "~0.6.0",
    "grunt-contrib-compass": "~1.0.0",
    "grunt-contrib-concat": "~0.5.0",
    "grunt-contrib-connect": "~0.10.1",
    "grunt-contrib-copy": "~0.8.0",
    "grunt-contrib-cssmin": "~0.12.0",
    "grunt-contrib-htmlmin": "~0.4.0",
    "grunt-contrib-jade": "~0.14.0",
    "grunt-contrib-jshint": "~0.11.0",
    "grunt-contrib-less": "~1.0.0",
    "grunt-contrib-uglify": "~0.9.0",
    "grunt-contrib-watch": "~0.6.1",
    "grunt-injector": "^0.6.0",
    "grunt-open": "~0.2.3",
    "grunt-usemin": "~3.0.0",
    "jshint-stylish": "^1.0.0",
    "load-grunt-tasks": "~3.1.0",
    "time-grunt": "~1.2.0"
 }
 </pre>

## How to Run it locally?
In order to do development with it, first you'll need have the following tools installed:

* Node.js (NPM comes along with it), just download and install it, that's it, don't be afraid.
* Yeoman , Bower, Grunt-cli for modern workflow.
* Ruby (if you are using a Mac, then you already have it) , Sass , Compass for Sass CSS.

And you'll need to know how some basis about them, click the links to learn more if you not familiar with these yet. If it's your first time using these tools, it's probably too complex or even overwhelming to you. You'd better find someone to help you.

If you already know how to use them, then just do a few things to start developing:

1.  Enter "fma_rlfm_01" folder with your command line tool.

2.  Install all the NPM packages (for development) with NPM:
    <pre>
    $ npm install
    </pre>
3.  Install all the front end packages with Twitter Bower:
    <pre>
    $ bower install
    </pre>
4.  Then type grunt serve and you are ready to go.
    <pre>
    $ grunt serve
    </pre>
    By the way, if you want to build the distribution (production) version, simply run
    <pre>
    $ grunt serve:dist
    </pre>
