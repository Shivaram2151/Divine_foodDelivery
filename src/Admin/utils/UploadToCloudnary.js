export const uploadToCloudinary = async (pics) => {
  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "divine-social");
    data.append("cloud_name", "dkkkiwf2z");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dkkkiwf2z/image/upload`,
      {
        method: "post",
        body: data,
      }
    );

    const fileData = await res.json();
    return fileData.url;
  } else {
    console.log("error");
  }
};
