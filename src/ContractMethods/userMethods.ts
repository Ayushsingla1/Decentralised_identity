import { Contract } from "ethers";
import { JsonRpcSigner } from "ethers";
import { userDetails } from "../components/form";
import { constant } from "../../Constants";

export const submitDetails = async(signer: JsonRpcSigner | undefined, details:userDetails) => {
    const contract = new Contract(constant.contractAddressSepolia , constant.contractAbi, signer);
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

// export const uploadToIPFS = async () => {
//     if (!fileInput) {
//       console.log("No file selected");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("Body", fileInput, "uploadkr.png"); // Use fileInput directly
//       formData.append("Key", "uploadkr.png");
//       formData.append("ContentType", "image/png");

//       const response = await axios.post(
//         "https://api.quicknode.com/ipfs/rest/v1/s3/put-object",
//         formData,
//         {
//           headers: {
//             "x-api-key": API_KEY,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("File uploaded successfully:", response.data);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };
