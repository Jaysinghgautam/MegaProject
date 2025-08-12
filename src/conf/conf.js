// const conf = {
//     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//     appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// }
// // there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

// export default conf

// const conf = {
//   appwriteUrl: "https://fra.cloud.appwrite.io/v1", // Your Appwrite endpoint
//   appwriteProjectId: "6830c55100209bcd6177",
//   appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//   appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//   appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//   appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//   appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// };

// // Optional: Environment validation in development
// if (import.meta.env.DEV) {
//   for (const [key, value] of Object.entries(conf)) {
//     if (!value || value === "undefined") {
//       console.warn(`⚠️ Missing environment variable: ${key}`);
//     }
//   }
// }

// export default conf;

// conf.js - store environment variables here
const conf = {
    appwriteUrl: "https://fra.cloud.appwrite.io/v1", // Your Appwrite endpoint
    appwriteProjectId: "6830c55100209bcd6177",       // Your project ID
    
};

export default conf;
