$(document).ready(function(){

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


});