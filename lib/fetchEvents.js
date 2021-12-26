import fetchAPI from './api';

export async function getEvents() {
  const data = await fetchAPI(
    `query AllEvents {
        events {
            edges {
              node {
                id
                postTypeEvent {
                  date
                  location
                  primaryHeader
                  secondaryHeader
                  image {
                    sourceUrl
                  }
                  description
                  endTime
                  startTime
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
  return data?.events?.edges;
}

export async function getSingleEvent(id) {
  const data = await fetchAPI(
    `
      query getSingleEvent($id:ID!){
          event(id:$id){   
            id,        
            postTypeEvent {
              cta
              date
              location
              name
              primaryHeader
              secondaryHeader
              image {
                  sourceUrl
              }
              description
            }
          }
        }
      `,
    { id }
  );

  return data?.event;
}
