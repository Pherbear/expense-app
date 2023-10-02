// THIS FILE INITIALIZES REMAKE'S FRONT END CODE



Remake.init({
  logDataOnSave: false,
  watchFunctions: {
    customWatchFunc: (data) => {
      let {value, watchFuncArgs, watchElem} = data;
      Remake.callWatchFunctionsOnElements(document.querySelectorAll("[watch]"))
      console.log("lol")
    },
    summy: (data) => {
      let {value, watchFuncArgs, watchElem, watchAttrName, camelCaseKeyName, dataSourceElem, dataTargetElems, object} = data;
      //console.log(Remake.getKeyNamesfromElem(watchElem))
      //console.log(getKeyNamesfromElem(watchElem))
      //Remake.getSaveData(watchElem)
      //let sum = 'sum'
      // let val = 20
      // const name = 'p-event'
      console.log(watchFuncArgs[0])
      console.log(value)
      let sum_elem = watchElem.closest('[key\\:sum]')
      let all_data = Remake.getSaveData(sum_elem)
      console.log(all_data)

      var sum = 0.0
      for(participant of all_data.participants){
        for(pevent of participant.events){
          sum += parseFloat(pevent.price)
        }
      }

      let my_sum = document.getElementById("my_sum")
      my_sum.innerHTML = sum

      console.log(values)
      console.log(sum)
      console.log("sum!");
    } 
  },
});

Remake.onSave(function (res) {
  if (!res.success) {
    crostini("Error saving data", {type: "error"});
  }
});

Remake.onFileUpload(function (res) {
  if (res.success) {
    crostini("File upload successful");
  } else {
    crostini("Error uploading file", {type: "error"});
  }
});

Remake.onAddItem(function (res) {
  if (!res.ajaxResponse.success) {
    crostini("Error adding new item", {type: "error"});
  }
});




