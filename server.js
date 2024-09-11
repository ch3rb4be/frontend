const express = require('express'); //เรียกไลบรารี่
const path = require('path'); //path ใหไฟล์ข้างนอกเห็นไฟล์ใน path...

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); //ถ้าพิมพ์แค่ '/' จะเรียก index.html

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
