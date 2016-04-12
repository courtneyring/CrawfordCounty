$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.7)'
                }
            }
        }
	});
    
});

$(document).ready(function() {
	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
});

