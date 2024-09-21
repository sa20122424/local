
async function getpromise() {
    
    
    try {
        
        let vada = await fetch('https://jsonplaceholder.typicode.com/users  ')
        console.log(vada);
        let vadaKeldi = await vada.json()
        let list = document.querySelector('.list')
        let list1 = document.querySelector('.list1')
        let box = document.querySelector(".box")
      
        console.log(vadaKeldi, list);


        vadaKeldi.forEach(e => {
            list.innerHTML += `<p style="font-size: 26px; color: brown; font-weight: 700">
            ${e.name}  ||  ${e.address.city}
                </p> `
                list.innerHTML += `<p stle="font-size:10px; color:grey; " >${e.email}</p>`
         list.innerHTML += `<p stle="font-size:10px; color:grey; " >${e.address.street}</p>`
                  list.innerHTML += `<li stle="font-size:10px; color:grey; " >${e.address.city}</li>`
          list.innerHTML += `<p stle="font-size:10px; color:grey; " >${e.address.zipcode}</p>`
          

          
          
   
          
          
           
          box.append(list1)
          list1.append(list)
         
        });

    } catch {
        console.error("uydegilari rozi bo'madi");

    }

}

getpromise()
