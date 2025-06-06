import { Markdown } from 'components/markdown';

const explainer = `
This page is using a Netlify Edge Function (\`netlify/edge-functions/rewrite.js\`) to rewrite the URL based on visitor geography.

~~~js
const rewrite = async (request, context) => {
    const path = context.geo?.country?.code === 'AU' ? '/edge/australia' : '/edge/not-australia';
    return new URL(path, request.url);
};

export const config = {
    path: '/edge'
};

export default rewrite;
~~~

[See more examples](https://edge-functions-examples.netlify.app)
`;

export default function EdgeFunctionExplainer() {
    return <Markdown content={explainer} />;
}
