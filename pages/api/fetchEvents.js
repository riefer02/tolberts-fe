import { getEvents } from '../../lib/fetchEvents';

export default async function fetchEvents(req, res) {
  const events = await getEvents();

  res.status(200).send(events);
}
