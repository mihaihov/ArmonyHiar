export const environment = {
    //"apiService": "https://localhost:7199"
    "apiService": "https://armonyhairservice.azurewebsites.net",
    "academyWaitlistFunctionUrl": import.meta.env.VITE_ACADEMY_WAITLIST_FUNCTION_URL || "",
    "academyWaitlistFunctionApiKey": import.meta.env.VITE_ACADEMY_WAITLIST_FUNCTION_API_KEY || "",
    "deploymentSource": import.meta.env.VITE_DEPLOYMENT_SOURCE || "auto"
}