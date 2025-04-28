const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
 // console.dir(pokemon, { maxArrayLength: null })
 // console.log(game)
     game["difficulty"] = "easy";  
     console.log(game.difficulty);

    game.party.push(charmander);
    console.log(game.party);

    game.party.push(pikachu);
    game.party.push(squirtle);
    game.party.push(jigglypuff);

    console.log(game.party);
     

     game.gyms.forEach=(completed) =>{
        if(game.gyms.completed<3){
            return completed===true;
        }}
const charmanderIndex = game.party.indexOf("charmander");
if (charmanderIndex !== -1) {
  game.party.splice(charmanderIndex, 1, "charmeleon");
}


const pikachuIndex = game.party.indexOf("pikachu");
if (pikachuIndex !== -1) {
  game.party.splice(pikachuIndex, 1, "raichu");
}


const squirtleIndex = game.party.indexOf("squirtle");
if (squirtleIndex !== -1) {
  game.party.splice(squirtleIndex, 1, "wartortle");
}
console.log(game.party);


game.party.forEach(pokemon =>{
    console.log(pokemon.Name);
});

pokemon
.filter(p=> p.Starter)
.forEach(p => console.log(p.Name));


game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj); };
  
 
  const pikachu = pokemon.find(p => p.Number === 25); 
  game.catchPokemon(pikachu); 
  
 
  console.log('Exercise 10 result:', game.party);

  game.catchPokemon = function(pokemonObj) {
    const pokeballItem = this.items.find(item => item.name === "Poké Ball");
    if (pokeballItem) {
        pokeballItem.quantity--;
      }
      this.party.push(pokemonObj);
};
const charmander = pokemon.find(p => p.Number === 4);
game.catchPokemon(charmander);
console.log('Exercise 11 results:');
console.log('Updated party:', game.party);
console.log('Updated items:', game.items);
game.gyms.forEach(gym => {
    


    const difficulty = typeof gym.difficulty === 'string' 
      ? parseInt(gym.difficulty) 
      : gym.difficulty;
    
    if (difficulty < 6) {
      gym.completed = true;
    }
  });
  
  
  console.log('Exercise 12 results:', game.gyms);



  game.gymStatus = function() {
    const gymTally = {
      completed: 0,
      incomplete: 0
    };
  
    this.gyms.forEach(gym => {
      gym.completed ? gymTally.completed++ : gymTally.incomplete++;
    });
  
    console.log('Gym status:', gymTally);
  };
  
  game.gymStatus();

  const game = {
    gyms: [
      { name: "Pewter City Gym", completed: true },
      { name: "Cerulean City Gym", completed: false },
      { name: "Vermilion City Gym", completed: true },
      { name: "Celadon City Gym", completed: true },
      { name: "Fuchsia City Gym", completed: false },
      { name: "Saffron City Gym", completed: true },
      { name: "Cinnabar Island Gym", completed: true },
      { name: "Viridian City Gym", completed: false },
    ],
    gymStatus() {
      const gymTally = { completed: 0, incomplete: 0 };
      for (let i = 0; i < this.gyms.length; i++) {
        if (this.gyms[i].completed === true) {
          gymTally.completed++;
        } else {
          gymTally.incomplete++;
        }
      }
      console.log(gymTally);
    },
  };
  


  const game = {
    party: [
      { name: "Pikachu", level: 5 },
      { name: "Charmander", level: 12 },
      { name: "Bulbasaur", level: 8 },
      { name: "Squirtle", level: 10 },
    ],
    gyms: [
      { name: "Pewter City Gym", completed: true },
      { name: "Cerulean City Gym", completed: false },
      { name: "Vermilion City Gym", completed: true },
      { name: "Celadon City Gym", completed: true },
      { name: "Fuchsia City Gym", completed: false },
      { name: "Saffron City Gym", completed: true },
      { name: "Cinnabar Island Gym", completed: true },
      { name: "Viridian City Gym", completed: false },
    ],
    gymStatus() {
      const gymTally = { completed: 0, incomplete: 0 };
      for (let i = 0; i < this.gyms.length; i++) {
        if (this.gyms[i].completed === true) {
          gymTally.completed++;
        } else {
          gymTally.incomplete++;
        }
      }
      console.log(gymTally);
    },
    partyCount() {
      return this.party.length;
    },
  };
  
  const numberOfPokemon = game.partyCount();
  console.log(`Number of Pokémon in the party: ${numberOfPokemon}`);




  JavaScript

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

const game = {
  party: [
    { name: "Pikachu", level: 5 },
    { name: "Charmander", level: 12 },
    { name: "Bulbasaur", level: 8 },
    { name: "Squirtle", level: 10 },
  ],
  gyms: [
    { name: "Pewter City Gym", completed: true, difficulty: 3 },
    { name: "Cerulean City Gym", completed: false, difficulty: 4 },
    { name: "Vermilion City Gym", completed: true, difficulty: 6 },
    { name: "Celadon City Gym", completed: false, difficulty: 7 },
    { name: "Fuchsia City Gym", completed: false, difficulty: 8 },
    { name: "Saffron City Gym", completed: false, difficulty: 5 },
    { name: "Cinnabar Island Gym", completed: true, difficulty: 9 },
    { name: "Viridian City Gym", completed: false, difficulty: 2 },
  ],
  gymStatus() {
    const gymTally = { completed: 0, incomplete: 0 };
    for (let i = 0; i < this.gyms.length; i++) {
      if (this.gyms[i].completed === true) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    }
    console.log(gymTally);
  },
  partyCount() {
    return this.party.length;
  },
  completeEasyGyms() {
    for (let i = 0; i < this.gyms.length; i++) {
      if (this.gyms[i].difficulty < 8) {
        this.gyms[i].completed = true;
      }
    }
    console.log("Updated gym statuses:");
    this.gymStatus(); // Call gymStatus to see the updated tally
  },
};

game.completeEasyGyms();






