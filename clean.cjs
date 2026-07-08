const fs=require('fs'); let c=fs.readFileSync('src/pages/Index.jsx','utf8'); c=c.replace(/style=\{\{.*?\}\}/g, ''); c=c.replace(/srcSet=\"\"/g, ''); fs.writeFileSync('src/pages/Index.jsx',c);
