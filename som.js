const getTeams = [{ team_id: 15 }, { team_id: 16 }, { team_id: 17 }];

// Mapping to create a new array with incremented team_id values
const updatedTeams = getTeams.map((team) => team.team_id);
const som = {
  team_id: updatedTeams,
};

console.log(som.team_id);
console.log(getTeams);
