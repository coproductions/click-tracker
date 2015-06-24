(function(){
  console.log('hello')
  window.addEventListener('click',clickTracker);
  var clickEvents = {};
  clickEvents.byId = {};
  clickEvents.byClass = {};
  clickEvents.byTag = {};

  function clickTracker(evt){

    if(evt.target.id){
      if(evt.target.id in clickEvents.byId){
        clickEvents.byId[evt.target.id]++;
      }
      else {
        clickEvents.byId[evt.target.id] = 1;
      }
    }
    if(evt.target.className){
      if(evt.target.className in clickEvents.byClass){
        clickEvents.byClass[evt.target.className]++;
      }
      else {
        clickEvents.byClass[evt.target.className] = 1;
      }
    }
    if(evt.target.tagName){
      if(evt.target.tagName in clickEvents.byTag){
        clickEvents.byTag[evt.target.tagName]++;
      }
      else {
        clickEvents.byTag[evt.target.tagName] = 1;
      }
    }


          console.log(clickEvents.byTag)
          console.log(clickEvents.byId)
  }


})();