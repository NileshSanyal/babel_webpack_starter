show =() => {console.log('hi there')}

show()

getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = response.json()
    return data
}

getPosts().then((data) => console.log(data))