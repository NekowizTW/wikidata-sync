import fetch from 'node-fetch'

const url = 'https://nekowiz.fandom.com/zh/api.php?action=query&prop=revisions&titles=%E5%95%8F%E7%AD%94RPG_%E9%AD%94%E6%B3%95%E4%BD%BF%E8%88%87%E9%BB%91%E8%B2%93%E7%B6%AD%E8%8C%B2_%E7%B6%AD%E5%9F%BA&rvslots=*&rvprop=content&format=json'

fetch(url)
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)))
  .catch(error => console.error(error))    
