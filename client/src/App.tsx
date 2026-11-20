type Props = {
  name: string;
};

function App({ name }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-red-800">Hello, {name}</h1>
    </div>
  );
}

export default App;
