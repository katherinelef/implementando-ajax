const btn = document.querySelector('#btn');
const img = document.querySelector('#photo');

btn.addEventListener('click',function(){
    const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText);

        const data = JSON.parse(xhr.responseText);
        console.log(data.message);
        img.src = data.message;        
    }
    else {
        console.log('hay un problema en el servidor')
    }    
}

xhr.open('GET','https://dog.ceo/api/breeds/image/random');
xhr.send()

})