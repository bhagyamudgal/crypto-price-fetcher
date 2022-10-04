import * as dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import fs from "fs";
import { stringify } from "csv";

const coinMarketCapApiKey = process.env.COINMARKETCAP_API_KEY;

const coinMarketCapUrl = "https://pro-api.coinmarketcap.com/v2";

async function main() {
	const response = await fetch(
		`${coinMarketCapUrl}/cryptocurrency/quotes/latest?symbol=ADA,XRP,MATIC`,
		{
			headers: {
				"X-CMC_PRO_API_KEY": coinMarketCapApiKey,
				Accept: "application/json",
				"Accept-Encoding": "deflate, gzip",
			},
		}
	);

	const result = await response.json();

	if (!result.status) {
		throw new Error("something went wrong while fetching data!");
	}

	const data = {};

	data["Time"] = `${new Date(
		result.status.timestamp
	).toDateString()} ${new Date(result.status.timestamp).toTimeString()}`;

	data["Price (ADA)"] = result.data["ADA"][0].quote["USD"].price.toFixed(2);
	data["Price (XRP)"] = result.data["XRP"][0].quote["USD"].price.toFixed(2);
	data["Price (MATIC)"] =
		result.data["MATIC"][0].quote["USD"].price.toFixed(2);

	const info = [data];

	stringify(info, { header: false }, (err, output) => {
		fs.appendFile("data.csv", output, () => {});
	});
}

main()
	.then(() => {
		console.log("price fetched and added to csv successfully!");
	})
	.catch((error) => {
		console.error("main =>", error);
	});
