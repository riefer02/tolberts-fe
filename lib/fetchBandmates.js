import fetchAPI from './api';

export async function getBandmates() {
  const data = await fetchAPI(
    `query AllBandmates {
        bandmates {
            edges {
                node {
                    id
                    postTypeBandmate {
                        biography
                        instruments
                        name
                        quote
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`,
    {
      variables: {},
    }
  );
  return data?.bandmates?.edges;
}

export async function getSingleBandmate(id) {
  const data = await fetchAPI(
    `
      query getSingleBandmate($id:ID!){
            bandmate(id:$id){           
                postTypeBandmate {
                    biography
                    instruments
                    name
                    quote
                    image {
                        sourceUrl
                    }
                }
            }
        }
      `,
    { id }
  );

  return data?.bandmate;
}
