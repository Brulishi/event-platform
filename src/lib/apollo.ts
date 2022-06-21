import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4okwcv50b6001xtfxpw06r6/master',
    cache: new InMemoryCache()
})