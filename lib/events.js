import { getPlaiceholder } from 'plaiceholder';

export const formatQueriedEventData = async (eventData) => {
  if (eventData.node !== undefined) {
    const { css, img } = await getPlaiceholder(
      eventData.node.postTypeEvent.image.sourceUrl
    );

    return {
      id: eventData.node.id,
      imageSrc: img.src,
      placeholder: css,
      ...eventData.node.postTypeEvent,
    };
  } else {
    const { css, img } = await getPlaiceholder(
      eventData.postTypeEvent.image.sourceUrl
    );

    return {
      id: eventData.id,
      imageSrc: img.src,
      placeholder: css,
      ...eventData.postTypeEvent,
    };
  }
};
