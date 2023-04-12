function EachStudent (props) {
    const {data} = props
    console.log(data.name);
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default EachStudent;