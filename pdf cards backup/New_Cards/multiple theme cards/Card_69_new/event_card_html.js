        export const wardrobe_19 = (events) => {
        return `


            <!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Save the Date</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://perfectlywed.in/" crossorigin="">
            <link href="https://perfectlywed.in/wp-content/uploads/fonts/custom-fonts/font-style.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');




        .invitation-card {
        max-width: 562px;
        width: 100%;
        height: 787px;
        flex-direction: column;
        display: flex;
        padding: 30px 30px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        font-size: 16px;
        background-image: url("\${contentJson['bgImage']}");
        background-color: ${contentJson["bodyColor"]};
        }

        .invitation-title {
            font-size: 56px;
            color: ${contentJson["primaryColor"]};
        font-family: ${contentJson["secondaryFont"]};
            }


            .event-first-column {
            padding-right: 30px;
            text-align: right;
            border-right: 2px solid ${contentJson["primaryColor"]};
            }






            .event1-title {
            font-family: ${contentJson["tertiaryFont"]};
            color: ${contentJson["primaryColor"]};
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 4px;
            }


            .event-details-section {
            margin-top: 30px;
        }
        @media screen and (max-width: 562px) {
        .invitation-card{
            min-height: 100vh;;
            background-image: url("\${contentJson['bgResponsiveImage']}");
            font-size: 14px;
        }
        .invitation-title {
            font-size: 40px
        }
        .your-name, .partner-name {
            font-size: 24px;
        }

        .event1-title {
            
            font-size: 16px;
            
        }

        }
        </style>
        </head>
        <body>
                                                                                                                                    
                        <div class="invitation-card">
                                                    
                                                                        <div class="invitation-title">${events["title"]}</div>
                                                
                                                                                                    <div id="event-cards-container"> </div>
                                                
                                                                                                    <script>
                                                                                                        const eventsWR = JSON.parse(window.ReactNativeWebViewEventJSON || '[]');
                                                                                                        const events = eventsWR.jsonData || []
                                                                                        
                                                                                                        const masterFields = {
                                                                                                            "event_name": { "label": "Event Name", "type": "text" },
                                                                                                            "event_date": { "label": "Event_Date", "type": "date" },
                                                                                                            "event_day": { "label": "Event_Day", "type": "day" },
                                                                                                            "event_year": { "label": "Event_Year", "type": "year" },
                                                                                                            "event_month": { "label": "Event_Month", "type": "month_text" },
                                                                                                            "event_theme": { "label": "Event Theme", "type": "textarea" },
                                                                                                            "event_theme": { "label": "Event Address", "type": "textarea" },
                                                                                                            "event_couple_img": { "label": "Event Couple Image", "type": "image" },
                                                                                        
                                                                                                        };
                                                                                        
                                                                                                        function generateCards(events) {
                                                                                                            const container = document.getElementById("event-cards-container");
                                                                                                            container.innerHTML = '';
                                                                                        
                                                                                                            events.forEach(event => {
                                                                                                                const eventCard = document.createElement("div");
                                                                                                                eventCard.classList.add("event-card");
                                                                                        
                                                                                                                // Get event details from eventItems array
                                                                                                                const eventName = event.eventItems.find(field => field.key === "event_name")?.value || '';
                                                                                                                const eventDate = event.eventItems.find(field => field.key === "event_date")?.value || '';
                                                                                                                const eventMonth = event.eventItems.find(field => field.key === "event_month")?.value || '';
                                                                                                                const eventYear = event.eventItems.find(field => field.key === "event_year")?.value || '';
                                                                                                                const eventDay = event.eventItems.find(field => field.key === "event_day")?.value || '';
                                                                                                                const eventTime = event.eventItems.find(field => field.key === "event_time")?.value || '';
                                                                                                                const eventAddress = event.eventItems.find(field => field.key === "event_address")?.value || '';
                                                                                                                const eventTheme = event.eventItems.find(field => field.key === "event_theme")?.value || '';
                                                                                                                const eventCoupleImg = event.eventItems.find(field => field.key === "event_couple_img")?.value || '';
                                                                                        
                                                                                                                // HTML structure for event card
                                                                                                                eventCard.innerHTML = \`
                                                    

                                                                                <div class="row">
            <div class="col-5">
                <div class="event-first-column">
                <div class="event-details-section">

                    <div class="event1-day">
                    \${eventDay}
                    </div>
                    <div class="event1-full-date">
                    \${eventDate} \${eventMonth} \${eventYear}
                    </div>
                    <div class="event1-time">
                    \${eventTime}
                    </div>
                </div>

                

                </div>


            </div>
            <div class="col-7">
                <div class="event-details-section">
                <div class="event1-title">
                    \${eventName}
                </div>
                <div class="event1-address">
                    \${eventAddress}
                </div>
                </div>

                
            </div>
            </div>
                                                                                                                
                                                                                            
                                                                                            \`;
                                                                                            
                                                                                            container.appendChild(eventCard);
                                                                                            });
                                                                                            }
                                                                                            
                                                                                            // Call the function to generate the cards
                                                                                            generateCards(events);
                                                                                                    </script>
                                                    
                                                
                                                    
                                                
                                                
                                                    </div>
                                                                                                                                    </body>
                                                                                                                                    
                                                                                                                                    </html>
                                                                                                                                    `;
        };
