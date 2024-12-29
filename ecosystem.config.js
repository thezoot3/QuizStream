module.exports = {
    apps: [
        {
            name: 'api-server',
            script: './QuizStream-backend/dist/main.js',
            instances: "max",
            exec_mode: 'cluster'
        },
        {
            name: 'sveltekit-server',
            script: './QuizStream-Sveltepage/build/index.js',
            instances: "max"
        },
        {
            name: 'cdn-server',      // 웹소켓 서버
            script: './QuizStream-CDN/dist/app.js',
            instances: "max"
        }
    ]
};
