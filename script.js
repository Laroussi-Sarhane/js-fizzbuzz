console.log('ciao')

const containerQ = document.getElementById('my_container');

 for(let i = 1; i <=100; i++ ){
  if(i % 15 ===0){
    my_container.innerHTML += `
    <div class="box dispari">fizz-buzz</div>
    `
  }else if(i % 5 ===0){
    my_container.innerHTML += `
    <div class="box multi5">buzz</div>
    `
  }else if(i % 3 ===0){
    my_container.innerHTML += `
    <div class="box fizz">fizz</div>
    `
  }else{
    my_container.innerHTML += `
    <div class="box">${i}</div>
    `

  }
  

  }
  my_container.innerHTML
