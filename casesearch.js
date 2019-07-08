<a id='matthew_autoset' class="matthew_button" onclick="matthew_OpenTabWithSessionID();" style="cursor:pointer">Open Case Search</a>
<style type="text/css">
    .matthew_button {
        font: bold 11px Arial;
        text-decoration: none;
        background-color: #EEEEEE;
        color: #333333;
        padding: 2px 6px 2px 6px;
        border-top: 1px solid #CCCCCC;
        border-right: 1px solid #333333;
        border-bottom: 1px solid #333333;
        border-left: 1px solid #CCCCCC;
    }  
</style>

<script type="text/javascript">
function matthew_OpenTabWithSessionID(){
    //This function opens a new tab that accepts the terms and conditions of case search
    //In turn case search will set the session cookie.
    var url = 'http://casesearch.courts.state.md.us/casesearch/processDisclaimer.jis';
    
    //Create fake form
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);
    form.setAttribute("target", '_blank'); //Use _blank to open a new tab
    
    //Equivalent of checking the box on case search
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'disclaimer';
    input.value = 'Y';
    form.appendChild(input);

    //Equivalent of clicking Continue
    var input2 = document.createElement('input');
    input2.type = 'hidden';
    input2.name = 'action';
    input2.value = 'Continue';
    form.appendChild(input2);

    //Add form to website, submit, and then remove form.
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    //Wait 1 second just to make sure the session cookie is loaded
    //Then load the next function which opens the search results tab
    setTimeout(function(){
        matthew_OpenTabWithSearchResults();
    }, 1000);
}
    
function matthew_OpenTabWithSearchResults(){
    var url = 'http://casesearch.courts.state.md.us/casesearch/inquirySearch.jis';

    /*
    Grab the first and last name from the intake page
    If you are doing this somewhere other than the intake page you will likely
    need to modify the jquery search so it can find your fields. 
    */
    firstname = jQuery("[name='matter:first']").val();
    lastname = jQuery("[name='matter:last']").val();

    //Create new fake form
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);
    form.setAttribute("target", '_blank');
    
    //Add last name to the form
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'lastName';
    input.value = lastname;
    form.appendChild(input);

    //Add first name to the form
    var input2 = document.createElement('input');
    input2.type = 'hidden';
    input2.name = 'firstName';
    input2.value = firstname;
    form.appendChild(input2);

    //Add the the action parameter to the form to mimic what happens when you click on "search" on case search.
    var input3 = document.createElement('input');
    input3.type = 'hidden';
    input3.name = 'action';
    input3.value = 'Search';
    form.appendChild(input3);

    //Attach the form to the website, submit, and then remove
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}
</script>