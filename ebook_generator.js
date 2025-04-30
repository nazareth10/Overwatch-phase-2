
export function generateEbook(topic) {
    return `
        <h2>EBook: ${topic}</h2>
        <p><strong>Introduction:</strong> This guide explores ${topic.toLowerCase()} in depth, with practical examples and a clear roadmap.</p>
        <h3>Chapters:</h3>
        <ol>
            <li>Understanding the Fundamentals</li>
            <li>Techniques & Tools</li>
            <li>Real-World Application</li>
            <li>Common Mistakes</li>
            <li>Next Steps</li>
        </ol>
        <p><strong>Conclusion:</strong> With consistent application, ${topic} becomes a powerful asset in your journey.</p>
    `;
}
