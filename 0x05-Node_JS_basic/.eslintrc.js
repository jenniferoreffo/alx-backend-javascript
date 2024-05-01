Curriculum
Short Specializations
Average: 116.92%
0x05. NodeJS Basics
Back-end
JavaScript
ES6
NodeJS
ExpressJS
 By: Johann Kerbrat, Engineering Manager at Uber Works
 Weight: 1
 Project will start Aug 21, 2023 6:00 AM, must end by Aug 23, 2023 6:00 AM
 Checker will be released at Aug 21, 2023 6:00 PM
 An auto review will be launched at the deadline


Resources
Read or watch:

Node JS getting started
Process API doc
Child process
Express getting started
Mocha documentation
Nodemon documentation
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

run javascript using NodeJS
use NodeJS modules
use specific Node JS module to read files
use process to access command line arguments and the environment
create a small HTTP server using Node JS
create a small HTTP server using Express JS
create advanced routes with Express JS
use ES6 with Node JS with Babel-node
use Nodemon to develop faster
Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Your code will be tested using Jest and the command npm run test
Your code will be verified against lint using ESLint
Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
All of your functions/classes must be exported by using this format: module.exports = myFunction;
Provided files
database.csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

