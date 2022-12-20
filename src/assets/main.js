     //import fetch from "node-fetch";
    const content = document.querySelector("#content");
    const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCxt8bY5n40rONhUJvKLHq3g&part=snippet%2Cid&order=date&maxResults=5";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7607f046a9mshe26c3613d832bdep14752bjsn6d988c2f3131',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
    };
    const fetchYTChannel = async (urlAPI) => {
        try {
            const response = await fetch(
                urlAPI, 
                options)
            return response.json();
        } catch (error) {
            console.log(new Error("error algo sucedio"), error);
        }
    }

(async () => {
    const ytVideos = await fetchYTChannel(API);  
    const showLatestVideoContent = `${ytVideos.items.map(item => 
        `<div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
           <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            <a href="https://www.youtube.com/watch?v=${item.id.videoId}">
                <span aria-hidden="true" class="absolute inset-0"></span>
            </a>
            ${item.snippet.title}
            </h3>
        </div>
    </div>`
    ).join("")}`
    
    // let prueba = `${showLatestVideoContent[0]}`
    console.log(typeof(showLatestVideoContent));
    // console.log(typeof(prueba));
    //console.log(`${showLatestVideoContent}`);
    console.log(showLatestVideoContent);
    content.innerHTML = showLatestVideoContent;
    // console.log(ytVideos.items[0]);
})();

