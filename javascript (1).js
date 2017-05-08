//add javscript here
function savejournalentry() 
{
    var NewEntry = new Array(localStorage.getItem("oldentry"));
	var journalEntry = document.getElementById("newentry").value;
	NewEntry.push(journalEntry); 
	if (journalEntry) 
	{
		
	//if there is text then it will save if not then it will not save
		localStorage.setItem("oldentry", NewEntry);
	    clearentry();	
	}
}

function clearentry()
{
    //to save first then clear text from input box
    document.getElementById("newentry").value = " ";
}
window.onload = function()
{
	Getoldentry();
}
function Getoldentry()
{
	var pageId = "oldentry";
    var OldEntry = new Array(localStorage.getItem("oldentry"));
    var text, fLen, i;
fLen = OldEntry.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + OldEntry[i] + "</li>";
}
	if (OldEntry)
	{
		document.getElementById(pageId).value = OldEntry;
	}
}
function AddingNewEntry()
{
    var NewEntry = new Array(localStorage.getItem("oldentry"));
}
