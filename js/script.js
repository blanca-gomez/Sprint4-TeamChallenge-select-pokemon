

const button = document.getElementById ('get-pokemon');
const pokemonSelect = document.getElementById ('pokemon-select');
   

button.addEventListener('click', () => {
    const selectedPokemon = pokemonSelect.value;
    fetch (`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((response) => {
            if(!response.ok){
                throw new Error ('Solicitud fallida');
            }
            return response.json();
        })
        .then((data) => {
        
            const characterItem = document.createElement('div');
            characterItem.className = 'pokemon-container'
            const characterName = document.createElement('h1');
            characterName.className = 'pokemon-name'
            const characterImage = document.createElement('img');
            characterImage.className = 'pokemon-img'
            const characterProperties = document.createElement('p');
            characterProperties.className = 'pokemon-properties'

            characterImage.src = data.sprites.front_default;
            characterName.textContent = data.name;
            characterProperties.textContent = (`Peso: ${data.weight} \nAltura: ${data.height}`);

            characterItem.appendChild(characterName);
            characterItem.appendChild(characterImage);
            characterItem.appendChild(characterProperties);

            document.body.appendChild(characterItem);
            
        })
        .catch((error) => {
            button.innerText = 'Error al obtener los datos';
        })
})


