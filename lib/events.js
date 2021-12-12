import { getPlaiceholder } from 'plaiceholder';

export const formatQueriedEventData = async (eventData) => {
  const { css, img } = await getPlaiceholder(
    eventData.node.postTypeEvent.image.sourceUrl
  );

  return {
    id: eventData.node.id,
    imageSrc: img.src,
    placeholder: css,
    name: eventData.node.postTypeEvent.name,
    date: eventData.node.postTypeEvent.date,
    location: eventData.node.postTypeEvent.location,
    cta: eventData.node.postTypeEvent.cta,
  };
};
