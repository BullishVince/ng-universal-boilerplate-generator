# ng-universal Boilerplate Generator  
*This is a script used for generating the usual boilerplate needed in order to get started with an ng-universal website.*
  
The script will do the following things;
* Generate a new angular application using ng-new  
* Install **@nguniversal/express-engine**
* Clean up unnecessary generated stuff  
* Setup folder-structure  
* Add a shared http-service and a test-api service  
* Add some basic routing (can be removed when script is finished)  
And more features will be added along the way 😉  
  
---
## How to use this script  
The script accept the following options;  
* --version  Show version number                                      [boolean]
* -n, --name     Name of your website                        [string] [required]  
* -o, --output   Output directory                            [string] [required]  
* -h, --help     Show help                                            [boolean]  
  
Example of running this script  
```bash
npm run gen -- -n vincent
```