const http = require('http');
const fs = require('fs');
const path = require('path');

// Настройки
const host = '192.168.31.20'; // или ваш конкретный IP
const port = 3000;
const projectPath = './src'; // путь к вашей папке с проектом

// MIME-типы для разных расширений файлов
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.zip': 'application/zip'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Нормализуем URL, удаляя параметры запроса и предотвращая переход по директориям
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(projectPath, filePath);

    // Безопасность: проверяем, что запрашиваемый файл внутри projectPath
    const absolutePath = path.resolve(filePath);
    const basePath = path.resolve(projectPath);

    if (!absolutePath.startsWith(basePath)) {
        res.writeHead(403);
        res.end('Access Forbidden');
        return;
    }

    // Определяем расширение файла
    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Читаем файл
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Файл не найден
                fs.readFile(path.join(projectPath, '404.html'), (err, content404) => {
                    if (err) {
                        // Если нет 404.html, отправляем простую 404 ошибку
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 Not Found</h1>', 'utf-8');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content404, 'utf-8');
                    }
                });
            } else {
                // Другие ошибки сервера
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            // Успешный ответ
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate' // для разработки
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, host, () => {
    console.log(`🚀 Server running at http://${host}:${port}/`);
    console.log(`📁 Serving files from: ${path.resolve(projectPath)}`);
    console.log(`🌐 Open in browser: http://localhost:${port}/`);
    console.log(`📱 Access from network: http://YOUR_IP:${port}/`);
});