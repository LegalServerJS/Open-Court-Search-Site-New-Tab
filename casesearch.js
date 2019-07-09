<a id='matthew_opencasesearch' class="matthew_button" onclick="matthewBillCaseSearch();" style="cursor:pointer">Open Case Search</a>
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

function matthewBillCaseSearch(){
    var baseURL = "http://casesearch.courts.state.md.us/casesearch/"
    var processPath = 'processDisclaimer.jis?action=Continue&disclaimer=Y';
    
    //This is set to grab it from the intake page. If you are using this on the profile page you will have to change where the first name and last name.
    firstname = jQuery("[name='matter:first']").val(); //Grab first name
    lastname = jQuery("[name='matter:last']").val(); //Grab last name
    
    var namepath = "inquirySearch.jis?action=Search&company=N&courtSystem=B&firstName=" + firstname + "&lastName=" + lastname + "&site=00"
    
    console.log("Opening Tab")
    var win = window.open(baseURL + processPath); 
    setTimeout(function() { win.close(); }, 300); //Wait 300 miliseconds then close this tab.
    setTimeout(function(){ window.open(baseURL + namepath, '_blank') }, 700); //Wait 700 miliseconds then open the tab with the search results

}
</script>