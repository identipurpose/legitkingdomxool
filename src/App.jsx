import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import KingdomSchool from './pages/KingdomSchool';
import ScrollToTop from './components/ScrollToTop';
export default function App(){return <BrowserRouter><ScrollToTop/><Routes>{['/','/legitkingdomxool','/legitkingdomschool','/journey','/teachings','/teachings/:lessonId','/fathers-and-teachers','/discipleship'].map(path=><Route key={path} path={path} element={<KingdomSchool/>}/>)}<Route path="*" element={<main className="p-8"><h1 className="text-h1">Page not found</h1><Link to="/">Return to the school</Link></main>}/></Routes></BrowserRouter>}
