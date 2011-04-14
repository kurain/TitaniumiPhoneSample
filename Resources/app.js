Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win = Titanium.UI.createWindow({  
    url: 'main.js',                                   
    backgroundColor:'#fff'
});
var tab = Titanium.UI.createTab({  
    title:'Tab 1',
    window:win
});
win.hideTabBar();
win.navBarHidden = true;
tabGroup.addTab(tab);  
tabGroup.open();
