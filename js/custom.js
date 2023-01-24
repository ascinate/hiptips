jQuery(document).ready(function() {
	// click on next button
	jQuery('.form-wizard-next-btn').click(function() {
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = jQuery(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = jQuery(this).val();

			if( thisValue == "") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			jQuery(document).find('.wizard-fieldset').each(function(){
				if(jQuery(this).hasClass('show')){
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if(jQuery(this).attr('data-attr') == formAtrr){
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	jQuery('.form-wizard-previous-btn').click(function() {
		var counter = parseInt(jQuery(".wizard-counter").text());;
		var prev =jQuery(this);
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		jQuery(document).find('.wizard-fieldset').each(function(){
			if(jQuery(this).hasClass('show')){
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if(jQuery(this).attr('data-attr') == formAtrr){
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = jQuery(this).val();
			if( thisValue == "" ) {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	jQuery(".form-control").on('focus', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().removeClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});


$(document).ready(function(){
    $("#card-btn").click(function(){
      $("#card-details").show();
      $("#net-details").hide();
      
    });
    $("#net-btn").click(function(){
        $("#card-details").hide();
        $("#net-details").show();
        
      });

      $("#other-btn").click(function(){
        $("#custome-divam").toggle();
        
      });
      $(".sp-pay").click(function(){
        $("#custome-divam").hide();
        
      });
      

      var selector = '.pay-tips ul li label';

        $(selector).on('click', function(){
            $(selector).removeClass('active');
            $(this).addClass('active');
        });
	
	
  });

  
  $("#st-multi").click(function(){
    $("#multistaff").show();
    $("#staff-div").hide();
    
    
  });

  $("#one-show1").click(function(){
    $("#multistaff").hide();
    $("#staff-div").show();
    
    
  });


//   $(function () {
// 	$( "#numberBox" ).change(function() {
// 	   var max = parseInt($(this).attr('max'));
// 	   var min = parseInt($(this).attr('min'));
// 	   if ($(this).val() > max)
// 	   {
// 		   $(this).val(max);
// 	   }
// 	   else if ($(this).val() < min)
// 	   {
// 		   $(this).val(min);
// 	   }       
// 	 }); 
//  });
  



$(document).ready(function(){
   
    $('#input_number').on('change',function(){
        if($(this).val() < 5 ) {
            $('.wizard-form-error-div').show();
        }
        else{
            $('.wizard-form-error-div').hide();
        }
    })
})

// rating js 



$(document).on('change', '.cnj', function () {
	if( $(this).prop('checked') ){
	  $(this).closest('.wizard-form-radio').addClass('active');
	}
	else{
	  $(this).closest('.wizard-form-radio').removeClass('active');
	}
});

  $(document).ready(function(){  
  $('.emploeey-slid').owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	dots:false,
	responsive: {
		0: {
			items:3
		},
		600: {
			items:4
		},
		768: {
			items:5
		},
		1000: {
			items:5
		},
		1180: {
			items:6
		}
	}
 })
});


$(document).ready(function() {
    $( window ).scroll(function() {
          var height = $(window).scrollTop();
          if(height >= 100) {
              $('header').addClass('fixed-menu');
          } else {
              $('header').removeClass('fixed-menu');
          }
      });
  });



  $(document).ready(function(){
// 	$('.main-options li .radio-btn01').click(function(){
// 	  $('.main-options li .radio-btn01').removeClass("active");
// 	  $(this).addClass("active");
//   });
  $('.main-options li input[type="radio"]').click(function() {
	$('.main-options li .radio-btn01').removeClass("active");
	$(this).parent().addClass('active').siblings('.radio-btn01').removeClass('active')
  });
  });




  $(document).ready(function(){ 
    $("input[name=mnRadioDefault]").change(function() {
        var test = $(this).val();
        $(".show-hide").hide();
        $("#"+test).show();
    }); 
});

//   $(document).ready(function(){
// 	$('.main-options li label').click(function(){
// 	  $('.main-options li label').removeClass("active");
// 	  $(this).addClass("active");
//   });
//   });



$(document).ready(function () {
	$(".star label").click(function(){
	  $(this).parent().find("label").css({"background-color": "#a2be2d"});
	  $(this).css({"background-color": "#a2be2d"});
	  $(this).nextAll().css({"background-color": "#a2be2d"});
	});
	$(".star label").click(function(){
	  $(this).parent().find(".star label").css({"color": "#bbb"});
	  $(this).css({"color": "#a2be2d"});
	  $(this).nextAll().css({"color": "#a2be2d"});
	  $(this).css({"background-color": "transparent"});
	  $(this).nextAll().css({"background-color": "transparent"});
	});
});



// dropdown

$(".custom-select").each(function() {
	var classes = $(this).attr("class"),
		id      = $(this).attr("id"),
		name    = $(this).attr("name");
	var template =  '<div class="' + classes + '">';
		template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
		template += '<div class="custom-options">';
		$(this).find("option").each(function() {
		  template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
		});
	template += '</div></div>';
	
	$(this).wrap('<div class="custom-select-wrapper"></div>');
	$(this).hide();
	$(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
	$(this).parents(".custom-options").addClass("option-hover");
  }, function() {
	$(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
	$('html').one('click',function() {
	  $(".custom-select").removeClass("opened");
	});
	$(this).parents(".custom-select").toggleClass("opened");
	event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
	$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
	$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
	$(this).addClass("selection");
	$(this).parents(".custom-select").removeClass("opened");
	$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });


  $(document).ready(function(){  
	$('.slider-ol').owlCarousel({
	  loop: true,
	  margin: 10,
	  nav: false,
	  dots:true,
	  responsive: {
		  0: {
			  items:1
		  },
		  600: {
			  items:1
		  },
		  1000: {
			  items:1
		  }
	  }
   })
  });