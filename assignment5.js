const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    const navigation = `
        <nav>
            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>
        </nav>
        <hr>
    `;

    if (req.url === '/') {

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>My Portfolio</title>
            </head>
            <body>
                ${navigation}

                <h1>Home</h1>
                <h2>Welcome to My Portfolio</h2>
                <p>Hello! Welcome to my personal portfolio website.</p>
                <p>I am a Computer Science student interested in technology and programming.</p>
            </body>
            </html>
        `);

    } else if (req.url === '/about') {

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Me</title>
            </head>
            <body>
                ${navigation}

                <h1>About Me</h1>
                <p>My name is Tiya Gupta.</p>
                <p>I am pursuing B.Tech in Computer Science and Engineering.</p>
                <p>I am interested in web development, programming and technology.</p>
            </body>
            </html>
        `);

    } else if (req.url === '/skills') {

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Skills</title>
            </head>
            <body>
                ${navigation}

                <h1>My Skills</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>C++</li>
                </ul>
            </body>
            </html>
        `);

    } else if (req.url === '/projects') {

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Projects</title>
            </head>
            <body>
                ${navigation}

                <h1>My Projects</h1>

                <h3>Project 1: Portfolio Website</h3>
                <p>A personal portfolio website created using web technologies.</p>

                <h3>Project 2: Student Management System</h3>
                <p>A simple application for managing student information.</p>

                <h3>Project 3: Node.js Server</h3>
                <p>A basic server created using the Node.js HTTP module.</p>
            </body>
            </html>
        `);

    } else if (req.url === '/contact') {

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Contact</title>
            </head>
            <body>
                ${navigation}

                <h1>Contact Details</h1>
                <p><strong>Name:</strong> Tiya Gupta</p>
                <p><strong>Email:</strong> tiya@example.com</p>
                <p><strong>Location:</strong> Mumbai, India</p>
            </body>
            </html>
        `);

    } else {

        res.writeHead(404, { 'Content-Type': 'text/html' });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 - Page Not Found</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Go to Home Page</a>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});