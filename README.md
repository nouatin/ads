# How to see what i did ?
You need NodeJs allready installed. I'm using :
Node version : v12.18.3
npm version : 6.14.9

Unzip the folder and once in package.json directory, type 
    npm install

Wait for all package to be installed

In the same directory type 
    npm run build:dev

Webpack will open the page. If this does not work, please
go to your favorite browser and type localhost:8080

All your requirment is done.
I added what i saw on a site : Vehicule coverage. Not more

Thank you !
Alexandre SAH.







## Provided

A json file, containing very little data, and a png of the visual we want this component to use.
The visual is inspired by one of our sites (http://www.idatastart.com/products/product/HCX000A/vehicles)

## Requirements

What we are looking for is a single page "app" that displays years and vehicle models in a grid format.
We want a grid with the contents of "years" as the header, and "vehicle-models" as the first column.
On page load, we want the corresponding box to be blue (as in mockup) if the entry for that vehicle model and year exists in the "coverage" segment of the json. And grey if it doesn't exist.
We also want that if we click on a vehicle-model/year box, it is toggled (removes the entry from the javascript "coverage" object if it previously existed or adds it if it did not...) and the visual displays the new state.

Example:

Entry Before: 
"coverage":{"RLX":[2012,2011,2010]}

After clicking on the 2013 column next to RLX: 
"coverage":{"RLX":[2013,2012,2011,2010]}

The visual should now show a blue box for the year 2013 next to RLX.

And then clicking on the 2010 column next to RLX: 
"coverage":{"RLX":[2013,2012,2011]}

The visual should now show a grey box for the year 2010 next to RLX.

## Evaluation

This will be evaluated on the compliance to the supplied visual, and the cleanliness of the code and how readable it is. No specific framework is requested. You will have the opportunity to justify your decisions in person. You may bring it with you to the second interview.