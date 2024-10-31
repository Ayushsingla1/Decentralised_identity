import { JsonRpcSigner } from 'ethers'
import {constant} from '../../Constants'
import { Contract } from 'ethers'

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
export const fetchAllReq = async(signer: JsonRpcSigner | undefined) => {
    const contract = new Contract(constant.contractAddressSepolia, constant.contractAbi, signer);
    console.log(signer)
    try {
        const res = await contract.getAllDataItems();
        console.log("response: ", res);
        return res
    } catch (error) {
        console.log(`error while fething data: `, error)
    }
}