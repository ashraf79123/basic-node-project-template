This is a base node js project template,which anyone can use as it has been prepared,by keeping some of the most important code principle and project management recomendation Feel free to change anything.


`src` -> inside the src folder all the actual source code regarding the project will reside this will not include any kind of test.(you might want to make separate test folder)

Lets take a look inside the `src` folder 

-`config` -> in this folder anything and everything regarding and configuration setup if library or module will be done. for example setting up `dotenv` so that we can use the environment variable anywhere in a cleaner fashion.this is done in the `server config.js` one more example can be to setup you logging library that can help you to prepared meaninful log so configuration for this ibray should also be done here.

-`routes` -> in the routes folder we register a routes and the corresponding middleware and controll
to it. 

`middleware` -> they are just going to intercept the incoming request where we can write our validation,authenticatior etc.

-`controller` -> they are kind of the last middleware as post them you call you business layer to excute the budiness logic. IN controller we just recive the incoming request and date and then pass it to the business layer, and once business layer return an ouput we structured the Api response in controller and send the output 

-`repositiry` -> this folder contain all the logic using which we intract the DB by wrriting queries all the raw queries will go here.

`services` -> contain the business logic and intract with repositories for data from database 

`utils` -> utils contain helper method error classes etc.

