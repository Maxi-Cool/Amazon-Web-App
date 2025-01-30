document.getElementById("Purchase").addEventListener("click",function(){
    document.getElementById('main').innerHTML = `
    <p>Page 2</p>
    <button id="2">next</button>
    `;
    document.getElementById('buttons').innerHTML = `
    <p>Page return</p>
    <button id="ret1">Return</button>
    `;
    document.getElementById("ret1").addEventListener("click",function(){
        
        document.getElementById('main').innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/John_Cena_2024.jpg" class="branding"/>
        <h1 class="title">Amazon Web App</h1>
        `;   
        
        
            
        
        document.getElementById('buttons').innerHTML = `
        <button id="Returns" class="Return">Returns!</button>
      <button id="Purchase" class="Purchases">Purchases!</button>
    `;
        });



    document.getElementById("2").addEventListener("click",function(){
        document.getElementById('main').innerHTML = `
        <p>Page 3</p>
        <button id="3">next</button>
        `;
        document.getElementById("3").addEventListener("click",function(){
            document.getElementById('main').innerHTML = `
            <p>Page final</p>
            `;     
        });
    });
});

document.getElementById("Returns").addEventListener("click",function(){
    document.getElementById('main').innerHTML = `
    
    `;

    document.getElementById('buttons').innerHTML = `
    <p>Page return</p>
    `;
});