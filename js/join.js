$("img.join").on('click', function(){
	var t = $(this).data("target");
	
	switch(t){
		case 'bangalore':
			window.open('https://forms.gle/923PpLTrZBGkpUPL6', '_blank');
			break;
		case 'chennai':
			window.open('https://forms.gle/UdVEHhrGRv3FdTkn9', '_blank');
			break;
		case 'other':
			window.open('https://forms.gle/mpsUPeGsv1AFawXu6', '_blank');
			break;
		case 'vellore':
			window.open('https://goo.gl/forms/E4zTmh5Xhptgb1S43', '_blank');
			break;
		case 'indore':
			window.open('https://goo.gl/forms/32Nq3fvlCS4shY8J3', '_blank');
			break;
		case 'intern':
			window.open('https://forms.gle/v5Py2FM3mhQQsJKK8', '_blank');
			break;
	}
});