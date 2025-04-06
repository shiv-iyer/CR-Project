import axios from "axios";
import dotenv from "dotenv";

// dotenv
dotenv.config();

const API_TOKEN = process.env.API_TOKEN;
const API_HEADERS = {
    Authorization: `Bearer ${API_TOKEN}`
}

// functions
async function testCall() {
    const response = await axios.get("https://api.clashroyale.com/v1/players/%23P2CR80Y2P", {
        headers: API_HEADERS
    });

    const tag = response.data.tag;
    const name = response.data.name;
    const clan = response.data.clan.name;
    const previousFinish = response.data.leagueStatistics.previousSeason.rank;
    const bestFinish = response.data.leagueStatistics.bestSeason.rank;
    const favoriteCard = response.data.currentFavouriteCard.name;
    
    console.log("Player name: " + name);

    //console.log(response.data);
}

testCall();