var	scrollTop=$(window).scrollTop(),
	headerH=$('#header').outerHeight(true),
	subH=$('#sub').outerHeight(true),
	wrapperH=$('#wrapper').outerHeight(true);
	
	if(scrollTop<headerH)
	{
		$('#sub').removeClass('fixed');
		$('#sub').addClass('top');
	}
	
	else if(scrollTop+subH<wrapperH)
	{
		$('#sub').removeClass('top');
		$('#sub').removeClass('bottom');
		$('#sub').addClass('fixed');	
	}
	
	else
	{
		$('#sub').removeClass('fixed');
		$('#sub').addClass('bottom');	
	}
