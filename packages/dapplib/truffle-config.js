require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea glove flee street name razor soccer assume grace slam force sword'; 
let testAccounts = [
"0xd99609fdf11b2e1f019e5d31586c478c9b51b75a99fb23bde2b672672e23b390",
"0x0fd1dca79e4c8a076163ccb512607b96d86c6a3c17363d73fe3fc378aad7b512",
"0xa5980e9a24c1275699ffce75796d57fb14ecca52a612957cf2fc1d1b5f4208e0",
"0xd1cd8edc70a40e4d09de6b6709995f8bbb0f69cebed66709df1099b1c711d01d",
"0xd62e23b2028d52e8c4b5eb31823504b629c69ed5ec726d9727e89b8e1a9363bb",
"0x6043f9dac33062547f31e1f8fd2cf20a778920eddcae185859d6c183fec15e1a",
"0x7f4fedb016eae191e2d4d9293a9cfebf9a5711f8637b75ea960e5c8bb0e30d31",
"0x4a4e4611bc5b9769c2e18ec0085c2387ceb3a03edc494e415f49b50184048cf9",
"0x08cbc0a1105031a76fbd241a537d71aefce0b4618ffab4ea371847a6edfadc81",
"0x276e84c1af4003e01e073ae2b8e44cdc38af01bcbe9cab55c6b629f6506e1be9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


