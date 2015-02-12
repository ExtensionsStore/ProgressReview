/**
 * Progress review
 *
 * @category    Aydus
 * @package     Aydus_ProgressReview
 * @author      Aydus <davidt@aydus.com>
 */

(function($){
	
	$('ol.opc li.section div.step-title').click(function(e){
		
		jQuery('#review-progress').show('slow');
	});
	
})(jQuery);


Checkout.prototype.reloadStep = function(prevStep) {
	
    var updater = new Ajax.Updater(prevStep + '-progress-opcheckout', this.progressUrl, {
        method:'get',
        onFailure:this.ajaxFailure.bind(this),
        onComplete: function(){
            this.checkout.resetPreviousSteps();
        },
        parameters:prevStep ? { prevStep:prevStep } : null
    });
    
    if (prevStep == 'payment'){
    	
    	jQuery('#review-progress').hide('slow');
    	
    } else {
    	
        var updater = new Ajax.Updater('review-progress-opcheckout', this.progressReviewUrl, {
            method:'get',
            onFailure:this.ajaxFailure.bind(this),
            onComplete: function(){
            },
            parameters:null
        });    
    }
};