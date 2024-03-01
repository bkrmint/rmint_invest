import { Hero, Innovation, Tokens, Subscribe, Footer } from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav /> 
    <section className="bg-peach xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="bg-light-peach padding">
      <Innovation />
    </section>
    <section className="bg-peach padding">
      <Tokens />
    </section>
    <section className="bg-light-peach padding">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8 pt-8">
      <Footer />
    </section>
  </main>
)

export default App;