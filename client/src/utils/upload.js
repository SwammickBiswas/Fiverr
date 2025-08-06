import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data);
    return res.data.secure_url;  // <-- Correct field
  } catch (err) {
    console.log("Upload failed:", err.response?.data || err.message);
  }
};

export default upload;
