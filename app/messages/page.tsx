import { Heart, MessageCircle } from "lucide-react";

const messages = [
  { name: "A fellow Cedar student", note: "Thank you for the laughter, the encouragement and all the little moments that made ordinary days memorable." },
  { name: "To the whole class", note: "May we keep choosing courage, stay curious, and celebrate each other wherever life takes us." },
  { name: "One chapter, many paths", note: "We might not see each other every day anymore, but the memories we made will always be ours." }
];

export default function MessagesPage() {
  return <main className="inner-page">
    <section className="page-hero page-wrap"><div className="section-kicker"><span>05</span> WORDS TO KEEP</div><h1>Things we want<br /><em>to remember.</em></h1><p>A little space for gratitude, good wishes and the words we might not have said out loud.</p></section>
    <section className="messages-grid page-wrap">{messages.map((message, i) => <article className="message-card" key={message.name}><Heart size={19}/><p>“{message.note}”</p><span>{message.name}</span><small>CEDAR YEARBOOK · {String(i + 1).padStart(2, "0")}</small></article>)}</section>
    <section className="message-instructions page-wrap"><MessageCircle size={22}/><div><h2>Want to add a message?</h2><p>This starter version displays sample messages only. For real submissions, we can connect a database and add a form with moderation so messages can be reviewed before appearing publicly.</p></div></section>
  </main>;
}
