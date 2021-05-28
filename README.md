# Filterable UFO Table
I looked through the data JS file and observed that it was a list of dictionaries.
I made a for loop to run through each dictionary and put all of its data into a row in the table.
Then, once the table was full, I made event handlers for the form and the filter button and made a function to run when either handler heard an event.
I set the value property of the input from the form to be a variable and used an arrow function in a filter function to make a new, filtered dataset for any input value.
I then cleared the old table body and made a for loop to put the filtered dataset into the table in place of the old dataset.
