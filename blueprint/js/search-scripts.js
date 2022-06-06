       function highlightColumn(){
        	$('.table-data').removeClass('highlight');
        	var currentColumn = $('.table-head .table-data.sorted').index()+1;
        	$('.table-data:nth-child('+currentColumn+')').not('.table-data:first-child').addClass('highlight');
        }

        $(document).ready(function(){
        	highlightColumn();
        });

         $(document).on('click','.button-round,.tooltip-close, .more-info',function(){
         		if($('.collapsible').hasClass('slide-down')){
         			$('.collapsible').removeClass('slide-down');
       				$('.info-text').text('Show Details');
         			$('.big-icon-circle').removeClass('rotate');
         			setTimeout(function(){
         				$('.collapsible').removeClass('on');
         			},400);
         		} else {
         			$('.collapsible').addClass('on');
         			$('.info-text').text('Hide Details');
         			$('.big-icon-circle').addClass('rotate');
         			setTimeout(function(){
         				$('.collapsible').addClass('slide-down');
         			},50);
         		}
         		//$('.collapsible').slideToggle();
			});

         $(document).on('click','input[type=text]',function(){
         		$(this).prev('label').addClass('on');
         		$(this).focus();
		 });

		 $(document).on('click','button.search',function(){
                if($(this).hasClass('active')){
                    $('button.search').removeClass('active');
                    $('.search-drawer').addClass('hide');
                } else {
                    $('button.search').addClass('active');
                    $('.search-drawer').removeClass('hide');
                    $('#patient-search').val('');
                    $('#patient-search').focus();
                }
         		
         		
		 });

		 $(document).on('click','#overlay-clear',function(){
         		$('.search-menu').removeClass('on');
         		$('.search-label').addClass('on');
         		$('#overlay-clear').removeClass('on');
		 });

		 /*$(document).on('click','.clear-history',function(){
         		$('.search-history').hide();
         		$('#overlay-clear').removeClass('on');
		 });*/


		 $(document).on('blur','input[name=universal-search]',function(){
         		$('input[name=universal-search]').removeClass('on');
		 });


         $(document).on('blur','input[type=text]',function(){
         		if($(this).val()=='') {
         			$(this).prev('label').removeClass('on');
         		}
		});

         $(document).on('click','.clear-search',function(){
         		$(this).prev('input').val('');
         		if($(this).prev().prev('label').not('label[for=patient-search]').hasClass('on')) {
         			$('.table-row').show();
         		}
         		$(this).removeClass('on');
         		$(this).prev('input').focus();
		});

         $(document).on('keyup','input',function(){
         		checkInput($(this));
		});

         function checkInput(thisInput){
         	if(thisInput.val()=='') {
         			thisInput.next('.clear-search').removeClass('on');
         		} else {
         			thisInput.next('.clear-search').addClass('on');
         		}
         }
         $(document).on('keyup','#narrow-search-name',function(){
         		var searchString = $(this).val().toLowerCase();
         		$('.member-name a').each(function(){
         			var str = $(this).text().toLowerCase();
         			var strLocation = str.indexOf(searchString);
         			console.log(searchString+', '+str+', '+strLocation);
         			if(strLocation==-1){
         				$(this).parent().parent('.table-row').hide();
         			} else {
         				$(this).parent().parent('.table-row').show();
         			}
         		});
		 });
		  $(document).on('click','.date-icon',function(){
         		alert('Not yet functional');
		});

		   $(document).on('click','.clear-history',function(){
		   		$('.search-menu').addClass('slim');
         		$('.search-history').addClass('hide');
         		$('#universal-search').focus();
         		$('label[for=universal-search]').addClass('on');
         		
		});

		   $(document).on('click','#search-button',function(){
         		$('#overlay-gray,#material-spinner').addClass('on');
         		setTimeout(function(){
         			$('#overlay-gray').addClass('fade-in');
         		},50);
         		setTimeout(function(){
         			$('#overlay-gray').removeClass('fade-in');
         			$('#material-spinner').removeClass('on');
         			setTimeout(function(){
         				$('#overlay-gray,#material-spinner').removeClass('on');
         			},400);
         		},5000);
		});

		  $(document).on('click','.toggle-history',function(){
		  		if($('.search-history').hasClass('hide')){
		  			$('.search-history').removeClass('hide');
		  			$('.search-menu').removeClass('small');
		  			$(this).text('Hide History');
		  		} else {
		  			$('.search-menu').addClass('small');
	         		$('.search-history').addClass('hide');
	         		$(this).text('Show History');
		  		}
		});

		  $(document).on('click','button.fill-search',function(e){
		  		e.preventDefault();
		  		$('#universal-search').focus();
		  		$('label[for=universal-search]').addClass('on');
         		$('#universal-search').val($(this).prev().text());
         		$(this).parent().parent().prev().addClass('on');
		});
         $(document).on('keyup','#narrow-search-id',function(){
         		var searchString = $(this).val().toLowerCase();
         		$('.member-id').each(function(){
         			var str = $(this).text().toLowerCase();
         			var strLocation = str.indexOf(searchString);
         			console.log(searchString+', '+str+', '+strLocation);
         			if(strLocation==-1){
         				$(this).parent('.table-row').hide();
         			} else {
         				$(this).parent('.table-row').show();
         			}
         		});
		});

         $(window).scroll(function(){
			$('.sticky-header.fixed').css('left',headerPosition.left+'px');
			$('.sticky-header.fixed').css('width',headerWidth+'px');
			$('.table-head.fixed').css('left',tablePosition.left+'px');
			var count=1;
			$('.table-head:not(.fixed) .table-data').each(function(){
				var tempWidth = $(this).css('width');
				$('.table-head.fixed .table-data:nth-child('+count+')').css('width',tempWidth);
				count++;
			});
			var scrollTop = $(document).scrollTop();
			if(scrollTop>=stickyPosition.top){
				$('.sticky-header.fixed, .table-head.fixed').addClass('on');
			} else {
				$('.sticky-header.fixed, .table-head.fixed').removeClass('on');
			}
		});
