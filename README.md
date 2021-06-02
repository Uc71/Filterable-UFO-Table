# Filterable UFO Table

My aim in this project was to let Ufologists easily study UFO sighting data for the period 1/1/2010 through 1/13/2010.

INSTRUCTIONS:
To open this project, clone or download this repo. 
Then, click on "UFO.html" in your file explorer.
Here is the initial appearance of the page:
![image](https://user-images.githubusercontent.com/73863977/120054348-71189680-bffd-11eb-848b-1adf7cfc59d8.png)
![image](https://user-images.githubusercontent.com/73863977/120054353-82fa3980-bffd-11eb-90ff-222168566e4d.png)
Your interaction is required in the "Filter Search" box in the top left of the table, immediately below the outer space picture.
The white box with "Enter a Date" immediately above it is the form, into which you will type the date you wish to see records for.
Only dates in the range 1/1/2010 to 1/13/2010, inclusive, will get results.
When typing into the form, use only numbers and do not use any extra zeroes. For example, for the 7th day of January, type "1/7/2010".
Use the format X/X/XXXX.
Type out year numbers in full.
When you have typed in your date of interest, press the "Filter Table" button immediately below the form in order to return sightings on only the desired date.
Here are examples of results for the 1st and last dates of the timeframe:
![image](https://user-images.githubusercontent.com/73863977/120054358-90afbf00-bffd-11eb-9f0a-62bb277e9059.png)
![image](https://user-images.githubusercontent.com/73863977/120054365-9ad1bd80-bffd-11eb-95dd-2509683de00f.png)
If you want to see the table in its original form, without any filtering, simply refresh the page.

DESCRIPTION: 
I looked through the data file and observed that it was a list of dictionaries.
I made a for loop to run through each dictionary and put all of its data into a row in the table, which I had made in the HTML.
Then, once the table was full, I made event handlers for the form and the filter button and made a function to run when either handler was given an event.
I set the value property of the form input to be a variable and used an arrow function inside of a filter function to make a new, filtered dataset for any input value.
I then cleared the old table body and made a new table with a new row in it for each of the filtered data entries. A new table completely replaces the previous one each time the code is run.
