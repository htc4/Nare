function showDetails(type) {
    let detailsContent;
    let gallery = '';

    switch (type) {
        case 'coffee':
            detailsContent = `
                <h2>September 2023</h2>
                <p>The coffee suppliers of Vanadzor invited us and our team to the research, where many experts were present. 
                We discussed the differences between tea and coffee, highlighted their benefits and shared some information with 
                students. Everyone was delighted. We also drank the coffee offered by the suppliers and enjoyed some of our teas.</p>
            `;
            gallery = `
                <h3>Gallery։</h3>
                <div class="gallery">
                    <img src="./images/coffee1.jpg" alt="Coffee 1">
                    <img src="./images/coffee2.jpg" alt="Coffee 2">
                    <img src="./images/coffee3.jpg" alt="Coffee 3">
                    <img src="./images/coffee4.jpg" alt="Coffee 4">
                    <img src="./images/coffee5.jpg" alt="Coffee 5">
                    <img src="./images/coffee6.jpg" alt="Coffee 6">
                    <img src="./images/coffee7.jpg" alt="Coffee 7">
                    <img src="./images/coffee8.jpg" alt="Coffee 8">
                    <img src="./images/coffee9.jpg" alt="Coffee 9">
                    <img src="./images/coffee10.jpg" alt="Coffee 10">
                    <img src="./images/coffee11.jpg" alt="Coffee 11">
                    <img src="./images/coffee12.jpg" alt="Coffee 12">
                    <img src="./images/coffee13.jpg" alt="Coffee 13">
                    <img src="./images/coffee14.jpg" alt="Coffee 14">
                </div>
            `;
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
            gallery = `
                <h3>Gallery։</h3>
                <div class="gallery">
                    <img src="./images/vegan1.jpg" alt="Vegan 1">
                    <img src="./images/vegan2.jpg" alt="Vegan 2">
                    <img src="./images/vegan3.jpg" alt="Vegan 3">
                    <img src="./images/vegan4.jpg" alt="Vegan 4">
                    <img src="./images/vegan5.jpg" alt="Vegan 5">
                    <img src="./images/vegan6.jpg" alt="Vegan 6">
                    <img src="./images/vegan7.jpg" alt="Vegan 7">
                    <img src="./images/vegan8.jpg" alt="Vegan 8">
                    <img src="./images/vegan9.jpg" alt="Vegan 9">
                </div>
            `;
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
            gallery = `
                <h3>Gallery։ </h3>
                <div class="gallery">
                    <img src="./images/ball1.jpg" alt="Ball 1">
                    <img src="./images/ball2.jpg" alt="Ball 2">
                    <img src="./images/ball3.jpg" alt="Ball 3">
                    <img src="./images/ball4.jpg" alt="Ball 4">
                    <img src="./images/ball5.jpg" alt="Ball 5">
                    <img src="./images/ball6.jpg" alt="Ball 6">
                    <img src="./images/ball7.jpg" alt="Ball 7">
                    <img src="./images/ball8.jpg" alt="Ball 8">
                    <img src="./images/ball9.jpg" alt="Ball 9">
                    <img src="./images/ball10.jpg" alt="Ball 10">
                    <img src="./images/ball11.jpg" alt="Ball 11">
                    <img src="./images/ball12.jpg" alt="Ball 12">
                </div>
            `;
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
            <style>
            body {
                font-family: andale mono, monospace;
                padding: 20px;
                background-image: url('./images/bg.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                opacity: 0;
            }
            @keyframes flipIn {
  0% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

body {
  animation: flipIn 0.8s ease-in-out;
  perspective: 1000px;
}
            .gallery {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .gallery img {
                width: 200px;
                height: 150px;
                object-fit: cover;
                margin: 10px;
                border: 1px solid #ccc;
                border: 5px solid #ccc;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
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
