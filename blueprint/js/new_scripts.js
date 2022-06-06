          $(document).on('click','.personal-details .edit-button',function(){
			$('.container .row .btn-tertiary').removeClass('hidden');
			$('p.form-body').show();
			$('.save-bar').hide();
     		$('.form-body-edit,.form-body-check-edit').hide();
     		$(this).closest('.container').find('p.form-body:not(.no-hide)').hide();
     		$(this).closest('.container').find('.form-body-edit,.form-body-check-edit').show();
     		$(this).closest('.container').find('.save-bar').show();
     		$(this).addClass('hidden');
		});
		
		$(document).on('click','.communication-preferences .edit-button',function(){
			$('.container .row .btn-tertiary').removeClass('hidden');
			$('p.form-body').show();
			$('.save-bar').hide();
     		$('.form-body-edit,.form-body-check-edit').hide();
     		$('.form-body-check').hide();
     		$(this).closest('.container').find('p.form-body:not(.no-hide)').hide();
     		$(this).closest('.container').find('.form-body-edit,.form-body-check-edit').show();
     		$(this).closest('.container').find('.save-bar').show();
     		$(this).addClass('hidden');
		});

		$(document).on('click','.personal-details .save-bar .btn-secondary',function(){
			$('p.form-body:not(.no-hide)').each(function(){
				$(this).text($(this).next('.form-body-edit').val());
			});
     		$(this).closest('.container').find('p.form-body:not(.no-hide)').show();
     		$(this).closest('.container').find('.form-body-edit').hide();
     		$(this).closest('.container').find('.save-bar').hide();
     		$(this).closest('.container').find('.btn-tertiary').removeClass('hidden');
     		if(!$('#primary-phone').val()==''){
     			$('#notification-phone').html('<option value="'+$('#primary-phone').val()+'">'+$('#primary-phone').val()+'</option>');
     			//$('#communication-phone').text($('#primary-phone').val());
     		}
     		if(!$('#secondary-phone').val()==''){
     			$('#notification-phone').append('<option value="'+$('#secondary-phone').val()+'">'+$('#secondary-phone').val()+'</option>');
     		}
     		
		});

		$(document).on('click','.communication-preferences .save-bar .btn-secondary',function(){
			$('p.form-body:not(.no-hide)').each(function(){
				$(this).text($(this).next('.form-body-edit').val());
			});
			$('.communication-preferences .checkbox').each(function(){
				if($(this).hasClass('checked')) {
					$(this).prev('.form-body-check').removeClass('hide');
				}
			});
			$('.form-body-check').show();
     		$(this).closest('.container').find('p.form-body:not(.no-hide)').show();
     		$(this).closest('.container').find('.form-body-edit, .form-body-check-edit').hide();
     		$(this).closest('.container').find('.save-bar').hide();
     		$(this).closest('.container').find('.btn-tertiary').removeClass('hidden');
		});

		$(document).on('click','.save-bar .btn-tertiary',function(){
     		$(this).closest('.container').find('p.form-body:not(.no-hide),.form-body-check').show();
     		$(this).closest('.container').find('.form-body-edit,.form-body-check-edit').hide();
     		$(this).closest('.container').find('.save-bar').hide();
     		$(this).closest('.container').find('.btn-tertiary').removeClass('hidden');
		});