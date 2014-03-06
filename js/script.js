var lastId,
	topMenu = $('#navbar'),
	topMenuHeight = topMenu.outerHeight();
	menuItems = topMenu.find("a:not(.dropdown a)");
	scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
	});

$(document).scroll(function(){
	var fromTop = $(this).scrollTop()+topMenuHeight;

	var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
	    return this;
   });

	cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
 });         

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

