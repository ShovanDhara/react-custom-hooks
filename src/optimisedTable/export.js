import Table from "./table";

export default function TableApp() {
  const issues = [
    {
      id: "1",
      name: "example 1",
      message: "Message 1",
      status: "open"
    },
    {
      id: "2",
      name: "example 2",
      message: "Message 2",
      status: "open"
    },
    {
      id: "3",
      name: "example 3",
      message: "Message 1",
      status: "open"
    }
  ];
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Table issues={issues} />
    </div>
  );
}