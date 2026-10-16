import directory from '@/data/directory.generated.json';
import peopleAdditions1 from '@/data/people.additions-1.json';
import peopleAdditions2 from '@/data/people.additions-2.json';
import booksAdditions1 from '@/data/books.additions-1.json';
import booksAdditions2 from '@/data/books.additions-2.json';

// Curated public directory. The original generated payload remains intact; editorial additions
// are layered here so the school can grow without exposing private/admin fields.
const profilePatches = {
  'joshua-selman': { name: 'Apostle Joshua Selman Nimmak', title: 'Apostle', country: 'Nigeria', century: '21st century' },
  'arome-osayi': { name: 'Apostle Arome Israel Osayi', title: 'Apostle', country: 'Nigeria', century: '21st century' },
  'stephanie-ike-okafor': { name: 'Pastor Stephanie Ike Okafor', title: 'Pastor', country: 'United States / Nigeria', century: '21st century' },
  'myles-munroe': { name: 'Dr. Myles Munroe', title: 'Dr.', country: 'Bahamas', century: '20th century' },
  'francis-myles': { name: 'Dr. Francis Myles', title: 'Dr.', country: 'Zambia / United States', century: '21st century' },
  'julius-ekweozor': { name: 'Apostle Julius Ekwazor', title: 'Apostle', country: 'Nigeria', century: '21st century' },
};

const extraTopics = [
  {id:'faith',name:'Faith',description:'Faith, trust and the life of believing.'},
  {id:'evangelism',name:'Evangelism',description:'Gospel proclamation and reaching people.'},
  {id:'reformation',name:'Reformation',description:'Reformation history, doctrine and reform movements.'},
  {id:'worship',name:'Worship',description:'Worship, hymnody and devotion.'},
  {id:'theology',name:'Theology',description:'Doctrine and theological reflection.'},
  {id:'service',name:'Service & Love',description:'Sacrificial service, mercy and love of neighbor.'},
  {id:'missions',name:'Missions',description:'Missionary work and global gospel expansion.'},
  {id:'relationships',name:'Marriage & Relationships',description:'Marriage, family and relationships.'},
];

const normalizePerson = p => ({...p,...(profilePatches[p.id] || {}),region:p.region || p.country || profilePatches[p.id]?.country});
const originalPeople = directory.people.filter(p => p.id !== 'johnson-suleman').map(normalizePerson);
const originalIds = new Set(originalPeople.map(p => p.id));
export const people = [...originalPeople, ...peopleAdditions1.filter(p=>!originalIds.has(p.id)).map(normalizePerson), ...peopleAdditions2.filter(p=>!originalIds.has(p.id)).map(normalizePerson)];

const originalBookIds = new Set(directory.books.map(b=>b.id));
export const books = [...directory.books, ...booksAdditions1.filter(b=>!originalBookIds.has(b.id)), ...booksAdditions2.filter(b=>!originalBookIds.has(b.id))];
export const teachings = directory.teachings;
const originalTopicIds = new Set(directory.topics.map(t=>t.id));
export const topics = [...directory.topics, ...extraTopics.filter(t=>!originalTopicIds.has(t.id))];
export const channels = directory.channels;
export const getPerson = id => people.find(p=>p.id===id);
export const getPersonBooks = id => books.filter(b=>b.personId===id);
export const getPersonTeachings = id => teachings.filter(t=>t.personId===id);
export const getPersonChannels = id => channels.filter(c=>c.personId===id);
export const getTopicName = id => topics.find(t=>t.id===id)?.name || id;
export const getBooksByTopic = id => books.filter(b=>b.topicIds.includes(id));
