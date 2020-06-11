Promise.all = function(promises){
    if(!Array.isArray(promises)){
      throw new TypeError('You must pass array')
    }

    return new Promise(function(resolve,reject){
      var result = [],
          count = promises.length;

      function resolver(value){
          resolveAll(value)
      }

      function rejecter(reason){
        reject(reason)
      }

      function resolveAll(value){
        result.push(value)

        if(--count ==0){
          resolve(result)
        }
      }

      for(var i=0;i<promises.length;i++){
        promises[i].then(resolver,rejecter)
      }
    })
  }