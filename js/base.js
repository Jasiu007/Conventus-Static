$(document).ready(function(){

    // Drop Down Options *************************************************************
    
	function DropDown(el)
		{
			this.profession = el;
			this.placeholder = this.profession.children('span');
			this.opts = this.profession.find('ul.dropdown > li');
			this.val = '';
			this.index = -1;
			this.initEvents();
		};

	DropDown.prototype = 
	        {
				initEvents : function() {
			
					var obj = this;

					obj.profession.on('click', function(event)
					{
						$(this).toggleClass('active');
						return false;
					});

					obj.opts.on('click',function()
					{
						var opt = $(this);
						obj.val = opt.text();
						obj.index = opt.index();
						obj.placeholder.text(obj.val).css('color', '#777');
					});
				},

				getValue : function() 
				{
					return this.val;
				},

				getIndex : function() 
				{
					return this.index;
				}
			};

    var dropDown = new DropDown( $('#profession') );

	$(document).click(function() 
		{

			// all dropdowns
			$('.wrapper').removeClass('active');

		});

	// Tabs Menu System **************************************************************

	function resetTabs(){

    $("#content > div").hide(); //Hide all content
    $("#tabs a").attr("id",""); //Reset id's

	}

	var myUrl = window.location.href; //get URL
	var myUrlTab = myUrl.substring(myUrl.indexOf("#")); // For mywebsite.com/tabs.html#tab2, myUrlTab = #tab2     
	var myUrlTabName = myUrlTab.substring(0,4); // For the above example, myUrlTabName = #tab



    $("#content > div").hide(); // Initially hide all content
    $("#tabs li:first a").attr("id","current"); // Activate first tab
    $("#content > div:first").fadeIn(); // Show first tab content
    
    $("#tabs a").on("click",function(e) {

        e.preventDefault();

        if ($(this).attr("id") == "current")
        { //detection for current tab
        	 return       
        }
        else
        {             
        	resetTabs();
        	$(this).attr("id","current"); // Activate this
        	$($(this).attr('name')).fadeIn(); // Show content for current tab
        }
    });

    for (i = 1; i <= $("#tabs li").length; i++) {
     	
     	if (myUrlTab == myUrlTabName + i) 
     	{
          resetTabs();
          $("a[name='"+myUrlTab+"']").attr("id","current"); // Activate url tab
          $(myUrlTab).fadeIn(); // Show url tab content        
      	}
    }


});