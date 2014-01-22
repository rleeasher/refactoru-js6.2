$(document).ready(function(){



	var openEditWindow = function(){
		var height = $(this).height();
		var width = $(this).width();
		var textStuff = $(this).text();
		var attrClass = $(this).attr('class');


		$(this).css('display','none');
		$(this).parent().append('<textarea id=\'textareastuff\'>'+textStuff+'</textarea>');
		$('#textareastuff').height(height);
		$('#textareastuff').width(width);
		$('#textareastuff').addClass(attrClass);
	};


	var closeWindow = function(){
			var height = $(this).height();
			var width = $(this).width();
			var textStuff = $(this).val();
			var attrClass = $(this).attr('class');

			$(this).css('display','none');
			$(this).siblings('.in-place-editor').html(textStuff);
			$(this).siblings('.in-place-editor').css('display','block');
			$(this).remove();

	};



	$('.in-place-editor').on('click',openEditWindow);

	$(document).on('blur','#textareastuff',closeWindow);

});