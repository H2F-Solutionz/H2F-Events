const fs = require('fs'); let js = fs.readFileSync('src/pages/Index.jsx', 'utf8'); js = js.replace(/src=\"\/media\//g, 'src=\"./media/'); fs.writeFileSync('src/pages/Index.jsx', js);
