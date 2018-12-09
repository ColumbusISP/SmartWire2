# SmartWire App

## Installation
$ git clone https://github.com/ColumbusISP/SmartWire2.git
$ cd SmartWire2
# Install the project's dependencies
$ npm install
# Watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
## Prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ ng build --prod
## AWS EB client installation 
# init
$ eb init 
1. 14) us-east-2 : US East (Ohio)
2. [Create new application]
3. (default is "SmartWire2"): 
4. Do you wish to continue with CodeCommit? (y/N) (default is n): n
5. Do you want to set up SSH for your instances? n

# create environment within SmartWire2
$ eb create SW-env-1

# In AWS-ElsaticBeanStalk-> Application -> Environment
1. Configuration -> Modify load balancer -> Add new port (433, HTTPS, 80, HTTP, add cert)
2. Configuration -> Rolling updates and deployments -> Rolling updates: disabled
3. Configuration -> Modify software -> Node Command -> node bin/www
