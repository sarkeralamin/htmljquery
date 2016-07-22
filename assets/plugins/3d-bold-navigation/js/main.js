jQuery(document).ready(function($){
	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
		$('body').toggleClass('navigation-visible', bool);
	}
    
	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
	});
    
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
	});
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
	$("body").addClass("mac");
	} else {
	$("body").addClass("pc");
}

	$(".listview").click(function (e) {
		$(".listview").removeClass('active');
		$(".grigview").addClass('active');
	});
	$(".grigview").click(function (e) {
		$(".listview").addClass('active');
		$(".grigview").removeClass('active');
	});
	    $( "#draggable_area" ).sortable();
    $( "#draggable_area" ).disableSelection();
	$("select#children").on("change", function() { 
    var number = parseInt($("#children").val());
    var newDropLabel = $("#childrenAge").append("<label>Age of children: </label>");
    var newDropList = $('<select class="Age"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option></select>');
    $("div#childrenAge").append(newDropLabel);
    for (i = 0; i < number; i++) {
       $("div#childrenAge").append(newDropList);   
    };
});

});