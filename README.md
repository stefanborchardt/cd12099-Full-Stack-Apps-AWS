# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```

>_tip_: If you want to run
```bash
npm run dev
```
locally, you have to update node.js and install nodemon:
```bash
npm install n -g
n lts
npm install nodemon
```

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:

`npm run dev` 

Also consider Tip above. If port is already in use, edit the .env file

***
## Important Files and Project Structure

The source code for this demo resides in the ./src directory, especially imageRoutes.js. I was not convinced that the code in util.js actually removes the tmp-files so I made some adjustments.

#### Test URL
http://localhost:8087/

## Curl commands

#### See error message
```
curl localhost:8087/filteredimage?image_url=
```

#### Filter image
```
curl localhost:8087/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg --output test.jpg

 curl http://proj-bstlk-img-proc.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg --output test.jpg
```


## License

[License](LICENSE.txt)
