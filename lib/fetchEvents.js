import fetchAPI from './api';

export async function getEvents() {
  const data = await fetchAPI(
    `query AllEvents {
        events {
            edges {
                node {
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
            postTypeEvent {
              eventLocation
              eventName
            }
          }
        }
      `,
    { id }
  );

  return data?.event;
}
