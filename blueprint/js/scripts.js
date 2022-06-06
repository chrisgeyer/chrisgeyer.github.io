$(document).on('click','.alert-bar > .checkbox:not(#select-all)',function(){
		if($(this).hasClass('checked')) {
			$('.alert-bar').removeClass('alert-agree');
		} else {
			$('.alert-bar').addClass('alert-agree');
		}
		anyChecked();
});
$(document).on('click','.checkbox:not(#select-all)',function(){
		if($(this).hasClass('checked')) {
			$(this).removeClass('checked');
		} else {
			$(this).addClass('checked');
		}
});

function anyChecked() {
	var c = 0;
	//var anyChecked = false;
		$('.table-data .checkbox').each(function(){
			if($(this).hasClass('checked')){
				c++;
			}
		});
		$('.action-bar-text').html('<a href="javascript:void(0)" class="primary inline-block left" id="cancel-action"><i class="material-icons">close</i></a>'+c+' Selected');
		if(c==0) {
			$('.action-bar,.action-bar-2').removeClass('slide-down');
			var actionText = $('.action-bar-text').attr('data-id');
			if(actionText=='eligibility') {
				$('.action-bar-text').html('<span class="margin-left-20 inline-block">Select a member to view patient history.</span>');
			} else if (actionText=='authorizations') {
				$('.action-bar-text').html('<span class="margin-left-20 inline-block">Select a member to create a new authorization.</span>');
			} else {
				$('.action-bar-text').html('<span class="margin-left-20 inline-block">Select member(s) to print or export.</span>');
			}
			$('.action-bar-3 a').addClass('inactive');
			setTimeout(function(){
				$('.action-bar,.action-bar-2').removeClass('on');
			},400);
			//$('.page-title').removeClass('margin-top-48');
		} else {
			$('.action-bar,.action-bar-2,.action-bar-text').addClass('on');
			$('.action-bar-3 a').removeClass('inactive');
			setTimeout(function(){
				$('.action-bar,.action-bar-2').addClass('slide-down');
			},50);
			//$('.page-title').addClass('margin-top-48');
		}
		$('.selection-count').html(c+' Selected');
		}

$(document).on('click','#select-all',function(){
	if($(this).hasClass('checked')) {
		$('.table-data .checkbox').removeClass('checked');
		$('.table-row').removeClass('checked');
	} else {
		$('.table-data .checkbox').addClass('checked');
		$('.table-row').addClass('checked');
	}
	anyChecked();
});



$(document).on('click','button.search',function(){
                /*if($(this).hasClass('active')){
                    if($('#patient-search').val()==''){
                        $('.search-drawer').addClass('hide');
                    }
                    $('button.search').removeClass('active');
                    $('#search-close').removeClass('on');
                     $('#overlay-white').removeClass('fade-in');
                    setTimeout(function () {
                        $('#overlay-white').removeClass('on');
                    },400);
                } else {*/
                    //$('button.search').addClass('active');
                    if(!$('.search-menu').hasClass('slim')){
                    	$('#overlay-white').addClass('on');
	                    setTimeout(function () {
	                        $('#overlay-white').addClass('fade-in');
	                    },50);
                    }
                    $('.search-drawer').removeClass('hide');
                    //$('#patient-search').val('');
                    $('#patient-search').focus();
                    $('#search-close').addClass('on');
                //}


		 });

$(document).on('click','#info-member-id',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-member-id').removeClass('slide-down');
            $('#drawer-member-id').addClass('slide-up');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-member-id-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-member-id').removeClass('slide-up');
            $('#drawer-member-id').addClass('slide-down');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });
$(document).on('click','#info-group-id',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-group-id').removeClass('slide-down');
            $('#drawer-group-id').addClass('slide-up');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-group-id-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-group-id').removeClass('slide-up');
            $('#drawer-group-id').addClass('slide-down');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });
$(document).on('click','#info-nowClinic',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-nowclinic').removeClass('slide-down');
            $('#drawer-nowclinic').addClass('slide-up');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-nowclinic-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-nowclinic').removeClass('slide-up');
            $('#drawer-nowclinic').addClass('slide-down');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });
$(document).on('click','#exam-doc-id',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-exam-doc').removeClass('slide-down');
            $('#drawer-exam-doc').addClass('slide-up');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-exam-doc-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-exam-doc').removeClass('slide-up');
            $('#drawer-exam-doc').addClass('slide-down');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });
$(document).on('click','#difference-id',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-difference').removeClass('slide-down');
            $('#drawer-difference').addClass('slide-up');
            $('body').addClass('stop-scrolling')
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-difference-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-difference').removeClass('slide-up');
            $('#drawer-difference').addClass('slide-down');
            $('body').removeClass('stop-scrolling')
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });

$(document).on('click','#diastolic-id',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-diastolic').removeClass('slide-down');
            $('#drawer-diastolic').addClass('slide-up');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-diastolic-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-diastolic').removeClass('slide-up');
            $('#drawer-diastolic').addClass('slide-down');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });

$(document).on('click','#bp-id',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-bp').removeClass('slide-down');
            $('#drawer-bp').addClass('slide-up');
            $('body').addClass('stop-scrolling');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-bp-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-bp').removeClass('slide-up');
            $('#drawer-bp').addClass('slide-down');
            $('body').removeClass('stop-scrolling');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });

$(document).on('click','#systolic-id',function(){
            $('#overlay-gray').addClass('on');
            $('#drawer-systolic').removeClass('slide-down');
            $('#drawer-systolic').addClass('slide-up');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-out');
                $('#overlay-gray').addClass('fade-in');
            },50);

         });
$(document).on('click','#drawer-systolic-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-systolic').removeClass('slide-up');
            $('#drawer-systolic').addClass('slide-down');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });
$(document).on('click','.pharmacy-id',function(){
           $('#overlay-gray').addClass('on');
           $('#drawer-bp').removeClass('slide-down');
           $('#drawer-bp').addClass('slide-up');
           $('body').addClass('stop-scrolling');
           setTimeout(function () {
               $('#overlay-gray').removeClass('fade-out');
               $('#overlay-gray').addClass('fade-in');
           },50);

        });
$(document).on('click','#drawer-pharmacy-close',function(){
            $('#overlay-gray').removeClass('on');
            $('#drawer-systolic').removeClass('slide-up');
            $('#drawer-systolic').addClass('slide-down');
            setTimeout(function () {
                $('#overlay-gray').removeClass('fade-in');
                $('#overlay-gray').addClass('fade-out');
            },50);

         });
$(document).on('click','#appt-filter-id',function(){
    $('#overlay-gray').addClass('on');
    $('#drawer-appt-filter').removeClass('slide-down');
    $('#drawer-appt-filter').addClass('slide-up');
    $('body').addClass('stop-scrolling');
    setTimeout(function () {
        $('#overlay-gray').removeClass('fade-out');
        $('#overlay-gray').addClass('fade-in');
    },50);

});
$(document).on('click','#drawer-appt-filter-close',function(){
    $('#overlay-gray').removeClass('on');
    $('#drawer-appt-filter').removeClass('slide-up');
    $('#drawer-appt-filter').addClass('slide-down');
    $('body').removeClass('stop-scrolling');
    setTimeout(function () {
        $('#overlay-gray').removeClass('fade-in');
        $('#overlay-gray').addClass('fade-out');
    },50);

});
$(document).on('click','#renew1-id',function(){
	$('#overlay-gray').addClass('on');
	$('#drawer-renew1').removeClass('slide-down');
	$('#drawer-renew1').addClass('slide-up');
	$('body').addClass('stop-scrolling');
	setTimeout(function () {
	    $('#overlay-gray').removeClass('fade-out');
	    $('#overlay-gray').addClass('fade-in');
	},50);

});
$(document).on('click','#drawer-renew1-close',function(){
    $('#overlay-gray').removeClass('on');
	$('#drawer-renew1').removeClass('slide-up');
	$('#drawer-renew1').addClass('slide-down');
	$('body').removeClass('stop-scrolling');
	setTimeout(function () {
	    $('#overlay-gray').removeClass('fade-in');
	    $('#overlay-gray').addClass('fade-out');
	},50);

});




$(document).on('click','#overlay-gray, #almost-close, #btn-mobile-menu-close, #appt-filter-apply',function(){
    if($('nav').hasClass('slide-left')){
        $('#overlay-gray').removeClass('on');
        $('nav').removeClass('slide-left');
        $('nav').removeClass('fade-in');
        $('nav').addClass('slide-right');
        $('nav').addClass('fade-out');
        $('#btn-mobile-menu-close').addClass('hidden');
        $('body').removeClass('stop-scrolling');
        setTimeout(function () {
            $('#overlay-gray').removeClass('fade-in');
            $('#overlay-gray').addClass('fade-out');
        },50);
    } else {
        $('#overlay-gray').removeClass('on');
        $('#drawer-member-id').removeClass('slide-up');
        $('#drawer-member-id').addClass('slide-down');
        $('#drawer-group-id').removeClass('slide-up');
        $('#drawer-group-id').addClass('slide-down');
        $('#drawer-exam-doc').removeClass('slide-up');
        $('#drawer-exam-doc').addClass('slide-down');
        $('#drawer-difference').removeClass('slide-up');
        $('#drawer-difference').addClass('slide-down');
        	$('#drawer-diastolic').removeClass('slide-up');
        $('#drawer-diastolic').addClass('slide-down');
        	$('#drawer-systolic').removeClass('slide-up');
        $('#drawer-systolic').addClass('slide-down');
        $('#drawer-bp').removeClass('slide-up');
        $('#drawer-bp').addClass('slide-down');
        $('#drawer-appt-filter').removeClass('slide-up');
        $('#drawer-appt-filter').addClass('slide-down');
        $('#almost').removeClass('fade-in');
        $('#almost').addClass('fade-out');
        $('#drawer-nav').removeClass('slide-left');
        $('#drawer-nav').addClass('slide-right');
        $('#overlay-gray').css('top','0px');
        $('body').removeClass('stop-scrolling');
        setTimeout(function () {
            $('#overlay-gray').removeClass('fade-in');
            $('#overlay-gray').addClass('fade-out');
        },50);
    }

});

$(document).on('click','#sign-in, #register',function(){
            if($('#sign-in').hasClass('disabled')){
                $('#overlay-gray').addClass('on');
	            $('#almost').removeClass('fade-out');
	            $('#almost').addClass('fade-in');
                setTimeout(function () {
                    $('#overlay-gray').removeClass('fade-out');
	                $('#overlay-gray').addClass('fade-in');
                },50);
            }
         });



$(document).on('focus','#patient-search',function(){
            if(!$('.patient-search').hasClass('slim')){
                $('.search-history').removeClass('hide');
                $('#overlay-white').addClass('on');
                $('#search-close').addClass('on');
                setTimeout(function () {
                    $('#overlay-white').addClass('fade-in');
                },50);
            }
         });

// $(document).on('click','#btn-mobile-menu',function(){
//     $('#overlay-gray').addClass('on');
//     $('#overlay-gray').css('top','45px');
//     $('nav').removeClass('slide-right');
//     $('nav').addClass('slide-left');
//     $('body').addClass('stop-scrolling');
//     setTimeout(function () {
//         $('#overlay-gray').removeClass('fade-out');
//         $('#overlay-gray').addClass('fade-in');
//     },50);
// });
$(document).on('click','#btn-mobile-menu',function(){
    if($('nav').hasClass('slide-left')){
        $('#overlay-gray').removeClass('on');
        $('nav').removeClass('slide-left');
        $('nav').removeClass('fade-in');
        $('nav').addClass('slide-right');
        $('nav').addClass('fade-out');
        $('body').removeClass('stop-scrolling');
        $('#btn-mobile-menu-close').addClass('hidden');
        setTimeout(function () {
            $('#overlay-gray').removeClass('fade-in');
            $('#overlay-gray').addClass('fade-out');
        },50);
    } else {
        $('#overlay-gray').addClass('on');
        $('#overlay-gray').css('top','45px');
        $('nav').removeClass('slide-right');
        $('nav').addClass('fade-in');
        $('nav').addClass('slide-left');
        $('nav').removeClass('fade-out');
        $('body').addClass('stop-scrolling');
        setTimeout(function () {
            $('#overlay-gray').removeClass('fade-out');
            $('#overlay-gray').addClass('fade-in');
        },50);
        setTimeout(function () {
            $('#btn-mobile-menu-close').removeClass('hidden');
        },800);
    }
});


$(document).on('click','#mobile-menu li',function(){
    $('#overlay-gray').removeClass('on');
    $('#drawer-systolic').removeClass('slide-up');
    $('#drawer-systolic').addClass('slide-down');
    setTimeout(function () {
        $('#overlay-gray').removeClass('fade-in');
        $('#overlay-gray').addClass('fade-out');
    },50);

 });



//------- All Medications Page ------//

$(document).on('click','.med-show',function(e){
    $(this).children('span').text(function(i, v){
       return v === 'Hide' ? 'Show' : 'Hide';
    });
    $(this).children('i').text(function(i, v){
       return v === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
    });
    // $('.medication-detail').slideToggle('slow');
    $(this).closest('section').next('div').slideToggle(350);
    $(this).closest('section').next('div').children('div.vital-graph-container').scrollLeft('910');
    e.stopPropagation();
});

$(document).on('click','.read',function(e){
    $(this).parent('span').parent().removeClass('unread');
		$('.new').text('1');
    e.stopPropagation();
});

$(document).on('click','#load-docs',function(){
    $('#doc-container').fadeIn();
});

 $(document).on('click','.vital-graph-btn',function(){
    $(this).blur();
});

// $(document).on('click','.med-show',function () {
// 	var container  = $('.medication-details');
//     var button     = $('.med-show');

//     container.hide();
//     button.on('click', function(){
//         container.slideToggle({
//             duration: 200,
//             complete: function(){
//                 var txt = (button.text() === 'Show') ? "Hide" : "Show";
//                 button.text(txt);
//             }
//         });
//     });
// });

$(document).on('click','.card-drop',function(e){
/*
    $(this).children('i').text(function(i, v){
       return v === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
    });
*/
    $(this).closest('div').siblings('div.row').children('div.vitals-detail').slideToggle(350);
    $(this).closest('div').siblings('div.row').children('div.vitals-detail').children('div.vital-graph-container').scrollLeft('1600');
    e.stopPropagation();
});



//$(document).mouseup(closeSearch);
$(document).on('click','#search-close',function(){

    $('.search-drawer').addClass('hide');
    $('.search-history').addClass('hide');
    $('#search-close').removeClass('on');
    $('#overlay-white').removeClass('fade-in');
    setTimeout(function () {
        $('#overlay-white').removeClass('on');
    },400);

});

$(document).on('click','button.fill-search',function(e){
				e.preventDefault();
		  		$('#patient-search').focus();
		  		//$('label[for=universal-search]').addClass('on');
         		$('#patient-search').val($(this).prev().text());
         		//$(this).parent().parent().prev().addClass('on');
		});

$(document).on('click','.search-history a',function(){
    $('#patient-search').val($(this).children('span').text());
    $('#search-button').click();
});

$(document).on('click','.radio-button',function(c){
    $('.radio-button').removeClass('active').html('<i class="material-icons">radio_button_unchecked</i>');
    $(this).addClass('active');
    $(this).html('<i class="material-icons">radio_button_checked</i>');
    $('.action-bar-3 a').removeClass('inactive');
    $('.action-bar-text').html('<a href="javascript:void(0)" class="primary inline-block left" id="cancel-action"><i class="material-icons">close</i></a>1 Selected');
});

$(document).on('click','#search-button',function(){
				var searchTerm = $('#patient-search').val();
				if(searchTerm!==''){
					var searchType = $('.faceted-search a.active').text().toLowerCase();
	         		$('#material-spinner').addClass('on');
	         		$('.search-history').addClass('hide');
	         		$('#overlay-white').removeClass('fade-in');
	         		$('nav > .container > a').removeClass('active');
	         		$('main').addClass('hide');
	         		setTimeout(function(){
	         			$('#material-spinner').addClass('fade-in');
	         			$('#overlay-white').removeClass('on');
	         		},50);
	         		setTimeout(function(){
	         			$('main').load(searchType+'_search.html',function(){
	         				$('.last-name').text(searchTerm);
	         				$('.search-term').text(searchTerm);
		         			$('#material-spinner').removeClass('fade-in');
		         			$('.search-drawer').addClass('results');
		         			$('#search-close').removeClass('on');
		         			$('#patient-search').parent().removeClass('padding-left-mobile-48').addClass('padding-left-mobile-15');
		         			setTimeout(function(){
		         				$('#material-spinner').removeClass('on');
		         				$('main').removeClass('hide');
		         				$('main').removeClass('slide-down');
		         				checkColumns();
		         				highlightColumn();
		         			},400);
	         			});
	         			$('main').addClass('slide-down');
	         			$('button.search').addClass('active');
	         		},1000);
				} else {
					alert('Please enter a valid search.');
				}

		});

 $(document).on('click','.clear-history',function(){
 				$('#overlay-white').removeClass('fade-in');
 				setTimeout(function(){
 					$('#overlay-white').removeClass('on');
 				},400);
		   		$('.search-menu').addClass('slim');
         		$('.search-history').addClass('hide');
         		$('#universal-search').focus();
         		$('label[for=universal-search]').addClass('on');

		});

/*function closeSearch(e) {
	if(!$('.search-drawer').hasClass('hide')){
		var container = $('.search-drawer');
	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
			if($('#patient-search').val()==''){
	            $('.search-drawer').addClass('hide');
	        }
	        $('.search-history').addClass('hide');
	        $('#search-close').removeClass('on');
	        $('#overlay-white').removeClass('fade-in');
	        setTimeout(function () {
	            $('#overlay-white').removeClass('on');
	        },400);
	    }
	}
}*/



 $(document).on('click','.faceted-search a',function(){
                $('.faceted-search a').removeClass('active');
                $(this).addClass('active');
                if($('.search-drawer').hasClass('results')){
                	$('#search-button').click();
                }
        });

 $(document).on('click','#appt-filter-apply',function(){
                $(this).blur();
	            if ( $('#appt-date').is(":contains('January')" )) {
	                if($('input#filter-am').prop('checked')){
	                	$('.appt-PM').addClass('hidden');
	                	$('.appt-13').addClass('hidden');
	                	$('.appt-14').addClass('hidden');
	                	$('span.next-available').removeClass('hidden');
	                }
	                if($('input#filter-pm').prop('checked')){
	                	$('.appt-AM').addClass('hidden');
	                	$('.appt-12.appt-PM').removeClass('hidden');
	                	$('.appt-13').addClass('hidden');
	                	$('.appt-14').addClass('hidden');
	                	$('span.next-available').addClass('hidden');
	                }
	                if($('input#filter-anytime').prop('checked')){
	                	$('.appt-12').removeClass('hidden');
	                	$('.appt-13').addClass('hidden');
	                	$('.appt-14').addClass('hidden');
	                	$('span.next-available').addClass('hidden');
	                }
                }
                if ( $('#appt-date').is(":contains('May 13')" )) {
	                if($('input#filter-am').prop('checked')){
	                	$('.appt-PM').addClass('hidden');
	                	$('.appt-12').addClass('hidden');
	                	$('.appt-14').addClass('hidden');
	                }
	                if($('input#filter-pm').prop('checked')){
	                	$('.appt-AM').addClass('hidden');
	                	$('.appt-13.appt-PM').removeClass('hidden');
	                	$('.appt-12').addClass('hidden');
	                	$('.appt-14').addClass('hidden');
	                }
	                if($('input#filter-anytime').prop('checked')){
	                	$('.appt-13').removeClass('hidden');
	                	$('.appt-12').addClass('hidden');
	                	$('.appt-14').addClass('hidden');
	                	$('span.next-available').addClass('hidden');
	                }
                }
        });

$(document).on('click','#appt-search',function(){
				$('#appt-search-results').removeClass('hidden');
				$('.site-map').removeClass('margin-top-400');
				$(this).blur();
			});

$(document).on('click','#appt-search-mobile',function(){
    $('#appt-search-results').removeClass('hidden');
    $(this).parent().addClass('hidden');
    $(this).blur();
    $('#appt-search-form').addClass('hidden');
    $('#pcp-mobile-selected-container').removeClass('hidden');
    $('#pcp-appt-table-mobile').removeClass('hidden');
    $('#pcp-mobile-selected-container').addClass('show-8');
    $('#pcp-mobile-change-filter-btn').removeClass('hidden');
});
$(document).on('click','.btn-appt-refine-search',function(){
    $(this).blur();
    $('#appt-search-mobile').parent().removeClass('hidden');
    $('#pcp-mobile-selected-container').removeClass('show-8');
    $('#pcp-mobile-selected-container').addClass('hidden');
    $('#appt-search-form').removeClass('hidden');
    $('#ppt-search-form').addClass('show-8');
});

$(document).on('click','#appt-next, #appt-next-mobile',function(){
                $(this).blur();
                $('input#filter-anytime').prop('checked', true);
                if ( $('#appt-date, #appt-date-mobile').is(":contains('April 7')" )) {
				    $('.appt-19').addClass('hidden');
				    $('.appt-20').removeClass('hidden');
				    // $('.appt-13').addClass('initial');
				    $('span.next-available').addClass('hidden');
				    $('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Saturday, April 8</span>');
				 } else {
				 if ( $('#appt-date').is(":contains('April 8')" )) {
				    $('.appt-20').addClass('hidden');
				    $('.appt-23').removeClass('hidden');
				    // $('.appt-14').addClass('initial');
				    $('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Sunday, April 9</span>');
				 } else {
                     if ( $('#appt-date').is(":contains('April 6')" )) {
                        $('.appt-20').addClass('hidden');
                        $('.appt-19').removeClass('hidden');
                        // $('.appt-14').addClass('initial');
                        $('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Friday, April 7</span>');
                     }
                  }
				}
});


$(document).on('click','#appt-prev, #appt-prev-mobile',function(){
                $(this).blur();
                $('input#filter-anytime').prop('checked', true);
                if ( $('#appt-date, #appt-date-mobile').is(":contains('April 7')" )) {
				    $('.appt-19').addClass('hidden');
				    // $('.appt-12').addClass('initial');
                    // $('.appt-13').removeClass('initial');
				    $('.appt-20').removeClass('hidden');
				    $('.next-avail-20').addClass('hidden');
				    $('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Thursday, April 6</span>');
				  } else {
				 if ( $('#appt-date, #appt-date-mobile').is(":contains('April 8')" )) {
				    $('.appt-19').removeClass('hidden');
                    $('.appt-20').addClass('hidden');
				    // $('.appt-13').addClass('initial');
				    $('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Friday, April 7</span>');
				 } else {
                 if ( $('#appt-date, #appt-date-mobile').is(":contains('April 9')" )) {
                    $('.appt-20').removeClass('hidden');
                    $('.appt-23').addClass('hidden');
                    // $('.appt-13').addClass('initial');
                    $('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Saturday, April 8</span>');
                 }}
				 }
});
$(document).on('click','#next-avail-3',function(){
				$('input#filter-anytime').prop('checked', true);
				$('.appt-12').addClass('hidden');
				$('.appt-14').addClass('hidden');
				$('.appt-13').removeClass('hidden');
				$('span.next-available').addClass('hidden');
				$('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Friday, February 3</span>');
				$(this).blur();
			});

$(document).on('click','#appt-reschedule-search',function(){
	$('#appt-date, #appt-date-mobile').replaceWith('<span id="appt-date" class="inline-block">Monday, April 10</span>');
	$('.appt-19').addClass('hidden');
    $('.appt-20').removeClass('hidden');
    $(this).blur();
});

// $(document).on('click','.renew-checkbox',function(){
//     $(this).blur();
//     if ($(this).is(':checked')) {
//         $('#btn-renew').replaceWith('<a id="btn-renew" class="right block" href="renew-1.html"><button class="btn-primary">Continue</button></a>');
//     };
// });
// $(document).on('click','.renew-checkbox',function(){
// 	$(this).blur();
// 	if (!$(this).is(':checked')) {
// 	    $('#btn-renew').replaceWith('<a id="btn-renew" class="right block" href="javascript:void(0)"><button class="btn-primary disabled">Continue</button></a>');
// 	};
// });
$(document).on('click','.renew-checkbox',function(){
    if ($(this).hasClass('checked')) {
        $('#btn-renew').replaceWith('<a id="btn-renew" class="right block float-mobile-none margin-top-mobile-10" href="renew-1.html"><button class="btn-primary">Continue</button></a>');
    } else {
        $('#btn-renew').replaceWith('<a id="btn-renew" class="right block float-mobile-none margin-top-mobile-10" href="javascript:void(0)"><button class="btn-primary disabled">Continue</button></a>');
      }
});


$(document).on('click','body',function(){
				$('.btn', '.btn-blue').blur();
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

         /*$(document).on('keyup','#patient-search',function(){
         		if($(this).val()=='') {
         			$('#search-close').addClass('on');
         		} else {
         			$('#search-close').removeClass('on');
         		}
		});*/

         function checkInput(thisInput){
         	if(thisInput.val()=='') {
         			thisInput.next('.clear-search').removeClass('on');
         		} else {
         			thisInput.next('.clear-search').addClass('on');
         		}
         }


$(document).on('click','.return-to-top a',function(){
				$('html,body').animate({scrollTop:0},'500');
			});

// $(document).on('click','.table-head .table-data',function(){
// 	if($(this).hasClass('sorted')){
// 		$(this).find('.material-icons').toggleClass('rotate');
// 	} else {
// 		$('.table-head .table-data').removeClass('sorted');
// 		$(this).addClass('sorted');
// 		highlightColumn();
// 	}
// });

$(document).on('click','input[type=text]',function(){
         		$(this).prev('label').addClass('on');
         		$(this).focus();
		 });

$(document).on('click','#cancel-action',function(){
	$('.table-data .checkbox').removeClass('checked');
	$('.table-data .radio-button').removeClass('active').html('<i class="material-icons">radio_button_unchecked</i>');
	$('.table-row').removeClass('checked');
	anyChecked();
});

$(document).on('click','.selection:not(.inactive)',function(){
	$(this).next('.selection-menu').addClass('on');
	$('#overlay-clear').addClass('on');
});
$(document).on('click','#overlay-clear',function(){
	$('.selection-menu').removeClass('on');
	$('#overlay-clear').removeClass('on');
});

$(document).on('click','.current-filter i',function(){
    $(this).parent().remove();
});


 $(document).on('click','.add-filter',function(){
                if(!$('#narrow-search-all').val()==''){
                    $('.active-filters').append('<span class="current-filter">'+$('#narrow-search-all').val()+'<i class="material-icons inline-block right margin-left-5">close</i></span>');
                    $('#narrow-search-all').val('');
                } else {
                    alert('To add a filter, first enter a text string to filter by into the filtration input.');
                }

        });

$(document).on('click','i.card-drop-icon',function(){
    if ($(this).text() === 'keyboard_arrow_down') {
        $(this).text('keyboard_arrow_up');
    } else {
        $(this).text('keyboard_arrow_down');
    }
});

  $(document).on('keyup','#narrow-search-all',function(){
                var searchString = $(this).val().toLowerCase();

                $('.table-row').each(function(){
                    var matchesOne = false;
                    $(this).children('.table-data').each(function(){
                        var str = $(this).text().toLowerCase();
                        var strLocation = str.indexOf(searchString);
                        //console.log(searchString+', '+str+', '+strLocation);
                        $('.add-filter').addClass('on');
                        if(strLocation!==-1){
                            matchesOne = true;
                        }
                    });
                    if(matchesOne==true){
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });

         });


$(document).on('click','.selection-menu .menu-item',function(){
	var clickedMenuItem = $(this).attr('id');
	$(this).find('.checkbox').toggleClass('checked');
	if($('.'+clickedMenuItem).css('display')=='none'){
		$('.'+clickedMenuItem).show();
	} else {
		$('.'+clickedMenuItem).hide();
	}
	//$('.'+clickedMenuItem).toggleClass('hidden');
	checkWidths();
	headerPosition = $('.sticky-header').offset();
	headerWidth = $('.sticky-header').width();
	tablePosition = $('.table-head').offset();
	tableWidth = $('.table-head').width();
	$('.sticky-header.fixed').css('left',headerPosition.left+'px');
	$('.sticky-header.fixed').css('width',headerWidth+'px');
	$('.table-head.fixed').css('left',tablePosition.left+'px');
	var count=1;
	$('.table-head:not(.fixed) .table-data').each(function(){
		var tempWidth = $(this).css('width');
		$('.table-head.fixed .table-data:nth-child('+count+')').css('width',tempWidth);
		count++;
	});
});
function checkColumns(){
	$('.menu-item .checkbox').removeClass('checked');
	$('.table-head .table-data').not(':hidden').each(function(){
		var className = $(this).attr('class').replace('table-data ','').replace('sorted','').replace('highlight','');
		$('#'+className+' .checkbox').addClass('checked');
		//alert(className);
	});
}

function checkWidths(){
	if($('.table').width()>$('.card:not(.legend)').width()){
		setTimeout(function(){
			$('.edge').css('height',(Number($('.table').css('height').replace('px',''))+48)+'px');
		},100);
		$('.edge').addClass('on');
	} else {
		$('.edge').removeClass('on');
	}
}
var newTableHead;
var newStickyHead;
var headerPosition;
var headerWidth;
var stickyPosition;
var tablePosition;
var tableWidth;
var newLinkToTop;
var fabLocation;
$(document).ready(function(){

	$('body').bind('keydown', function(e) {
		if(e.keyCode==90){
			if($('#style-optum').attr('href')=="css/optumcare.css") {
				$('#style-optum').remove();
			} else {
				$('#style-wire').after('<link href="css/optumcare.css" rel="stylesheet" id="style-optum" />');
			}

		}
	});

	$('#patient-search').bind('keydown', function(e) {
		if(e.keyCode==13){
			$('#search-button').click();
		}
	});

	checkColumns();
	checkWidths();
	setTimeout(function(){
		headerPosition = $('.sticky-header').offset();
		headerWidth = $('.sticky-header').width();
		tablePosition = $('.table-head').offset();
		tableWidth = $('.table-head').width();
		fabLocation = $('.return-to-top:not(.fixed)').offset();
	},100);
	stickyPosition = $('.sticky-header').offset();
	newTableHead = $('.table-head').clone().addClass('fixed extended');
	newStickyHead = $('.sticky-header').clone().addClass('fixed');
	newLinkToTop = $('.return-to-top').clone().addClass('fixed');

	$('main').append(newStickyHead);
	$('main').append(newTableHead);
	$('main').append(newLinkToTop);

	/*var tableRow = $('.table-row').clone().wrap('<div>').parent().html();
	var i=0;
	while(i<23) {
		$('.table').append(tableRow);
		i++;
	}*/

});
$(window).resize(function(){
	checkColumns();
	checkWidths();
	headerPosition = $('.sticky-header').offset();
	headerWidth = $('.sticky-header').width();
	tablePosition = $('.table-head').offset();
	tableWidth = $('.table-head').width();
	$('.sticky-header.fixed').css('left',headerPosition.left+'px');
	$('.sticky-header.fixed').css('width',headerWidth+'px');
	$('.table-head.fixed').css('left',tablePosition.left+'px');
	var count=1;
	$('.table-head:not(.fixed) .table-data').each(function(){
		var tempWidth = $(this).css('width');
		$('.table-head.fixed .table-data:nth-child('+count+')').css('width',tempWidth);
		count++;
	});
});


$(document).on('click','#location-retail',function(){
	$('input#location-mail').prop('checked', false);
	$('#search-mail').hide();
	$('#search-retail').show();
});

$(document).on('click','#location-mail',function(){
	$('input#location-retail').prop('checked', false);
	$('#search-retail').hide();
	$('#search-mail').show();
});

$(document).ready(function() {
    $('.slim-menu').dropit();
 //    $(".chevron").click(function(){
	//     $( this ).children('.chevy').toggleClass("down");
	// });
	$('#search-mail-input').on('focus', function() {
	    $('#btn-find-mail').removeClass('disabled');
	});
	$('#search-retail-input-1').on('focus', function() {
	    $('#btn-find-retail').removeClass('disabled');
	});
    $('#search-retail-input-2').on('focus', function() {
        $('#btn-find-retail').removeClass('disabled');
    });
	$('#btn-add-pharmacy, #btn-change-pharmacy').on('click', function() {
	    $(this).fadeOut('fast');
	    $('#add-location-container').fadeIn();
	});
	$('#add-location-container.location-container .cancel').on('click', function() {
	    $('#add-location-container').fadeOut();
	    $('#btn-add-pharmacy').show();
	});
	$('#btn-find-retail').on('click', function() {
	    $('#retail-legend').addClass('block');
	    $('#retail-list').slideDown();
	    $('#retail-map').fadeIn();
	});
/*
	$('.retail-list-item').on('click', function() {
	    $('#add-location-container').fadeOut();
	    $('#selected-location').fadeIn();
	    $('#btn-change-pharmacy').fadeIn();
	    $('#btn-submit-renewal').removeClass('disabled');
	    $("#btn-submit-renewal").parent('a').attr('href', 'renew-2.html');
			$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	$('.retail-list-item.item-a1').on('click', function() {
	    $('#add-location-container').fadeOut();
	    $('#selected-location').fadeIn();
	    $('#btn-change-pharmacy').fadeIn();
	    $('#btn-submit-renewal').removeClass('disabled');
	    $("#btn-submit-renewal").parent('a').attr('href', 'renew-a2.html');
	});
	$('.retail-list-item.item-b1').on('click', function() {
	    $('#add-location-container').fadeOut();
	    $('#selected-location').fadeIn();
	    $('#btn-change-pharmacy').fadeIn();
	    $('#btn-submit-renewal').removeClass('disabled');
	    $("#btn-submit-renewal").parent('a').attr('href', 'renew-b2.html');
	});
*/
	$('#retail-list-item-1').on('click', function() {
	    $('#renew-modal-body').replaceWith('<div id="renew-modal-body" class="modal-body"<p><strong>CVS Pharmacy</strong><br>3300 S Las Vegas Blvd<br>Las Vegas, NV 89109<br><span class="space">(702) 866-2350<br>Open 24 hours</p></div>');
	});

	$('#retail-list-item-2').on('click', function() {
	    $('#renew-modal-body').replaceWith('<div id="renew-modal-body" class="modal-body"<p><strong>CVS Pharmacy</strong><br>1812 E Charleston Blvd<br>Las Vegas, NV 89104<br><span class="space">(702) 384-5047<br>Sun - Sat: 8:00AM - 10:00PM</p></div>');
	});

	$('#retail-list-item-1').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>3300 S Las Vegas Blvd<br>Las Vegas, NV 89109<br>(702) 866-2350</p>');
	});
	$('#retail-list-item-2').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>1812 E Charleston Blvd<br>Las Vegas, NV 89104<br>(702) 384-5047</p>');
	});
	$('#retail-list-item-3').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>3550 W Sahara Ave<br>Las Vegas, NV 89102<br>(702) 873-7171</p>');
	});
	$('#retail-list-item-4').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>4800 W Charleston Blvd<br>Las Vegas, NV 89146<br>(702) 877-9026</p>');
	});
	$('#retail-list-item-5').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>2100 W Charleston Blvd<br>Las Vegas, NV 89102<br>(702) 474-0259</p>');
	});
	$('#retail-list-item-6').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>8320 W Cheyenne Ave<br>Las Vegas, NV 89129<br>(702) 658-1229</p>');
	});
	$('#retail-list-item-7').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>2425 E Desert Inn Rd<br>Las Vegas, NV 89121<br>(702) 734-0258</p>');
	});
	$('#retail-list-item-8').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>7007 W Ann Rd<br>Las Vegas, NV 89130<br>(702) 396-8947</p>');
	});
	$('#retail-list-item-9').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>1600 N Buffalo Dr<br>Las Vegas, NV 89128<br>(702) 804-5511</p>');
	});
	$('#retail-list-item-10').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS Pharmacy</strong><br>2700 S Las Vegas Blvd #100<br>Las Vegas, NV 89109<br>(702) 369-2619</p>');
	});
	$('#mail-list-item-1').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>OptumRx - Commercial Mail Order</strong>');
	});
	$('#mail-list-item-2').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>Blink Health</strong>');
	});
	$('#mail-list-item-3').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>CVS/caremark</strong>');
	});
	$('#mail-list-item-4').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>Express Scripts</strong>');
	});
	$('#mail-list-item-5').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>Health Warehouse</strong>');
	});
	$('#mail-list-item-6').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>Pill Pack</strong>');
	});
	$('#mail-list-item-7').on('click', function() {
	    $('#selected-location').replaceWith('<p id="selected-location" class="margin-bottom-0"><strong>Walgreens - Mail Service Pharmacy</strong>');
	});
	$('.medication-remove').on('click', function() {
	    $(this).closest('section').fadeOut();
	});
	$('#btn-find-mail, #view-all-mail').on('click', function() {
	    $('#mail-legend-rec').addClass('block');
	    $('#mail-legend-other').addClass('block');
	    $('#mail-list-rec').slideDown();
	    $('#mail-list-other').slideDown();
        $('#mail-search-container').addClass('block');
        $('#mail-search-container').slideDown();
	});
	 $('.retail-list-item').hover(
        function() {
           $(this).children('.list-item-select-caret').show();
        },
        function(){
           $(this).children('.list-item-select-caret').hide();
        }
    );
    $('#CC-list-item-1').hover(
        function() {
           $('span#map-pin-marker-1').css('opacity', '0.8');
        },
        function(){
           $('span#map-pin-marker-1').css('opacity', '0');
        }
    );
    $('#CC-list-item-2').hover(
        function() {
           $('span#map-pin-marker-2').css('opacity', '0.8');
        },
        function(){
           $('span#map-pin-marker-2').css('opacity', '0');
        }
    );
    $('#CC-list-item-3').hover(
        function() {
           $('span#map-pin-marker-3').css('opacity', '0.8');
        },
        function(){
           $('span#map-pin-marker-3').css('opacity', '0');
        }
    );
    $('#CC-list-item-4').hover(
        function() {
           $('span#map-pin-marker-4').css('opacity', '0.8');
        },
        function(){
           $('span#map-pin-marker-4').css('opacity', '0');
        }
    );
    $('#CC-list-item-5').hover(
        function() {
           $('span#map-pin-marker-5').css('opacity', '0.8');
        },
        function(){
           $('span#map-pin-marker-5').css('opacity', '0');
        }
    );
    $('#CC-list-item-6').hover(
        function() {
           $('span#map-pin-marker-6').css('opacity', '0.8');
        },
        function(){
           $('span#map-pin-marker-6').css('opacity', '0');
        }
    );
    $('#CC-list-item-7').hover(
        function() {
           $('span#map-pin-marker-7').css('opacity', '0.8');
        },
        function(){
           $('span#map-pin-marker-7').css('opacity', '0');
        }
    );
    $('#locations-map').on('click', function() {
        $('.location-tooltip').hide();
    });
    $('#map-pin-marker-1').on('click', function() {
        $('.location-tooltip').hide();
        $('#location-tooltip-1').show();
    });
    $('#map-pin-marker-2').on('click', function() {
        $('.location-tooltip').hide();
        $('#location-tooltip-2').show();
    });
    $('#map-pin-marker-3').on('click', function() {
        $('.location-tooltip').hide();
        $('#location-tooltip-3').show();
    });
    $('#map-pin-marker-4').on('click', function() {
        $('.location-tooltip').hide();
        $('#location-tooltip-4').show();
    });
    $('#map-pin-marker-5').on('click', function() {
        $('.location-tooltip').hide();
        $('#location-tooltip-5').show();
    });
    $('#map-pin-marker-6').on('click', function() {
        $('.location-tooltip').hide();
        $('#location-tooltip-6').show();
    });
    $('#map-pin-marker-7').on('click', function() {
        $('.location-tooltip').hide();
        $('#location-tooltip-7').show();
    });
    $('.selectpicker').on('hide.bs.select', function () {
        $('.btn-find-CC-times').removeClass('disabled');
    });
    $('.btn-find-CC-times').on('click', function() {
        $('#CC-time-options').show();
    });
    $('.retail-list-item').on('click', function() {
        $('#SelectPharmacy').show();
    });
    $('#CC-time-selection').on('click', function() {
        $('#CC-time-options').hide();
        $('#CC-reason-select').hide();
        $('#CC-confirm-container').show();
    });
    $('.summary-additional-details').on('keyup', function() {
        $('#btn-CC-checkin').removeClass('disabled');
    });
	// $('#Disclaimer').on('click', function() {
 //        $('#btn-evisit-submit').toggleClass('disabled');
 //    });
    $('#evisitmessage').on('keyup', function() {
        $('#btn-evisit-submit').removeClass('disabled');
    });
    $('#evisit-phone-check').on('click', function() {
        $('#evisit-phone').toggleClass('hidden');
    });
    $('#DelegateTerms').on('click', function() {
        if($('#become-delegate').hasClass('checked')) {
        	$('#btn-delegate-submit').parent().replaceWith('<a href="delegate-both-pending.html" style="margin-left:-15px;"><button id="btn-delegate-submit" class="btn-primary margin-top-20 disabled">Submit Request</button></a');
        } else {
        $('#btn-delegate-submit').parent().replaceWith('<a href="delegate-pending.html" style="margin-left:-15px;"><button id="btn-delegate-submit" class="btn-primary margin-top-20 disabled">Submit Request</button></a');
        }
        $('#btn-delegate-submit').toggleClass('disabled');
    });
    $('#DelegateTermsRequest').on('click', function() {
        if($('#become-delegate').hasClass('checked')) {
        	$('#btn-delegate-submit').parent().replaceWith('<a href="delegate-both-pending.html" style="margin-left:-15px;"><button id="btn-delegate-submit" class="btn-primary margin-top-20 disabled">Submit Request</button></a');
        } else {
        $('#btn-delegate-submit').parent().replaceWith('<a href="delegate-request-pending.html" style="margin-left:-15px;"><button id="btn-delegate-submit" class="btn-primary margin-top-20 disabled">Submit Request</button></a');
        }
        $('#btn-delegate-submit').toggleClass('disabled');
    });
    $('.enablerenew').on('change', function() {
        $('#RenewMed').toggleClass('disabled');
    });
	$('#evisitmessage').on("load propertychange keyup input paste",
    function () {
        var limit = $(this).data("limit");
        var remainingChars = limit - $(this).val().length;
        if (remainingChars <= 0) {
            $(this).val($(this).val().substring(0, limit));
        }
        $(this).closest('div').find(".countdown").text(remainingChars<=0?0:remainingChars);
    });
	$('img.card-drop-arrow').on({
	    'click': function() {
	         var src = ($(this).attr('src') === './img/arrow_up_blk.png')
	            ? './img/arrow_down_blk.png'
	            : './img/arrow_up_blk.png';
	         $(this).attr('src', src);
	    }
	});
    var map = {90: false, 220: false};
    $(document).keydown(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = true;
            if (map[90] && map[220]) {
                $('.pop').toggleClass('glow');
            }
        }
    }).keyup(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = false;
        }
    });

});

$(document).on('click','#vitals-graph-btn',function(){
    $('#vitals-list-container').fadeOut(250);
    $('#vitals-graph-container').fadeIn(250);
    $(this).find('img').attr('src', './img/icon-graph-solid.png');
    $('#vitals-list-btn').find('img').attr('src', './img/icon-list-outline.png');
});

$(document).on('click','#vitals-list-btn',function(){
    $('#vitals-graph-container').fadeOut(250);
    $('#vitals-list-container').fadeIn(250);
    $(this).find('img').attr('src', './img/icon-list-solid.png');
    $('#vitals-graph-btn').find('img').attr('src', './img/icon-graph-outline.png');
});

$(document).on('click','#mobile-home-load-more',function(){
    $('.tablet-hide').removeClass('tablet-hide');
    $('.mobile-hide').removeClass('mobile-hide');
    $('#mobile-home-load-more').addClass('hidden');
});


$(window).scroll(function(){
    if ($(window).scrollTop() >= 145) {
			$('.fixed-header').removeClass('hidden');
			$('.fixed-header').addClass('block');
    }
    else {
			$('.fixed-header').removeClass('block');
			$('.fixed-header').addClass('hidden');
    }
});

// $(this).closest('li').siblings().find('i').removeClass('icon-star').addClass('icon-star-empty');


// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// });
// $('.dropdown-toggle').dropdown()
$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});
