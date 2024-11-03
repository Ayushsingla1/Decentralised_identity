import { JsonRpcSigner } from 'ethers'
import {aiaContract, constant} from '../../Constants'
import { Contract } from 'ethers'
import axios from 'axios';

// checks if the connected acc is an authority of not
export const isAuthority = async(signer: JsonRpcSigner) => {
    const contract = new Contract(constant.contractAddressSepolia, constant.contractAbi, signer);
    const authority = await contract.authorityAddress();
    if(authority.toString() === signer.address){
        return true;
    }else{
        return false;
    }
}


// gets all the req application
export const fetchAllReq = async(signer: JsonRpcSigner | undefined, clientAcc:any) => {
  let contract;
  console.log(clientAcc.chainId)
  if(clientAcc.chainId == 1320){
    contract = new Contract(aiaContract.contractAddress, aiaContract.contractAbi, signer)
    console.log(constant)
  }else{
    contract = new Contract(constant.contractAddressSepolia, constant.contractAbi, signer)
  }
    try {
        const res = await contract.getAllDataItems();
        console.log("response: ", res);
        return res
    } catch (error) {
        console.log(`error while fething data: `, error)
    }
}

export const uploadToIPFS = async (fileInput: any) => {
    if (!fileInput) {
      console.log("No file selected");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("Body", fileInput, `${Date.now()}details`);
      formData.append("Key", `${Date.now()}details`);
      formData.append("ContentType", "application/pdf");
      const response = await axios.post(
        "https://api.quicknode.com/ipfs/rest/v1/s3/put-object",
        formData,
        {
          headers: {
            "x-api-key": `${import.meta.env.VITE_REACT_QUICKNODE_API_KEY}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      return response.data
    } catch (error) {
      console.error("Error uploading file:", error);
      return false
    }
  };

export const uploadIpfsToBlockChain = async(signer:JsonRpcSigner|undefined, hash:string, userAddress:string, clientAcc: any) => {
    let contract;
    console.log(clientAcc.chainId)
    if(clientAcc.chainId == 1320){
      contract = new Contract(aiaContract.contractAddress, aiaContract.contractAbi, signer)
      console.log(constant)
    }else{
      contract = new Contract(constant.contractAddressSepolia, constant.contractAbi, signer)
    }
    try {
        console.log("hash: ", hash, "\n", "userAddress: ", userAddress)
        const res = await contract.uploadDataHash(userAddress, hash);
        const afterMining = await res.wait();
        console.log(afterMining);
        return true;
    } catch (error) {
        console.log('error while uploading');
        return false;
    }
}