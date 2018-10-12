module.exports = function(...fieldNames) { //...fieldNames, tableau d'objets contenant les données envoyées par formulaire
    return async context => {
        
        if (fieldNames.length>0) {
            console.log("EXISTING CONTEXT", context.data)
            fieldNames.forEach((arrivingDatas)=>{
                context.data[arrivingDatas] =  context.data[arrivingDatas].toLowerCase()
            })
        }
        else
        console.log("NADA")
      return context;
    };
  };
  