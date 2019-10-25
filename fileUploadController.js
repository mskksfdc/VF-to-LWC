({
    doInit: function(cmp, event) {
        // Set the attribute value. 
        // You could also fire an event here instead.
        cmp.set("v.setMeOnInit", "controller init magic!");
        
		//var vfOrigin = "https://chetansri-dev-ed--c.ap5.visual.force.com";
        var vfOrigin = "https://" + cmp.get("v.vfHost"); 
        
        console.log(vfOrigin);
        window.addEventListener("message", function(event) {
            if (event.origin !== vfOrigin) {
                // Not the expected origin: Reject the message!
                return;
            }
            // Handle the message
            console.log(event.data);
            cmp.set("v.recordReceived", event.data);
        	          
        }, false);      
        
    }
})
