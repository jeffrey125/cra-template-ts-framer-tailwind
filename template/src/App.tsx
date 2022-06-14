import logo from './logo.svg';

const App = () => {
  return (
    <main className="w-screen h-screen bg-black flex items-center justify-center flex-col gap-5">
      <img
        src={logo}
        className="pointer-events-none animate-[spin_5s_linear_infinite] w-[25rem]"
        alt="react logo"
      />
      <h1 className="text-white text-lg sm:text-4xl">
        REACT TS-FRAMER-TAILWIND
      </h1>
    </main>
  );
};

export default App;
