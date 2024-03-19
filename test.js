fetch('https://jsonplaceholder.typicode.com/photos')
.then((res)=>res.json())
.then((datas)=> console.log(datas));