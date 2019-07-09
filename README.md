# Open-Court-Search-Site-New-Tab
## Description
This is used to open Maryland Judiciary Case Search in a new tab and automatically search the clients name. It does this by first opening a tab to accept the terms and conditions of case search which in turn sets the session cookie. The tab is then auto closed. Another tab is then opened to the search result page on case search.

This is currently only designed to grab the first name and last name from the intake screen where you enter their name for the first name. However, with a little bit of change it could be added to a profile page.

This can be modified to search more specific cases. For instance if the user was only interested in recent criminal cases in Baltimore City, all those parameters could be added to the search form that is created. It can also be modified to open individual case numbers.

## Installation
Copy and paste the code into an instruction block and make sure that "Format as HTML" is selected. Chrome may also try and stop the new tabs. This can be handled by making sure pop up are allowed. 

I also had some issues with LS adding in random html after initially saving it in the instruction block. So check to make sure LS didn't try to add additional script tags anywhere.

## To Do
~~I couldn't figure out a way to only have one tab open. I attempted to set the cookie via a hidden iframe but case search is run on an http site not https and Chrome will block http sites from loading inside iframes of a https site. If you have an idea on how to only use one tab (without using external servers or api calls) let me know!~~

Thanks to Bill Palin (GitHub flooie) for solving this problem! Now there's only one tab that opens up. 