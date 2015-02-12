<?php

/**
 * Return progress review block 
 *
 * @category    Aydus
 * @package     Aydus_ProgressReview
 * @author      Aydus <davidt@aydus.com>
 */

class Aydus_ProgressReview_ProgressController extends Mage_Core_Controller_Front_Action
{

    /**
     * Render out the progress Review block
     *
     * @return string|null
     */
    public function reviewAction()
    {
    	//Register a global so that the Shipping and Grand Total labels title can be modified
		Mage::register('reviewProgressTotals', true);    
			    	
        $layout = $this->getLayout();
        $update = $layout->getUpdate();
        /* Load the review child block*/
        $update->load('checkout_onepage_progress_review');
        $layout->generateXml();
        $layout->generateBlocks();
        $output = $layout->getOutput();
        $this->getResponse()->setBody($output);
        
        Mage::unregister('reviewProgressTotals');
                
        return $output;
    }
    
}
