import { leagueID } from '$lib/utils/leagueInfo';
import { get } from 'svelte/store';
import { rostersStore } from '$lib/stores';

// Define the alternate scoring system
const scoring_system = {
  "Most Yards Passing": 7,
  "Most yards Rushing": 7,
  "Most Yards Receiving": 7,
  "Most Points Kicking": 7,
  "Longest Field Goal": 3,
  "TD’s Rushing": 3,
  "Rushing Average (6 attempts minimum)": 3,
  "Most Rushing Attempts": 3,
  "TD Receptions": 3,
  "TD’s Passing-interceptions (if positive no.)": 3,
  "Highest Passing % (6 attempts min)": 3,
  "Most Pass Receptions": 3,
  "Yards Passing (individual)": 3,
  "Yards Rushing (individual)": 3,
  "Yards Receiving (individual)": 3
};

// Function to calculate a team's fantasy score based on aggregated statistics
function calculateTeamFantasyScore(players) {
  const categoryScores = {};

  // Initialize category scores to 0
  for (const category in scoring_system) {
    categoryScores[category] = 0;
  }

  // Calculate scores for each category by aggregating player statistics
  players.forEach((player) => {
    for (const category in scoring_system) {
      if (category in player) {
        categoryScores[category] += player[category];
      }
    }
  });

  // Calculate the total team score
  let totalScore = 0;
  for (const category in scoring_system) {
    totalScore += categoryScores[category] * scoring_system[category];
  }

  return { categoryScores, totalScore };
}

export const getLeagueMatchupsAndScores = async () => {
  const queryLeagueID = leagueID;

  const res = await fetch(`https://api.sleeper.app/v1/league/1004576672147968000/rosters`, { compress: true }).catch((err) => { console.error(err); });
  const data = await res.json().catch((err) => { console.error(err); });

  if (res.ok) {
    const processedRosters = processRosters(data);
    rostersStore.update((r) => {
      r[queryLeagueID] = processedRosters;
      return r;
    });

    const matchups = processedRosters.startersAndReserve;
    const team1_players = matchups.slice(0, matchups.length / 2);
    const team2_players = matchups.slice(matchups.length / 2);

    // Calculate fantasy scores for each team using the alternate scoring system
    const team1_scores = calculateTeamFantasyScore(team1_players);
    const team2_scores = calculateTeamFantasyScore(team2_players);

    // Compare the two teams and declare a winner
    let winner = "Tie";
    if (team1_scores.totalScore > team2_scores.totalScore) {
      winner = "Team 1";
    } else if (team2_scores.totalScore > team1_scores.totalScore) {
      winner = "Team 2";
    }

    return {
      team1_scores,
      team2_scores,
      winner
    };
  } else {
    throw new Error(data);
  }
};

const processRosters = (rosters) => {
  const startersAndReserve = [];
  const rosterMap = {};
  for (const roster of rosters) {
    for (const starter of roster.starters) {
      startersAndReserve.push(starter);
    }
    if (roster.reserve) {
      for (const ir of roster.reserve) {
        startersAndReserve.push(ir);
      }
    }
    rosterMap[roster.roster_id] = roster;
  }
  return { rosters: rosterMap, startersAndReserve };
};
