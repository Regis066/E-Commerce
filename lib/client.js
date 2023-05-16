import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient ({
   projectId: '10el5sgo',
   dataset: 'production',
   apiVersion: '2023-5-16',
   useCdn: true,
   token: process.env.SANITY_API_TOKEN,

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)