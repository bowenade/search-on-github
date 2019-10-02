/** This function generate search results by calling git search API. */
export const apiSearch = async (inputString) => {
    console.log("Perform search ")
    const urlString = "https://api.github.com/search/repositories?q=" + inputString;
    try {
        const response = await fetch(urlString);
        const data = await response.json();
        const result = getResults(data)
        return result;
   } catch (e) {
       console.log(e);
   }

}

function getResults(response) {
    const results = response.items
    var projectRows = []
    try {
    results.forEach(
            (project) => {
                const projectRow = {
                    id:project.id,
                    name:project.name,
                    url: project.html_url,
                    star: project.stargazers_count,
                    view: project.watchers_count
                    }
                projectRows.push(projectRow)
            }
        )
    } catch (e){
        console.log(e);
    }
    
    return projectRows
}