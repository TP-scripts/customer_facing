(function() {
  
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {

        this.addEventListener('load', function() {
          
          if (this.responseURL.includes("leadForms")){
            
//            console.log(this)
            parsedResponse = JSON.parse(this.responseText)
//            console.log(parsedResponse)
            parsedResponse.forEach((element) => {
              
              let formName = element.name
              let options = []

              
              element.customQuestions.forEach((questionArray) => {
                
                options.push('\n\nQuestion:\n\n' + questionArray.key + '\n\nOptions:')
                questionArray.options.forEach((option) => {options.push('\n' + option.value)})
                
              })
            
              alert(formName + options.join('\n'))
              
            })
            
          }
          
        });
        

        origOpen.apply(this, arguments);
    };
})();