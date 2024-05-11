import { createClient, createPreviewSubscriptionHook } from "next-sanity";

const config = {
    projectId: "3vo3hgzm",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
}

export const sanityClient = createClient(config);
export const  usePreviewSubscription = createPreviewSubscriptionHook(config)
