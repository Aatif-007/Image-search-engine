const searchForm = document.querySelector("#search-form")
const search = document.querySelector("#search")
const searchResult = document.querySelector("#search-result")
const searchBtn = document.querySelector("#button")

let keyword = ""
let page = 1;
// let accessKey = "fuA3DcO4hQL0OSYFgGcBeuOqe7M-1vQyflrkh5RRn2U"

async function searchImg (){

    keyword = search.value /* Here we can take value whatever we write on inputBox */
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=fuA3DcO4hQL0OSYFgGcBeuOqe7M-1vQyflrkh5RRn2U&per_page=12`

    

    const response = await fetch(url)
    const data = await response.json()

    console.log(data);  

    if(page === 1){
        searchResult.innerHTML = ""
    }
    
    const results = data.results /* it is use to short the path */
    
    results.map((results)=>{
        const image = document.createElement("img")
        image.src = results.urls.small /*Here it is use to take images from urls and put them in .src*/

        const imgLinks = document.createElement('a')
        imgLinks.href = results.links.html; /* Here we want to add imgLinks on clicking of the image */
        imgLinks.target = "_blank"

        imgLinks.appendChild(image)
        searchResult.appendChild(imgLinks)
    })
        if(results.length <= 12 ){
            searchBtn.style.display = "block"
        }
        else{
            searchBtn.style.display = "none"
        }
       
    
    searchBtn.addEventListener("click",()=>{
        page++;         /* Will add page to 1 */
        searchImg()
    })
    
    
}
    

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();    
    page = 1;
    searchImg()
})

 

