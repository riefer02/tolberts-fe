import { getPlaiceholder } from "plaiceholder";

export const formatQueriedEventData = async (eventData) => {
  if (eventData.node) {
    // Group of events
    const { postTypeEvent } = eventData.node;
    if (
      postTypeEvent.primaryHeader &&
      postTypeEvent.date &&
      postTypeEvent.startTime &&
      postTypeEvent.image
    ) {
      const { css, img } = await getPlaiceholder(postTypeEvent.image.sourceUrl);

      return {
        id: eventData.node.id,
        imageSrc: img,
        placeholder: css,
        ...postTypeEvent,
      };
    }
  } else if (eventData.postTypeEvent) {
    // Single event
    const { postTypeEvent } = eventData;
    if (
      postTypeEvent.primaryHeader &&
      postTypeEvent.date &&
      postTypeEvent.startTime &&
      postTypeEvent.image
    ) {
      const { css, img } = await getPlaiceholder(postTypeEvent.image.sourceUrl);

      return {
        id: eventData.id,
        imageSrc: img,
        placeholder: css,
        ...postTypeEvent,
      };
    }
  }

  // Return null if the eventData doesn't fit either structure or lacks required fields.
  // Handle this null in your getServerSideProps function to avoid adding it to the array.
  return null;
};

export const sortByDate = (events) => {
  return events
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .reverse();
};
