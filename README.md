# LibertyCon3

# Workstation setup
Install NODE & NPM
`npm install -g node`

Install Angular & Angular CLI
[Angular CLI](https://github.com/angular/angular-cli)

Install Cordova
`npm install -g cordova`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to build Android Project:

run: `cordova create <App Name> cnci.example.<appname> <App Name>`
run:  `ng build --prod --base-href . --output-path ../Cordova_Projects/libCon/www` from your ANGULAR project root directory
## CD into the cordova directory root folder
run: `cordova platform add android`
run: `cordova platform add browser`
run: `cordova platform add ios`
run: `npm install` (installs all dependent node modules based on package.json);
run: `cordova build <platform>` (currently only browser & android)
run: `cordova run browser` to test
open: AndroidManifest.xml and remove `android:debguggable="true"` from the following line:
    `<application android:debuggable="true"`
run: `cordova build --release android`
this generates an unsigned apk in: `platforms/android/ant-build`, navigate there

# Key Generation
## command syntax:
`keytool -genkey -v -keystore <keystoreName>.keystore -alias <Keystore AliasName> -keyalg <Key algorithm> -keysize <Key size> -validity <Key Validity in Days>`

run: `keytool -genkey -v -keystore cnci_libertycon.keystore -alias libertyCon -keyalg RSA -keysize 2048 -validity 10000`

# keystore password? : changeit
# What is your first and last name? :  Jonathan Smith
# What is the name of your organizational unit? :  App Development
# What is the name of your organization? :  CNCI
# What is the name of your City or Locality? :  Huntsville
# What is the name of your State or Province? :  AL
# What is the two-letter country code for this unit? :  US

This will generate the keystore. Place the generated keystore file(s) in the following directory:
`platforms\android\build\outputs\apk`
# jarsigner syntax:
`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <keystorename> <Unsigned APK file> <Keystore Alias name>`

run: `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore cnci_libertycon.keystore app-release-unsigned.apk libertycon`
zipAlign the apk (required by Android):
run: `C:\Users\iamth\AppData\Local\Android\Sdk\build-tools\29.0.0-rc2\zipalign -v 4 app-release-unsigned.apk libcon.apk`

this will generate libcon.apk 

upload: upload the licon.apk to google developer inital test lane