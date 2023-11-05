import Accordion from "./components/Accordion";


function App() {

  const items = [
    {
      id : 1,
      label : 'Can I use React on a project',
      content : 'You can use React on any project you want.'
    },
    {
      id : 2,
      label: 'Can I use JavaScript on a project',
      content : 'You can use React on any project you want.'

    },
    {
      id : 3,
      label : ' Can I use tailwindCSS on a project',
      content : 'You can use React on any project you want.'
    }
  ]

  return (
    <div data-theme="light" className="min-h-screen">
      <Accordion items={items} />
    </div>
  )
}

export default App;
