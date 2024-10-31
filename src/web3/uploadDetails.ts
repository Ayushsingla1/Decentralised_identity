import axios from 'axios';

const API_KEY = import.meta.env.VITE_REACT_QUICKNODE_API_KEY;

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
          "x-api-key": API_KEY,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("File uploaded successfully:", response.data);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};