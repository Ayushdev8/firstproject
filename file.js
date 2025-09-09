const sdgData = [
    { "goal": "Goal 1:No Poverty", "description": "End poverty in all its forms everywhere.", "icon": "https://dam.media.un.org/AssetLink/qqu801873q635j5w8276m8738cuax438" },
    { "goal": "Goal 2:Zero Hunger", "description": "End hunger, achieve food security and improved nutrition.", "icon": "https://imgs.search.brave.com/Q5MoA6dbEopXI6IoGbhNjlNzeC8tilHYjrwV3-nglho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5Lzk5/LzIxLzY5OTkyMTQ2/YWUyY2Y5NzZiODA1/YzlmMGUwMzBkZjA4/LmpwZw" },
    { "goal": "Goal 3:Good Health and Well-being", "description": "Ensure healthy lives and promote well-being for all at all ages.", "icon": "https://imgs.search.brave.com/dr0ZcoU-1NbUu2xZoWFq1aSDPhhAfT-8X-CVjhDyT7c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ic2ct/YjJjLWFwcC1zMy5z/My5hbWF6b25hd3Mu/Y29tL2ZpbGVzL3Nk/ZzAzLWhlcm8tNjVi/MjY2MzQ1MjcwNC5q/cGc" },
    { "goal": "Goal 4:Quality Education", "description": "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.", "icon": "https://imgs.search.brave.com/BkxMeq0XvYdElpsdj4SOH9bQlMnEq-cYHsLlEtXoXUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzAv/NjI2LzY0My9zbWFs/bC90aGUtcmlnaHQt/dG8tYWNjZXNzLXF1/YWxpdHktZWR1Y2F0/aW9uLWZyZWUtcGhv/dG8uanBn" },
    { "goal": "Goal 5:Gender Equality", "description": "Achieve gender equality and empower all women and girls.", "icon": "https://imgs.search.brave.com/0uxuIEM_g_TmyzGsTHbK-UN6q3LF9nWSAki4MqOwr3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z2VuZGVyLWVxdWFs/aXR5LWNvbmNlcHRf/MjMtMjE0ODU5NDE0/NC5qcGc_c2VtdD1h/aXNfaHlicmlk" },
    { "goal": "Goal 6:Clean Water and Sanitation", "description": "Ensure availability and sustainable management of water and sanitation for all.", "icon": "https://imgs.search.brave.com/nUhr8S-jefCyiplV2rQ8fsebg2InZLhGqRGAHQsK938/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ic2ct/YjJjLWFwcC1zMy5z/My5hbWF6b25hd3Mu/Y29tL2ZpbGVzL3Nk/ZzA2LWhlcm8tNjVi/MjY3YzcyODM2ZS5q/cGc" },
    { "goal": "Goal 7:Affordable and Clean Energy","description":"Energy is central to nearly every major challenge and opportunity.","icon":"https://imgs.search.brave.com/U-pliSSZ_KioetstGiL4KY57D_SZZc3pdW9PWJx2v7o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ic2ct/YjJjLWFwcC1zMy5z/My5hbWF6b25hd3Mu/Y29tL2ZpbGVzL3Nk/Zy0wNy1jYXJvdXNl/bC02NWIzM2Y1OGMw/MTVkLmpwZw"},
    { "goal": "Goal 8:Decent Work and Economic Growth", "description": "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.", "icon": "https://imgs.search.brave.com/cyjEGRqEldbDKkAjb-MBFS-RKEnchtrGibcSv55q7sg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzQ3LzIxLzAy/LzM2MF9GXzQ0NzIx/MDIxMl9YSkZLUElZ/UFZEWFNFZG9TM3Fw/R1ltalh0VVFnMWNz/ZC5qcGc" },
    { "goal": "Goal 9:Industry, Innovation and Infrastructure", "description": "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.", "icon": "https://imgs.search.brave.com/v4A5nX4jFu3tJFXjRJ0TW8oGsbUZQ0z-uZMESV7DU3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2Z3LWVudHdpY2ts/dW5nc2JhbmsuZGUv/QmlsZGVyL0JpbGRl/cm9yZG5lci9TREdz/L1NERy05L1NERzlf/Uk1NVl82OTZ4Mzky/LmpwZw" },
    { "goal": "Goal 10:Reduced Inequality", "description": "Reduce inequality within and among countries.", "icon": "https://imgs.search.brave.com/QZ4_EW0E2SkEQjpdWt6KCvS4NHViUWFePX1hF-kkPE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/MzgxMzAyNi9waG90/by9yZWR1Y2VkLWlu/ZXF1YWxpdGllcy10/aGUtc2Rncy0xNy1k/ZXZlbG9wbWVudC1n/b2Fscy1lbnZpcm9u/bWVudC1lbnZpcm9u/bWVudC1kZXZlbG9w/bWVudC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UlQ4aVR3/NnpmOFp6eTd2eW9r/UVhTYjlKVUVMMUY3/b2RVb1FWX3VVUzdY/Zz0" },
    { "goal": "Goal 11:Sustainable Cities and Communities", "description": "Make cities and human settlements inclusive, safe, resilient and sustainable.", "icon": "https://imgs.search.brave.com/rvnVF1jenns7-ORuSMHrcgCzQ2B3mJ5DhdZgNtaSgio/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nbG9i/YWxnb2Fsc2Ntcy5j/by51ay93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMS9yZXNv/dXJjZXMxMS5qcGc" },
    { "goal": "Goal 12:Responsible Consumption and Production", "description": "Ensure sustainable consumption and production patterns.", "icon": "https://imgs.search.brave.com/qspKkpB11v0pk0fMzBdNk6LicudCxQgMnA8pj_3T034/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZy1xaHNlLmNv/bS9ocy1mcy9odWJm/cy9yc2UlMjBmb25k/LmpwZz93aWR0aD03/MzUmaGVpZ2h0PTQ5/MCZuYW1lPXJzZSUy/MGZvbmQuanBn" },
    { "goal": "Goal 13:Climate action", "description": "Take urgent action to combat climate change and its impacts.", "icon": "https://imgs.search.brave.com/lv6UBYKJETQZKqHol1bJ258-qWN9iCWr-eIrQw26tN8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dW4ub3JnL3N1c3Rh/aW5hYmxlZGV2ZWxv/cG1lbnQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMTIvRV9T/REdfYWN0aW9uX2Nh/cmRfc3F1YXJlXzEz/LTEwMjR4MTAyNC5q/cGc" },
    { "goal": "Goal 14:Life Below Water", "description": "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.", "icon": "https://imgs.search.brave.com/70-nrrq1yCldiCnbFEmgfB4XdENHvtlHArMiSPHPPVU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/NTMzNzgwMS9waG90/by9kaXZlci1zd2lt/bWluZy1pbi11bmRl/cndhdGVyLWNhdmUt/dG93YXJkcy10aGUt/bGlnaHQtYXQtb2Nl/YW5zLXN1cmZhY2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWtYd2ozSmlzTkhX/Q3l5dnVfRjB4WE5w/MUtxX1kzdWk0ZmRa/ZnFHVlp4S2s9" },
    { "goal": "Goal 15:Life on Land", "description": "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.", "icon": "https://imgs.search.brave.com/J8n38AA5o2d16zd_pQanjY2_Nvk04ox6QSKUPt4X7T8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdXN0/YWluaW5ncHJvZ3Jl/c3MudW1kLmVkdS9z/aXRlcy9kZWZhdWx0/L2ZpbGVzL3N0eWxl/cy9vcHRpbWl6ZWQv/cHVibGljLzIwMjAt/MTEvMDAxNS5qcGc_/aXRvaz1fTTdCV3M0/Rg" },
    { "goal": "Goal 16:Peace, Justice and Strong Institutions", "description": "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.", "icon": "https://imgs.search.brave.com/eWw0bVVaAIE_UTxKfd_jZ_LSVqWuwnPengNDmDAywPE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ic2ct/YjJjLWFwcC1zMy5z/My5hbWF6b25hd3Mu/Y29tL2ZpbGVzL3Nk/ZzE2LWhlcm8tNjVi/MjY4ODQyNWJmYS5q/cGc" },
    { "goal": "Goal 17:Partnerships for the Goals", "description": "Strengthen the means of implementation and revitalize the global partnership for sustainable development.", "icon": "https://imgs.search.brave.com/-DLPXrpOtAaDbhgNd2s0HwdnzhrziVuVDCQz7eVVmas/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZjL1N1c3RhaW5h/YmxlX0RldmVsb3Bt/ZW50X0dvYWxzXyhM/aW1hLF9QZXJ1KV8x/LmpwZw" }
];

const container = document.getElementById('sdg-container');
const searchInput = document.getElementById('search');

// Function to render SDG cards
function renderSDGs(data) {
    container.innerHTML = ''; // Clear previous content
    data.forEach(sdg => {
         let outercard = document.createElement('div');
         let innercard =document.createElement('div');
         let frontcard= document.createElement('div');
         let backcard= document.createElement('div');
         
         frontcard.className='front';
         backcard.className='back';
         outercard.className='sdg2-card'
        innercard.className = 'sdg1-card';
        frontcard.innerHTML = `
            <img src="${sdg.icon}" alt="${sdg.goal}">
            <h2>${sdg.goal}</h2>
            
        `;
        backcard.innerHTML =`<p>${sdg.description}</p>`
        container.appendChild(outercard);
        outercard.appendChild(innercard);
        innercard.append(frontcard,backcard);
        outercard.addEventListener("click",function(){
            console.log("div is clicked");
            innercard.classList.toggle("show-back");
        })
        
        

    
    });
    
}

// Function to filter SDGs based on search input
function filterSDGs() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = sdgData.filter(sdg => 
        sdg.goal.toLowerCase().includes(searchTerm) || 
        sdg.description.toLowerCase().includes(searchTerm)
    );
    renderSDGs(filteredData);
}

// Initial render
renderSDGs(sdgData);

// Event listener for search input
searchInput.addEventListener('input', filterSDGs);
