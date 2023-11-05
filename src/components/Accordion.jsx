
function Accordion({ items}) {
    const renderedItems = items.map((item)=>{
        return (
            <div key={item.id}>
                <div>
                    {item.lablel}
                </div>

                <div>
                    {item.content}
                </div>

            </div>
        )
    });
    return (
        <div>
            <div>{renderedItems}</div>
        </div>
    )
}

export default Accordion;