function createArticle() {


    let url=`https://swapi.dev/api/planets`;
    console.log(url);


    let createTitle=document.getElementById('createTitle');
    let createText=document.getElementById('createContent');

    let h2=document.createElement('h2');
    let p=document.createElement('p');

         let btnData=document.getElementById('f2');
         let btnCreate=document.getElementById('f1');
         
        
           let btnClear=document.getElementById('btn');

           let objects={}


    let section=document.getElementById('articles');


           btnData.addEventListener('click',function () {

               fetch(url)
                   .then(res=>res.json())
                   .then(data=>{

                       let characters=data.results;

                       section.innerHTML=characters.map(x=>`<h2>${x.name}</h2> \n \n <p>The characteristic is:diameter: ${x.diameter},orbital-period:${x.orbital_period},climate:${x.climate}, gravity:${x.gravity}.</p>`).join('');

                   })

           });


            btnCreate.addEventListener('click',function () {

                h2.innerHTML=`${createTitle.value}`;
                p.innerHTML=`${createText.value}`;

                section.append(h2,p);

            });

            
            btnClear.addEventListener('click',function () {
                section.remove();
            })
            
}
createArticle()




//fetch(url,{method:'POST',body:JSON.stringify({})})

