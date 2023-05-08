# TuffyChain459
### About
A blockchain project that helps in making ETH transactions on Sepolia test network.
This project has been created as part of an assignment for CPSC 459 by Amrit Raj.  



## Steps to run the Project:

Assuming you have git installed in your system, clone the repo  
use command $`git clone https://github.com/amritRaj789/TuffyChain459.git`  
Make sure you have Node v16.0 or higher and npm 6.0 or higher installed in your system. 
Follow the steps at https://nodejs.org/en otherwise  
Open terminal and cd into TuffyChain>client>tuffychain  
Run $npm install  
cd into TuffyChain>smart_contract  
Run $npm install  
Now run the following script  
`npx hardhat run scripts/deploy.js –network sepolia`  
If you get the error message “Error: insufficient funds for intrinsic transaction cost” this means you need to add some SepoliaETH to your wallet first in order to support the gas for the smartcontract deployment  
Checkout the steps to add Sepolia ETH below  
After the script runs successfully, you should get a similar message  
Transactions deployed to: 0x89F555218ec674Ada2105679202C12f6a1c34A47  
Copy and save that address  
We are gonna use this for the client side of the application  
Go to client>src>utils  
Open the constants.js file  
Now modify the contract address to the address you saved above  
export const contractAddress = "0x89F555218ec674Ada2105679202C12f6a1c34A47";  
In your terminal cd back into Tuffychain>client>tuffychain  
Run `$npm run dev`  
Follow steps shown in the console to launch the application in your browser window  
Vite should host it on port 5173 (So you can just open localhost:5173 in your browser)  
Click on Connect Wallet  
It will open the Metamask notification prompt window 
Select your account from the list and click next  
It should successfully connect your wallet to the TuffyChain app  
Refresh your Vite app page (The connect wallet button should be gone now)  
Voila! The setup is complete now  
You can fill in the details to send ETH to any other wallet from your connected wallet 


### Add you key to hardhat config
Hardhat.config.js  
Open the file.  
In the module.exports for the “accounts” key add the private key of your MetaMask wallet  
Save the file  

### Steps to create an Eth wallet with MetaMask
Install Metamask chrome extension  
Create a new Wallet  
Agree to Terms and Conditions  
Create a password. Store it for future use  
Follow the steps to secure your wallet (which is recommended)  
Now wallet should be ready, we need to change the Eth network to Sepolia testnet  
Click on the Ethereum mainnet network  
From the dropdown click on ‘Add network’  
If you don’t see Sepolia testnet in the list of networks, go to Settings  
Click on the ‘Advanced’ tab  
Toggle on the ‘Show test networks’  
Now go back to add network, you should find the Sepolia Test network. Select that  

### How to add some Sepolia ETH (Sepolia test network) to your wallet  
Go to https://sepoliafaucet.com/  
It may require you to login/signup with Alchemy so do that  
Then in the prompt box enter your MetaMask wallet Address (should look something like 0xD3149FAEA007D003d3Da3b…………..)  
Then click on ‘Send me ETH’. 
Allow it some time and then you should have 0.5 ETH in your wallet.  
If you want to get more ETH you need to wait for the 24 hour cooldown period.  

