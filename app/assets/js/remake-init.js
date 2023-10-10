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
      loadpage()
      addData(priceChart)
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




