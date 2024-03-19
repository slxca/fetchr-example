const {FetchrInstance} = require("@slxca/fetchr");



const fetchrInstance = new FetchrInstance();
fetchrInstance.routes().test().then(data => console.log(data))