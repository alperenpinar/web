const portfolioData = {
    personalInfo: {
        name: "Alperen Pınar",
        title: "M.Sc.Geomatics Engineer",
        footerText: "© 2026 Telif Hakkı İttifakı",
        socialLinks: [
            { platform: "Facebook", svg: "<svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z'/></svg>", url: "https://facebook.com" },
            { platform: "Instagram", svg: "<svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/></svg>", url: "https://instagram.com" },
            { platform: "GitHub", svg: "<svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/></svg>", url: "https://github.com" }
        ]
    },

    sections: [
        {
            id: "preface",
            navLabel: "PREFACE",
            pageTitle: "Preface",
            description: "Welcome. This academic platform is meticulously designed to foster continuous professional development, knowledge dissemination, and collaborative growth within the Geomatics Engineering community.",
            items: [
                {
                    title: "Purpose & Vision",
                    text: "The primary objective of this repository is to share advanced methodologies, analytical tools, and comprehensive academic notes. By cultivating a resourceful ecosystem, I aim to provide an accessible foundation for students, and most importantly, establish a robust framework through which my esteemed colleagues can mutually benefit, adapt, and collectively drive the advancement of geodetic sciences.",
                    linkUrl: "",
                    linkText: ""
                },
                {
                    title: "Geodesy & Reference Frames",
                    text: "Resources regarding fundamental Geodesy. GGOS (Global Geodetic Observing System) and NASA Space Geodesy activities.",
                    linkUrl: "https://cddis.nasa.gov",
                    linkText: "NASA CDDIS Archive"
                },
                {
                    title: "Metric Tensor & General Relativity",
                    text: "Calculations of Riemannian metrics and its fundamental applications in space geodesy and relativity frameworks.",
                    linkUrl: "https://einstein-online.info/",
                    linkText: "Relativity Portal"
                },
                {
                    title: "Astronomy Observatories",
                    text: "Important links to Turkish observatories: DAG (Doğu Anadolu Gözlemevi), TUG (TÜBİTAK Ulusal Gözlemevi), UZBİMER and CAAM.",
                    linkUrl: "https://tug.tubitak.gov.tr/",
                    linkText: "TUG Web Page"
                }
            ]
        },
        {
            id: "webs",
            navLabel: "WEBS",
            pageTitle: "Important Webs",
            description: "A directory of academic links, mapping institutions and related technical fields.",
            items: [
                {
                    title: "International GNSS Service (IGS)",
                    text: "Providing the highest-quality GNSS data and products in support of the terrestrial reference frame.",
                    linkUrl: "https://igs.org/",
                    linkText: "IGS Portal"
                },
                {
                    title: "Harita Genel Müdürlüğü (HGM)",
                    text: "General Directorate of Mapping. Access to CORS-TR (TUSAGA-Aktif) and national mapping datasets.",
                    linkUrl: "https://www.harita.gov.tr/",
                    linkText: "HGM Official Site"
                }
            ]
        },
        {
            id: "software_products",
            navLabel: "SOFTWARE PRODUCTS",
            pageTitle: "Software Products",
            description: "Developed utility software for specific geodetic calculations.",
            items: [
                {
                    title: "2D Similarity Transformations",
                    text: "A software performing conformal coordinate transformations (Helmert 2D) with high precision output logs.",
                    linkUrl: "#",
                    linkText: "Download ZIP"
                },
                {
                    title: "GNSS Calendar Generator",
                    text: "A Python/Matlab integrated application converting Gregorian dates into GPS Week and Day Of Year (DOY) automatically.",
                    linkUrl: "#",
                    linkText: "Download Script"
                },
                {
                    title: "SP3 Data Readers",
                    text: "Algorithm capable of extracting explicit satellite coordinates (XYZ) from standard SP3 precise ephemeris records.",
                    linkUrl: "#",
                    linkText: "View Documentation"
                }
            ]
        },
        {
            id: "graduate",
            navLabel: "GRADUATE",
            pageTitle: "Graduate Notes",
            description: "Master's lecture contents.",
            items: [
                {
                    title: "Space Geodesy Advanced",
                    text: "Extensive theory detailing satellite positioning, error mitigation models, and relativistic effects on GPS signals.",
                    linkUrl: "space_geodesy_adv.pdf",
                    linkText: "Syllabus (PDF)"
                },
                {
                    title: "Geodetic Data Processing",
                    text: "Time series analyses, Kalman filtering, and advanced adjustment computation techniques.",
                    linkUrl: "data_processing.pdf",
                    linkText: "Download Notes"
                }
            ]
        },
        {
            id: "undergraduate",
            navLabel: "UNDERGRADUATE",
            pageTitle: "Undergraduate Notes",
            description: "Lecture materials for B.Sc. students, sorted by semesters.",
            items: [
                {
                    title: "Linear Algebra (Autumn)",
                    text: "Basic matrix operations, eigenvalue problems, and system of equations for surveying engineering.",
                    linkUrl: "#",
                    linkText: "Download Materials"
                },
                {
                    title: "Mapping (Autumn)",
                    text: "Fundamental principles of producing topological and chorographical maps.",
                    linkUrl: "#",
                    linkText: "Cartography Introduction"
                },
                {
                    title: "Coordinate Systems (Spring)",
                    text: "Geocentric and topocentric infrastructures. Geodetic Datum definitions (ED50, ITRF, WGS84).",
                    linkUrl: "#",
                    linkText: "Coordinate Systems PPT"
                },
                {
                    title: "Space Geodesy (Spring)",
                    text: "Fundamentals of GNSS systems, satellite orbital definitions, and precise point positioning basics.",
                    linkUrl: "#",
                    linkText: "GNSS Framework PDF"
                },
                {
                    title: "Numerical Analysis (Spring)",
                    text: "Interpolation, extrapolation, and finding roots via Newton-Raphson method applied to geomatics.",
                    linkUrl: "#",
                    linkText: "Download PDF"
                }
            ]
        },
        {
            id: "vocational",
            navLabel: "VOCATIONAL",
            pageTitle: "Vocational School",
            description: "Lecture contents oriented towards field surveying techniques.",
            items: [
                {
                    title: "Topographic Measurements",
                    text: "Hands-on guide to using Total Stations, setting up traverse networks and conducting leveling.",
                    linkUrl: "#",
                    linkText: "Field Guide PDF"
                }
            ]
        },
        {
            id: "high_school",
            navLabel: "HIGH SCHOOL",
            pageTitle: "High School Studies",
            description: "Foundational educational materials, basic concepts, and field training modules for vocational/technical high school students.",
            items: [
                {
                    title: "Introduction to Map Reading",
                    text: "Basic principles of interpreting topography, scales, contours, and coordinate grids on physical maps.",
                    linkUrl: "",
                    linkText: ""
                }
            ]
        },
        {
            id: "publications",
            navLabel: "PUBLICATIONS",
            pageTitle: "Academic Publications",
            description: "Published articles, symposium proceedings and scientific literature.",
            items: [
                {
                    title: "Comparison of Precise vs Broadcast Ephemeris",
                    text: "An analytical study investigating the temporal decay of accuracy in GPS and GLONASS broadcast signals.",
                    linkUrl: "#",
                    linkText: "Read Article (DOI)"
                },
                {
                    title: "Metric Tensor Formulations in Earth Sciences",
                    text: "Presented at the International Earth Sciences Convention.",
                    linkUrl: "#",
                    linkText: "Event Proceeding"
                }
            ]
        },
        {
            id: "contact",
            navLabel: "CONTACT",
            pageTitle: "Contact Information",
            description: "Feel free to reach out using the form below, or visit my office at the location provided on the map.",
            items: [],
            customHTML: `
            <div class="contact-form-wrapper">
                <form class="contact-form" onsubmit="event.preventDefault(); alert('Form submitted! This is a demo.');">
                    <h3>Send a Message</h3>
                    <div style="margin-bottom:1.5rem; color:var(--text-muted); font-size:0.8rem;">Required fields are marked *</div>
                    
                    <div class="form-group">
                        <label for="name">Name / Surname *</label>
                        <input type="text" id="name" required placeholder="John Doe">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">E-mail Address *</label>
                        <input type="email" id="email" required placeholder="mail@example.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Question regarding lecture notes">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Your Message *</label>
                        <textarea id="message" required placeholder="Type your message here..."></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">SEND MESSAGE</button>
                </form>
                
                <div class="map-container">
                    <!-- Google Maps Iframe for Konak, Izmir -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100063.3006248694!2d27.06941584852906!3d38.4178526563032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8ba!2sKonak%2F%C4%B0zmir!5e0!3m2!1sen!2str!4v1700142858123!5m2!1sen!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            `
        }
    ]
};
