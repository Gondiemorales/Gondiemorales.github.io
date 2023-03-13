const input = document.querySelector(".input-api");
const boton = document.querySelector(".boton-api");
const pokemonContainer = document.querySelector(".pokemon-api");
const pokedex = {};




boton.addEventListener('click', (e)=>{
  e.preventDefault();
  const pokemonName = input.value.toLowerCase();
  console.log(pokedex);
   if (pokedex[pokemonName]) {
    input.classList.add('duplicate');
    setTimeout(() => {
      input.classList.remove('duplicate');
    }, 1000);
  } else {
    getPokemon(pokemonName);
    pokedex[pokemonName] = true;
  }
}

  );


function getPokemon(pokemon){

  fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/')
  .then( res => res.json())
  .then( datos => {
    crearPokemon(datos);
  });
}


function crearPokemon(pokemon){

  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;
  console.log(img);

  const nombre = document.createElement('h3');
  nombre.textContent = pokemon.name;
  console.log(nombre);

  const div1 = document.createElement('div');
  div1.appendChild(img);
  div1.appendChild(nombre);

  pokemonContainer.appendChild(div1);

}

