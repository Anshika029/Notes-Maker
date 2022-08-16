var contextMenuItem = {
    "id": "noteMaker",
    "title": "NoteMaker",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "noteMaker" && clickData.selectionText){
             chrome.storage.sync.get(['note'],function(myNotes){
                 var newNote="";
                 if(myNotes.note){
                     newNote += myNotes.note;
                     newNote += " ";
                 }
                 newNote += clickData.selectionText;
                 newNote += " ";
                 chrome.storage.sync.set({'note': newNote});
             })

             chrome.tabs.create({'url': chrome.extension.getURL('popup.html')});
    }

})