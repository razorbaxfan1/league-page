/*   STEP 1   */
export const leagueID = "1004576672147968000"; // your league ID
export const leagueName = "FCC/Waterway Dynasty League"; // your league name
export const dues = null; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the 2023-24 FCC/Waterway Dynasty Fantasy Football League and the new NFL Season! This page is a work in progress and will help track dynasty league scores.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
    "managerID": "547303727965245440",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Brian Phillips",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    "managerID": "749460957293707264",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Don Morrow",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    "managerID": "825093738396221440",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Jacob Morrow",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004105586193100800",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Bradley Webber",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004259842594369536",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Steve Peterson",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004583081023475712",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Jeff Pryor",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004586482268516352",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Trace Weaver",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004590879744577536",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Ron Miller",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004600672865660928",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Mark Mortimer",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004608727841972224",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Scott LeMaster",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004781679359225856",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "David Cook",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004898984846135296",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Kenny Melancon",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004915475366711296",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Ken Lassiter",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {
    "managerID": "1004942123709378560",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Ryan Hueter",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": null, // (optional)
    "bio": null,
    "photo": null, // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
    name: null, // Can be anything (usually your rival's name)
    link: null, // manager array number within this array, or null to link back to all managers page
    image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - 10
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
