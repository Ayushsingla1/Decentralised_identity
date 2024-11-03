import { Contract } from "ethers";
import { JsonRpcSigner } from "ethers";
import { userDetails } from "../components/form";
import { aiaContract, constant } from "../../Constants";

// const account = useAccount();
// const chain = account.chainId;

export const submitDetails = async(signer: JsonRpcSigner | undefined, details:userDetails, clientAcc: any) => {
  console.log(clientAcc.chainId)
  let contract;
  if(clientAcc.chainId == 1320){
    contract = new Contract(aiaContract.contractAddress, aiaContract.contractAbi, signer)
  }else{
    contract = new Contract(constant.contractAddressSepolia, constant.contractAbi, signer)
  }
    //const contract = new Contract(constant.contractAddressSepolia , constant.contractAbi, signer);
        if(details.age === undefined || details.lastName.trim() === "" || details.firstName.trim() === "" || details.fatherName.trim() === "" || details.dob.trim() === ""){
            alert('all the fields should be filled');
            return;
        }
        try {
            const res = await contract.uploadDataItem(
                details.firstName,
                details.dob,
                details.fatherName,
                details.lastName,
                details.age
            )
            console.log("Response:", res);
            const afterWaiting = await res.wait()
            console.log('after mining: ', afterWaiting);
            return true;

        } catch (error) {
            console.log('error while uploading to smart contract: ', error)
            return false;
        }
}

export const getRequestsByAddress = async(signer:JsonRpcSigner | undefined, address:string | undefined, clientAcc:any) => {
  let contract;
  if(clientAcc.chainId == 1320){
    contract = new Contract(aiaContract.contractAddress, aiaContract.contractAbi, signer)
  }else{
    contract = new Contract(constant.contractAddressSepolia, constant.contractAbi, signer)
  }
  try {
    
    const res = await contract.getData(address);
    console.log(res);
    return res;
    
  } catch (error) {
    console.log("error while fetchig requested details: ", error);
    return false;
  }
}

export const getCidByAddress = async(signer:JsonRpcSigner | undefined, address:string | undefined, clientAcc:any) => {
  let contract;
  if(clientAcc.chainId == 1320){
    contract = new Contract(aiaContract.contractAddress, aiaContract.contractAbi, signer)
  }else{
    contract = new Contract(constant.contractAddressSepolia, constant.contractAbi, signer)
  }
  try {
    const res = await contract.getDataHash(address);
    console.log(res)
    return res.toString()
  } catch (error) {
    console.log(`error occured while fetching details`);
    return error;
  }
}