# Welcome to FarmerG!

Welcome to "FarmerG", an e-commerce website for helping farmer to sell his/her crops directly to organizations, without the involvement of middlemen, a platform where farmers are the price setters.

# About Us

The biggest obstacle in increasing farmers income in India are the profiteering middlemen. Commission agents, traders and wholesalers take a major chunk of profit from farmers produce. So our website create a sense of transparency among the farmers and the market. Farmers set the price of what they produce and ultimately deduct a big chunk of profit that was utilized by the middlemen. Our site possibly have the following benefits:
1. Local farmers receive more and real profit for the produce and restaurants get quick   and fresh access to the food and ingredients which helps them in making fresher dishes.
2. Farm to fork sourcing helps the surrounding local businesses as well that deal with other products related to food.
3. It is a sustainable practice that is also good for the environment.
4. Restaurants get quick and fresh access to the food and ingredients which helps them in making fresher dishes.
5. Prevents Distress Sale
6. Prioritize the crops which are listed first first so that they are sold first before they reach their expiry date.

In all, direct procurement from farmers would increase their income and strengthen the agriculture economy of the country.

## Challenges we faced

1. Aadhaar Verification - using Aadhaar card verification API.
2. Harvesting date authenticity - Every seed that grows in a favorable condition, has a specific maturity period. Taking this data into account, and also adding buffer, we tried to add authenticity so that information is unfiltered among the farmer and the market.

## Installation

### Clone this repository 

```console
git clone https://github.com/Sarans13/FarmerG.git
```

### Change directory to FarmerG

```console
cd FarmerG/backened
```

### Install node modules

```console
npm install
```

### Change current working directory

```console
cd src
```

### Start local server

```console
npm run dev
```

##### Terminal Output:

```console
> backened@1.0.0 dev
> nodemon src/app.js -e js hbs

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js
[nodemon] starting `node src/app.js hbs`
hello
hello
listening to port 5500
connection successful
connection successful
```
Visit the above mentioned port in the Terminal Output using "https://localhost:5500" in your browser.

## Instructions to authenticate Aadhaar
### Open a new terminal
### Change the directory

```console
cd ../../pythonbc
```

### FastAPI Installation
```console
pip install fastapi[all]
```
### Launch the authentication server

```console
uvicorn main:app --reload
```
##### If the above steps do not seem to be executed, then execute the following command in the terminal
```console
pip install "uvicorn[standard]"
```

## Now your system is ready to execute "FarmerG" !!!
