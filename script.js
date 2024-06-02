var nfts = [];

  mintNFT = (nftName,nftid, nftdescription) =>{
    const nftObject = {
       name: nftName,
       Nftid : nftid,
       detail : nftdescription
    }

    nfts.push(nftObject);
 }


listNFTs = () =>{
    nfts.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name : ${nft.name}`);
        console.log(`Ntfid: ${nft.Nftid}`);
        console.log(`Details : ${nft.detail}`);
    });
}

getTotalSupply = ()=>{
   count =  nfts.length;
   console.log(`Total no. of Nft's are ${count}`);
}

mintNFT("BlockChain", "1" , "Hgdk");
mintNFT("Ethereum", "2","edjcd");

listNFTs();