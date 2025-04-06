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
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    });

    console.log(response.data);
}

testCall();