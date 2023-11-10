import { useCatById } from "./hooks/cats";

function App() {
  // Queries
  const { isLoading, data: cat, isError, error } = useCatById("a1c");

  if (isLoading) return <span>Loading...</span>;

  if (isError) {
    return <h2>An error has occured: {error?.message}</h2>;
  }

  return (
    <div>
      <h1>Cat Shopping Complex</h1>

      <div className="cat">
        <h3 className="cat__title">{cat?.name}</h3>
        <p className="cat__description">
          <img src={cat?.url} alt="cat" height={400} width={400} />
        </p>
      </div>
    </div>
  );
}

export default App;
