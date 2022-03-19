# UFO Sightings All Over
## By: Stacey Booysen

### Filtering Success
For this analysis, we helped Dana to create a website that would pull from a js file with tons of data on UFO sightings. The goal was to make a searchable chart wherein the user could input something like a state name or a date to see all the sightings in that state or on that date. 

In its current form, the results can be searched by date, city, state, country, and shape. These work perfectly with the specified input formatting. So long as the user follows the example guidelines in each search box, such as the date input needing a specific format, then the results pop up no problem as shown below:

![Filtering](https://github.com/sbooysen/UFOs/blob/main/static/images/FilterExample.jpg)

### Drawbacks
A drawback of this set-up is that the search is case sensitive. Putting in ‘nc’ for North Carolina returns results but putting ‘NC’ leaves the page blank. It might be a good idea to eventually create a more fluid search engine that will allow for capital letters for locations. Another drawback is the inability to search more than one criteria at a time. When inputting a search term, the search is activated the moment you click somewhere else, giving no time to add any additional keywords to refine the search.

### Suggestions
My suggestions would be to create some code that will allow for more leniency when using capital letters and lowercase letters, so that the searches are more fluid. Another possibility is to implement a system that allows for multiple keywords to be searched at the same time, such as state and shape, or date and city. This way, the user can search for a more precise sighting without potentially having to go through a large number of results.

Overall, the site functions properly and should provide a simple way for users, and Dana, to filter the data as needed.
