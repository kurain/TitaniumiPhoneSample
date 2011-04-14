var win = Ti.UI.currentWindow;

var textArea = Ti.UI.createTextArea(
    {
        height:300,
        width:300,
        top:100,
        font:{fontSize:20},
        borderWidth:2,
        borderColor:'#bbb',
        borderRadius:5
    }
);
win.add(textArea);

var addressButton = Ti.UI.createButton(
    {
        title: '電話帳',
        width:100,
        height:40,
        left:10,
        top: 30
    }
);
win.add(addressButton);

addressButton.addEventListener(
    'click',
    function(){
        Titanium.Contacts.showContacts(
            {
                selectedProperty : function(e) {
                    if ( e.property == 'email' ) {
                        var person = e.person;
                        var value  = e.value;
                        var values = [
                            value,
                            person.fullName
                        ];
                        var text = values.join("\n");
                        textArea.value = text; 
                    }
		        }
                // selectedPerson : function(e) {
                //     var person = e.person;
                //     var values = [
                //         person.fullName
                //     ];
                //     for( var key in  person.email ) {
                //         var mails = person.email[key];
                //         for(var i=0;i<mails.length;i++) {
                //             values.push( key + ' ' + mails[i] );
                //         }
                //     }
                //     for( var key in  person.phone ) {
                //         var phones = person.phone[key];
                //         for(var i=0;i<phones.length;i++) {
                //             values.push( phones[i] );
                //         }
                //     }
                //     var text = values.join("\n");
                //     textArea.value = text; 
		        // }
            }
        );
    }
);

var copyButton = Ti.UI.createButton(
    {
        title: 'Copy',
        width:100,
        height:40,
        left:120,
        top: 30
    }
);
win.add(copyButton);

copyButton.addEventListener(
    'click',
    function() {
        Ti.UI.Clipboard.setText(textArea.value);
    }
);