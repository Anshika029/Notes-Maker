$(function(){
    chrome.storage.sync.get(['note'],function(myNotes){
           $('#note').text(myNotes.note);
    })
    $('#addNote').click(function(){
        chrome.storage.sync.get(['note'],function(myNotes){
                var newNote="";
                if(myNotes.note){
                    newNote += myNotes.note;
                    newNote += " ";
                }

                chrome.storage.sync.set({'note': newNote});
                $('#note').text(newNote);
        })
    })

    $('#removeNote').click(function(){
        var text = "";
        if (window.getSelection) {
        text = window.getSelection().toString();
        chrome.storage.sync.get(['note'],function(myNotes){
            var newNote="";
            if(myNotes.note){
                newNote += myNotes.note;
                newNote += " ";
            }

            var myNewNote = newNote.replace(text,"");
            chrome.storage.sync.set({'note': myNewNote});
                $('#note').text(myNewNote);
        })
        }

    })
})
