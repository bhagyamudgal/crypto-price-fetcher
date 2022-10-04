# Crypto Price Fetcher

A simple CLI utility script that fetches current price in USD for ADA, XRP and MATIC and save them to a csv file with time.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. You can take reference from the .env-example file present in the project.

`COINMARKETCAP_API_KEY`

## Run Locally

To run the script:

Clone the project

```bash
  git clone https://github.com/bhagyamudgal/crypto-price-fetcher.git
```

Go to the project directory

```bash
  cd crypto-price-fetcher
```

Install dependencies

```bash
  yarn install
```

Set up environment variables - you can take reference from the example env file (.env-example)

After you are done with env

Run the following command to start the script

```
yarn start
```

You can see the output in data.csv file present in root directory.

## Feedback

If you have any feedback, please reach out to me at bhagyamudgal@gmail.com
