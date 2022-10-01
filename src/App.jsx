import { Main, Skills } from './components';

const App = () => {
  return (
    <div>
      <main className='mx-6'>
        <section className='min-h-screen'>
          <Main />
        </section>
        <section className='min-h-screen'>
          <Skills />
        </section>
      </main>
    </div>
  );
};

export default App;
