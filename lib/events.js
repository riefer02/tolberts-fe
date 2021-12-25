import { getPlaiceholder } from 'plaiceholder';

export const formatQueriedEventData = async (eventData) => {
  if (eventData.node !== undefined) {
    const { css, img } = await getPlaiceholder(
      eventData.node.postTypeEvent.image.sourceUrl
    );

    return {
      id: eventData.node.id,
      imageSrc: img,
      placeholder: css,
      ...eventData.node.postTypeEvent,
    };
  } else {
    const { css, img } = await getPlaiceholder(
      eventData.postTypeEvent.image.sourceUrl
    );

    return {
      id: eventData.id,
      imageSrc: eventData.postTypeEvent.image.sourceUrl,
      placeholder: css,
      ...eventData.postTypeEvent,
    };
  }
};

export const sortByDate = (events) => {
  return events.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};
