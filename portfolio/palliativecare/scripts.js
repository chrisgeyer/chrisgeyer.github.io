$(document).ready(function() {
	$('#AddSecondary').on('click', function() {
		$('#AddSecondaryDiagnosis').removeClass('slds-hide');
		$('#AddSecondary').addClass('slds-hide');
	});
	$('#AddProblem').on('click', function() {
		$('#AddProblem2').removeClass('slds-hide');
		$('#AddProblem').addClass('slds-hide');
	});
	$('#AddPhone').on('click', function() {
		$('#Phone2').removeClass('slds-hide');
		$('#AddPhone').addClass('slds-hide');
	});
	$('#NewVirtual').on('click', function() {
		$('#Virtual').removeClass('slds-hide');
	});
	$('#NewHCE').on('click', function() {
		$('#HCE').removeClass('slds-hide');
		console.log('test');
		if(document.URL.indexOf('profile.html') >= 0){
			$('#patient-lookup').val('Sylvia Wright');
		}
	});
	$('#AddHCE, #SaveHCE').on('click', function() {
		$('#HCE').addClass('slds-hide');
		$('#HCESuccess').removeClass('slds-hide');
		$('#HCE3').removeClass('slds-hide');
		//$('#HCE3').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
	});
	$('.EditHCE').on('click', function() {
		$('#HCE').removeClass('slds-hide');
		$('#AddHCE').addClass('slds-hide');
		$('#SaveHCE').removeClass('slds-hide');
		$('#patient-lookup').val('Beverly Jones');
		$('#MedicareID').val('1234567890');
		$('#AdmittingDiagnosis').val('Heart Failure');
		$('#HospName').val('General Hospital');
		$('#HospLoc').val('NY, NY');
	});
	$('#EnrollPatient').on('click', function() {
	  //localStorage.setItem('enrolled', 'yes');
		sessionStorage.enrolled = true;
		window.location = 'engagement.html';
	});
	$('#NewOrder').on('click', function() {
		$('#Order').removeClass('slds-hide');
		$('#Order').addClass('neworder');
		if(document.URL.indexOf('profile.html') >= 0){
			$('#OrderPatient').val('Sylvia Wright');
		}
	});
	$('#NewVisit').on('click', function() {
		$('#Visit').removeClass('slds-hide');
	});
	$('#NewAppt').on('click', function() {
		$('#Appt').removeClass('slds-hide');
		if(document.URL.indexOf('initial-9.html') >= 0){
			$('#patient-lookup').val('Sylvia Wright');
		}
		if(document.URL.indexOf('follow-up.html') >= 0){
			$('#patient-lookup').val('Sylvia Wright');
		}
	});
	$('.ViewADL').on('click', function() {
		$('#ADL').removeClass('slds-hide');
	});
	$('.ScheduleFollowup').on('click', function() {
		$('#Followup').removeClass('slds-hide');
		if(document.URL.indexOf('profile.html') >= 0){
			$('#test').val('Sylvia Wright');
		}
	});
	$('#Arrow').on('click', function() {
		$('#Switch').toggleClass('slds-hide');
		console.log('test');
		$(this).stop();
	});
	$('#Calendar').on('click', function() {
		$('#DatePicker').toggleClass('slds-hide');
	});
	$('#Date').on('click', function() {
		if($('#Date').val() != 'mm/dd/yyyy') {
			$('#Available').toggleClass('slds-hide');
		}
	});
	$('#AddTask').on('click', function() {
		$('#Task').removeClass('slds-hide');
		$('#Task').addClass('addtask');
		if(document.URL.indexOf('profile.html') >= 0){
			$('#TaskPatient').val('Sylvia Wright');
		}
	});
	$('#CreateReminder').on('click', function() {
		$('#Task').removeClass('slds-hide');
		$('#Task').addClass('addtask');
		$('#Task .bottom-right').attr('style', 'right:540px;')
		if(document.URL.indexOf('profile.html') >= 0){
			$('#TaskPatient').val('Sylvia Wright');
		}
	});
	$('#CreateTask').on('click', function() {
		$('#Task').addClass('slds-hide');
		$('#TaskSuccess').removeClass('slds-hide');
		$('#ToastCreate').removeClass('slds-hide');
		$('#Task4').removeClass('slds-hide');
	});
	$('.CreateOrder').on('click', function() {
		$('#Order').addClass('slds-hide');
		$('#OrderSuccess').removeClass('slds-hide');
	});
	$('#Delete').on('click', function() {
		$('#Order').addClass('slds-hide');
		$('#OrderFail').removeClass('slds-hide');
		$('tr.overdue').addClass('slds-hide');
	});
	$('#LogCall').on('click', function() {
		$('#Call').addClass('slds-hide');
		$('#CallSuccess').removeClass('slds-hide');
	});
	$('.slds-docked-composer__actions button').on('click', function() {
		$(this).parent().parent().parent('.slds-docked-composer').addClass('slds-hide');
	});
	var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
  if(dd<10){dd='0'+dd}
  if(mm<10){mm='0'+mm}
  today = yyyy+'-'+mm+'-'+dd;
	$('#TaskDate').val(today);
	$('#OrderDate').val(today);
	$('#DischargeDate').val(today);
	$('#ExpireDate').val(today);
	$('.EditAppt').on('click', function() {
		$('#Appt').removeClass('slds-hide');
		$('#Appt').addClass('edit');
		$('#SelectAppt').val('Follow up');
		$('#Date').val('2017-03-09');
		$('#Time').val('10:00am');
		$('#patient-lookup').val('Sylvia Wright');
		$('#ApptDesc').val('Lorem Ipsum');
	});
	$('.EditTask').on('click', function() {
		$('#Task').removeClass('slds-hide');
		$('#Task').addClass('edittask');
		$('#SelectTask').val('Patient follow up');
		$('#TaskDesc').val('Lorem Ipsum');
		$('#TaskPatient').val('Sylvia Wright');
		$('#TaskAssigned').val('Social Worker');
		$('#TaskStatus').val('In Progress');
	});
	$('.EditOrder').on('click', function() {
		$('#Order').removeClass('slds-hide');
		$('#Order').addClass('edittask');
		$('#SelectOrder').val('Labs');
		$('#OrderDesc').val('Lorem Ipsum');
		$('#OrderPatient').val('Sylvia Wright');
		$('#TaskAssigned').addClass('slds-hide');
		$("label[for='TaskAssigned']").addClass('slds-hide');
	});
	$('.CompleteTask').on('click', function() {
		$(this).parent().parent().parent('tr').addClass('slds-hide');
		$('#ToastComplete').removeClass('slds-hide');
		$('#TaskSuccess').removeClass('slds-hide');
	});
	$('#NewMed').on('click', function() {
		$('#Med').removeClass('slds-hide');
	});
	$('#NewTeam').on('click', function() {
		$('#Team').removeClass('slds-hide');
	});
	$('#AddSW').on('click', function() {
		$('#Team').addClass('slds-hide');
		$('#NewSW').removeClass('slds-hide');
	});
	$('#NewCall').on('click', function() {
		$('#Call').removeClass('slds-hide');
		if(document.URL.indexOf('profile.html') >= 0){
			$('#patient-lookup').val('Sylvia Wright');
		}
	});
	$('#StartDischarge').on('click', function() {
		$('#Discharge').removeClass('slds-hide');
		if(document.URL.indexOf('profile.html') >= 0){
			$('#PatientDischarge').val('Sylvia Wright');
		}
	});
	if(document.URL.indexOf('initial-6.html') >= 0){
		$('.next').removeClass('slds-hide');
	}
	$('.next').on('click', function() {
		var tab = $(this).parent().parent('.slds-tabs--scoped__content').attr('id');
		$('#' + tab + '__item').parent().next().children().click();
	});
	$('#AddAnother').on('click', function() {
		$('#Another').removeClass('slds-hide');
	});
	$('#EditMed').on('click', function() {
		$('#MedName').val('Lasix');
		$('#MedDose').val('20mg PO BID');
	});
	$('.riskedit').on('click', function() {
		$(this).addClass('slds-hide');
		$('.risksave').removeClass('slds-hide');
		$('.riskdata').addClass('slds-hide');
		$('.riskentry').removeClass('slds-hide');
	});
	$('.risksave').on('click', function() {
		$(this).addClass('slds-hide');
		$('.riskedit').removeClass('slds-hide');
		$('.riskentry').addClass('slds-hide');
		$('.riskdatanew').removeClass('slds-hide');
		$('.riskdate').addClass('slds-hide');
		$('.newriskdate').removeClass('slds-hide');
		$('.profile img').attr('class', 'yellow');
	});
	$('.phoneedit').on('click', function() {
		$(this).addClass('slds-hide');
		$('.phonesave').removeClass('slds-hide');
		$('.phonedata').addClass('slds-hide');
		$('.phoneentry').removeClass('slds-hide');
	});
	$('.phonesave').on('click', function() {
		$(this).addClass('slds-hide');
		$('.phoneedit').removeClass('slds-hide');
		$('.phoneentry').addClass('slds-hide');
		$('.phonedatanew').removeClass('slds-hide');
		$('.phonedate').addClass('slds-hide');
		$('.newphonedate').removeClass('slds-hide');
	});
	$('.viewfollowup').on('click', function() {
		$(this).parent().next('li.followup').removeClass('slds-hide');
	});
	$('.viewdetail').on('click', function() {
		$(this).closest('tr').next('.details').removeClass('slds-hide');
	});
	$('.taskcomplete').on('click', function() {
		$(this).parent().parent().parent().parent().parent().parent('li').addClass('slds-hide');
	});
	$('.slds-notify__close').on('click', function() {
		$(this).parent().parent().addClass('slds-hide');
	});
	$('#HomeRelation').on('change', function() {
		if ($(this).val() === 'Other') {
			$('#OtherRelation').removeClass('slds-hide');
		}
	});
	$('#SelectTask').on('change', function() {
		if ($(this).val() === 'Other') {
			$('#OtherTask').removeClass('slds-hide');
		}
	});
	$('#Oxygen').on('change', function() {
		if ($(this).val() === 'Supplemental') {
			$('#Supplemental').removeClass('slds-hide');
		}
	});
	$('#DischargeReason').on('change', function() {
		if ($(this).val() === 'Expire') {
			$('#Expire').removeClass('slds-hide');
		}
		if ($(this).val() === 'Hospice') {
			$('#Hospice').removeClass('slds-hide');
		}
	});
	$('#SelectOrder').on('change', function() {
		if ($(this).val() === 'DME') {
			$('#DME').removeClass('slds-hide');
		}
		if ($(this).val() === 'Hospice') {
			$('#Hospice').removeClass('slds-hide');
			$('#HospiceDesc').addClass('slds-hide');
			// change label value instead
		}
	});
	$('#DischargeLocation').on('change', function() {
		if ($(this).val() != 'Home') {
			$('').removeClass('slds-hide');
		}
	});
	$('#DMEType').on('change', function() {
		if ($(this).val() === 'Oxygen') {
			$('.dmeoxygen').removeClass('slds-hide');
		}
	});
	$('#SelectAppt').on('change', function() {
		if ($(this).val() === 'Other') {
			$('#Duration').removeClass('slds-hide');
		}
	});
	$('.slds-picklist__input').off().on('click', function() {
		console.log('test');
		$('#Filter').toggleClass('slds-hide');
	});
	$('.bmi').on('input', function() {
		var lbs = $('#Weight').val();
		var inch = $('#Height').val();
		// console.log($('#Height').val());
		// console.log($('#Weight').val());
		if($.trim(lbs) !== '' && $.trim(inch) !== '')	{
			$('#BMI').removeClass('slds-hide');
		}
	});
	$(".adl").change(function() {
    var names = {};
    $('.adl').each(function() {
        names[$(this).attr('name')] = true;
    });
    var count = 0;
    $.each(names, function() {
        count++;
    });
    if ($('.adl:checked').length === count) {
        // console.log("all answered");
				$('#ADLTotal').removeClass('slds-hide');
    }
	}).change();
	$('.pps').on('change', function() {
		var percent = $(this).attr('id');
		$('.hundred, .ninety, .eighty, .seventy, .sixty, .fifty, .fourty, .thirty, .twenty, .ten, .zero').addClass('slds-hide');
		$('.' + percent).removeClass('slds-hide');
	});
	$('.other').on('click', function() {
		$(this).parent().next('.desc').toggleClass('slds-hide');
	});
	$('.edema').on('click', function() {
		$(this).parent().next().next().next().next('.desc').toggleClass('slds-hide');
	});
	$('.toggle').on('change', function() {
		console.log('test');
		$(this).next().toggleClass('slds-hide');
	});
	$('.showdetail').on('click', function() {
		$(this).parent().parent().next('.details').toggleClass('slds-hide');
	});
	$('.slds-tabs--scoped__link').on('click', function() {
		$('.slds-tabs--scoped__item').removeClass('slds-active');
		$(this).closest('li').addClass('slds-active');

		$('.slds-tabs--scoped__content').removeClass('slds-show');
		$('.slds-tabs--scoped__content').addClass('slds-hide');
		var tab = $(this).prop('id');
		/*console.log(tab);
		console.log(tab.substring(0, tab.indexOf('__item')));*/
		$('#' + tab.substring(0, tab.indexOf('__item'))).removeClass('slds-hide');
		$('#' + tab.substring(0, tab.indexOf('__item'))).addClass('slds-show');
	});
	$('.slds-tabs--default__link').on('click', function() {
		$('.slds-tabs--default__item').removeClass('slds-active');
		$(this).closest('li').addClass('slds-active');

		$('.slds-tabs--default__content').removeClass('slds-show');
		$('.slds-tabs--default__content').addClass('slds-hide');
		var tab = $(this).prop('id');
		/*console.log(tab);
		console.log(tab.substring(0, tab.indexOf('__item')));*/
		$('#' + tab.substring(0, tab.indexOf('__item'))).removeClass('slds-hide');
		$('#' + tab.substring(0, tab.indexOf('__item'))).addClass('slds-show');
	});
	$('.slds-navigation-list--vertical__action').on('click', function() {
		$('.slds-navigation-list--vertical li').removeClass('slds-is-active');
		$(this).closest('li').addClass('slds-is-active');

		$('.slds-tabs--vertical__content').removeClass('slds-show');
		$('.slds-tabs--vertical__content').addClass('slds-hide');
		var tab = $(this).prop('id');
		// console.log(tab);
		$('#' + tab.substring(0, tab.indexOf('__item'))).removeClass('slds-hide');
		$('#' + tab.substring(0, tab.indexOf('__item'))).addClass('slds-show');
	});
});
