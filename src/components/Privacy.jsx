import React from 'react';

const Privacy = () => {
    return (
        <div style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            lineHeight: 1.6,
            color: '#333',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            background: 'white'
        }}>
            <h1 style={{ color: '#111', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>Privacy Policy</h1>
            <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '2rem' }}>Last Updated: December 28, 2025</p>

            <p>At Vibita ("we", "us", or "our"), accessible from https://vibita.io, one of our main priorities is the privacy of
                our visitors. This Privacy Policy document contains types of information that is collected and recorded by
                Vibita and how we use it.</p>

            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact
                us.</p>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>Consent</h2>
            <p>By using our website and services, you hereby consent to our Privacy Policy and agree to its terms.</p>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>Information We Collect</h2>
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be
                made clear to you at the point we ask you to provide your personal information.</p>
            <p>We may collect:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Contact information (Name, Email address, Phone number)</li>
                <li style={{ marginBottom: '0.5rem' }}>Account information when you register for our services</li>
                <li style={{ marginBottom: '0.5rem' }}>Usage data and analytics to improve our services</li>
                <li style={{ marginBottom: '0.5rem' }}>Information related to your Shopify store when installing our application</li>
            </ul>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Provide, operate, and maintain our website and services</li>
                <li style={{ marginBottom: '0.5rem' }}>Improve, personalize, and expand our website and services</li>
                <li style={{ marginBottom: '0.5rem' }}>Understand and analyze how you use our website and services</li>
                <li style={{ marginBottom: '0.5rem' }}>Develop new products, services, features, and functionality</li>
                <li style={{ marginBottom: '0.5rem' }}>Communicate with you, either directly or through one of our partners, for customer service, to provide you
                    with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li style={{ marginBottom: '0.5rem' }}>Send you emails</li>
                <li style={{ marginBottom: '0.5rem' }}>Find and prevent fraud</li>
            </ul>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>Data Storage and Security</h2>
            <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy
                Policy. We will retain and use your information to the extent necessary to comply with our legal obligations,
                resolve disputes, and enforce our policies.</p>
            <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially
                acceptable means of protecting it. But remember that no method of transmission over the internet, or method of
                electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>Third Party Privacy Policies</h2>
            <p>Vibita's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the
                respective Privacy Policy of these third-party ad servers for more detailed information. It may include their
                practices and instructions about how to opt-out of certain options.</p>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Request that a business that collects a consumer's personal data disclose the categories and specific pieces
                    of personal data that a business has collected about consumers.</li>
                <li style={{ marginBottom: '0.5rem' }}>Request that a business delete any personal data about the consumer that a business has collected.</li>
                <li style={{ marginBottom: '0.5rem' }}>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
                please contact us.</p>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>GDPR Data Protection Rights</h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to
                the following:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>The right to access – You have the right to request copies of your personal data.</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to rectification – You have the right to request that we correct any information you believe is
                    inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>The right to erasure – You have the right to request that we erase your personal data, under certain
                    conditions.</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to restrict processing – You have the right to request that we restrict the processing of your
                    personal data, under certain conditions.</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to object to processing – You have the right to object to our processing of your personal data,
                    under certain conditions.</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to data portability – You have the right to request that we transfer the data that we have
                    collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
                please contact us.</p>

            <h2 style={{ marginTop: '2rem', color: '#222' }}>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Email: support@vibita.io</li>
                <li style={{ marginBottom: '0.5rem' }}>Website: <a href="https://vibita.io/contact" style={{ color: '#0070f3', textDecoration: 'none' }}>https://vibita.io/contact</a></li>
            </ul>
        </div>
    );
};

export default Privacy;
