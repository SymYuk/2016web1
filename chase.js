var	scrollTop=$(window).scrollTop(),
	headerH=$('#header').outerHeight(true),
	subH=$('aside').outerHeight(true),
	wrapperH=$('#wrapper').outerHeight(true);
	
	if(scrollTop<headerH)
	{
		$('aside').removeClass('fixed');
		$('aside').addClass('top');
	}
	
	else if(scrollTop+subH<wrapperH)
	{
		$('aside').removeClass('top');
		$('aside').removeClass('bottom');
		$('aside').addClass('fixed');	
	}
	
	else
	{
		$('aside').removeClass('fixed');
		$('aside').addClass('bottom');	
	}
