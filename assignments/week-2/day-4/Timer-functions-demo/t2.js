/*2.OTP Countdown Simulator (Console App)
------------------------------------    
        Simulate OTP sending flow in Node.js: 
        Show “OTP Sent Successfully”   
        Start 10-second countdown
        Allow resend only after countdown ends*/

        console.log("OTP Sent Successfully")
        let sec=10;
        setInterval(()=>{
            sec--;
            console.log(`OTP will be sent in ${sec}`);
            if(sec===0){
         console.log("Resend OTP")}
        },1000)