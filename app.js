const express = require('express');
     const app = express();
     const port = process.env.PORT || 3000;

     // Set EJS as the view engine
     app.set('view engine', 'ejs');

     // Serve static files
     app.use(express.static('public'));

     // Route for the dashboard
     app.get('/', (req, res) => {
         res.render('index', {
             title: 'Node.js Dashboard',
             metrics: [
                 { name: 'Users', value: 1250 },
                 { name: 'Revenue', value: '$5,230' },
                 { name: 'Orders', value: 320 },
                 { name: 'Visitors', value: 4500 }
             ]
         });
     });

     app.listen(port, () => {
         console.log(`Server running on port ${port}`);
     });