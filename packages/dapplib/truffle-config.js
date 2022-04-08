require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stock rifle noise assume honey light army gas'; 
let testAccounts = [
"0xdf9b5f1f7921bd7b67ca2463402a59624282ecb17995377ce2ab6165f34a4e3f",
"0xfadecf6aaf1978663df991d1a646e2b1506f9a095705102bc6addbb4aa0c3165",
"0xc213b24b0fb70fb7a2fe3cbb5c489c886068df8d07df3ba59695da9e249ab7e9",
"0x5755155186c35153d0ad7f8a3454b4d119a03ea717d8814bd486fffdd42695b6",
"0xb4a7346c6d2fabaa6c0bb91cc2fda35401ca72bef1b4a14bb07bfd62e0ec3780",
"0xabd12325a13c6084630c0412f068ee52f9831465e424e9f428b741cd7c4f383d",
"0x3d8818a29c44c57bdfc642b116a23fd4be3a8869456884b1df154bcb4d305189",
"0xfafc422055e0d54bb4c7d4b8960bf63aeb2e3829634c7d4813dee993b6071390",
"0x69a677e01e4bae9dab68ea469fead2ba943dec039adfc76d092493410b149b6e",
"0x566aa22a91060092a1a7c540580dc04f4a8efdb6870a0bbafefed1a43098ee7e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

