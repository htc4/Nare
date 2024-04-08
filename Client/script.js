function showDetails(type) {
    let detailsContent;
    let gallery = '';
    let copyright;

    switch (type) {
        case 'coffee':
            detailsContent = `
                <h2>September 2023</h2>
                <p>The coffee suppliers of Vanadzor invited us and our team to the research, where many experts were present. 
                We discussed the differences between tea and coffee, highlighted their benefits and shared some information with 
                students. Everyone was delighted. We also drank the coffee offered by the suppliers and enjoyed some of our teas.</p>
            `;
            // Gallery content for coffee
            copyright = `
                <h5>&copy Vanadzor Armenia, 2024</h5>
            `;
            break;
        case 'vegan':
            detailsContent = `
                <h2>December 2024</h2>
                <p>In December 2024, the event was called "Vegan", which was attended by 252 participants 
                from different regions of the country. Our team joined the event with its unique range of teas. 
                Everything was very well thought out, the team was impressed and our teas were well received. 
                We thank "Vegan" company for the invitation.</p>
            `;
            // Gallery content for vegan
            copyright = `
                <h5>&copy Vanadzor Armenia, 2024</h5>
            `;
            break;

        case 'ball':
            detailsContent = `
                <h2>August 2023</h2>
                <p>In August 2023, we went on vacation as a team. The topic was sports. We played basketball together, 
                then the losing team made us our favorite tea and we went to the movies. We have many pictures, 
                some of which are shown below.</p>
            `;
            // Gallery content for ball
            copyright = `
                <h5>&copy Vanadzor Armenia, 2024</h5>
            `;
            break;
        default:
            detailsContent = `
                <h2>No Details Available</h2>
                <p>Sorry, no details found for this product.</p>
            `;
    }

    const detailsWindow = window.open('', 'Details', 'width=750,height=500,resizable=no,status=no,toolbar=no,menubar=no');
    detailsWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>More about...</title>
            <link rel="stylesheet" href="details-styles.css"> <!-- Link to your details CSS file -->
            <style>
                /* Additional styles for the details window */
            </style>
        </head>
        <body>
            ${detailsContent}
            ${gallery}
            ${copyright}
        </body>
        </html>
    `);

    detailsWindow.moveTo(screen.width / 2 - 375, screen.height / 2 - 250);

    const body = detailsWindow.document.body;
    const fadeInAnimation = () => {
        let opacity = parseFloat(window.getComputedStyle(body).opacity);
        if (opacity < 1) {
            opacity += 0.1;
            body.style.opacity = opacity;
            requestAnimationFrame(fadeInAnimation);
        }
    };
    requestAnimationFrame(fadeInAnimation);
}

// Add event listeners to buttons
document.querySelectorAll('.box .button').forEach(button => {
    button.addEventListener('click', function() {
        const type = this.parentNode.className.split(' ')[1]; // Get the type from the parent class
        showDetails(type);
    });
});