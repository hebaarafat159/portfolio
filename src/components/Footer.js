import ContactsMe from './ContactsMe'
export default function Footer() {
    return (
        <div className="Footer" style={{ display: 'flex', flexFlow: 'row wrap', gap: '4vmin' }}>
            <p>protfolio 2023</p>
            <ContactsMe />
        </div>
    );
}