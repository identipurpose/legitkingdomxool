import directory from '@/data/directory.generated.json';

// Only import this generated public payload, never directory/*.json.
// Consumers choose the table(s) and fields they need; private fields do not exist here.
export const people = directory.people;
export const books = directory.books;
export const teachings = directory.teachings;
export const topics = directory.topics;
export const channels = directory.channels;
export const getPerson = id => people.find(p=>p.id===id);
export const getPersonBooks = id => books.filter(b=>b.personId===id);
export const getPersonTeachings = id => teachings.filter(t=>t.personId===id);
export const getPersonChannels = id => channels.filter(c=>c.personId===id);
export const getTopicName = id => topics.find(t=>t.id===id)?.name || id;
export const getBooksByTopic = id => books.filter(b=>b.topicIds.includes(id));
