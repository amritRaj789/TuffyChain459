//https://eth-sepolia.g.alchemy.com/v2/jG7sgfT_nPj7HXsH-_UbF4tZ8jSEjKUR

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4", // he has 0.8.0
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/jG7sgfT_nPj7HXsH-_UbF4tZ8jSEjKUR",
      accounts: [
        "44e5bac0d53ce4a064a483fd2a6fce4eec44346b83db7079d555bb6b6944a1cf",
      ],
    },
  },
};

// giving me too many arguments error for now let's see later
