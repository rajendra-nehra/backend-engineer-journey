**Promise** is an object which takes resolve and reject functions as input , and it tells as the eventual completion or failure of an asyncronous task , once resolve is called the promise is completed and if reject is called than promise is failed , than we whatever the result is there it is than propgated to the .then() , where we use the result to do whatever task need to be done 

WHY NODE.JS IS NON-BLOCKING

NODE.JS use the **Event loop** mechanism where whenever there is an asynchronous operation like network request or file read or timeout are started , node.js doesn't wait for them to end , It continuos processing other requests while the operations completes. Instead of these operations to finish, js delegates these tasks to runtime environments ( browser APIs or NODE.js APIs) and keep executing the rest of the code or pick another request.

The **Event Loop** coordinates b/w Call Stack , Web APIs/NODE APIs , Callback Queue(Macrotask[like setTimeout] , Microtask[higher priority than macrotasks like promises]) ,where callstack executes synchronous tasks and when there is asynchronous task it is being handled by web apis , and callstack contiue to pick its next synchronous task and when the asynchronous task is completed rather than being directly pushed to callstack it is being pushed in the callback queue where once callstack is free the event loop pulls the oldest callback queue (first all Microstasks than Macrotasks ) and this loops contnuos 

async/await is just syntactic sugar on promises, rather than going inside .then() than another promises in .than() async await makes the look more syncronous , and we have to await a promise and also a await is always inside an asyc function 

Promise.all is awaiting multiple promises parallelly once all the promises are resolved it return the result in an array and also expects the promises in array as well 